import React from 'react';

function Button(props) {
    return (
        <button style={props.placement} onClick={props.submit} className="ui huge button">
            {props.function}
        </button>
    );
    
}

export default Button;