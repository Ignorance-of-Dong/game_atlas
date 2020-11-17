import React, {useState} from "react"
import {Header} from "components/index"
import {PreviewImage} from "components/index"
import "./index.scss"
function AtlasDetail(props) {

    let [imgList, setImgList] = useState([
        "https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/1605174295868WechatIMG348.png",
        "https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/1605174295868WechatIMG348.png",
        "https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/1605174295868WechatIMG348.png",
        "https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/1605174295868WechatIMG348.png"
    ])

    const leftClick = () => {
        props.history.push("/index")
    }

    return <>
        <div className="detail-wrapper">
            <Header leftIconClick={leftClick} title="湖心小猪" leftIconName="icon-back"/>
            <div className="detail-content">
                <div className="detail-introduce">
                    介绍：
                    <div>
                        江城子 . 程序员之歌江城子 . 程序员之歌江城子 . 程序员之歌江城子 . 程序员之歌江城子 . 程序员之歌
                    </div>
                </div>
                <div className="detail-images">
                    <PreviewImage imgList={imgList}/>
                </div>
            </div>
        </div>
    </>
}
export default AtlasDetail