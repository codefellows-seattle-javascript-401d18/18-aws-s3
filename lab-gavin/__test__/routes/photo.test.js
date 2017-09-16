// 'use strict';
//
// const faker = require('faker');
// const mocks = require('../lib/mocks');
// const superagent = require('superagent');
// const server = require('../../lib/server');
// // const Gallery = require('../../model/gallery');
// require('jest');
//
// describe('Testing Photo Routes', function() {
//   beforeAll(server.start);
//   afterAll(server.stop);
//   afterEach(mocks.gallery.removeAll);
//   afterEach(mocks.user.removeAll);
//   afterEach(mocks.photo.removeAll);
//
//   describe('POST to /api/photo', function() {
//     describe('Valid Requests', () => {
//       beforeAll(() => {
//         this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) };
//
//         return mocks.user.createOne()
//           .then(userData => this.userData = userData)
//           .then(() => {
//             return superagent.post(':4444/api/gallery')
//               .set('Authorization', `Bearer ${this.userData.token}`)
//               .send(this.fakeGalleryData);
//           })
//           .then(res => this.res = res);
//       });
//       test('should return a status of 201 when posting a photo', () => {
//         return superagent.post(':4444/api/photo')
//           .set('Authorization', `Bearer ${this.userData.token}`)
//           .send({
//             image: `/Users/Gavin/codefellows/401/labs/18-aws-s3/lab-gavin/__test__/lib/testPhoto.JPG`,
//             name: `TestPhoto`,
//             desc: `TestPhotoDescription`,
//             galleryId: this.res.body._id,
//           })
//           .then(res => {
//             expect(res.status).toBe(201);
//             expect(this.resPhoto.body.name).toBe('TestPhoto');
//             expect(this.resPhoto.body.desc).toBe(`TestPhotoDescription`);
//           });
//       });
//       test('should return a new photo in the res', () => {
//         expect(res.status).toBe(200);
//       });
//       test('should have a galleryId property', () => {
//         expect(this.res.body).toHaveProperty('galleryId');
//       });
//     });
//
//     describe('Invalid Requests', () => {
//       test('should return a status of 401 given no Auth credentials',  () => {
//         return superagent.post(':4444/api/photo')
//           .send(this.fakeGalleryData)
//           .catch(err => {
//             expect(err.status).toBe(401);
//           });
//       });
//
//       test('should return a 401 given bad Auth credintials', () => {
//         return superagent.post(':4444/api/photo')
//           .set('Authorization', 'Bearer badToken')
//           .send(this.fakeGalleryData)
//           .catch(err => {
//             expect(err.status).toBe(401);
//           });
//       });
//
//       xtest('should return 400 given bad req body', () => {
//         return superagent.post(':4444/api/photo')
//           .set('Authorization', `Bearer ${this.userData.token}`)
//           .send({})
//           .catch(err => {
//             expect(err.status).toBe(400);
//           });
//       });
//     });
//   });
//
//   describe('GET to /api/photo', function() {
//     describe('Valid Requests to GETALL', () => {
//       beforeAll(() => {
//         this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) };
//
//         return mocks.user.createOne()
//           .then(userData => this.userData = userData)
//           .then(() => {
//             return superagent.post(':4444/api/photo')
//               .set('Authorization', `Bearer ${this.userData.token}`)
//               .send(this.fakeGalleryData);
//           })
//           .then(res => this.res = res);
//       });
//       test('should return 200 for valid GETALL requests', () => {
//         return superagent.get(':4444/api/photo')
//           .set('Authorization', `Bearer ${this.userData.token}`)
//           .then(res => {
//             expect(res.status).toBe(200);
//           });
//       });
//     });
//
//     describe('Invalid Requests', () => {
//       beforeAll(() => {
//         this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) };
//
//         return mocks.user.createOne()
//           .then(userData => this.userData = userData)
//           .then(() => {
//             return superagent.post(':4444/api/photo')
//               .set('Authorization', `Bearer ${this.userData.token}`)
//               .send(this.fakeGalleryData);
//           })
//           .then(res => this.res = res);
//       });
//       test('should return 401 for bad token', () => {
//         return superagent.get(':4444/api/photo')
//           .set('Authorization', `Bearer ${this.userData.token} +1`)
//           .then(res => {
//             expect(res.status).toBe(401);
//           });
//       });
//     });
//   });
//   describe('GET to /api/photo', function() {
//     describe('Valid Requests to GET', () => {
//       beforeAll(() => {
//         this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) };
//
//         return mocks.user.createOne()
//           .then(userData => this.userData = userData)
//           .then(() => {
//             return superagent.post(':4444/api/photo')
//               .set('Authorization', `Bearer ${this.userData.token}`)
//               .send(this.fakeGalleryData);
//           })
//           .then(res => this.res = res);
//       });
//       test('should return 200 for valid GET requests', () => {
//         return superagent.get(`:4444/api/photo/${this.res.body._id}`)
//           .set('Authorization', `Bearer ${this.userData.token}`)
//           .then(res => {
//             expect(res.status).toBe(200);
//           });
//       });
//
//       describe('Invalid Requests to GET', () => {
//         beforeAll(() => {
//           this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) };
//
//           return mocks.user.createOne()
//             .then(userData => this.userData = userData)
//             .then(() => {
//               return superagent.post(':4444/api/photo')
//                 .set('Authorization', `Bearer ${this.userData.token}`)
//                 .send(this.fakeGalleryData);
//             })
//             .then(res => this.res = res);
//         });
//         test('should return 401 for bad token', () => {
//           return superagent.get(`:4444/api/photo/${this.res.body._id}`)
//             .set('Authorization', `Bearer ${this.userData.token} + 1`)
//             .then(res => {
//               expect(res.status).toBe(401);
//             });
//         });
//         test('should return 404 for bad photo ID', () => {
//           return superagent.get(`:4444/api/photo/22222`)
//             .set('Authorization', `Bearer ${this.userData.token}`)
//             .then(res => {
//               expect(res.status).toBe(404);
//             });
//         });
//       });
//     });
//   });
//
//   describe('PUT to /api/photo', function() {
//     describe('Valid Requests to PUT', () => {
//       beforeAll(() => {
//         this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) };
//
//         return mocks.user.createOne()
//           .then(userData => this.userData = userData)
//           .then(() => {
//             return superagent.post(':4444/api/photo')
//               .set('Authorization', `Bearer ${this.userData.token}`)
//               .send(this.fakeGalleryData);
//           })
//           .then(res => this.res = res);
//       });
//       test('should return 204 for PUT with valid info', () => {
//         return superagent.put(`:4444/api/photo/${this.res.body._id}`)
//           .set('Authorization', `Bearer ${this.userData.token}`)
//           .send({ name: 'hello', desc: 'this is a description' })
//           .then(res => {
//             expect(res.status).toBe(204);
//           });
//       });
//
//     });
//
//     describe('Invalid Requests to PUT', () => {
//       beforeAll(() => {
//         this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) };
//
//         return mocks.user.createOne()
//           .then(userData => this.userData = userData)
//           .then(() => {
//             return superagent.post(':4444/api/photo')
//               .set('Authorization', `Bearer ${this.userData.token}`)
//               .send(this.fakeGalleryData);
//           })
//           .then(res => this.res = res);
//       });
//       test('should return 401 for PUT with invalid token', () => {
//         return superagent.put(`:4444/api/photo/${this.res.body._id}`)
//           .set('Authorization', `Bearer ${this.userData.token + 1}`)
//           .send({ name: 'hello', desc: 'this is a description' })
//           .then(res => {
//             expect(res.status).toBe(401);
//           });
//       });
//       test('should return 404 for PUT with invalid ID', () => {
//         return superagent.put(`:4444/api/photo/${this.res.body._id + 1}`)
//           .set('Authorization', `Bearer ${this.userData.token}`)
//           .send({ name: 'hello', desc: 'this is a description' })
//           .then(res => {
//             expect(res.status).toBe(404);
//           });
//       });
//       test('should return 400 for PUT with invalid body', () => {
//         return superagent.put(`:4444/api/photo/${this.res.body._id}`)
//           .set('Authorization', `Bearer ${this.userData.token}`)
//           .send({ mynameis: 'hello', desc: 'this is a description' })
//           .then(res => {
//             expect(res.status).toBe(400);
//           });
//       });
//
//     });
//   });
//
//   describe('DELETE to /api/photo', function() {
//     describe('Valid Requests to DELETE', () => {
//       beforeAll(() => {
//         this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) };
//
//         return mocks.user.createOne()
//           .then(userData => this.userData = userData)
//           .then(() => {
//             return superagent.post(':4444/api/photo')
//               .set('Authorization', `Bearer ${this.userData.token}`)
//               .send(this.fakeGalleryData);
//           })
//           .then(res => this.res = res);
//       });
//       test('should return 204 for valid delete', () => {
//         return superagent.delete(`:4444/api/photo/${this.res.body._id}`)
//           .set('Authorization', `Bearer ${this.userData.token}`)
//           .then(res => {
//             expect(res.status).toBe(204);
//           });
//       });
//
//     });
//
//     describe('Invalid Requests to DELETE', () => {
//       beforeAll(() => {
//         this.fakeGalleryData = { name: faker.random.word(), desc: faker.random.words(12) };
//
//         return mocks.user.createOne()
//           .then(userData => this.userData = userData)
//           .then(() => {
//             return superagent.post(':4444/api/photo')
//               .set('Authorization', `Bearer ${this.userData.token}`)
//               .send(this.fakeGalleryData);
//           })
//           .then(res => this.res = res);
//       });
//       test('should return xxx for invalid ID', () => {
//         return superagent.delete(`:4444/api/photo/${this.res.body._id + 1}`)
//           .set('Authorization', `Bearer ${this.userData.token}`)
//           .then(res => {
//             expect(res.status).toBe(204);
//           });
//       });
//       test('should return xxx for invalid token', () => {
//         return superagent.delete(`:4444/api/photo/${this.res.body._id}`)
//           .set('Authorization', `Bearer ${this.userData.token + 1}`)
//           .then(res => {
//             expect(res.status).toBe(204);
//           });
//       });
//
//     });
//   });
// });
