import { useState } from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent, colors,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined.js";
import Avatar from "@mui/material/Avatar";
import {Add, AddBox, AddCard, Adjust} from "@mui/icons-material";

const noteCardStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    transition: "transform 0.2s",
    "&:hover": {
        transform: "scale(1.03)",
    },
};

const Notes = () => {
    const [notes, setNotes] = useState([
        {
            Title: "EXPENSE",
            description: "Rent,maintenance,repairs,insurance,utilities,water = 8000rs."+
            " Electricity,furniture,floor coverings,major appliances = 6000rs. "
        },
        {
            Title: "TO DO LIST",
            description: "I have to wake up early at 5:00 Am and get ready for breakfast then i have to go gym for an hour."
        },
        {
            Title: "WHAT IS A.I",
            description: "Artificial Intelligence is the intelligence possessed by the machines under they can perform functions with human help.",
        },
        {
            Title: "QOUTE OF THE DAY",
            description: "Do today what should be done. Your tomorrow may never come.",
        },
    ]);

    const [isAdding, setIsAdding] = useState(false);
    const [newNote, setNewNote] = useState({ title: "", description: "" });

    const handleSaveNote = (index, title, description) => {
        const updatedNotes = [...notes];
        updatedNotes[index] = { Title: title, description };
        setNotes(updatedNotes);
    };

    const handleAddNote = () => {
        setIsAdding(true);
    };

    const handleSaveNewNote = () => {
        const newTitle = newNote.title || `Note ${notes.length + 1}`;
        setNotes([...notes, { Title: newTitle, description: newNote.description }]);
        setIsAdding(false);
        setNewNote({ title: "", description: "" });
    };

    return (
        <div style={{ padding: "20px" }}>
            <Typography variant="h3" id={"AllN"} style={{ marginBottom: "20px", color:"white",textAlign: "center",backgroundColor:"#D7BBF5" ,borderRadius:"20px",
            }}>
                ALL NOTES
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddNote}
                style={{
                    marginBottom: "20px",
                    marginLeft: "1270px",
                    backgroundColor:"mediumpurple",
                    color:"white",
                }}
            >
                Add Note
                <Avatar sx={{ m: 0.5, bgcolor: 'secondary.main' }}
                        style={{ backgroundColor: "mediumpurple", color: "white" ,fontWeight:"20px",height:"23px",width:"12px",marginLeft:"6px"}}>
                    <Add/>
                </Avatar>
            </Button>
            <Grid container spacing={3}>
                {notes.map((note, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Note
                            title={note.Title}
                            description={note.description}
                            onSave={(newTitle, newDescription) => handleSaveNote(index, newTitle, newDescription)}
                            style={{backgroundColor:"black"}}
                        />
                    </Grid>
                ))}
            </Grid>
            <Dialog open={isAdding} onClose={() => setIsAdding(false)}  >
                <DialogTitle
                    style={{ backgroundColor: "mediumpurple", color: "white" ,textAlign:"centre"}}
                >Add Note</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{marginBottom: "20px"}}>Enter the details for the new note:</DialogContentText>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={newNote.title}
                        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                        style={{marginBottom: "20px"}}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={newNote.description}
                        onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
                        style={{marginBottom: "20px"}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsAdding(false)} style={{color:"black"}}>Cancel</Button>
                    <Button color="primary" onClick={handleSaveNewNote} style={{color:"black"}}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

function Note({ title, description, onSave }) {
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onSave(editTitle, editDescription);
        setIsEditing(false);
    };

    return (
        <Card variant="outlined" style={noteCardStyle}>
            <CardContent >
                <center>
                <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "10px" ,backgroundColor:"mediumpurple",color:"white",borderRadius:"8px"}}>
                    {editTitle}
                </Typography>
                </center>
                <Typography variant="body2" color="textSecondary">
                    {editDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handleEditClick} >
                    Edit
                </Button>
            </CardActions>
            <Dialog open={isEditing} onClose={() => setIsEditing(false)} style={noteCardStyle}>
                <DialogTitle style={{color:"black"}}>Edit Note</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{marginBottom: "20px"}}>Make your changes below:</DialogContentText>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        style={{marginBottom: "20px"}}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        style={{marginBottom: "20px",
                    }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsEditing(false)} style={{color:"black"}}>Cancel</Button>
                    <Button color="primary" onClick={handleSaveClick} style={{color:"black"}}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}

export default Notes;