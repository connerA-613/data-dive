const styles = {
    navButtons: {
        width: "500px",
        height: "100px",
        margin: "8px",
        backgroundColor: "black",
        textTransform: "none",
        "&:hover": {
            backgroundColor: "white",
            color: "black"
        }
    },
    signOut: {
        backgroundColor: "white",
        color: "black",
        "&:hover": {
            backgroundColor: "grey",
            color: "white"
        }
    },
    sideBar: {
        backgroundColor: "black",
        color: "white"
    },
    sideBarItem: {
        "&:hover": {
            backgroundColor: "white",
            color: "black"
        }
    },

    modalButtons: {
        backgroundColor: "black",
        color: "white",
        marginRight: "2px",
        "&:hover": {
            backgroundColor: "grey",
        }
    },

    submitButton: {
        backgroundColor: "white", 
        color: "black", 
        textDecoration: "none", 
        marginTop: "10px", 
        justifyContent: "center",
        "&:hover": {
            backgroundColor: "grey",
            color: "white"
        }
    }
}; export default styles;