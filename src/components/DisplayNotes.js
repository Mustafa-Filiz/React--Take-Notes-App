import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import NoteCard from './NoteCard';

const useStyles = makeStyles({
    container: {
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        margin: 'auto',
    },
});

function DisplayNotes() {
    const classes = useStyles();
    const notes = useSelector((state) => state.notes.items);

    return (
        <Box className={classes.container}>
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}
        </Box>
    );
}

export default DisplayNotes;
