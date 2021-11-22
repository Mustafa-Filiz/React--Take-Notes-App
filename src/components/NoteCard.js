import { DeleteForeverRounded } from '@mui/icons-material';
import {
    Card,
    CardActions,
    CardContent,
    IconButton,
    Typography,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../redux/notes/notesSlice';

const useStyles = makeStyles({
    noteCard: {
        width: '17rem',
        height: '15rem',
        padding: 10,
        margin: 5,
        position: 'relative',
    },
});

function NoteCard({ note }) {
    const classes = useStyles();
	const dispatch = useDispatch()
	
    return (
        <Card
            className={classes.noteCard}
            sx={{ backgroundColor: note.bgColor }}
        >
            <CardContent sx={{ textAlign: 'left' }}>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions sx={{ position: 'absolute', right: 0, bottom: 0 }}>
                <IconButton onClick={() => dispatch(deleteNote(note.id))}>
                    <DeleteForeverRounded />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default NoteCard;
