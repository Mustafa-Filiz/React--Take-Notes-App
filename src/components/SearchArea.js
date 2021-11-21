import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchNote } from '../redux/notes/notesSlice';

function SearchArea() {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        dispatch(searchNote(searchText));
    }, [dispatch, searchText]);

    return (
        <div style={{ margin: 'auto', width: '77%' }}>
            <TextField
                variant="outlined"
                label="Search..."
                fullWidth
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    );
}

export default SearchArea;
