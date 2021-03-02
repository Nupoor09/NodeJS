//map reduce filter
function map(b){ 
    
    return ("hello"+b); 
}    
function reduce (a,b){
    return a +b;
}
var array2=["Jaipur","Mumbai","Gujrat","Aurangabad"];
var new_arr = array2.map(map)
console.log(new_arr)

var arr = array2.reduce(reduce)
console.log(arr);  


var filter  = new_arr.filter(function (b){ 
    return b.length>12;
});
console.log(filter)

