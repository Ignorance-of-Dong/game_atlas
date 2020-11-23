/*
 * @Author: zhangzheng
 * @Date: 2020-11-13 14:28:32
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-23 18:20:49
 * @Descripttion: 图片预览组件封装
 */

import React, { useState } from "react"
import { PhotoProvider, PhotoConsumer } from 'react-photo-view'
import "./index.scss"
interface previewImageParams {
    imgList: Array<any>,
    idEdit?: Boolean,
    deleteCallback?: Function
}
const FullScreenIcon = (props: React.HTMLAttributes<any>) => {
    const [fullscreen, setFullscreen] = useState<boolean>(false);
    React.useEffect(() => {
        document.onfullscreenchange = () => {
            setFullscreen(Boolean(document.fullscreenElement));
        };
    }, []);
    return (
        <svg
            className="PhotoView-PhotoSlider__toolbarIcon"
            fill="white"
            width="44"
            height="44"
            viewBox="0 0 768 768"
            {...props}
        >
            {fullscreen ? (
                <path d="M511.5 256.5h96v63h-159v-159h63v96zM448.5 607.5v-159h159v63h-96v96h-63zM256.5 256.5v-96h63v159h-159v-63h96zM160.5 511.5v-63h159v159h-63v-96h-96z" />
            ) : (
                <path d="M448.5 160.5h159v159h-63v-96h-96v-63zM544.5 544.5v-96h63v159h-159v-63h96zM160.5 319.5v-159h159v63h-96v96h-63zM223.5 448.5v96h96v63h-159v-159h63z" />
            )}
        </svg>
    );
};

function PreviewImage(props: previewImageParams): JSX.Element {
    
    let {imgList, idEdit, deleteCallback} = props

    function toggleFullScreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            const element = document.getElementById('PhotoView_Slider');
            if (element) {
                element.requestFullscreen();
            }
        }
    }
    return <>
        <PhotoProvider
            toolbarRender={({ rotate, onRotate }) => {
                return (
                    <>
                    <svg
                        className="PhotoView-PhotoSlider__toolbarIcon"
                        onClick={() => onRotate(rotate + 90)}
                        width="44"
                        height="44"
                        fill="white"
                        viewBox="0 0 768 768"
                    >
                        <path d="M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z" />
                    </svg>
                    {document.fullscreenEnabled && (
                        <FullScreenIcon onClick={toggleFullScreen} />
                    )}
                    </>
                );
            }}
        >
            {imgList.map((item, index) => (
                 <div key={index}>
                    <PhotoConsumer key={index} src={item}>
                        <div className="upload-image-list" key={index}>
                            <img src={item} alt="加载失败" onClick={(): Boolean => {return false}}/>
                        </div>
                    </PhotoConsumer>
                    {
                        idEdit
                        ?
                        <div className="delete-button" onClick={(e) => {
                            deleteCallback(item)
                        }}>
                            <i className="iconfont icon-delete"></i>删除
                        </div>
                        :
                        <></>
                    }
                </div>
            ))}
        </PhotoProvider>
    </>
}

export default PreviewImage
