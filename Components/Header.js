var Header = function Header() {
    return React.createElement(
        "header",
        { className: "side-bar" },
        React.createElement(
            "nav",
            null,
            React.createElement(
                "a",
                { href: "#", className: "brand-icon", title: "Twitter - Avocado" },
                React.createElement("i", { className: "fab fa-twitter-square" })
            ),
            React.createElement(
                "button",
                {
                    className: "add-btn"
                },
                React.createElement("i", { className: "fas fa-plus" })
            )
        )
    );
};

export default Header;