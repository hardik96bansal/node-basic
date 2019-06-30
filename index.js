var rect = require('./rectangle');

function rectDetails(a,b){
    console.log("Area is "+rect.area(a,b));
    console.log("Perimeter is "+rect.perimeter(a,b));
}

rectDetails(2,3);
rectDetails(4,5);