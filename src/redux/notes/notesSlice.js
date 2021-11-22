import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
        searchText: '',
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
        },
        searchNote: (state, action) => {
            state.searchText = action.payload;
        },
        deleteNote: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { addNote, searchNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
