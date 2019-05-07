async function returnTen() {
  return 10;
}

function testFirst() {
  var promise = returnTen();
  console.log(promise);
}

testFirst(); // Promise { 10 }

// async function is always return a promise function
// If you want to get data so using then() in promise return

function testSecond() {
  var promise = returnTen;
  var result;
  promise().then(r => {
     result = r;
     console.log(result);
  })
}

testSecond(); // 10
