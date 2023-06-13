const app = require("../index.js");
supertest = require('supertest');
// Test suite for getting all users

describe('users', () => {
    describe('get all users' , () => {
            it('should return a 200', async() =>{  
            const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
            const {body , statusCode} = await supertest(app).get(`/api/users/`)
            .set('token',`Bearer ${tokenJWT}`);
            expect(statusCode).toBe(200);   
            })        
    })
})
// Test suite for getting a specific user

describe('users', () => {
    describe('get user ' , () => {
        describe('given exist user' ,() => {
            it('should return a 200 and user', async() =>{
            const ID= '623b6788c9c561edf5f53e20'
            const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
            const {body , statusCode} = await supertest(app).get(`/api/users/find/${ID}`)
            .set('token',`Bearer ${tokenJWT}`);
            expect(statusCode).toBe(200);
            expect(body._id).toBe(ID);     
            })
        })
    })
})
// Test suite for getting a non-existing user

describe('users', () => {
    describe('get user ' , () => {
        describe('get user does not exist' ,() => {
            it('should return a 500', async() =>{
            const ID= 'randomID'
            const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
            const {body , statusCode} = await supertest(app).get(`/api/users/find/${ID}`)
            .set('token',`Bearer ${tokenJWT}`);
            expect(statusCode).toBe(500);   
            })
        })
    })
})
// Test suite for getting a user by a random user

describe('users', () => {
    describe('get user by a random user' , () => {
            it('should return a 403', async() =>{
            const ID= '623b6788c9c561edf5f53e20'
            const tokenJWT= 'randomToken'
            const {body , statusCode} = await supertest(app).get(`/api/users/find/${ID}`)
            .set('token',`Bearer ${tokenJWT}`);
            expect(statusCode).toBe(403);    
            })
    })
})
// Test suite for updating a user by an admin

describe('users', () => {
    describe('update user by admin' , () => {
        it('should return a 200', async() =>{
        const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
        const userId='623b6788c9c561edf5f53e20'
        const userUpdate = {
            name: "admin",
            lastname: "admin"
        }
        const {body , statusCode} = await supertest(app).put(`/api/users/${userId}`)
        .set('token',`Bearer ${tokenJWT}`)
        .send(userUpdate);
        expect(statusCode).toBe(200); 
        expect(body.name).toBe(userUpdate.name); 
        })        
    })
})
// Test suite for updating a user's own account

describe('users', () => {
    describe('user update his account ' , () => {
        it('should return a 200', async() =>{
        const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I2Nzg4YzljNTYxZWRmNWY1M2UyMCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDgwNjA0MDcsImV4cCI6MTY0ODMxOTYwN30.JxffluKchgwpQhCJdeAxHuremuUfg81-StTjm-P221A'
        const userId='623b6788c9c561edf5f53e20'
        const userUpdate = {
            name: "admin",
            lastname: "admin"
        }
        const {body , statusCode} = await supertest(app).put(`/api/users/${userId}`)
        .set('token',`Bearer ${tokenJWT}`)
        .send(userUpdate);
        expect(statusCode).toBe(200); 
        expect(body.name).toBe(userUpdate.name); 
        })        
    })
})
// Test suite for update user by a random user

describe('users', () => {
    describe('update user by a random user ' , () => {
        it('should return a 403', async() =>{
        const tokenJWT= 'randomToken'
        const userId='623b6788c9c561edf5f53e20'
        const userUpdate = {
            name: "b7juba",
            lastname: "b7sjuba"
        }
        const {body , statusCode} = await supertest(app).put(`/api/users/${userId}`)
        .set('token',`Bearer ${tokenJWT}`)
        .send(userUpdate);
        expect(statusCode).toBe(403); 
        })        
    })
})
// delete user by admin
describe('users', () => {
    describe('delete user by admin ' , () => {
        it('should return a 200', async() =>{
        const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
        const userId='623b6e8dbd41f2d4f6b9880f'
        const {body , statusCode} = await supertest(app).delete(`/api/users/${userId}`)
        .set('token',`Bearer ${tokenJWT}`);
        expect(statusCode).toBe(200); 
        })        
    })
})
//user delete his account
describe('users', () => {
    describe('user delete his account ' , () => {
        it('should return a 200', async() =>{
        const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I2ZThkYmQ0MWYyZDRmNmI5ODgwZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDgwNjIxMzksImV4cCI6MTY0ODMyMTMzOX0.M-2ah1IkpRt9cWk8OVWtCc7yBXuSrDbK6aNyDPWGKDs'
        const userId='623b6e8dbd41f2d4f6b9880f'
        const {body , statusCode} = await supertest(app).delete(`/api/users/${userId}`)
        .set('token',`Bearer ${tokenJWT}`);
        expect(statusCode).toBe(200); 
        })        
    })
})
//delete users by random user
describe('users', () => {
    describe('delete users by random user ' , () => {
        it('should return a 401', async() =>{
        const tokenJWT= 'randomToken'
        const userId='623b6e8dbd41f2d4f6b9880f'
        const {body , statusCode} = await supertest(app).delete(`/api/users/${userId}`)
        .set('token',`Bearer ${tokenJWT}`);
        expect(statusCode).toBe(403); 
        })        
    })
})