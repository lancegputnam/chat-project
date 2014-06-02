/* global describe, it */

(function () {
    'use strict';
// are these false positives???
    describe("login event", function () {
        it('should not accept an empty string or max character as a user name', function () {
        	var emptyString = function() {
					var objUser = new User('');
				};

				expect(emptyString).to.throw(Error);
      });

        it('should not accept special characters for a user name.', function () {
        	var specialCharacters = function() {
					var objUser = new User('$&%#@!');
				};

				expect(specialCharacters).to.throw(Error);
      });

        it('should not accept a user name without letters', function () {
        	var emptyLetters = function() {
					var objUser = new User('12345');
				};

				expect(emptyLetters).to.throw(Error);
    	});

        it('should require the string to be at least two characters in length', function() {
				var userNameLength = function() {
					var objUser = new User('1');
				};

				expect(userNameLength).to.throw(Error);
		});
    }); 

    describe("posted message", function () {
    	it('should display the username, message and time in the message container', function () {
    		var userName = "lancegputnam";
    		var message = "message will be displayed here";
    		var time = "5:00pm";
    		var messageInstance = new message ("userName, message, time")

    		expect(messageInstance).to.equal("userName, message, time");
    	});

    	it('should display the username', function () {
    		var messageInstance = new message (user, message, time)
    		expect(messageInstance.user).to.equal("lancegputnam");
    	});
    	
    	it('should display the message', function () {
    		var messageInstance = new message (user, message, time)
    		expect(messageInstance.message).to.equal("message will be displayed here");
    	});

    	it('should display the time', function () {
    		var messageInstance = new message (user, message, time)
    		expect(messageInstance.time).to.equal("5:00pm");
    	});
    });
})();

/// test the send button. 
/// test to fetch messages. 