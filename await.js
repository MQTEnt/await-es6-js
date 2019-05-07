var axios = require('axios');

execute()

function execute() {
  getData().then(result => {
  	// console.log(result)}
  }); // ===> Promise
  console.log('End');
}

async function getData() {
  console.log('Before get data');

  var result = await axios.get('http://dummy.restapiexample.com/api/v1/employees');

  console.log(result);

  console.log('After get data');

  return result;
}


/// Output:
/*
Before get data
End
... data ...
After get data
*/

// Await will convert code after it into code in callback, so \console.log('After get data');\ is excuted in callback of aw variable. That's why 'After get data' display after 'End'

// Always block await variable in 'async' function

////// 'Async - Await' help us removing callback in code, so never using callback in 'Async - Await'
