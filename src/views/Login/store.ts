/*
 * @Author: zhangzheng
 * @Date: 2020-10-27 15:56:22
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-10-27 16:14:48
 * @Descripttion: 
 */
import {observable, action} from 'mobx'

class Login {
    @observable userName = ""


    @action.bound
    login() {
        console.log("denglu")
    }
}

export default new Login()