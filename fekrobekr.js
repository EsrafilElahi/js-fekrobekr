function zFill(num, size) {
  num = String(num);
  while (num.length < size) num = "0" + num;
  return num
}


function removeItem(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function toJSON(item) {
  return JSON.stringify(item)
}

function sit(a, b) {
  a = String(a);
  b = String(b);
  var correct = 0;
  var found = 0;
  var ar = [];
  var br = [];


  for (var i in a) {
    if (a[i] === b[i]) {
      ++correct;
      //       console.log(`correct = ${correct} --> ${a[i]}`)
    }
    else {
      ar.push(a[i]);
      br.push(b[i]);
      //       console.log(`ar = ${ar}`)
      //       console.log(`br = ${br}`)
    }
  }

  for (var c in ar) {
    if (br.includes(ar[c])) {
      ++found;
      removeItem(br, ar[c]);
    }

  }

  return { "c": correct, "f": found };
}


for (let i = 0; i < 1000; i++) {
  i = zFill(i, 3);

  if (
    (toJSON(sit(i, 112)) === toJSON({ "c": 1, "f": 0 })) &&
    (toJSON(sit(i, 804)) === toJSON({ "c": 0, "f": 1 })) &&
    (toJSON(sit(i, 563)) === toJSON({ "c": 0, "f": 1 })) &&
    (toJSON(sit(i, 323)) === toJSON({ "c": 1, "f": 1 })) &&
    (toJSON(sit(i, 803)) === toJSON({ "c": 0, "f": 2 }))
  ) {
    console.log(i)
  }

};

