// Test the client in this example
Meteor = {
	'is_client': true,
	'is_server': false
};

// Create a dummy 'hello' template object
Template = {
	'hello': {}
};

// Stub the console.log() function so we can check what it's called with
sinon.stub(console, 'log');

describe('Meteor client-side code', function(){

	describe('Template.hello', function(){

		describe('#greeting()', function(){
			it('should return welcome message', function(){
				chai.assert.equal('Welcome to meteor-unit-testing.', Template.hello.greeting());
			});
		});

		describe('#events', function(){
			it('should contain a click handler for the input button', function(){
				chai.assert.property(Template.hello.events, 'click input');
			});

			it('the input button event handler should log a message to the console', function(){
				Template.hello.events['click input']();

				chai.assert(console.log.calledWith('You pressed the button'));
			});
		});

	});

});
