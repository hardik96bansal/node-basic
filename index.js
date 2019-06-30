var rect = require('./rectangle');

function rectDetails(a,b){
    console.log("Solving for values " + a + ", " + b);
    rect(a,b,(err,rectangle) => {
        if(err){
            console.log("ERROR: " + err.message);
        }
        else{
            console.log("Area for rectangle[" + a + "," + b + "] is " + rectangle.area());
            console.log("Perimeter for rectangle[" + a + "," + b + "] is " + rectangle.perimeter());
        }

    });
}

rectDetails(2,3);
rectDetails(4,5);
rectDetails(4,-5);