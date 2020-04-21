const request = require('supertest');
const app = require('../../app');

// test data
const userData = {
    fullName: "Mahesh Sharma",
    email: "maheshsomething@gmail.com"
};

const userData2 = {
    fullName: "Sattu",
    email: "sattu@gmail.com"
};

// fail data
const userData1 = {
    fullName: "fail name",
    email: "maheshsometmail.com"
};


describe("Testing /users route", () => {

    // test("Succeeds with valid inputs(if email is already not added)", async (done) => {
    //   const res =  await request(app)
    //     .post("/users/add")
    //     .send(userData)
    //     .expect('Content-Type', /json/);
    //     done();
    //     console.log(res.text);
    //   });
    
    // test("Succeeds with valid inputs(if email is already not added)", async (done) => {
    // const res =  await request(app)
    //     .post("/users/add")
    //     .send(userData2)
    //     .expect('Content-Type', /json/);
    //     done();
    //     console.log(res.text);
    // });

    // test("Fails with invalid inputs", async (done) => {
    // const res =  await request(app)
    //     .post("/users/add")
    //     .send(userData1)
    //     .expect('Content-Type', /json/);
    //     done();
    //     console.log(res.text);
    // });

    test("Succeeds with valid request", async (done) => {
    const res =  await request(app)
        .get("/users/getAll")
        .expect('Content-Type', /json/);
        done();
        console.log(res.text);
    });

    // test("Succeeds with valid request", async (done) => {
    //     const res =  await request(app)
    //         .get("/users/5e96fc337a319a1fa10ea533")
    //         .expect('Content-Type', /json/);
    //         done();
    //         console.log(res.text);
    //     });

  });
