import React, { useState } from "react";
import "./index.scss"
import {deleteAtlasApi} from "../../api"
import {Modal} from 'antd-mobile'
const alert = Modal.alert;

function Atlas(props) {
    let {detail, deleteCallback} = props
    const goDetail = () => {
        props.history.push(`/detail?id=${detail.atlasId}`)
    }

    const deleteAtlas = () => {
        alert('删除', '你确定要删除吗？删除后不可恢复', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
                text: '确定',
                onPress: async () => {
                    await deleteAtlasApi({
                        atlasId: detail.atlasId
                    })
                    deleteCallback()
                }
            },
        ])
    }
    return <>
        <div className="image-container">
            <img src={detail.cover} onClick={() => {goDetail()}}/>
            <div className="detail">
                <div className="atias-name">
                    {detail.atlasName}
                </div>
                <div className="atias-author">
                    {detail.author}
                </div>
                <div className="atias-create-time">
                    {detail.createTime}
                </div>
                <div className="delete-container" onClick={() => {deleteAtlas()}}> <i className="iconfont icon-delete"></i> </div>
            </div>
        </div>
    </>
}

export default Atlas