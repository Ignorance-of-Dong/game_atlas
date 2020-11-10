import { PropTypes } from "mobx-react";
import React, { useState } from "react";
import "./index.scss"

function TabBar(props) {
    return <>
        <div className="tabbar-wrapper">
            <div className="tabbar-item" onClick={ () => { props.history.push("/") }}>
                <i className="iconfont iconcollection"></i>
            </div>
            <div className="tabbar-item" onClick={() => { props.history.push("/") }}>
                <i className="iconfont iconcollection"></i>
            </div>
        </div>
    </>
}

export default TabBar