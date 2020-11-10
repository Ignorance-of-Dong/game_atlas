/*
 * @Author: zhangzheng
 * @Date: 2020-11-02 16:26:20
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-10 15:08:45
 * @Descripttion: 侧边栏
 */
import React, {useEffect, useState} from "react"
import "./index.scss"

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
    }, [])

    const jumpRouter = (path) => {
        props.history.push(path)
    }
    
    return <>
        <div className={`siderbar-mask ${maskClass}`} onClick={() => {closeCallback(false)}}></div> 
        <div className={`sidebar-wrapper ${wrapperClass}`}>
            <div className="sidebar-title">
                <div className="sidebar-author-img">
                    <img src="https://mirror-gold-cdn.xitu.io/168e51435d5db4da35f?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt=""/>
                </div>
                <div className="sidebar-author-name">
                    小鱼仙官
                </div>
                <div className="sidebar-author-sign">
                    倥侗无知，半世迷离
                </div>
            </div>
            <div className="sidebar-author-brand">
                <div className="brand-content">
                    天官赐福，百无禁忌
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
        </div>
    </>
}
export default Sidebar
