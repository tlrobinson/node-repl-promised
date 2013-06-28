
var Q = require("q");

exports.promisify = function(repl) {
  var _eval = repl.eval;
  repl.eval = function(cmd, context, filename, callback) {
    Q.nfcall(_eval, cmd, context, filename).then(function(result) {
      callback(null, result);
    }, function(err) {
      callback(err);
    });
  }
}

if (require.main === module) {
  var repl = require("repl").start({});
  exports.promisify(repl);
}
