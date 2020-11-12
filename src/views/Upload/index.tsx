/*
 * @Author: zhangzheng
 * @Date: 2020-11-10 15:00:05
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-12 18:28:27
 * @Descripttion: 图集上传
 */

import React, {useState} from "react"
import {Header, UploadImage} from "components/index"
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import "./index.scss"
const FullScreenIcon = (props: React.HTMLAttributes<any>) => {
    const [fullscreen, setFullscreen] = React.useState<boolean>(false);
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

function Upload(props): JSX.Element {

    let [imgList, setImgList] = useState([
        "https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/1605174295868WechatIMG348.png",
        "https://tx-1256006071.cos.ap-nanjing.myqcloud.com/tiandao/1605174295868WechatIMG348.png"
    ])
    const back = () => {
        props.history.push("/index")
    }
    const successCallback = (url) => {
        setImgList([
            ...imgList,
            url
        ])
    }
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
        <div className="upload-wrapper">
            <Header leftIconName="icon-back" title="上传" leftIconClick={back} rightIconName=""/>
            <div className="upload-container">
                <div className="update-form">
                    <div className="update-input-item">
                        <div className="input-item-lable">
                            标题:
                        </div>
                        <div className="input-item-innner">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="update-input-item">
                        <div className="input-item-lable">
                            介绍:
                        </div>
                        <div className="input-item-innner height-auto">
                            <textarea/>
                        </div>
                    </div>
                </div>
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
                        <PhotoConsumer key={index} src={item}>
                             <div className="upload-image-list" key={index}>
                                <img src={item} alt=""/>
                            </div>
                        </PhotoConsumer>
                    ))}
                </PhotoProvider>
                <UploadImage successCallback={successCallback}/>
                <div className="update-bottom">
                    <div className="left-text">
                        本次上传图片：{imgList.length}
                    </div>
                    <div className="update-button">
                        上传
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Upload
