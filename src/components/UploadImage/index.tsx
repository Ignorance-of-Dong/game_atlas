/*
 * @Author: zhangzheng
 * @Date: 2020-11-10 15:32:02
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-25 10:27:19
 * @Descripttion: 上传图片
 */

import React, { useEffect, useState } from "react"
import "./index.scss"
import COS from "cos-js-sdk-v5";
import {Toast, Modal} from "antd-mobile"
import {getCosKey} from "../../api"
import { decode } from 'js-base64';
import { ImagePicker } from 'antd-mobile';
interface uploadParams {
    successCallback: Function,
    className?: string
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

    let {successCallback, className} = props

    let [show, setShow] = useState(false)

    let [text, settext] = useState("")

    let [cos, setCos] = useState<any>(new COS())

    let [files, setfiles] = useState([])

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
    const uploadFile = (files) => {
        let userId = sessionStorage.getItem("userId")
        if (!userId) {
            Toast.info('读取用户失败', 1);
            return
        }
        Toast.info('开始上传', 1);
        // const file = e.target.files[0];
        for (let index = 0; index < files.length; index++) {
            let time = new Date().getTime();
            let bucketPath = `tiandao/${userId}/${time + files[index].file.name}`;
            putObject([bucketPath, files[index].file]);
        }
        // const date = new Date().getTime(); // 获取上传日期，例：20200108
        // let bucketPath = `tiandao/${userId}/${date + file.name}`; // Key: 对象键（Object 的名称），对象在存储桶中的唯一标识
        
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
                Toast.success("文件上传成功", 1)
                const url = cos.getObjectUrl({
                    Bucket: "tx-1256006071",
                    Region: "ap-nanjing",
                    Key: key
                });
                let resultUrl = url.split("?")[0]
                successCallback(resultUrl)
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

    const onChange = (files, type, index) => {
        console.log(files)
        uploadFile(files)
    }
    return <>
        <div className={`upload-image ${className}`}>
            {/* <input type="file" onClick={(e) => {
                e.preventDefault()
                showSelect()
            }}/> */}
             <ImagePicker
                length="6"
                files={files}
                onChange={onChange}
                multiple
                disableDelete
            />
            <i className="iconfont icon-add"></i>
        </div>
        {text}
        {/* {ImageSelect(uploadFile, hideHandle, show)} */}


    </>
}

export default UploadImage