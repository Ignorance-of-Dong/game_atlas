/*
 * @Author: zhangzheng
 * @Date: 2020-11-09 14:52:05
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-13 14:59:21
 * @Descripttion: 公共组件总揽
 */
import Header from "./Header"
import Sidebar from "./Sidebar"
import UploadImage from "./UploadImage"
import InputItem from "./InputItem"
import PreviewImage from "./PreviewImage"
import Toasts, { ToastLoding } from './Toast'
let ToastLodingPro = new ToastLoding()

export {
    Header,
    Toasts,
    Sidebar,
    InputItem,
    UploadImage,
    PreviewImage,
    ToastLodingPro
}