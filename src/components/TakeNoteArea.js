import { Check } from '@mui/icons-material';
import { Button, FormControl, Radio, RadioGroup } from '@mui/material';
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
    height: 48,
    width: 48,
    margin: 8,
});

function TakeNoteArea() {
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const [bgColor, setBgColor] = useState('#F06292');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({ id: nanoid(), text, bgColor }));
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                rows="10"
                cols="20"
                style={{ border: 'none', outline: 'none', resize: 'none' }}
                placeholder="Enter your note here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Box>
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
                <Button>Add</Button>
            </Box>
        </form>
    );
}

export default TakeNoteArea;
