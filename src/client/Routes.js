import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFound from './pages/NotFound';
import AdminsListPage from './pages/AdminsListPage';

export default [
   {
      ...App,
      routes: [
         {
            ...HomePage,
           path: '/',
           exact: true,
        }, 
        {
         ...AdminsListPage,
        path: '/admins',
        exact: true,
     },
        {
           ...UsersListPage,
         path: '/users'
        },
        {
         ...NotFound,
      }
      ]
   }
]