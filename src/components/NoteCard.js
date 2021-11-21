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

const useStyles = makeStyles({
    noteCard: {
        width: '18rem',
        height: '15rem',
        padding: 10,
        margin: 5,
        position: 'relative',
    },
});

function NoteCard({ note }) {
    const classes = useStyles();
    return (
        <Card
            className={classes.noteCard}
            sx={{ backgroundColor: note.bgColor }}
        >
            <CardContent sx={{ textAlign: 'left' }}>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions sx={{ position: 'absolute', right: 0, bottom: 0 }}>
                <IconButton>
                    <DeleteForeverRounded />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default NoteCard;
