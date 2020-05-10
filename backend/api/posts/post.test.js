const request = require('supertest');
const app = require('../../app');

// test data
// Assumption: userId is passed in req.body while creating posts
const postData = {
  title: "This is fdg test",
  description: "ghjhggjgh",
  contentHtml: "<p>lorem as dflkjas df asdlkf</p>",
  tags: ['mozilla', 'people'],
  userId: "5eb809e232279973b2d0dfaa"
}

const updateData = {
  contentHtml: "<b>Updated.</b>"
};

describe("Testing /posts route", () => {

    test("Succeeds with valid input", async (done) => {
      const res =  await request(app)
        .post("/posts/create")
        .send(postData)
        .expect('Content-Type', /json/);
        done();
        console.log(res.text);
      });

    test("Succeeds with a valid request", async (done) => {
      const res =  await request(app)
        .get("/posts/")
        .expect('Content-Type', /json/);
        done();
        console.log(res.text);
    });

    test("Succeeds with a valid request", async (done) => {
      const id = "5e9eebf705492d3ce416b60f";
      const path = "/posts/" + id;
      const res =  await request(app)
        .get(path)
        .expect('Content-Type', /json/);
        done();
        console.log(res.text);
    });
      
    test("It responds with the newly created post", async (done) => {
      const title = "This is a test";
      const path = "/posts/title/" + title;
      const res =  await request(app)
        .get(path)
        .expect('Content-Type', /json/);
        done();
        console.log(res.text);
      });

    test("Succeeds with valid inputs", async (done) => {
      const res =  await request(app)
          .patch("/posts/5e9eebf705492d3ce416b60f/update")
          .send(updateData)
          .expect('Content-Type', /json/);
          done();
          console.log(res.text);
    });

  });
  