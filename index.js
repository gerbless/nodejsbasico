const call = require("./src/call")

//call.greet("Germain Bueno");

async function callWithPromise(){
    const fullname = await call.withPromise("Germain", "Bueno");
    console.log(fullname);
}

callWithPromise();