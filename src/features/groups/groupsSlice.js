import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    groups: [
        { id: 1, name: 'SwiftUI Enthusiasts', topic: 'Mobile Dev', members: 42 },
        { id: 2, name: 'Quantum Computing Club', topic: 'Physics', members: 18 },
        { id: 3, name: 'Sustainable Design', topic: 'Architecture', members: 25 },
        { id: 4, name: 'Varsity Chess', topic: 'Strategy', members: 104 },
        { id: 5, name: 'Debate Society', topic: 'Public Speaking', members: 56 },
        { id: 6, name: 'Machine Learning Research', topic: 'CS / Masters', members: 12 },
    ],
};

const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        createGroup: (state, action) => {
            state.groups.push({ ...action.payload, id: Date.now(), members: 1 });
        },
    },
});

export const { createGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
