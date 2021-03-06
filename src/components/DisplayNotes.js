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
        margin: 'auto',
    },
});

function DisplayNotes() {
    const classes = useStyles();
    const notes = useSelector((state) => state.notes.items);
    const searchText = useSelector((state) => state.notes.searchText);

    const filteredNotes = notes.filter((note) =>
        note.text.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Box className={classes.container}>
            {filteredNotes.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}
        </Box>
    );
}

export default DisplayNotes;
