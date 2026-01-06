import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import eventsReducer from '../features/events/eventsSlice';
import groupsReducer from '../features/groups/groupsSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        events: eventsReducer,
        groups: groupsReducer,
        theme: themeReducer,
    },
});
