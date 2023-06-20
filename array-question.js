const arr = [2,5,3,7,5];
const target = 7;

  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === target){
        result.push([i,j])
      }
    }
  }


console.log(result)
