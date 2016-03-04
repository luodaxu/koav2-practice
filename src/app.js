import React from 'react';
import ReactDOM from 'react-dom';

class Name extends React.Component {
    render() {
        return (
            <div>hello world</div>
        );
    }
}

ReactDOM.render(<Name /> ,document.getElementById('app'));
