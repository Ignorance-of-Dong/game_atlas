import React, { useState } from "react"
import "./index.scss"
import COS from "cos-js-sdk-v5"; //存储桶
import {Toast, Modal} from "antd-mobile"

interface uploadParams {
    successCallback: Function 
}

export function ImageSelect(onChange, hideHandle,show) {
    return (
        <Modal
            popup
            visible={show}
            onClose={() => {
                hideHandle()
            }}
            animationType="slide-up"
        >
            <span className="bottomImage">
            <span className="img-select">
                <label htmlFor="imp-camera">拍照<input id="imp-camera" type="file" accept="image/*" hidden
                                                     onChange={(e) => {
                                                         Toast.loading('加载中',1)
                                                         hideHandle()
                                                         onChange(e)
                                                     }}/></label>
            </span>
                <span className="img-select">
                <label htmlFor="imp-al">相册<input id="imp-al" type="file" accept="image/*" hidden onChange={(e) => {
                    hideHandle()
                    onChange(e)
                }}/></label>
            </span>
            <span className="img-select-cancel" onClick={()=>{hideHandle()}}>
                取消
            </span>

            </span>
        </Modal>
    )
}

function UploadImage(props: uploadParams) {

    let {successCallback} = props

    let [show, setShow] = useState(false)

    let [text, settext] = useState("")

    let [cos, setCos] = useState<any>(new COS({
        SecretId: "AKIDLT0HI1bmqf8IDrvibja9RSEiuoSquGK7",
        SecretKey: "d4ZnlRpvkIZZ7PP8Zm69vRjlWzzh9LFt"
      }))
    const uploadFile = (e) => {
        Toast.info('开始上传', 1);
        const file = e.target.files[0];
        const date = new Date().getTime(); // 获取上传日期，例：20200108
        alert(44)
        let bucketPath = `tiandao/${date + file.name}`; // Key: 对象键（Object 的名称），对象在存储桶中的唯一标识
        putObject([bucketPath, file]);
        
    }
    const putObject = ([key, file]) => {
        cos.putObject(
          {
            Bucket: "tx-1256006071", // 存储桶名称，必须;Bucket 格式：test-1250000000
            Region: "ap-nanjing", // 存储桶所在地域, 必须
            Key: key /* 必须 */,
            StorageClass: "STANDARD",
            Body: file // 上传文件对象
          },
          err => {
            if (err) {
                alert(JSON.stringify(err))
              Toast.fail(err, 3)
            } else {
                Toast.success("文件上传成功", 3)
                const url = cos.getObjectUrl({
                    Bucket: "tx-1256006071",
                    Region: "ap-nanjing",
                    Key: key
                });
                alert(url)
                successCallback(url)
            }
          }
        );
    }
    const hideHandle = () => {
        setShow(false)
    }
    const showSelect = () => {
        setShow(true)
    }
    return <>
        <div className="upload-image">
            <input type="file" onClick={(e) => {
                e.preventDefault()
                showSelect()
            }}/>
            <i className="iconfont icon-add"></i>
        </div>
        {text}
        {
            ImageSelect(uploadFile, hideHandle, show)
        }
    </>
}

export default UploadImage