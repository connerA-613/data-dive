import React, { componentDidMount, useEffect} from 'react';
import { Box, TextField, Typography, Button, Modal, Link} from '@mui/material';
import Header from '../components/Header';
import SideBar from '../components/sidebar'
import styles from '../styles/styles';
import { useCompletion } from 'ai/react';

function QandAPage() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion();

  function handlingSubmit(event) {
    event.preventDefault();
    handleSubmit();
    console.log(completion);
  }

  const { complete } = useCompletion({
    api: '/api/completion',
  })



  const [question, setQuestion] = React.useState(null);
  const [questionStatus, setQuestionStatus] = React.useState(false);
  const [answerProvided, setAnswerProvided] = React.useState(false);
  const [feedback, setFeedback] = React.useState(null);

  async function fetchQuestion() {
    const completion = await complete('ask me a technical questionn for a data analyst job interview');
    setQuestion(completion);
    setQuestionStatus(true);
  }

  async function fetchFeedback() {
    const completion = await complete(`I was asked the question '${question}' for a data analyst job interview and this was my answer: ${input}. Can you please provide me with feedback on my answer, how my answer could improve and rate my answer out of 5 stars?`);
    setFeedback(completion);
  }

  function submitAnswer(event) {
    if (input != '' || input != null) {
      event.preventDefault();
      fetchFeedback();
      setAnswerProvided(true);
    }
  }

  const handleModalClose = () => {
    setAnswerProvided(false);
  }

  useEffect(() => {
    fetchQuestion();
  }, []);
  return (
    <>
    <SideBar></SideBar>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        p={2}
        boxShadow={1}
        sx={{backgroundColor: "black", color: "white", width: "600px", height: "200px"}}
      >
        {question ? (
          <Typography sx={{fontSize: "12px"}}>{question}</Typography>
        ) : (
          <Typography>Question loading...</Typography>
        )}
    </Box>
    </Box>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="30vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}
        boxShadow={1}
        sx={{backgroundColor: "black"}}
      >
      <form onSubmit={handleSubmit}>
        <TextField label="Enter your answer" inputType="text" onChange={handleInputChange} value={input} multiline rows={8} sx={{backgroundColor: "white", width: "500px", height: "200px"}}/>
      </form>
        {/* Add any other components or content here */}
        <Button type="submit" onClick={(e) => submitAnswer(e)} sx={{backgroundColor: "white", color: "black", textDecoration: "none", marginTop: "10px", justifyContent: "center",}}>Submit</Button>
      </Box>
    </Box>

    {answerProvided ? (
      <Modal open={answerProvided} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Your feedback:</h2>
          <Typography>{feedback}</Typography>
        </Box>
        <Button onClick={handleModalClose}>Another Question</Button>
        <Link href="/landing">
          <Button onClick={handleModalClose}>Home</Button>
        </Link>
      </Modal>
    ) : null}
    </>
  );
}

export default QandAPage;
