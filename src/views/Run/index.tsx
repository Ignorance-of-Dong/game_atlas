import React, { useEffect, useState } from "react"
import {Header} from "components/index"
import "./index.scss"
function Run() {
    let [bottomTwoClass, setBottomTwoClass] = useState("")
    let [bottomOneClass, setBottomOneClass] = useState("")
    let [itemHeight, setItemHeight] = useState("")
    const clickAwayListener = () => {
        setBottomTwoClass("animatio-bottom-two")
        setBottomOneClass("animatio-bottom-one")
    }

    useEffect(() => {
        if (bottomTwoClass == "animatio-bottom-two") {
            setItemHeight("height-200")
        }
    }, ["bottomClass"])
    return <>
        <div className="run-wrapper">
            <Header/>
            <div className="run-container">
            <section className="demo">
    <dl className="list nigiri">
        <dt>Nigiri</dt>
        <dd><a href="javascript:;">Maguro</a></dd>
        <dd><a href="javascript:;">Sake</a></dd>
        <dd><a href="javascript:;">Unagi</a></dd>
        <dd><a href="javascript:;">Buri</a></dd>
        <dd><a href="javascript:;">Suzuki</a></dd>
        <dd><a href="javascript:;">Saba</a></dd>
        <dd><a href="javascript:;">Iwashi</a></dd>
        <dd><a href="javascript:;">Kohada</a></dd>
        <dd><a href="javascript:;">Hirame</a></dd>
        <dd><a href="javascript:;">Tobiwo</a></dd>
    </dl>
    <dl className="list maki">
        <dt>Maki</dt>
        <dd><a href="javascript:;">Ana-kyu</a></dd>
        <dd><a href="javascript:;">Chutoro</a></dd>
        <dd><a href="javascript:;">Kaiware</a></dd>
        <dd><a href="javascript:;">Kampyo</a></dd>
        <dd><a href="javascript:;">Kappa</a></dd>
        <dd><a href="javascript:;">Natto</a></dd>
        <dd><a href="javascript:;">Negitoro</a></dd>
        <dd><a href="javascript:;">Oshinko</a></dd>
        <dd><a href="javascript:;">Otoro</a></dd>
        <dd><a href="javascript:;">Tekka</a></dd>
    </dl>
    <dl className="list sashimi">
        <dt>Sashimi</dt>
        <dd><a href="javascript:;">Maguro</a></dd>
        <dd><a href="javascript:;">Toro</a></dd>
        <dd><a href="javascript:;">Ebi</a></dd>
        <dd><a href="javascript:;">Saba</a></dd>
        <dd><a href="javascript:;">Ika</a></dd>
        <dd><a href="javascript:;">Tako</a></dd>
        <dd><a href="javascript:;">Tomago</a></dd>
        <dd><a href="javascript:;">Kani</a></dd>
        <dd><a href="javascript:;">Katsuo</a></dd>
        <dd><a href="javascript:;">Maguro</a></dd>
    </dl>
    <a href="javascript:;" className="toggle">Toggle</a>
</section>
<div className="warning">
    <div className="message">
        <h1>CSS 3D Not Detected :(</h1>
        <p>I couldn't detect your browser's CSS 3D capabilities. If I'm wrong, please <a href="https://github.com/soulwire/Makisu/issues" target="_blank">file an issue</a>, otherwise, try a <a href="www.google.com/chrome" target="_blank">sexier browser</a></p>
    </div>
</div>
            </div>
        </div>
    </>
}

export default Run