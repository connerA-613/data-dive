import React, { componentDidMount, useEffect} from 'react';
import { Box, TextField, Typography, Button, Modal} from '@mui/material';
import Header from '../components/Header';
import SideBar from '../components/sidebar'
import styles from '../styles/styles';
import { useCompletion } from 'ai/react';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

function QandAPage() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion();

  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  console.log(type);

  function handlingSubmit(event) {
    event.preventDefault();
    handleSubmit();
    console.log(completion);
  }

  const { complete } = useCompletion({
    api: '/api/completion',
  })

  useEffect(() => {
    newQuestion();
  }, [type])

  const [question, setQuestion] = React.useState(null);
  const [questionStatus, setQuestionStatus] = React.useState(false);
  const [answerProvided, setAnswerProvided] = React.useState(false);
  const [feedback, setFeedback] = React.useState(null);

  async function fetchQuestion() {
    if (type == "STAR") {
      const completion = await complete('ask me a question that would require the STAR method (situation, task, action and result) to answer for a data analyst job interview.');
      setQuestion(completion);
    } else {
      const completion = await complete(`ask me a ${type} question for a data analyst job interview`);
      setQuestion(completion);
    }
    setQuestionStatus(true);
  }

  async function fetchFeedback() {
    const completion = await complete(`In a data analyst interview I was asked "${question}" and I answered "${input}". I need you to give me strict but consice feedback like you are the interviewer for this interview. I need you to provide feedback on the answer, explain how there answer could improve, then give a very strict rating out of 5 stars. The less correct, unprepared, or unacceptable the answer is, the worse the rating becomes. For example, if I gave a perfect answer I should recieve 5 stars, if I provide an incomplete answer or am unsure of the answer, I should get 1 star`);
    setFeedback(completion);
  }

  function submitAnswer(event) {
    if (input != '' || input != null) {
      event.preventDefault();
      fetchFeedback();
      setAnswerProvided(true);
    }
  }

  const newQuestion = () => {
    if (answerProvided == true) {
      setAnswerProvided(false);
    }
    if (feedback != null) {
      setFeedback(null);
    }
    if (question != null) {
      setQuestion(null);
    }
    fetchQuestion();
  }

  const handleModalClose = () => {
    setAnswerProvided(false);
    setFeedback(null);
  }

  useEffect(() => {
    fetchQuestion();
  }, []);
  return (
    <>
    <SideBar></SideBar>
    <Typography display="flex" justifyContent="center" alignItems="center" marginTop="5rem" sx={{justifyContent: "center", color: "white", fontSize: "48px"}}>{type} Question Practice</Typography>
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
          <Typography sx={{fontSize: "18px"}}>{question}</Typography>
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
        <TextField label="Enter your answer" inputtype="text" onChange={handleInputChange} value={input} multiline rows={8} sx={{backgroundColor: "white", width: "500px", height: "200px"}}/>
      </form>
        {/* Add any other components or content here */}
        <Button type="submit" onClick={(e) => submitAnswer(e)} sx={{...styles.submitButton}}>Submit</Button>
      </Box>
    </Box>

      <Modal open={answerProvided}>
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
            color: 'black'
          }}
        >
        {feedback ? (
            <h2>Your Feedback:</h2>
          ) : (
            <h2>Loading your feedback...</h2>
        )}
          <Typography sx={{ maxHeight: "600px", overflowY: "auto"}}>{feedback}</Typography>
          {feedback ? (
            <Box sx={{justifyContent: "center", marginLeft: "auto", marginRight: "auto"}}>
            <Button sx={{...styles.modalButtons}}onClick={newQuestion}>Another Question</Button>
            <Link href="/landing">
                <Button sx={{...styles.modalButtons}}onClick={handleModalClose}>Home</Button>
            </Link>
          </Box>
          ): (<></>)}
          
        </Box>
      </Modal>
    </>
  );
}

export default QandAPage;
