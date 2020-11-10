/*
 * @Author: zhangzheng
 * @Date: 2020-10-30 17:57:24
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-09 14:47:00
 * @Descripttion: navbar + Drawer >>>>>> 可配置公共头部
 */
import React, { useState } from "react"
import { NavBar, Icon, Drawer } from "antd-mobile"
import Sidebar from "components/Sidebar"
import "./index.scss"
import { JsxElement } from "typescript"
interface navBarParams {
    leftIcon?: string,
    leftClick?(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void,
    rightContainer?: Array<any>,
    title?: string,
    drawerContainer?: JsxElement
}

function Navbar(props: navBarParams) {
    let {
        leftIcon = "ellipsis",
        leftClick,
        rightContainer = [ <Icon key="0" type="search" style={{ marginRight: '16px' }} /> ],
        title = "Sky Sword",
        drawerContainer = <div></div>
    } = props
            
    let [open, setOpen] = useState<boolean>(false)

    const onOpenChange = () => {
        setOpen(!open)
    }
    return <>
        <NavBar
            mode="light"
            icon={<Icon type={leftIcon} />}
            onLeftClick={(e) => {leftClick ? leftClick(e) : onOpenChange()}}
            rightContent={rightContainer}
        >
            {title}
        </NavBar>
        {
            drawerContainer ?
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight }}
                contentStyle={{ color: '#A6A6A6', textAlign: 'center' }}
                sidebar={<Sidebar {...props}/>}
                open={open}
                onOpenChange={() => {onOpenChange()}}
            >
                {drawerContainer}
            </Drawer>:
            <></>
        }
    </>
}

export default Navbar