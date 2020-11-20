import React, { useState } from "react";
import "./index.scss"
function Atlas(props) {
    let {detail} = props
    const goDetail = () => {
        props.history.push(`/detail?id=${detail.atlasId}`)
    }
    return <>
        <div className="image-container" onClick={() => {goDetail()}}>
            <img src={detail.cover}/>
            <div className="detail">
                <div className="atias-name">
                    {detail.atlasName}
                </div>
                <div className="atias-author">
                    {detail.author}
                </div>
                <div className="atias-create-time">
                    {detail.createTime}
                </div>
            </div>
        </div>
    </>
}

export default Atlas