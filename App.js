var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// import React from 'react';
// import {Fragment} from 'react'
import Header from "./Components/Header.js";
import Split from "./Components/Split.js";

var App = function App() {
  var _React = React,
      useState = _React.useState,
      Fragment = _React.Fragment;

  // const [search, updateSearch] = useState({
  //   userName: "",
  //   count: 30
  // });

  var _useState = useState([{
    index: 1,
    userName: "VersaAgency",
    count: "30"
  }, {
    index: 2,
    userName: "RainAgency",
    count: "30"
  }, {
    index: 3,
    userName: "alexadevs",
    count: "30"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      usersList = _useState2[0],
      updateList = _useState2[1];

  return React.createElement(
    Fragment,
    null,
    React.createElement(Header, null),
    React.createElement(Split, {
      usersList: usersList
    })
  );
};

export default App;