import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function TakeNoteArea() {
    return (
        <FormControl>
            <textarea
                rows="10"
                cols="20"
                style={{ border: 'none', outline: 'none', resize: 'none' }}
                placeholder="Enter your note here..."
            />
            <Box>
                <Box>
                    <RadioGroup row>
						<Radio />
						<Radio />
						<Radio />
						<Radio />
						<Radio />
                    </RadioGroup>
                </Box>
                <Button>Add</Button>
            </Box>
        </FormControl>
    );
}

export default TakeNoteArea;
