/*
 * @Author: zhangzheng
 * @Date: 2020-11-11 10:04:36
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-26 15:18:57
 * @Descripttion: 
 */
import { Toasts, ToastLodingPro } from 'components/index'


let BASEHOST = ""
if (process.env.NODE_ENV == "development") {
	BASEHOST = 'http://localhost:3009/game'
} else {
	BASEHOST = 'http://atlasserver.ignorantscholar.cn/game'
}


class Fetch {
	urlList = {}
	get(url, params?, isOpen) {
		if (params) {
			var paramsArray = [];
			Object.keys(params).forEach(function (key) {
				paramsArray.push(key + '=' + params[key])
			});
			if (url.search(/\?/) === -1) {
				url += '?' + paramsArray.join('&')
			} else {
				url += '&' + paramsArray.join('&')
			}
		}
		let fetchConfig: any = {
			method: 'get',
			headers: {
				authorization: window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : null,
				'Content-Type': 'application/json; charset=utf-8'
			},
			credentials: "include",
			mode: 'cors',
		}
		if (isOpen) {
			BASEHOST = ""
		}
		return fetch(BASEHOST + url, fetchConfig).then(response => {
			return response.json().then((res) => {
				if (response.ok && res.code === 200) {
					return Promise.resolve(res)
				} else {
					return Promise.reject(res)
				}
			})
		})
	}
	post(url, options?, isOpen?) {
		if (Object.keys(this.urlList).length === 0) {
			ToastLodingPro.loading();
		}
		this.urlList[url] = url
		if (isOpen) {
			BASEHOST = ""
		}
		return fetch(BASEHOST + url, {
			method: 'post',
			headers: {
				//  authorization: window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : null,
				'Content-Type': 'application/json; charset=utf-8',
				token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : 'GSVDADGFN_WDBSADVD'
			},
			credentials: "include",
			mode: 'cors',
			body: JSON.stringify(options)
		}).then(response => {
			return response.json().then((res) => {
				delete this.urlList[url] // 每次请求成功后 都删除队列里的路径
				if (Object.keys(this.urlList).length === 0) {
					ToastLodingPro.hide()
				}
				if (response.ok && res.code === 200) {
					return Promise.resolve(res.data)
				} else {
					Toasts(res.msg || '网络请求异常', 2000)
					return Promise.reject(res.data)
				}
			})
		}).catch(err => {
			delete this.urlList[url] // 每次请求成功后 都删除队列里的路径
			if (Object.keys(this.urlList).length === 0) {
				ToastLodingPro.hide()
			}
			Toasts('网络请求异常，请两分钟后再试', 2000)
		})
	}
}

export default new Fetch()