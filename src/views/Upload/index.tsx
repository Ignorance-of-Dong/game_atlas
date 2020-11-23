/*
 * @Author: zhangzheng
 * @Date: 2020-11-10 15:00:05
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-23 18:23:07
 * @Descripttion: 图集上传
 */

import React, {useEffect, useState} from "react"
import {Header, UploadImage} from "components/index"
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import {InputItem, PreviewImage} from "components/index"
import "./index.scss"
import {UploadAtlas} from "../../api/index"
import query from "../../utils/useQuery"
import {getAtlasDeatil, updateAtlas} from "../../api/index"
import {Modal} from 'antd-mobile'
const alert = Modal.alert;


function Upload(props): JSX.Element {

    let [imgList, setImgList] = useState([])
    let [title, setTitle] = useState("")
	let [introduce, setIntroduce] = useState("")

    let {id} = query()
    useEffect(() => {
        if (id) {
            getDeatil()
        }
    }, [])

    const getDeatil = async () => {
        let detail = await getAtlasDeatil({
            atlasId: id
        })
        setImgList(detail.imgList)
        setTitle(detail.name)
        setIntroduce(detail.explain)
    }
    const back = () => {
        props.history.push("/index")
    }
    const successCallback = (url) => {
        setImgList([
            ...imgList,
            url
        ])
    }

    const deleteCallback = (val) => {
        alert('删除', '你确定要删除吗？未更新数据前，图集不会发生变化', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
                text: '确定',
                onPress: () => {
                    let result = imgList.filter(item => {
                        return item != val
                    });
                    setImgList(result)
                }
            },
        ])
    }
    const handelUpload = async () => {
        if (id) {
            try {
                await updateAtlas({
                    atlasId: id,
                    name: title,
                    explain: introduce,
                    imgList: imgList
                })
                props.history.go(-1)
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                await UploadAtlas({
                    userId: sessionStorage.getItem("userId"),
                    name: title,
                    explain: introduce,
                    imgList: imgList
                })
                props.history.push("/index")
            } catch (error) {
                console.log(error)
            }
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
                <PreviewImage imgList={imgList} idEdit={id ? true : false} deleteCallback={deleteCallback}/>
                <UploadImage successCallback={successCallback}/>
                <div className="update-bottom">
                    <div className="left-text">
                        本次上传图片：{imgList.length}
                    </div>
                    <div className="update-button" onClick={() => {handelUpload()}}>
                        {id ? "更新" : "上传"}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Upload
