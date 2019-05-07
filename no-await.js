execute()

function execute() {
  getData();
  console.log('End');
}

function getData() {
  console.log('Before get data');

  setTimeout(function() {
    console.log('Get data');
  }, 3000);

  console.log('After get data');
}


/// Output:
/*
Before get data
After get data
End
Get data
*/

