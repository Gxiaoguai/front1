import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: resolve => require(['@/views/login/index'], resolve),
    hidden: true
  },

  {
    path: '/404',
    component: resolve => require(['@/views/404'], resolve),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: resolve => require(['@/views/home/index'], resolve),
      meta: { title: '主页', icon: '' }
    }]
  },



  {
    path: '/require',
    component: Layout,
    redirect: '/require/showrequire',
    name: 'Require',
    meta: { title: '需求', icon: '' },
    children: [
      {
        path: 'showrequire',
        name: '显示需求',
        component: resolve => require(['@/views/showrequire/index'], resolve),
        meta: { title: '显示需求', icon: 'table' }
      },
      {
        path: 'addrequire',
        name: 'Addrequire',
        component: resolve => require(['@/views/addrequire/index'], resolve),
        meta: { title: '发布需求', icon: 'tree' }
      },
      {
        path: '/detailrequire/:id',
        name: 'Detailrequire',
        component: resolve => require(['@/views/detailrequire/index'], resolve),
        hidden: true,
        meta: { title: '需求详情', icon: 'tree' }
      }
    ]
  },
  {
    path: '/others',
    component: Layout,
    name: 'Others',
    redirect: '/others/:id',
    children: [{
      path: '/others/:id',
      hidden:true,
      component: resolve => require(['@/views/others/index'], resolve),
      meta: { title: '他人信息页', icon: '' }
    }]
  },

  {
    path: '/resource',
    component: Layout,
    redirect: '/resource/showresource',
    name: 'Resource',
    meta: { title: '商品资源', icon: '' },
    children: [
      {
        path: 'showresource',
        name: '显示资源',
        component: resolve => require(['@/views/showresource/index'], resolve),
        meta: { title: '显示资源', icon: 'table' }
      },
      {
        path: 'addresource',
        name: 'Addresource',
        component: resolve => require(['@/views/addresource/index'], resolve),
        meta: { title: '发布资源', icon: 'tree' }
      },
      {
        path: '/detailresource/:id',
        name: 'Detailresource',
        component: resolve => require(['@/views/detailresource/index'], resolve),
        hidden: true,
        meta: { title: '资源详情', icon: 'tree' }
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/userinfo',
    name: 'User',
    meta: {
      title: '个人中心',
      icon: 'nested'
    },
    children: [
      {
        path: 'require',
        component: resolve => require(['@/views/user/require/index'], resolve),
        name: 'Require',
        redirect: '/user/require/publish',
        meta: { title: '需求' },
        children: [
          {
            path: 'publish',
            component: resolve => require(['@/views/user/require/publish'], resolve),
            name: 'Publish',
            meta: { title: '发布的需求' }
          },
          {
            path: 'enter',
            component: resolve => require(['@/views/user/require/enter'], resolve),
            name: 'Enter',
            meta: { title: '参与的需求' }
          },
          {
            path: 'collect',
            component: resolve => require(['@/views/user/require/collect'], resolve),
            name: 'Collect',
            meta: { title: '收藏的需求' }
          }
        ]
      },

      {
        path: 'resource',
        component: resolve => require(['@/views/user/resource/index'], resolve),
        name: 'Resource',
        redirect: '/user/resource/publish',
        meta: { title: '商品资源' },
        children: [
          {
            path: 'publish',
            component: resolve => require(['@/views/user/resource/publish'], resolve),
            name: 'Publish',
            meta: { title: '上传的资源' }
          },
          {
            path: 'buy',
            component: resolve => require(['@/views/user/resource/buy'], resolve),
            name: 'Buy',
            meta: { title: '购买的资源' }
          },
          {
            path: 'collect',
            component: resolve => require(['@/views/user/resource/collect'], resolve),
            name: 'Collect',
            meta: { title: '收藏的资源' }
          }
        ]
      },
      {
        path: 'userinfo',
        component: resolve => require(['@/views/user/userinfo/index'], resolve),
        meta: { title: '基本信息' }
      },
      {
        path: 'avator',
        component: resolve => require(['@/views/user/avator/index'], resolve),
        meta: { title: '修改头像' },
        hidden: true

      },

      {
        path: 'message',
        component: resolve => require(['@/views/user/message/index'], resolve),
        name: 'Message',
        redirect: '/user/message/mymessage',
        children: [
          {
            path: 'mymessage',
            component: resolve => require(['@/views/user/message/mymessage'], resolve),
            name: 'Mymessage',
            meta: { title: '我的消息' }
          },
          {
            path: 'sending',
            component: resolve => require(['@/views/user/message/sending'], resolve),
            name: 'Sending',
            hidden: true,
            meta: { title: '发送消息' }
          }
        ]
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
