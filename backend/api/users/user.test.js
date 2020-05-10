const request = require('supertest');
const app = require('../../app');

// test data
const userData = {
    fullName: "Gordan Ramsey",
    email: "gordan@gmail.com",
    authId: "gordanAuth"
};

const userData2 = {
    fullName: "Sattu",
    email: "sattu@gmail.com",
    authId: 'fglj'
};

// fail data
const userData1 = {
    fullName: "fail name",
    email: "maheshsometmail.com",
    authId: "hfj"
};

// update data
const updateData = {
    fullName: "updated name"
}


describe("Testing /users route", () => {

    test("Succeeds with valid inputs(if email is already not added)", async (done) => {
        const res =  await request(app)
        .post("/users/create")
        .send(userData)
        .expect('Content-Type', /json/);
        done();
        console.log(res.text);
      });
    
    test("Succeeds with valid inputs(if email is already not added)", async (done) => {
        const res =  await request(app)
            .post("/users/create")
            .send(userData2)
            .expect('Content-Type', /json/);
            done();
            console.log(res.text);
    });

    test("Fails with invalid inputs", async (done) => {
        const res =  await request(app)
            .post("/users/create")
            .send(userData1)
            .expect('Content-Type', /json/);
            done();
            console.log(res.text);
    });

    test("Succeeds with valid request", async (done) => {
        const res =  await request(app)
            .get("/users/")
            .expect('Content-Type', /json/);
            done();
            console.log(res.text);
    });

    test("Succeeds with valid request(if userId is found)", async (done) => {
        const res =  await request(app)
            .get("/users/5e9ee95ca2df3c36db7d9a71")
            .expect('Content-Type', /json/);
            done();
            console.log(res.text);
        });

    test("Succeeds with valid request(if authid is found)", async (done) => {
        const res =  await request(app)
            .get("/users/authId/gordanAuth")
            .expect('Content-Type', /json/);
            done();
            console.log(res.text);
        });

    test("Succeeds with valid inputs", async (done) => {
        const res =  await request(app)
            .patch("/users/5e9ee95ca2df3c36db7d9a72/update")
            .send(updateData)
            .expect('Content-Type', /json/);
            done();
            console.log(res.text);
    });

  });
