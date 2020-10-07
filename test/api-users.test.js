const request = require('supertest');
const app = require('../app/server');
var config = require('../config/database');


describe('route /api/comsume', ()=>{
  it('return datafrom api a array more than 0', async ()=>{
    const res = await request(app).get("/api/consume")
      .set('apiKey', config.development.apikey);
    const result = res.body;
    // expect(res.statusCode).toEqual(200);

    // console.log(result.length);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('name');
  });
  // it('First Data Object Containing attributes "id"', async ()=>{
  //   const res = await request(app).get("/api/consume")
  //     .set('apiKey', config.development.apikey);
  //   const result = res.body;
  //   // expect(res.statusCode).toEqual(200);
  //
  //   // console.log(result.length);
  //   expect(result[0]).toHaveProperty('id');
  // });
  // it('Object Containing attributes "NAME"', async ()=>{
  //   const res = await request(app).get("/api/consume")
  //     .set('apiKey', config.development.apikey);
  //   const result = res.body;
  //   // expect(res.statusCode).toEqual(200);
  //
  //   // console.log(result.length);
  //   expect(result[0]).toHaveProperty('name');
  // });
});

// describe('route with authentication', ()=>{
//   it('authenticaion OK', async ()=>{
//     const res = await request(app).get("/testAuthentication")
//       .set('apiKey', config.development.apikey);
//     // expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty('success', true);
//   });
// });



// describe('route /testwriteFile', ()=>{
//   it('ok', async ()=>{
//     const res = await request(app).get("/testwriteFile");
//     // expect(res.statusCode).toEqual(200);
//     //  console.log('MEU VALOR AKI' + res.body.message);
//     expect(res.body).toHaveProperty('success', true);
//   });
// });




