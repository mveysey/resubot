const authController = require('../controller/auth.controller'); // Import your auth controller module
const { createUser, getUsersDb, updateUserPassword, isAuthenticated } = require('../util/auth-util');

// Mock dependencies or use a test database
jest.mock('../util/auth-util');

describe('Auth Controller Unit Tests', () => {
    describe('register', () => {
        it('should successfully register a new user', async () => {
            const req = {
                body: {
                    email: 'test@example.com',
                    password: 'password123',
                    username: 'testuser',
                    type: 'user',
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            createUser.mockResolvedValue('userId'); // Mock createUser function

            await authController.register(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
        });

        it('registerError', async () => {
            const req = {
                body: {
                    email: 'existing@example.com',
                    password: 'password123',
                    username: 'testuser',
                    type: 'user',
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            createUser.mockResolvedValue(null); // Mock createUser function to return null
            await authController.register(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Failed to create user' });
        });
    });

});
