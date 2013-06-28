repl-promised
=============

Make any Node.js REPL support promises (Promises/A+).

Usage
-----

Either use one of the included "node-promised" or "coffee-promised" executables, or setup your own REPL:

    var repl = require("repl");
    var promisify = require("repl-promised").promisify;
    promisify(repl.start({}));

Commands that return promises will delay printing until the promise is resolved:

    > Q.delay(1000).then(function() { return "output after 1 second!"; })
    'output after 1 second!'
    > 
