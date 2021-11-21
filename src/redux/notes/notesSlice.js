import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: JSON.parse(localStorage.getItem("react-notes-app")),
        searchText: '',
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
        },
        searchNote: (state, action) => {
            state.searchText = action.payload
        },
    },
});

export const { addNote, searchNote } = notesSlice.actions;

export default notesSlice.reducer;
