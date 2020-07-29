var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(["\n  background: #0e0e0e;\n  margin-bottom: 15px;\n  flex: 1;\n  overflow-y: scroll;\n  max-height: 30vh;\n\n  .panel-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 10px;\n  }\n\n  @media (min-width: 768px) {\n    /* background: red; */\n    margin-bottom: 0px;\n    margin-left: 15px;\n    max-height: none;\n  }\n"], ["\n  background: #0e0e0e;\n  margin-bottom: 15px;\n  flex: 1;\n  overflow-y: scroll;\n  max-height: 30vh;\n\n  .panel-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 10px;\n  }\n\n  @media (min-width: 768px) {\n    /* background: red; */\n    margin-bottom: 0px;\n    margin-left: 15px;\n    max-height: none;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  \n\n  &:hover {\n    text-decoration: none;\n    transition: all ease 0.3s;\n\n    .user-name {\n      opacity: 1;\n    }\n  }\n\n  .user-picture {\n    height: 30px;\n    width: 30px;\n    border-radius: 100%;\n  }\n\n  .user-name {\n    margin-left: 10px;\n    color: #fff;\n    opacity: 0.75;\n    font-size: 14px;\n    transition: all ease 0.3s;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  \n\n  &:hover {\n    text-decoration: none;\n    transition: all ease 0.3s;\n\n    .user-name {\n      opacity: 1;\n    }\n  }\n\n  .user-picture {\n    height: 30px;\n    width: 30px;\n    border-radius: 100%;\n  }\n\n  .user-name {\n    margin-left: 10px;\n    color: #fff;\n    opacity: 0.75;\n    font-size: 14px;\n    transition: all ease 0.3s;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import Tweet from "./Tweet.js";

// Styled Components
var UserPanel = styled.div(_templateObject);

var UserLink = styled.a(_templateObject2);
// END OF Styled Components

var Panel = function Panel(_ref) {
  var user = _ref.user;
  var _React = React,
      useState = _React.useState,
      useEffect = _React.useEffect,
      Fragment = _React.Fragment;
  var index = user.index,
      userName = user.userName,
      count = user.count;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      twitterInfo = _useState2[0],
      updateTwitterInfo = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      print = _useState4[0],
      updatePrint = _useState4[1];

  useEffect(function () {
    var readAPI = function readAPI() {
      var url = "http://localhost:7890/1.1/statuses/user_timeline.json?count=" + count + "&screen_name=" + userName;

      var reponse = fetch(url);
      var answer = reponse.then(function (result) {
        return result.json();
      });

      answer.then(function (tweets) {
        updateTwitterInfo(tweets);
        updatePrint(true);
      }
      // console.log(tweets)
      );
    };
    readAPI();
  }, [count, userName]);

  return React.createElement(
    UserPanel,
    null,
    print ? React.createElement(
      Fragment,
      null,
      React.createElement(
        "div",
        { className: "panel-header" },
        React.createElement(
          "div",
          { className: "user-info" },
          React.createElement(
            UserLink,
            {
              href: "https://twitter.com/" + twitterInfo[0].user.screen_name,
              target: "_blank",
              title: twitterInfo[0].user.name
            },
            React.createElement("img", {
              src: twitterInfo[0].user.profile_image_url,
              alt: twitterInfo[0].user.screen_name,
              className: "user-picture"
            }),
            React.createElement(
              "span",
              { className: "user-name" },
              "@",
              twitterInfo[0].user.screen_name
            )
          )
        ),
        React.createElement(
          "div",
          { className: "layout-info" },
          "30"
        )
      ),
      React.createElement(
        "div",
        { className: "panel-body" },
        twitterInfo.map(function (tweetItem) {
          return React.createElement(Tweet, { tweetItem: tweetItem, key: tweetItem.id_str });
        })
      )
    ) : null
  );
};

export default Panel;