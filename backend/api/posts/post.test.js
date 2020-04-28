const request = require('supertest');
const app = require('../../app');

// test data
// Assumption: userId is passed in req.body while creating posts
const postData = {
  title: "This is a test",
  description: "sdfdsf",
  contentHtml: "<p>lorem slkjf dfsdsdf sdfsdfsd sdffjlas dfas skfjlaks skdfj asfj lasfj alskdjf laskdfjklas dflkjas df asdlkf</p>",
  tags: ['nodejs', 'people'],
  userId: "5e9eeb7666f33b3b79dd6e84"
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
  