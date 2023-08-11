import DefaultLayout from '../layouts/Default'
import Dashboard from '../pages/dashboard'
import Home from '../pages/home'
import LoginPage from '../pages/login'

const indexRoutes = [{ path: '/', component: DefaultLayout }]

const AppRoutes = [
  {
    path: '/login',
    name: 'ورود',
    icon: 'fa fa-plus',
    component: LoginPage,
    showInNav: false,
    exact: false,
  },
  {
    path: '/dashboard',
    name: 'داشبورد',
    icon: 'fa fa-tachometer-alt',
    component: Dashboard,
    private: true,
    showInNav: true,
    exact: false,
  },
  {
    path: '/',
    name: 'خانه',
    icon: 'fa fa-tachometer-alt',
    component: Home,
    private: false,
    showInNav: true,
    exact: true,
  },
]

export default AppRoutes

export { indexRoutes }
