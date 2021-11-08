import React from 'react';
import { useRoutes } from 'hookrouter';
import NavBar from './navigation/navBar';
import routes from './navigation/routes';

export default function App() {
    const routeResult = useRoutes(routes);
    return (
      <div className='app'>
        <NavBar />
        {routeResult}
      </div>
    );
}
