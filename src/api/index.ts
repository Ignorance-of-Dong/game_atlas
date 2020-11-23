/*
 * @Author: zhangzheng
 * @Date: 2020-11-11 10:04:54
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-23 17:49:50
 * @Descripttion: api接口请求
 */
import fetch from "../utils/fetch"

// 获取临时key
export function getCosKey() {
    return fetch.get('/get/coskey')
}

// 注册
export function register(params) {
    return fetch.post('/register', params)
}

// 登陆
export function login(params) {
    return fetch.post('/login', params)
}

// 登陆
export function getLoginUserInfo(params) {
    return fetch.post('/userinfo', params)
}

// 上传图集
export function UploadAtlas(params) {
    return fetch.post('/push/atlas', params)
}

// 查询图集
export function getAtlasList(params) {
    return fetch.post('/allatlas', params)
}

// 查询详情
export function getAtlasDeatil(params) {
    return fetch.post('/atlas/detail', params)
}

// 修改用户信息
export function updateInfoApi(params) {
    return fetch.post('/update/userinfo', params)
}

// 查询用户私有上传图集列表
export function getPrivateList(params) {
    return fetch.post('/private/list', params)
}

// 删除图集
export function deleteAtlasApi(params) {
    return fetch.post('/delete', params)
}

// 更新用户图集
export function updateAtlas(params) {
    return fetch.post('/update/atlas', params)
}
