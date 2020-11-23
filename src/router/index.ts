/*
 * @Author: Mr.zheng
 * @Date: 2019-08-09 14:32:22
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-23 16:01:56
 * @Description: 
 */
import React from 'react'
export default {
    config: [
        {
            path: "/login",
            component: React.lazy(() => import('../views/Login')),
            exact: true,
            requireAuth: false
        },
        {
            path: "/register",
            component: React.lazy(() => import('../views/Register')),
            exact: true,
            requireAuth: false
        },
        {
            path: "/index",
            component: React.lazy(() => import('../views/Home')),
            exact: true,
            requireAuth: true
        },
        {
            path: "/detail",
            component: React.lazy(() => import('../views/AtlasDetail')),
            exact: true,
            requireAuth: true
        },
        {
            path: "/user",
            component: React.lazy(() => import('../views/UserCenter')),
            exact: true,
            requireAuth: true
        },
        {
            path: "/upload",
            component: React.lazy(() => import('../views/Upload')),
            exact: true,
            requireAuth: true
        },
        {
            path: "/run",
            component: React.lazy(() => import('../views/Run')),
            exact: true,
            requireAuth: true
        },
        {
            path: "/private",
            component: React.lazy(() => import('../views/PrivateList')),
            exact: true,
            requireAuth: true
        },
    ]
}