import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard'),
    children: [
      {
        path: '',
        redirect: '/dashboard/student'
      },
      {
        path: '/dashboard/student',
        name: 'Student',
        component: () => import('../components/Dashboard/Student'),
        children: [
          {
            path: '',
            redirect: '/dashboard/student/wallet'
          },
          {
            path: '/dashboard/student/wallet',
            name: 'Wallet',
            component: () => import('../components/Dashboard/Student/Wallet'),
            children: [
              {
                path: '/dashboard/student/wallet/transfer-funds',
                name: 'TransferFunds',
                component: () => import('../components/Dashboard/Student/Wallet/TransferFunds')
              },
              {
                path: '/dashboard/student/wallet/withdraw-funds',
                name: 'WithdrawFunds',
                component: () => import('../components/Dashboard/Student/Wallet/WithdrawFunds')
              }
            ]
          },
          {
            path: '/dashboard/student/orders',
            name: 'Orders',
            component: () => import('../components/Dashboard/Student/Orders')
          }
        ]
      }
    ]
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../components/Shop'),
    children: [
      {
        path: '',
        redirect: '/shop/home'
      },
      {
        path: '/shop/home',
        name: 'Home',
        component: () => import('../components/Shop/Home')
      },
      {
        path: '/shop/store',
        name: 'Store',
        component: () => import('../components/Shop/Store')
      },
      {
        path: '/shop/canteen',
        name: 'Canteen',
        component: () => import('../components/Shop/Canteen')
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../components/Auth'),
    children: [
      {
        path: '',
        redirect: '/auth/register'
      },
      {
        path: '/auth/register',
        name: 'Register',
        component: () => import('../components/Auth/Register'),
        children: [
          {
            path: '',
            redirect: '/auth/register/student'
          },
          {
            path: '/auth/register/student',
            name: 'Student',
            component: () => import('../components/Auth/Register/Student')
          },
          {
            path: '/auth/register/service-provider',
            name: 'ServiceProvider',
            component: () => import('../components/Auth/Register/ServiceProvider')
          }
        ]
      },
      {
        path: '/auth/login',
        name: 'Login',
        component: () => import('../components/Auth/Login')
      },
      {
        path: '/shop',
        name: 'Shop',
        component: () => import('../components/Shop')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
