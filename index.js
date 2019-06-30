var rect = {
    area: (x,y) => (x*y),
    perimeter: (x,y) => (2*(x+y))
}

function rectDetails(a,b){
    console.log("Area is "+rect.area(a,b));
    console.log("Perimeter is "+rect.perimeter(a,b));
}

rectDetails(2,3);
rectDetails(4,5);