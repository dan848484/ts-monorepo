"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;
var fs = _interopRequireWildcard(require("fs"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * A03 - Two Cards
 *
 * https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_c
 * @param input
 */
var main = exports.main = function main(input) {
  var lines = input.split('\n');
  var N = 0;
  var K = 0;
  var P = [];
  var Q = [];
  lines.forEach(function (line, i) {
    var tokens = line.split(' ').map(Number);
    switch (i) {
      case 0:
        N = tokens[0];
        K = tokens[1];
        break;
      case 1:
        P = tokens;
        break;
      case 2:
        Q = tokens;
        break;
    }
  });
  for (var i = 0; i < P.length; i++) {
    var p = P[i];
    for (var j = 0; j < Q.length; j++) {
      var q = Q[j];
      if (p + q === K) {
        console.log('Yes');
        process.exit();
      }
    }
  }
  console.log('No');
};
main(fs.readFileSync('/dev/stdin').toString());