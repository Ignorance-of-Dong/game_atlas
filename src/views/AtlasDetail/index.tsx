import React, {useState} from "react"
import {Header} from "components/index"
function AtlasDetail(props) {


    const leftClick = () => {
        props.history.push("/index")
    }

    return <>
        <div>
            <Header leftIconClick={leftClick} title="湖心小猪" leftIconName="left"/>
        </div>
    </>
}
export default AtlasDetail