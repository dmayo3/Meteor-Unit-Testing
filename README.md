Meteor Unit Testing Example
===========================

This is my first attempt at unit testing Meteor. The code under tested is the default 'hello world' application that is created when you run meteor create.

Test code is stored under the 'tests' directory, which is a directory that Meteor ignores by convention rather than including it in your production code.

It uses Mocha as the test framework, which is run in-browser when you open 'tests/tests.html'. For assertions, chai.js is used. For stubbing/mocking, sinon.js is used.
