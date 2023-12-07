import {Button, Box, Typography, AppBar, Toolbar} from '@mui/material'
import styles from '../styles/styles'

function Header() {
    return (
        <Box sx={{flexgrow: 1}}>
            <AppBar position="sticky" sx={{backgroundColor: "black"}}>
            <Toolbar sx={{justifyContent: "space-between"}} disablegutters>
                <Typography sx={{marginTop: "auto", marginBottom: "auto"}}>
                    Welcome, Conner
                </Typography>
                <Button sx={{...styles.signOut}}>
                    Sign Out
                </Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
}; export default Header;