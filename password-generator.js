var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: false
});

var pss = generator.generateMultiple(5,{
	length: 10,
	numbers: true
})

// 'uEyMTw32v9'
console.log(pss);