function name() {
  console.log("Ravi");
}
name();

function area(l, b){
    var Area = l * b;
    console.log(Area);
}
area(5, 6)

function square(num){
    var sq = num * num;
    console.log(sq);
}
square(50);



function rep(){
    for(var i = 0; i < 2; i++){
        for(var j = 0; j < 4; j++){
            for(var k = 0; k < 6; k++){
                console.log(i, j, k)
            }
    }
}
}rep()