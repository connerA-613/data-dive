const styles = {
  navButtons: {
    width: "500px",
    height: "100px",
    minWidth: "300px",
    maxWidth: "500px",
    margin: "8px",
    backgroundColor: "black",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    "@media (max-width: 800px)": {
      width: "75%",
      height: "80px",
    },
    "@media (max-width: 400px)": {
      width: "50%",
      height: "60px",
    },
  },
  signOut: {
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      backgroundColor: "grey",
      color: "white",
    },
  },
  sideBar: {
    backgroundColor: "black",
    color: "white",
  },
  sideBarItem: {
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },

  modalButtons: {
    backgroundColor: "black",
    color: "white",
    marginRight: "2px",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "grey",
    },
  },

  submitButton: {
    backgroundColor: "white",
    color: "black",
    textDecoration: "none",
    marginTop: "10px",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "grey",
      color: "white",
    },
  },
};
export default styles;
