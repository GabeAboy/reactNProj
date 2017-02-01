function dirReduc(arr){
  let newarr = arr;
  let obj = {
    NORTHSOUTH : true,
    EASTWEST : true,
    SOUTHNORTH:true,
    WESTEAST:true
  }
    for (var i = 0; i < arr.length; i++) {
        if(obj[arr[i]+arr[i+1]]){
          arr.splice(i,2);
          i = -1;
        }
    }
return arr
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
