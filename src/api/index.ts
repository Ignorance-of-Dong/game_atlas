/*
 * @Author: zhangzheng
 * @Date: 2020-11-11 10:04:54
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-11 15:34:35
 * @Descripttion: api接口请求
 */
import fetch from "../utils/fetch"


export function getCosKey() {
    return fetch.get('game/get/coskey')
}