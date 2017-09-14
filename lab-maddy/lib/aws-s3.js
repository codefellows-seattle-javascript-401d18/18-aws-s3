'use strict';

const debug = require('debug')('cfgram:aws-s3')

const AWS = require('aws-sdk')
const s3 = new AWS.S3()
s3.config.setPromisesDependency(require('bluebird'))
