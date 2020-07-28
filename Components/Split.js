var _jsxFileName = "src\\Components\\Split.js",
    _this = this;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Panel from "./Panel.js";
// var projectName = require("@scope/@emotion/styled");

var Split = function Split() {
  var _React = React,
      useState = _React.useState,
      useEffect = _React.useEffect;

  var _useState = useState({
    userName: "VersaAgency",
    count: "30"
  }),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      updateSearch = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      query = _useState4[0],
      updateQuery = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      result = _useState6[0],
      updateResult = _useState6[1];

  var userName = search.userName,
      count = search.count;


  useEffect(function () {

    var url = "http://localhost:7890/1.1/statuses/user_timeline.json?count=" + count + "&screen_name=" + userName;

    var reponse = fetch(url);
    var answer = reponse.then(function (result) {
      return result.json();
    });

    answer.then(function (tweets) {
      return console.log(tweets);
    });
  }
  // readAPI();
  // eslint-disable-next-line
  , [query]);

  return React.createElement(
    "div",
    { id: "split", __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: _this
    },
    React.createElement(Panel, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: _this
    })
  );
};

export default Split;