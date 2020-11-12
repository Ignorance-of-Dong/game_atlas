import React, {useState} from "react"
import {Header} from "components/index"
import "./index.scss"
function AtlasDetail(props) {


    const leftClick = () => {
        props.history.push("/index")
    }

    return <>
        <div className="detail-wrapper">
            <Header leftIconClick={leftClick} title="湖心小猪" leftIconName="icon-back"/>
            <div className="detail-content">
                
            </div>
        </div>
    </>
}
export default AtlasDetail