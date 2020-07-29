var _templateObject = _taggedTemplateLiteral(["\n  border-top: 1.5px solid #000;\n"], ["\n  border-top: 1.5px solid #000;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: flex-start;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n    color: rgba(255, 255, 255, 1);\n  }\n\n  .right {\n    flex-grow: 1;\n  }\n\n  .left {\n    padding-right: 10px;\n\n    img {\n      border-radius: 100%;\n      height: 40px;\n      width: 40px;\n    }\n  }\n\n  .tweet-info {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 10px;\n\n    .date {\n      font-size: 14px;\n      opacity: 0.75;\n    }\n  }\n"], ["\n  padding: 10px;\n  display: flex;\n  justify-content: flex-start;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n\n  &:hover {\n    text-decoration: none;\n    color: rgba(255, 255, 255, 1);\n  }\n\n  .right {\n    flex-grow: 1;\n  }\n\n  .left {\n    padding-right: 10px;\n\n    img {\n      border-radius: 100%;\n      height: 40px;\n      width: 40px;\n    }\n  }\n\n  .tweet-info {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 10px;\n\n    .date {\n      font-size: 14px;\n      opacity: 0.75;\n    }\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 700;\n  color: #fff;\n\n  &:hover {\n    color: #17bf63;\n  }\n"], ["\n  font-weight: 700;\n  color: #fff;\n\n  &:hover {\n    color: #17bf63;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  padding-top: 10px;\n\n  .scope-item{\n    margin-right: 15px;\n    font-size: 12px;\n    font-weight: 200;\n    color: rgba(255,255,255, 0.7);\n\n    i{\n      font-size: 14px;\n      margin-right: 3px;\n\n      &.fa-heart{\n        color: rgb(224, 36, 94);\n        text-shadow: 1px 1px 20px rgba(224, 36, 94, 0.8);\n      }\n\n      &.fa-retweet{\n        color: rgb(23, 191, 99);\n        text-shadow: 1px 1px 20px rgba(23, 191, 99, 0.8);\n      }\n    }\n  }\n"], ["\n  padding-top: 10px;\n\n  .scope-item{\n    margin-right: 15px;\n    font-size: 12px;\n    font-weight: 200;\n    color: rgba(255,255,255, 0.7);\n\n    i{\n      font-size: 14px;\n      margin-right: 3px;\n\n      &.fa-heart{\n        color: rgb(224, 36, 94);\n        text-shadow: 1px 1px 20px rgba(224, 36, 94, 0.8);\n      }\n\n      &.fa-retweet{\n        color: rgb(23, 191, 99);\n        text-shadow: 1px 1px 20px rgba(23, 191, 99, 0.8);\n      }\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { dateFormat } from "./helper.js";

// Styled Components
var TweetCard = styled.article(_templateObject);

var TweetLink = styled.div(_templateObject2);

var UserLink = styled.a(_templateObject3);

var TweetScope = styled.div(_templateObject4);

// END OF Styled Components

var Tweet = function Tweet(_ref) {
  var tweetItem = _ref.tweetItem;

  var handleClick = function handleClick() {
    var win = window.open(tweetUrl, "_blank");
    win.focus();
  };

  var text = tweetItem.text,
      user = tweetItem.user,
      id_str = tweetItem.id_str,
      created_at = tweetItem.created_at,
      favorite_count = tweetItem.favorite_count,
      retweet_count = tweetItem.retweet_count;

  var tweetUrl = "https://twitter.com/" + user.screen_name + "/status/" + id_str;
  return React.createElement(
    TweetCard,
    null,
    React.createElement(
      TweetLink,
      { onClick: handleClick },
      React.createElement(
        "div",
        { className: "left" },
        React.createElement(
          "a",
          {
            href: "https://twitter.com/" + user.screen_name,
            title: "@" + user.screen_name,
            target: "_blank"
          },
          React.createElement("img", {
            src: user.profile_image_url,
            alt: user.screen_name,
            className: "user-picture"
          })
        )
      ),
      React.createElement(
        "div",
        { className: "right" },
        React.createElement(
          "div",
          { className: "tweet-info" },
          React.createElement(
            UserLink,
            {
              href: "https://twitter.com/" + user.screen_name,
              title: "@" + user.screen_name,
              target: "_blank"
            },
            user.name
          ),
          React.createElement(
            "span",
            { className: "date" },
            dateFormat(created_at)
          )
        ),
        React.createElement(
          "div",
          { className: "tweet-content" },
          text
        ),
        React.createElement(
          TweetScope,
          { className: "tweet-scope" },
          React.createElement(
            "a",
            { className: "scope-item favs", href: tweetUrl + "/likes", target: "_blank", title: "View Favs" },
            React.createElement("i", { className: "fas fa-heart" }),
            " ",
            favorite_count
          ),
          React.createElement(
            "a",
            { className: "scope-item rts", href: tweetUrl + "/retweets/with_comments", target: "_blank", title: "View RTs" },
            React.createElement("i", { className: "fas fa-retweet" }),
            " ",
            retweet_count
          )
        )
      )
    )
  );
};

export default Tweet;