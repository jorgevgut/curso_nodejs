var react = require('react');

var login = react.createClass({
    render: function () {
        //Elemento de react (JSX)
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                { className: "estilo" },
                "Login "
            ),
            " ",
            React.createElement(
                "form",
                null,
                React.createElement(
                    "input",
                    { type: "text" },
                    " "
                ),
                " ",
                React.createElement(
                    "input",
                    { type: "password" },
                    " "
                ),
                " ",
                React.createElement(
                    "button",
                    null,
                    " login "
                ),
                " "
            ),
            " "
        );
    }
});