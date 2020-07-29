import Panel from "./Panel.js";

var Split = function Split(_ref) {
  var usersList = _ref.usersList;


  return React.createElement(
    "div",
    { id: "split" },
    usersList.map(function (user) {
      return React.createElement(Panel, {
        key: user.index,
        user: user
      });
    })
  );
};

export default Split;