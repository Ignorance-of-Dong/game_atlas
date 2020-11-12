import React, { useEffect, useState } from "react"
import { observer } from 'mobx-react'
import "./index.scss"
import Store from "./store"
import { Page, Input, Button } from 'react-onsenui';
import { List, InputItem, Toast } from 'antd-mobile';


function Login(props) {

    let [showDialog, setShowDialog] = useState(false)
    let [animationClass, setAnimationClass] = useState("")
    let [panelType, setPanelType] = useState("login")
    let [hasError, sethasError] = useState(false)
    let [userName, setUserName] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPsd, setConfirmPsd] = useState("")


    useEffect(() => {
        if (showDialog) {
            setAnimationClass("dialog-animation")
        } else {
            setAnimationClass("dialog-back-animation")
        }
    }, [showDialog])

    useEffect(() => {
        if (!showDialog) {
            setAnimationClass("")
        }
    }, [])

    const jumpRouter = (path) => {
        props.history.push(path)
    }

    const onErrorClick = () => {
        // ..
    }

    const onChange = () => {
        // ..
    }

    const reset = () => {
        setPassword("")
        setUserName("")
        setConfirmPsd("")
    }

    const showLoginPanel = () => {
        if (showDialog) return false
        reset()
        setShowDialog(true)
        setPanelType("login")
    }
    const showRegisterPanel = () => {
        if (showDialog) return false
        reset()
        setShowDialog(true)
        setPanelType("register")
    }

    const submit = () => {
        if (!userName || !password) {
            Toast.info('账号或密码不能为空!!!!🧐', 1);
            return;
        }
        if (panelType == "register" && confirmPsd != password) {
            Toast.info('两次密码输入内容不同!!!!🧐', 1);
        }
        console.log(userName, password)
    }

    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="login-show-button">
                        <div className="lining" onClick={() => {showLoginPanel()}}>
                            Login
                        </div>
                    </div>
                    <div className="register-show-button">
                        <div className="lining" onClick={() => {showRegisterPanel()}}>
                            Register
                        </div>
                    </div>
                    <div className={`login-dialog ${animationClass}`}>
                        <div className="left-hook"></div>
                        <div className="right-hook"></div>

                        <div className="login-dialog-title">
                            <div className="login-text">
                                {panelType}
                            </div>
                            <i className="iconfont icon-upper" onClick={() => {setShowDialog(false)}}></i>
                        </div>
                        <div className="login-dialog-content">
                            <div className="input-item">
                                <div className="input-lable">
                                    账号:
                                </div>
                                <div className="input-wrapper">
                                    <input type="text" value={userName} onChange={(e) => {
                                        setUserName(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            <div className="input-item">
                                <div className="input-lable">
                                    密码:
                                </div>
                                <div className="input-wrapper">
                                    <input type="text" value={password} onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}/>
                                </div>
                            </div>
                            {
                                panelType == "register" ?
                                <div className="input-item">
                                    <div className="input-lable">
                                        确认密码:
                                    </div>
                                    <div className="input-wrapper">
                                        <input type="text" value={confirmPsd} onChange={(e) => {
                                            setConfirmPsd(e.target.value)
                                        }}/>
                                    </div>
                                </div>:
                                <></>
                            }
                            <div className="submit-buttom" onClick={() => {submit()}}>
                                <i className="iconfont icon-login"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="title">
                        login
                    </div>
                    <div className="login-form">
                        <div className="login-form-item">
                            <Input
                                value={ userName }
                                onChange={(event) => { this.setState({text: event.target.value})} }
                                modifier='material'
                                placeholder='Username' />
                        </div>
                        <div className="login-form-item">
                            <Input
                                value={ userName }
                                onChange={(event) => { this.setState({text: event.target.value})} }
                                modifier='material'
                                placeholder='Password' />
                        </div>
                    </div> */}
                {/* <div className="login-footer">
                    <Button modifier="large--cta" onClick={ () => {jumpRouter("/index")} }>登陆</Button>
                    <div className="login-tip" onClick={() => {jumpRouter("/register")}}>
                        还没有账号？去注册
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default observer(Login);