import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Landing = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setLoggedIn(true);
        }
    }, []);

    return (
        <>
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
                    <img src="../src/assets/TakingNotes.gif" alt="Your Image" />
                </div>
                <div>
                    <center style={{
                        marginTop:"300px"
                    }}>
                        <Typography variant="h5" style={{ marginTop: "150px",color:"white"  }} id={"landingF"}>
                            THE SIMPLEST WAY TO KEEP NOTES
                        </Typography>
                    </center>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px",
                            gap: "20px",
                        }}
                    >
                        {!loggedIn ? (
                            <>
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: "mediumpurple", color: "white" }}
                                    onClick={() => {
                                        navigate("/login");
                                    }}
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: "mediumpurple", color: "white" }}
                                    onClick={() => {
                                        navigate("/signup");
                                    }}
                                >
                                    Signup
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: "mediumpurple", color: "white" }}
                                    onClick={() => {
                                        navigate("/notes");
                                    }}
                                >
                                    Notes
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
