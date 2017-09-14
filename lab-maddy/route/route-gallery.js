'use strict';

const Gallery = require('../model/gallery');
const jsonParser = require('body-parser').json();
const errorHandler = require('../lib/error-handler');
const debug = require('debug')('cfgram:route-gallery');
const bearerAuth = require('../lib/bearer-auth-middleware');

module.exports = function(router) {
  router.post('/api/gallery', bearerAuth, jsonParser (req, res) => {
    debug('POST /api/gallery');

    // http POST (auth token) :5000/api/gallery name='my fancy gallery' desc='it be dabomb'

    req.body.userId = req.user._id;

    return new Gallery(req.body).save()
      .then(gallery => res.json(gallery))//took away status(201)
      .catch(err => errorHandler(err, req, res));
  });

  router.get('/api/gallery/:_id', bearerAuth, (req, res) => {
    debug('GET /api/gallery/:_id');

    return Gallery.findById(req.params._id)
      .then(gallery => res.json(gallery))
      .catch(err => errorHandler(err, req, res));
  });

  router.get('/api/gallery', bearerAuth,(req, res) => {
    debug('GET /api/gallery');

    return Gallery.find()
    // galleries => [{...,...}, {...,...}, {...,...}]
    // galleries.map => [id, id, id]
      .then(gallery => res.json(gallery.map(gallery => gallery._id)))
      .catch(err => errorHandler(err, req, res)); //added after code demo
  });

  router.put('/api/gallery/:_id', bearerAuth, jsonParser (req, res) => {
    debug('/api/gallery:_id PUT');

    return Gallery.findById(req.params._id)
      .then(gallery => {
        if(gallery.userId.toString() === req.user._id.toString()) {
          gallery.name = req.body.name || gallery.name
          gallery.desc = req.body.desc || gallery.desc
          return gallery.save()
        }
        errorHandler(new Error('authorization failed; user does not own gallery, and cannot update'), req, res)
      })
      .then(()=> res.sendStatus(204))
      .catch(err => errorHandler(err, req, res));
  });

  router.delete('/api/gallery/:_id', bearerAuth, (req, res) => {
    debug('/api/gallery:_id DELETE');

    return Gallery.findById(req.params._id)
      .then(gallery => {
        if(gallery.userId.toString() === req.user._id.toString()) return gallery.remove()
        errorHandler(new Error('authorization failed; user does not own gallery, and cannot delete', req, res))
  })
  .then(() => res.sendStatus(204))
  .catch(err => errorHandler(err, req, res));
};
//maybe missing a bracket here?
