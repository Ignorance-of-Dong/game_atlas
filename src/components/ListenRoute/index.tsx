import React, { useEffect } from "react"
import { observer, inject } from 'mobx-react';
import {toJS} from "mobx"
import {getLoginUserInfo} from "../../api/index"
function ListenRoute(props) {
    console.log(props)
    let {userInfo, getUserInfo} = props.Store
    useEffect(() => {
        init()
        window.addEventListener('hashchange', async () => {
            init()
        })
    }, [])

    const init = () => {
        if (!sessionStorage.getItem("userId")) {
            if (props.history.location.pathname != "/login") {
                console.log("no userid 正在准备执行跳转")
                props.history.push("/login")
            }
        }
    }
    return <></>
}

export default inject('Store')(observer(ListenRoute))