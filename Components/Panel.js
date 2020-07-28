var _jsxFileName = "src\\Components\\Panel.js",
    _this = this;

var _templateObject = _taggedTemplateLiteral(["\n  background: #0c0c0c;\n  /* margin-top: 30px; */\n  /* padding: 10px; */\n  /* border: 1px solid #fff; */\n  margin-bottom: 15px;\n  flex: 1;\n\n  .panel-header{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 10px;\n\n    .user-info{\n      .user-link{\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n\n        &:hover{\n          text-decoration: none;\n        }\n\n        .user-picture{\n          height: 25px;\n          width:25px;\n          border-radius: 100%;\n        }\n\n        .user-name{\n          margin-left: 10px;\n          color: #fff;\n          opacity: 0.75;\n          font-size: 14px;\n        }\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    /* background: red; */\n    margin-bottom: 0px;\n    margin-left: 15px;\n\n  }\n"], ["\n  background: #0c0c0c;\n  /* margin-top: 30px; */\n  /* padding: 10px; */\n  /* border: 1px solid #fff; */\n  margin-bottom: 15px;\n  flex: 1;\n\n  .panel-header{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 10px;\n\n    .user-info{\n      .user-link{\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n\n        &:hover{\n          text-decoration: none;\n        }\n\n        .user-picture{\n          height: 25px;\n          width:25px;\n          border-radius: 100%;\n        }\n\n        .user-name{\n          margin-left: 10px;\n          color: #fff;\n          opacity: 0.75;\n          font-size: 14px;\n        }\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    /* background: red; */\n    margin-bottom: 0px;\n    margin-left: 15px;\n\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UserPanel = styled.div(_templateObject);

var Panel = function Panel() {
  return React.createElement(
    UserPanel,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: _this
    },
    React.createElement(
      "div",
      { className: "panel-header", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: _this
      },
      React.createElement(
        "div",
        { className: "user-info", __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: _this
        },
        React.createElement(
          "a",
          { className: "user-link", href: "#/", __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: _this
          },
          React.createElement("img", {
            src: "https://pbs.twimg.com/profile_images/1222911098183200773/-5pqLuY2_normal.jpg",
            alt: "User Name",
            className: "user-picture",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: _this
          }),
          React.createElement(
            "span",
            { className: "user-name", __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              },
              __self: _this
            },
            "@userName"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "layout-info", __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: _this
        },
        "30"
      )
    )
  );
};

export default Panel;