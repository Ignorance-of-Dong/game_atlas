/*
 * @Author: zhangzheng
 * @Date: 2020-11-10 15:00:05
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-10 17:11:52
 * @Descripttion: 图集上传
 */

import React, {useState} from "react"
import {Header, UploadImage} from "components/index"
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import "./index.scss"

function Upload(props): JSX.Element {

    let [imgList, setImgList] = useState([])
    const back = () => {
        props.history.push("/index")
    }
    const successCallback = (url) => {
        setImgList([
            ...imgList,
            url
        ])
    }
    return <>
        <div className="upload-wrapper">
            <Header leftIconName="icon-back" title="上传" leftIconClick={back} rightIconName=""/>
            <div className="upload-container">
                 <PhotoProvider>
                    {imgList.map((item, index) => (
                        <PhotoConsumer key={index} src={item}>
                             <div className="upload-image-list" key={index}>
                                <img src={item} alt=""/>
                            </div>
                        </PhotoConsumer>
                    ))}
                </PhotoProvider>
                <UploadImage successCallback={successCallback}/>
            </div>
        </div>
    </>
}

export default Upload
