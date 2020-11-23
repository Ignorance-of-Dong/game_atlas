import React, {useEffect, useState} from "react"
import {Header} from "components/index"
import {PreviewImage} from "components/index"
import query from '../../utils/useQuery'
import {getAtlasDeatil} from "../../api/index"
import "./index.scss"
function AtlasDetail(props) {

    let {id} = query()
    let [imgList, setImgList] = useState([
        "https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/1605174295868WechatIMG348.png",
        "https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/1605174295868WechatIMG348.png",
        "https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/1605174295868WechatIMG348.png",
        "https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/1605174295868WechatIMG348.png"
    ])

    let [detail, setDeatil] = useState<any>(null)

    const leftClick = () => {
        props.history.go(-1)
    }

    useEffect(() => {
        getDeatil()
    }, [])

    const getDeatil = async () => {
        let detail = await getAtlasDeatil({
            atlasId: id
        })
        setDeatil(detail)
    }

    const editAstal = () => {
        props.history.push(`/upload?id=${detail.atlasId}`)
    }

    return <>
        <div className="detail-wrapper">
            <Header leftIconClick={leftClick} title={detail && detail.name} leftIconName="icon-back" rightIconName="icon-edit" rightIconClick={editAstal}/>
            <div className="detail-content">
                <div className="detail-introduce">
                    介绍：
                    <div>
                    {detail && detail.explain}
                    </div>
                </div>
                <div className="detail-images">
                    <PreviewImage imgList={detail ? detail.imgList : []}/>
                </div>
            </div>
        </div>
    </>
}
export default AtlasDetail