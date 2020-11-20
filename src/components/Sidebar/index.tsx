/*
 * @Author: zhangzheng
 * @Date: 2020-11-02 16:26:20
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-18 18:33:29
 * @Descripttion: 侧边栏
 */
import React, {useEffect, useState} from "react"
import "./index.scss"
import {getLoginUserInfo} from "../../api"

interface sideBarParams {
    open: Boolean,
    closeCallback(_: Boolean): void,
    [propName: string]: any;
}

function Sidebar(props: sideBarParams): JSX.Element {

    let {
        open,
        closeCallback
    } = props

    let [maskClass, setMaskClass] = useState("")
    let [wrapperClass, setWrapperClass] = useState("")
    let [info, setInfo] = useState<any>({})

    useEffect(() => {
        if (open) {
            setMaskClass("sidebar-mask-animation")
            setWrapperClass("sidebar-wrapper-animation")
        } else {
            setMaskClass("sidebar-mask-back-animation")
            setWrapperClass("sidebar-wrapper-back-animation")
        }
    }, [open])

    useEffect(() => {
        if (!open) {
            setMaskClass("")
            setWrapperClass("")
        }
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
        let info = await getLoginUserInfo({
            userId: sessionStorage.getItem("userId")
        });
        setInfo(info)
    }

    const jumpRouter = (path) => {
        props.history.push(path)
    }

    const Logout = () => {
        sessionStorage.removeItem("userId")
        jumpRouter("/login")
    }
    
    return <>
        <div className={`siderbar-mask ${maskClass}`} onClick={() => {closeCallback(false)}}></div> 
        <div className={`sidebar-wrapper ${wrapperClass}`}>
            <div className="sidebar-title">
                <div className="sidebar-author-img">
                    <img src={info.author} alt=""/>
                </div>
                <div className="sidebar-author-name">
                    {info.name}
                </div>
                <div className="sidebar-author-sign">
                    {info.sign}
                </div>
            </div>
            <div className="sidebar-author-brand">
                <div className="brand-content">
                    {info.brand}
                    <i className="iconfont icon-san"></i>
                    <i className="iconfont icon-san animation-two"></i>
                </div>
            </div>
            <div className="sidebar-container">
                <div className="sidebar-content">
                    <div className="sidebar-content-item" onClick={() => jumpRouter("/upload")}>
                        上传
                    </div>
                    <div className="sidebar-content-item">
                        收藏
                    </div>
                </div>
                <div className="sidebar-content">
                    <div className="sidebar-content-item">
                        收藏图集
                    </div>
                    <div className="sidebar-content-item">
                        收藏图集
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">
                <div className="bottom-buttom" onClick={() => {Logout()}}>
                    登出
                </div>
            </div>
        </div>
    </>
}
export default Sidebar
