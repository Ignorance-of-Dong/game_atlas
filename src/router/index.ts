/*
 * @Author: Mr.zheng
 * @Date: 2019-08-09 14:32:22
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-11 16:09:59
 * @Description: 
 */
import React from 'react'
export default {
    config: [
        {
            path: "/login",
            component: React.lazy(() => import('../views/Login')),
            exact: true
        },
        {
            path: "/register",
            component: React.lazy(() => import('../views/Register')),
            exact: true
        },
        {
            path: "/index",
            component: React.lazy(() => import('../views/Home')),
            exact: true
        },
        {
            path: "/detail",
            component: React.lazy(() => import('../views/AtlasDetail')),
            exact: true
        },
        {
            path: "/user",
            component: React.lazy(() => import('../views/UserCenter')),
            exact: true
        },
        {
            path: "/upload",
            component: React.lazy(() => import('../views/Upload')),
            exact: true
        },
    ]
}