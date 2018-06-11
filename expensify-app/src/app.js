import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Link,
    NavLink,
    Route,
    Switch
} from 'react-router-dom';
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

const NotFoundPage = () => (
    <div>
        404! <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li>
                <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            </li>
            <li>
                <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
            </li>
            <li>
                <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            </li>
        </ul>
    </header>
);

const routes =(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpensiveDashboardPage} />
                <Route path="/create" component={AddExpensivePage} />
                <Route path="/edit" component={EditExpensivePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
