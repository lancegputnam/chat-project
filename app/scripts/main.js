'use strict';

//this variable is for the username 
var user = "Bob LobLaw";

//variable for incoming messages
var getBabblebox = _.template($('.messages').text());

// this grabs data, along with $.getJSON, from tiny server and inputs it into the message container. 
function renderPost(posts){
    posts.forEach(function(chat){
            var rendered = getBabblebox(chat);
    // this prepends the messages into the babblebox container
            $('.babblebox').prepend(rendered);
    });
}

function refreshChat () {
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(chat){
	renderPost(chat);
});
}

// this constructor creates a message 
function Message(user, message, time, meta) {
  this.user = user || '';
  this.message = message || '';
  this.time = time || '';
  this.meta = '';
}

//this sends my message object to the server//
function renderChat(info) {
  $.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info);
}

//when the submit button is clicked, it creates and instance of the message //
$('.submit').click(function() {
// the message in the input box is assigned to the mainbox. the .val gets the value of the elements //
  	var message = $('.enterMessage').val();
  	$('.enterMessage').val('');
//the variable inputs the current time//
  	var time = Date.now();
//the variable creates a new, outgoing instance
  	var outgoing = new Message(user, message, time);
//this sends the outgoing message to the server from above //
  	renderChat(outgoing);
});

//unable to get page to automatically refresh  
setInterval(function () {
	refreshChat() }
	,5000);

// need to use timeout with the scroll top button 
