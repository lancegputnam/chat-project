"use strict";function renderPost(a){a.forEach(function(a){var b=getBabblebox(a);$(".babblebox").prepend(b)})}function Message(a,b,c){this.user=a||"",this.message=b||"",this.time=c||"",this.meta=""}function renderChat(a){$.post("http://tiny-pizza-server.herokuapp.com/collections/chat-messages",a)}var user="Bob LobLaw",getBabblebox=_.template($(".messages").text());$.getJSON("http://tiny-pizza-server.herokuapp.com/collections/chat-messages").done(function(a){renderPost(a)}),$(".submit").click(function(){var a=$(".enterMessage").val();$(".enterMessage").val("");var b=Date.now(),c=new Message(user,a,b);renderChat(c)});