import React from 'react';
import Home from '../pages/home';
import AddBook from '../pages/add-book';

const routes = {
    '/': () => <Home />,
    '/add-book': () => <AddBook />,
}

export default routes;
