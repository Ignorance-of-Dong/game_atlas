/*
 * @Author: zhangzheng
 * @Date: 2020-11-02 18:12:24
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-11 16:07:23
 * @Descripttion: 用户中心
 */
import React from "react"
import {Header} from "components/index"

function DrawerContainer() {
    return <>
        <div>111</div>
    </>
}

function UserCenter(props) {

    const leftClick = () => {
        props.history.push("/index")
    }

    return <>
        <div>
            <Header leftIconClick={leftClick} title="用户中心" leftIconName="left"/>
        </div>
    </>
}




export default UserCenter