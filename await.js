execute()

function execute() {
  getData();
  console.log('End');
}

async function getData() {
  console.log('Before get data');

  var aw = await setTimeout(function() {
    console.log('Get data');
  }, 3000);

  console.log('After get data');
}


/// Output:
/*
Before get data
End
After get data
Get data
*/

// Await will convert code after it into code in callback, so \console.log('After get data');\ is excuted in callback of aw variable. That's why 'After get data' display after 'End'

// Always block await variable in 'async' function

////// 'Async - Await' help us removing callback in code, so never using callback in 'Async - Await'
