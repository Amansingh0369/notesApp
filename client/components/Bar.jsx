import {AppBar, Box, Button, dividerClasses, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Bar = () => {
    const[loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if(storedEmail){
            setLoggedIn(true);
        }
    }, [location]);

    return(
        <div>
            <Box sx={{ flexGrow: 1 }}
            >
                <AppBar position="static"
                        style={{ backgroundColor: "#713ABE", color: "white" }}>
                    <Toolbar>
                        <Button color="inherit" style={{marginRight : "1200px"}} onClick={() => {
                            navigate("/")
                        }}>

                            NOTES

                        </Button>
                        {!loggedIn ? (
                            <>
                                <Button
                                    color= "inherit"
                                    onClick={() => {
                                        navigate("/login");
                                    }}

                                >
                                    Login
                                </Button>
                                <Button
                                    color= "inherit"
                                    onClick={() => {
                                        navigate("/signup");
                                    }}
                                >
                                    Signup
                                </Button>
                            </>
                        ) : <>
                            <Button
                                color= "inherit"
                                onClick={() => {
                                    localStorage.removeItem("email");
                                    setLoggedIn(false);
                                    window.location.href = "/";
                                }}
                            >
                                Logout
                            </Button>
                        </>
                        }
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}

export default Bar;