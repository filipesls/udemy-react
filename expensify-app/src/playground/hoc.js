// HIgher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop Manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. please don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>This is authenticated</p>
            ) }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo =  requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={ false } info='There are details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={ true } info='There are details' />, document.getElementById('app'));