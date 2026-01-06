
const USERS_KEY = 'registered_users';

export const authService = {
    // Register a new user
    register: (userData) => {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

        const existingUser = users.find(u => u.username === userData.username);
        if (existingUser) {
            throw new Error('Username already exists');
        }

        const newUser = {
            id: Date.now(),
            ...userData,
            role: 'student' // Default role
        };

        users.push(newUser);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        return newUser;
    },

    // Verify credentials
    login: (username, password) => {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            throw new Error('Invalid username or password');
        }

        // Return user without password
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
};
