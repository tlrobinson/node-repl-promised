
var Q = require("q");

exports.promisify = function(repl) {
  var _eval = repl.eval;
  repl.eval = function(cmd, context, filename, callback) {
    Q.nfapply(_eval, arguments).then(function() {
        //Success callback starts with null
        Array.prototype.unshift.call(arguments, null);
        callback.apply(this, arguments);
    }, function() {
        callback.apply(this, arguments);
    });
  }
}
