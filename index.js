
var Q = require("q");

exports.promisify = function(repl) {
  var _eval = repl.eval;
  var that = this;
  if (cmd[cmd.length-1] === '\n'){
      //Command to be executed
      Q.nfcall(_eval, cmd, context, filename).then(function() {
          //Success callback
          Array.prototype.unshift.call(arguments, false);
          callback.apply(that, arguments);
      }, function() {
          callback.apply(that, arguments);
      });
  }else{
      //Suggession
      _eval.apply(that, arguments);
  }
}
