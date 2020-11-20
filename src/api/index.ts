/*
 * @Author: zhangzheng
 * @Date: 2020-11-11 10:04:54
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-19 18:22:04
 * @Descripttion: api接口请求
 */
import fetch from "../utils/fetch"

// 获取临时key
export function getCosKey() {
    return fetch.get('game/get/coskey')
}

// 注册
export function register(params) {
    return fetch.post('game/register', params)
}

// 登陆
export function login(params) {
    return fetch.post('game/login', params)
}

// 登陆
export function getLoginUserInfo(params) {
    return fetch.post('game/userinfo', params)
}

// 上传图集
export function UploadAtlas(params) {
    return fetch.post('game/push/atlas', params)
}

// 查询图集
export function getAtlasList(params) {
    return fetch.post('game/allatlas', params)
}

// 查询详情
export function getAtlasDeatil(params) {
    return fetch.post('game/atlas/detail', params)
}

