import {
    Avatar,
    Box, Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem("email", email);
        navigate("/notes");
    }

    return(
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "250px",
            }}
        >
            <div
                style={{
                    marginTop: "120px",
                }}
            >
                <img src="../src/assets/TabletLogin.gif" alt="Your Image" />
            </div>
           <div
           style={{
               marginTop:"80px",
           }}>
               <Container component="main" maxWidth="xs">
                   <CssBaseline />
                   <Box
                       sx={{
                           marginTop: 8,
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                       }}
                   >
                       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}
                               style={{ backgroundColor: "mediumpurple", color: "white" }}>
                           <LockOutlinedIcon />
                       </Avatar>
                       <Typography  component="h1" variant="h5"  style={{color:"white"}}
                                    id={"login"}>
                           Login
                       </Typography>
                       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                           <TextField
                               margin="normal"
                               required
                               fullWidth
                               id="email"
                               label="Email Address"
                               name="email"
                               autoComplete="email"
                               autoFocus
                               onChange={(e) => {
                                   setEmail(e.target.value);
                               }}
                           />
                           <TextField
                               margin="normal"
                               required
                               fullWidth
                               name="password"
                               label="Password"
                               type="password"
                               id="password"
                               autoComplete="current-password"
                               onChange={(e) => {
                                   setPassword(e.target.value);
                               }}
                           />
                           <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               sx={{ mt: 3, mb: 2 }}
                               style={{ backgroundColor: "mediumpurple", color: "white" }}
                           >
                               Login
                           </Button>
                           <Grid container>
                               <Grid item xs>
                               </Grid>
                               <Grid item>
                                   <Link href="/signup" variant="body2" style={{color:"black"}}>
                                       {"Don't have an account? Sign Up"}
                                   </Link>
                               </Grid>
                           </Grid>
                       </Box>
                   </Box>
               </Container>
           </div>
        </div>
    )
}

export default Login;