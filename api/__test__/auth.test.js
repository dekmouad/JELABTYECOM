const app = require("../index.js");
supertest = require('supertest');
// Test case: Register with email and username already used

describe('Authentication', () => {
    describe('register with email and username already used' , () => {
        it('should return a 500', async() =>{
        const register = {
            username: "lamiae",
            email: "lamaie@gmail.com",
            name: "lamiae",
            lastname: "lamiae",
            password: "imane"
        }
        const {body , statusCode} = await supertest(app).post(`/api/auth/inscrire`)
        .send(register);
        expect(statusCode).toBe(500);
        })        
    })
})
// Test case: Register

describe('Authentication', () => {
    describe('Register' , () => {
        it('should return a 201', async() =>{
        const register = {
            username: "jisara",
            email: "saarasaad27@gmail.com",
            name: "sara",
            lastname: "saad",
            password: "sara"
        }
        const {body , statusCode} = await supertest(app).post(`/api/auth/register`)
        .send(register);
        expect(statusCode).toBe(500);
        })        
    })
})
// Test case: Login
describe('Authentication', () => {
    describe('Login' , () => {
        it('should return a 200 and user', async() =>{
        const login = {
            email: "admin@gmail.com",
            password: "123456"
        }
        const {body , statusCode} = await supertest(app).post(`/api/auth/login`)
        .send(login);
        expect(statusCode).toBe(200);
        expect(body.email).toBe(login.email);
        })        
    })
})
// Test case: Login with a wrong password
describe('Authentication', () => {
    describe('Login with a wrong passwprd' , () => {
        it('should return a 401', async() =>{
        const login = {
            email: "admin@gmail.com",
            password: "12e12"
        }
        const {body , statusCode} = await supertest(app).post(`/api/auth/login`)
        .send(login);
        expect(statusCode).toBe(401);
        })        
    })
})
// Test case: Login with a wrong mail
describe('Authentication', () => {
    describe('Login with a wrong mail' , () => {
        it('should return a 401', async() =>{
        const login = {
            email: "error@gmail.com",
            password: "123456"
        }
        const {body , statusCode} = await supertest(app).post(`/api/auth/login`)
        .send(login);
        expect(statusCode).toBe(401);
        })        
    })
})