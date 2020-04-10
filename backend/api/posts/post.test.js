// const supertest = require('supertest');
// const app = require('../../app');
// const request = supertest(app);

const request = require('supertest');

const app = require('../../app');

/**
 * Testing POST add posts endpoint
 */
// describe("POST /add", () => {
//     test("It responds with the newly created post", async (done) => {
//       console.log('insideeeeeeeeeeee');
//       const res =  await request(app)
//         .post("/posts/add")
//         .send({
//           postDate: "2016-05-18T16:00:00Z",
//           title: "kds",
//           author: "Asmu",
//           content: "slkjf dfsdsdf sdfsdfsd sdfsdf sdfsdf sdfs lkasjdfasl dfjlas dfas skfjlaks skdfj asfj lasfj alskdjf laskdfjklas dflkjas df asdlkf ",
//           tags: ['nodejs', 'people']
//               })
//         .expect('Content-Type', /json/);
//         done();
//         console.log(res.text);
//       });
//   });
  
/**
 * Testing GET posts endpoint
 */
// describe("GET /getAll", () => {
//   test("It responds with the newly created post", async (done) => {
//     const res =  await request(app)
//       .get("/posts/getAll")
//       .expect('Content-Type', /json/);
//       done();
//       console.log(res.text);
//     });
// });


/**
 * Testing GET post by id endpoint
 */
// describe("GET /getById", () => {
//   test("It responds with the newly created post", async (done) => {
//     const id = "5e6cbf7334e5a1677339cd8d";
//     const path = "/posts/" + id;
//     console.log('path: ', path);
//     const res =  await request(app)
//       .get(path)
//       .expect('Content-Type', /json/);
//       done();
//       console.log(res.text);
//     });
// });

/**
 * Testing GET post by title endpoint
 */
describe("GET /getByTitle", () => {
  test("It responds with the newly created post", async (done) => {
    const title = "kds";
    const path = "/posts/title/" + title;
    console.log('path: ', path);
    const res =  await request(app)
      .get(path)
      .expect('Content-Type', /json/);
      done();
      console.log(res.text);
    });
});