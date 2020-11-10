import React, {useState} from "react"
import Nabbar from "components/NavBar"
function AtlasDetail(props) {


    const leftClick = () => {
        props.history.push("/index")
    }

    return <>
        <div>
            <Nabbar leftClick={leftClick} title="湖心小猪" leftIcon="left"/>
        </div>
    </>
}
export default AtlasDetail