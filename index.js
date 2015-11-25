
var Q = require("q");

exports.promisify = function(repl) {
  var _eval = repl.eval;
  repl.eval = function(cmd, context, filename, callback) {
    Q.nfcall(_eval, cmd, context, filename).then(function() {
        callback(null, arguments);
    }, function() {
        callback(arguments);
    });
  }
}
