import { Check } from '@mui/icons-material';
import { Button, Paper, Radio, RadioGroup } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';

const StyledRadio = styled(({ color, ...other }) => <Radio {...other} />)({
    background: (props) => props.color,
    '&:hover': { background: (props) => props.color },
    border: 0,
    borderRadius: '50%',
    color: 'white',
    height: 40,
    width: 40,
    margin: 8,
});

function TakeNoteArea() {
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const [bgColor, setBgColor] = useState('#F06292');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            dispatch(addNote({ id: nanoid(), text, bgColor }));
            setText('');
        } else {
            alert('Chat flies, Notes persists. 📝');
            setText('');
        }
    };

    return (
        <Paper sx={{ width: '75%', padding: 2, margin: '0.5rem auto' }}>
            <form onSubmit={handleSubmit}>
                <textarea
                    style={{
                        border: 'none',
                        outline: 'none',
                        resize: 'none',
                        width: '95%',
                        height: '10rem',
                        fontSize: '1.2rem',
                    }}
                    placeholder="Enter your note here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <RadioGroup
                            row
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                        >
                            <StyledRadio
                                color="#F06292"
                                value="#F06292"
                                checkedIcon={<Check sx={{ color: '#fff' }} />}
                                icon={<Check sx={{ color: '#F06292' }} />}
                            />
                            <StyledRadio
                                color="#BA68C8"
                                value="#BA68C8"
                                checkedIcon={<Check sx={{ color: '#fff' }} />}
                                icon={<Check sx={{ color: '#BA68C8' }} />}
                            />
                            <StyledRadio
                                color="#FFD54F"
                                value="#FFD54F"
                                checkedIcon={<Check sx={{ color: '#fff' }} />}
                                icon={<Check sx={{ color: '#FFD54F' }} />}
                            />
                            <StyledRadio
                                color="#4FC3F7"
                                value="#4FC3F7"
                                checkedIcon={<Check sx={{ color: '#fff' }} />}
                                icon={<Check sx={{ color: '#4FC3F7' }} />}
                            />
                            <StyledRadio
                                color="#AED581"
                                value="#AED581"
                                checkedIcon={<Check sx={{ color: '#fff' }} />}
                                icon={<Check sx={{ color: '#AED581' }} />}
                            />
                        </RadioGroup>
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        sx={{ padding: '0.8rem 3rem', borderRadius: '3rem' }}
                    >
                        Add
                    </Button>
                </Box>
            </form>
        </Paper>
    );
}

export default TakeNoteArea;
