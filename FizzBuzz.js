// Check if the log exists
function checkIfLogExists(fs, file){
	if (!fs.existsSync(file)) {
		createFile(fs, file);
	}	
}

// Writes to file.
function writeToFile(fs, file, data,) {
	var os = require("os");
	fs.appendFile(file, data + os.EOL, function (err) {
		if (err) {
	  		throw err;
	  	} 
	});
}

// Creates File.
function createFile(fs, file) {
	fs.writeFile(file, '', { flag: 'wx' }, function (err) {
	    if (err) {
	    	throw err;
	    } 
	});
}


// Check if the number is prime or not.
function is_prime(num) {
    if (num < 2 || num % 2 == 0 && num !== 2) {
    	return false;
    }
    if (num > 2) {
        for (var n = 3; n < num; n += 2) {
            if (num % n == 0) return false;
        }
    }
    return true;
}

/* 
 * Loop through total check if prime,
 * divisible by 3+5, 3 or 5.
 */
function fizzBuzz(total, fs) {
	var data;

	for (var i = 1;i < total; i++) {
		if (is_prime(i)) {
			data = 'FIZZBUZZ++';
	        console.log(data);
	        writeToFile(fs, file, data);
	    } else if ((i % 3) === 0 && (i % 5) === 0 ) {
	        data = 'FIZZBUZZ'
	        console.log(data);
	        writeToFile(fs, file, data);
	    } else if ((i % 3) === 0 ) {
	    	data = 'FIZZ'
	        console.log(data);
	        writeToFile(fs, file, data);
	    } else if ((i % 5) === 0 ) {
	    	data = 'BUZZ'
	        console.log(data);
	        writeToFile(fs, file, data);
	    } else {
	        console.log(i);
	        writeToFile(fs, file, i);
	    }
	}
}

var fs 	 = require('fs');
var file = 'fizzbuzz.log';

checkIfLogExists(fs, file);
fizzBuzz(500, fs);