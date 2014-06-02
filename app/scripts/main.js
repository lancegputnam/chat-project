
var getBabblebox = _.template($('.messages').text());

// should grab array of data and send it to the message box
function renderPost(posts){
    posts.forEach(function(chat){
            var rendered = getBabblebox(chat);
    //append the message box window and puts the data in the window
            $('.babblebox').prepend(rendered);
    });
}

$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(chat){
	renderPost(chat);
});


//sends message to the server
function updateChat(info) {
	$.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info);
}

$('.submit').click(function() {
	var babbleMessage = $('.enterMessage').val();
	$('.enterMessage').val('');
	var time = Date.now();
	var outgoing = new Message(user, message, time);

	updateChat(outgoing);

});


// This is creating a message to be sent 
function babbleMessage (user,message,time) {
    this.user = user || '';
    this.message = message || '';
    this.time = time || '';
    this.meta = 'babblebox';
}

