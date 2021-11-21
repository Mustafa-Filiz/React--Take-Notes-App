import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;
