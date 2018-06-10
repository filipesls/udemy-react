import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpensiveDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensivePage = () => (
    <div>
        This is from my add expensive component
    </div>
);

const EditExpensivePage = () => (
    <div>
        This is from my edit expensive component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help page component
    </div>
);

const routes =(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={ExpensiveDashboardPage} />
            <Route path="/create" component={AddExpensivePage} />
            <Route path="/edit" component={EditExpensivePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
