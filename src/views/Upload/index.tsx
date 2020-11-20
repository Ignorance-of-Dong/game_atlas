/*
 * @Author: zhangzheng
 * @Date: 2020-11-10 15:00:05
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-19 18:42:38
 * @Descripttion: 图集上传
 */

import React, {useState} from "react"
import {Header, UploadImage} from "components/index"
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import {InputItem, PreviewImage} from "components/index"
import "./index.scss"
import {UploadAtlas} from "../../api/index"


function Upload(props): JSX.Element {

    let [imgList, setImgList] = useState([])
    let [title, setTitle] = useState("")
	let [introduce, setIntroduce] = useState("")

    const back = () => {
        props.history.push("/index")
    }
    const successCallback = (url) => {
        setImgList([
            ...imgList,
            url
        ])
    }
    const handelUpload = async () => {
        try {
            await UploadAtlas({
                userId: sessionStorage.getItem("userId"),
                name: title,
                explain: introduce,
                imgList: imgList
            })
        } catch (error) {
            
        }
    }
    return <>
        <div className="upload-wrapper">
            <Header leftIconName="icon-back" title="上传" leftIconClick={back} rightIconName=""/>
            <div className="upload-container">
				<InputItem lableAliginItem="left" lable="标题:" value={title} onChange={(e) => {
					setTitle(e.target.value)
				}}/>
				<InputItem type="textarea" lableAliginItem="left" lable="介绍:" value={introduce} onChange={(e) => {
					setIntroduce(e.target.value)
				}}/>
                <PreviewImage imgList={imgList}/>
                <UploadImage successCallback={successCallback}/>
                <div className="update-bottom">
                    <div className="left-text">
                        本次上传图片：{imgList.length}
                    </div>
                    <div className="update-button" onClick={() => {handelUpload()}}>
                        上传
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Upload
