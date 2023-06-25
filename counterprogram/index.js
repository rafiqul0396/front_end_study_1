

let count=0
document.getElementById("decrement").onclick = function(){
    count--
    console.log(count)
    document.getElementById("counter").innerHTML = count
}
document.getElementById("increment").onclick = function(){
    count++
    console.log(count)
    document.getElementById("counter").innerHTML = count
}
document.getElementById("reset").onclick = function(){
    count=0
    console.log(count)
    document.getElementById("counter").innerHTML = count
}

var b10=12;
var b16=b10.toString(16);
console.log(b16);