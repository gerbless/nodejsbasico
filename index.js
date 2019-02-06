const call = require("./src/call")

call.withCallback("Germain Bueno", call.sync);

call.withPromise("Germain Promesa")
    .then(name => console.log(name))