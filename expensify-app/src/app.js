import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class BoilerplateApp extends React.Component{
    render(){
        return (
            <p>This is my boilerplate</p>
        )
    }
}

ReactDOM.render(<BoilerplateApp />, document.getElementById('app'));
