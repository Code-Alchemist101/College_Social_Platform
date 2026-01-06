import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: [
        {
            id: 1,
            title: 'WWDC Student Watch Party',
            date: 'Today, 10:00 AM',
            category: 'Tech',
            description: 'Join us to watch the Keynote live. Pizza and refreshments provided.',
            location: 'Innovation Hub'
        },
        {
            id: 2,
            title: 'Modern Art Exhibition',
            date: 'Tomorrow, 2:00 PM',
            category: 'Arts',
            description: 'Showcasing student work from the semester. Open to all faculties.',
            location: 'Gallery A'
        },
        {
            id: 3,
            title: 'Guest Lecture: AI Ethics',
            date: 'Dec 15, 11:30 AM',
            category: 'Academic',
            description: 'Dr. Sarah Connor discusses the future of responsible AI development.',
            location: 'Main Auditorium'
        },
        {
            id: 4,
            title: 'Campus Hackathon 2024',
            date: 'Dec 20, 9:00 AM',
            category: 'Major Event',
            description: '48 hours of coding, creating, and connecting. Prizes worth $5000.',
            location: 'Student Center'
        },
        {
            id: 5,
            title: 'Meditation & Mindfulness',
            date: 'Weekly, Wed 8:00 AM',
            category: 'Wellness',
            description: 'Start your day with clarity. Guided sessions for beginners.',
            location: 'Wellness Studio'
        },
        {
            id: 6,
            title: 'Indie Film Screening',
            date: 'Friday, 7:00 PM',
            category: 'Social',
            description: 'Screening "The Social Network" followed by a discussion.',
            location: 'Media Room'
        }
    ],
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.events.push({ ...action.payload, id: Date.now() });
        },
    },
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
