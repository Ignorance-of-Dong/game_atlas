import React, { useEffect, useState } from "react"
import "./index.scss"
import COS from "cos-js-sdk-v5";
import {Toast, Modal} from "antd-mobile"
import {getCosKey} from "../../api"
import { decode } from 'js-base64';
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
                <label htmlFor="imp-camera">
                    拍照
                <input id="imp-camera" type="file" accept="image/*" hidden
                onChange={(e) => {
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

    let [cos, setCos] = useState<any>(new COS())

    useEffect(() => {
        getCos()
    },[])

    // 自定义解密
    function decrypt(str) {
        let arr = [];
        for (let index = 0; index < str.length; index++) {
            if (index % 2 == 0) {
                arr.push(str[index])
            }
        }
        return arr.join("")
    }

    // 获取cos临时密钥
    const getCos = async () => {
        let res = await getCosKey()
        let id = decrypt(decode(res.id))
        let key = decrypt(decode(res.key))
        setCos(new COS({
            SecretId: id,
            SecretKey: key
        }))
    }
    const uploadFile = (e) => {
        Toast.info('开始上传', 1);
        const file = e.target.files[0];
        const date = new Date().getTime(); // 获取上传日期，例：20200108
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
              Toast.fail(err, 3)
            } else {
                Toast.success("文件上传成功", 3)
                const url = cos.getObjectUrl({
                    Bucket: "tx-1256006071",
                    Region: "ap-nanjing",
                    Key: key
                });
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
        {ImageSelect(uploadFile, hideHandle, show)}
    </>
}

export default UploadImage