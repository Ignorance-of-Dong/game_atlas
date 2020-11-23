/*
 * @Author: zhangzheng
 * @Date: 2020-11-09 14:49:37
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-23 14:55:21
 * @Descripttion: header组件
 */
import React, {useState, MouseEvent} from "react"
import "./index.scss"

interface headerParms {
    leftIconName?: string,
    leftIconClick?: Function,
    title?: string,
    rightIconName?: string,
    rightIconClick?: Function,
    headerWrapClass?: string
}

function Header(props: headerParms):JSX.Element {
    
    const click = () => {
        console.log("执行点击事件")
    }

    let {
        leftIconName = "icon-more",
        leftIconClick = click,
        title = "首页",
        rightIconName = "icon-search",
        rightIconClick = click,
        headerWrapClass = ""
    } = props

    return <>
        <div className={`game-header-wrap ${headerWrapClass}`}>
            <i className={`iconfont ${leftIconName}`} onClick={() => leftIconClick()}></i>
            <div className="game-header-title">
                {title}
            </div>
            <i className={`iconfont ${rightIconName}`} onClick={() => {
                rightIconClick()
            }}></i>
        </div>
    </>
}

export default Header
