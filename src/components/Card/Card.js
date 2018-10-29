import React from "react";

class Card extends React.Component { 
    render() {
        return (
        <div className="card ml-2 mr-2 float-left" onClick={() => this.props.handleClick(this.props.value)}>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        );
    }
}

export default Card;