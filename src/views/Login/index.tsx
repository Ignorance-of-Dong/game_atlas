import React, { useEffect, useState } from "react"
import { observer } from 'mobx-react'
import "./index.scss"
import Store from "./store"
import { Page, Input, Button } from 'react-onsenui';


function Login(props) {
    let { userName } = Store

    let [showDialog, setShowDialog] = useState(false)
    let [animationClass, setAnimationClass] = useState("")

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
    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="login-show-button">
                        <div className="lining" onClick={() => {setShowDialog(true)}}>
                            Login
                        </div>
                    </div>
                    <div className="register-show-button">
                        <div className="lining">
                            Register
                        </div>
                    </div>
                    <div className={`login-dialog ${animationClass}`}>
                        <div className="left-hook"></div>
                        <div className="right-hook"></div>

                        <div className="login-dialog-title">
                            <div className="login-text">
                                login
                            </div>
                            <i className="iconfont icon-back" onClick={() => {setShowDialog(false)}}></i>
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