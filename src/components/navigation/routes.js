import React from 'react';
import Home from '../pages/home';
import AddBook from '../pages/add-book';
import Login from '../pages/login';
import SignUp from '../pages/sign-up';

const routes = {
    '/': () => <Home />,
    '/add-book': () => <AddBook request={'add'}/>,
    '/login': () => <Login />,
    '/sign-up': () => <SignUp />,
}

export default routes;
