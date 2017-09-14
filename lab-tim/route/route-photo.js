'use strict';

const multer = require('multer');
const tempDir = `${__dirname}/../temp`;
const Photo = require('../model/photo');
const upload = multer({ dest: tempDir });
const debug = require('debug')('cfgram:route-photo');
const errorHandler = require('../lib/error-handler');
const bearerAuth = require('../lib/bearer-auth-middleware');

module.exports = function(router) {
  router.post('/api/photo', bearerAuth, upload.single('image'), (req, res) => {
    debug('POST /api/photo');

    console.log(req.file);

    return Photo.upload(req)
      .then(photoData => new Photo(photoData).save())
      .then(photo => res.json(photo))
      .catch(err => errorHandler(err, req, res));
  });

  router.get('/api/photo/:_id', bearerAuth, (req, res) => {
    debug('GET /api/photo/:_id');

    return Photo.findById(req.params._id)
      .then(photo => res.json(photo))
      .catch(err => errorHandler(err, req, res));
  });

  router.get('/api/photo', bearerAuth, (req, res) => {
    debug('GET /api/photo');

    return Photo.find()
      .then(photo => res.json(photo.map(photo => photo._id)))
      .catch(err => errorHandler(err, req, res));
  });

  router.put('/api/photo/:_id', bearerAuth, upload.single('image'), (req, res) => {
    debug('PUT /api/photo/:_id');

    return Photo.findByIdAndUpdate(req.params._id, req.body, { upsert:true, runValidators:true })
      .then(() => res.sendStatus(204))
      .catch(err => errorHandler(err, req, res));
  });

  router.delete('/api/photo/:_id', bearerAuth, (req, res) => {
    debug('DELETE /api/photo/:_id');

    return Photo.findByIdAndRemove(req.params._id)
      .then(() => res.sendStatus(204))
      .catch(err => errorHandler(err, req, res));
  });
};
