import React from "react"
import Nabbar from "components/NavBar"

function DrawerContainer() {
    return <>
        <div>111</div>
    </>
}

function UserCenter(props) {

    const leftClick = () => {
        props.history.push("/index")
    }

    return <>
        <div>
            <Nabbar leftClick={leftClick} title="用户中心" leftIcon="left"/>
        </div>
    </>
}




export default UserCenter