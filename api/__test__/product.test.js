const app = require("../index.js");
supertest = require('supertest');
// Test case: Get product - given product does not exist

describe('product', () => {
    describe('get product ' , () => {
        describe('given product does not exist ' ,() => {
            it('should return a 500', async() =>{
                const productID= 'product_1'
                await supertest(app).get(`/api/products/find/${productID}`)
                .expect(500);
            })
        })
    })
})
// Test case: Get product - given existing product

describe('product', () => {
    describe('get product ' , () => {
        describe('given exist product' ,() => {
            it('should return a 200 and the product', async() =>{
            const ID= '622e09616a9b0960453b3a31'
            const {body , statusCode} = await supertest(app).get(`/api/products/find/${ID}`);
                            // Expect the response status code to be 200

            expect(statusCode).toBe(200);
                            // Expect the returned product's ID to match the requested ID

            expect(body._id).toBe(ID);     
            })
        })
    })
})

// Test case: get all products 
describe('product', () => {
    describe('get all products ' , () => {
            it('should return a 200', async() =>{
            const {body , statusCode} = await supertest(app).get(`/api/products/`);
            expect(statusCode).toBe(200);   
            })        
    })
})

// Test case: Create product by admin

describe('product', () => {
    describe('create product by admin ' , () => {
        it('should return a 200 and the product', async() =>{
        const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
        const addproduct = {
            title: "NIKE T-shirt For Women ",
            desc: "Nike Varsity Boyfriend Crew Sweatshirt",
            img: "https://firebasestorage.googleapis.com/v0/b/jelabty-be56f.appspot.com/o/1685657477568Picture13.jpg?alt=media&token=c7cc0b1f-3b8b-4ffd-92ea-55414e90c3f3",
            categories: "men",
            size: "XL",
            color: "grey",
            type: "Tracksuit",
            price: 30,
            inStock: "yes",
            style: "jelaba"
          }
        const {body , statusCode} = await supertest(app).post(`/api/products`)
        .set('token',`Bearer ${tokenJWT}`)
        .send(addproduct);
        expect(statusCode).toBe(500);
        })        
    })
})
// Test case: create product by random user
describe('product', () => {
    describe('create product by random user ' , () => {
        it('should return a 403', async() =>{
        const tokenJWT= 'randomToken'
        const addproduct = {
            title: "NIKE T-shirt For Women",
            desc: "Nike Varsity Boyfriend Crew Sweatshirt",
            img: "https://firebasestorage.googleapis.com/v0/b/jelabty-be56f.appspot.com/o/1685485955598WhatsApp%20Image%202023-05-31%20at%2012.19.00%20AM.jpeg?alt=media&token=af213412-70fa-4013-975e-69c4778f441a",
            categories: "men",
            size: "XL",
            color: "grey",
            type: "tracksuit",
            price: 30,
            inStock: "yes",
            style: "jellaba"
          }
        const {body , statusCode} = await supertest(app).post(`/api/products`)
        .set('token',`Bearer ${tokenJWT}`)
        .send(addproduct);
        expect(statusCode).toBe(403);  
        })        
    })
})
//update product by admin
describe('product', () => {
    describe('update product by admin ' , () => {
        it('should return a 200 and the product', async() =>{
        const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
        const IDproduct= '623b6f935651baf0de3f5a5b'
        const addproduct ={
            title: "JEllaba For Women",
            desc: "jellaba classic for women",
            img: "https://firebasestorage.googleapis.com/v0/b/jelabty-be56f.appspot.com/o/1685229114964WhatsApp-Image-2021-07-01-at-09.58.44-1-1.jpg?alt=media&token=4954e2ad-6fcd-4cb5-ba03-4a9e4d212c3b",
            categories: "women",
            size: "XL",
            color: "purple",
            type: "Tracksuit",
            price: 30,
            inStock: "yes",
            style: "jellaba"
          }
        const {body , statusCode} = await supertest(app).put(`/api/products/${IDproduct}`)
        .set('token',`Bearer ${tokenJWT}`)
        .send(addproduct);
        expect(statusCode).toBe(200); 
        expect(body.title).toBe(addproduct.title); 
        })        
    })
})
//delete product by admin
describe('product', () => {
    describe('delete product by admin ' , () => {
        it('should return a 200', async() =>{
        const tokenJWT= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmJhZWU1NjhmYjIwMGRkNTA1ZGE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA1MTczOCwiZXhwIjoxNjQ4MzEwOTM4fQ.twIsIpH9lX5EX0cU5R8rlVUMAY2wffYcGUkvNWVrSj8'
        const Idproduct= '623b58554292051861f97635'
        //623b588a4292051861f97637
        const {body , statusCode} = await supertest(app).delete(`/api/products/${Idproduct}`)
        .set('token',`Bearer ${tokenJWT}`);
        expect(statusCode).toBe(200); 
        })        
    })
})
//delete product by random user
describe('product', () => {
    describe('delete product by random user ' , () => {
        it('should return a 401', async() =>{
        const tokenJWT= 'randomToken'
        const Idproduct= '623b58554292051861f97635'
        const {body , statusCode} = await supertest(app).delete(`/api/products/${Idproduct}`)
        .set('token',`Bearer ${tokenJWT}`);
        expect(statusCode).toBe(403); 
        })        
    })
})