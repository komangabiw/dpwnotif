import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

import notifications from '../views/notifications/list'
import AddNotifications from '../views/notifications/add'
import EditNotifications from '../views/notifications/edit'
import DetailNotifications from '../views/notifications/detail'
// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},
		{
			path: '/',
			name: 'list-notifications',
			component: notifications
		},
		{
			path: '/list-notifications',
			name: 'list-notifications',
			component: notifications
		},
		{
			path: '/add-notifications',
			name: 'add-notifications',
			component: AddNotifications
		},
		{
			path: '/edit-notifications',
			name: 'edit-notifications',
			component: EditNotifications
		},
		{
			path: '/detail-notifications',
			name: 'detail-notifications',
			component: DetailNotifications
		}
	]
})
