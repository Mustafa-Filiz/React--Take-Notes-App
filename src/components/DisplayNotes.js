import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
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
    const searchText = useSelector(state => state.notes.searchText)

    const filteredNotes = notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))

    useEffect(()=> {
        localStorage.setItem("react-notes-app", JSON.stringify(notes))
    }, [notes])

    return (
        <Box className={classes.container}>
            {filteredNotes.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}
        </Box>
    );
}

export default DisplayNotes;
