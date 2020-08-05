import React from "react";

class QuoteAndAuthor extends React.Component {
    render() {
        const randomColor = this.props.displayColor();
        const html = document.documentElement;
        html.style.backgroundColor = randomColor;

        return (
            <div style={{ backgroundColor: "white" }} className="quotebox">
                <div
                    className="fadeIn"
                    key={Math.random()}
                    style={{ color: randomColor }}
                >
                    );
                    }
                    }

export default QuoteAndAuthor;