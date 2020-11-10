import React, { useState } from "react"
import { observer } from 'mobx-react'
import "./index.scss"
import Store from "./store"
import { Page, Input, Button } from 'react-onsenui';
function Login(props) {
    let { userName } = Store
    const goIndex = () => {
        console.log(props)
        props.history.push("/index")
    }
    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="title">
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
                    </div>
                </div>
                <div className="login-footer">
                    <Button modifier="large--cta" onClick={ goIndex }>登陆</Button>
                </div>
            </div>
        </>
    )
}

export default observer(Login);