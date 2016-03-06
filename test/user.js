'use strict';
// https://github.com/tortillaj/Koa-Blog/blob/master/test/user.js
const app = require('../app');
const assert = require('assert');
const requtest = require('co-supertest').agent(app.listen());

require('co-mocha');

describe('user mode-', function() {
    let newuser;
    this.timeout(1000);
    it('shoud index router is ok', function*(done) {
        yield requtest.get('/').expect(200).end();
        done();
    });
});
