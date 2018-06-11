import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Header from '../components/Header';
import ExpensiveDashboardPage from '../components/ExpensiveDashboardPage';
import AddExpensivePage from '../components/AddExpensivePage';
import EditExpensivePage from '../components/EditExpensivePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpensiveDashboardPage} />
                <Route path="/create" component={AddExpensivePage} />
                <Route path="/edit/:id" component={EditExpensivePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;