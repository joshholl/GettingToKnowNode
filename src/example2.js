const EventEmitter = require('events');

class Conference extends EventEmitter{}

const thisConference = new Conference();

thisConference.on('talkStart', () => { 
	console.log('this is about to get good!');
});

thisConference.emit('talkStart');



