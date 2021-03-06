import React, { lazy } from 'react';

// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PostAddIcon from '@material-ui/icons/PostAdd';

// Pages
import Login from 'pages/Login';
import ForgotPassword from 'pages/ForgotPassword';

// Logged Pages
const Dashboard = lazy(() => import('pages/Dashboard'));
const Users = lazy(() => import('pages/Users'));
const Profile = lazy(() => import('pages/Profile'));
const Post = lazy(() => import('pages/Posts'));

const config = {
  public: [
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/esqueci-minha-senha',
      component: ForgotPassword,
      exact: true,
    },
  ],
  protected: [
    {
      path: '/',
      component: Dashboard,
      title: 'Dashboard',
      exact: true,
      icon: <DashboardIcon />,
    },
    {
      path: '/users',
      component: Users,
      title: 'Usuários',
      exact: true,
      icon: <PeopleIcon />,
    },
    {
      path: '/profile',
      component: Profile,
      title: 'Perfil',
      exact: true,
      icon: <AccountBoxIcon />,
    },
    {
      path: '/post',
      component: Post,
      title: 'Posts',
      exact: true,
      icon: <PostAddIcon />,
    },
  ],
};

export default config;
