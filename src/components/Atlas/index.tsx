import React, { useState } from "react";
import "./index.scss"
function Atlas(props) {

    const goDetail = () => {
        props.history.push("/detail")
    }
    return <>
        <div className="image-container" onClick={() => {goDetail()}}>
            <img src="https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/WechatIMG348.png"/>
            <div className="detail">
                <div className="atias-name">
                    凤竹小楼
                </div>
                <div className="atias-author">
                    小字
                </div>
                <div className="atias-create-time">
                    2020/4/9
                </div>
            </div>
        </div>
    </>
}

export default Atlas