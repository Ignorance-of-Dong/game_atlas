/*
 * @Author: zhangzheng
 * @Date: 2020-11-13 14:31:27
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-13 14:58:31
 * @Descripttion: input组件封装
 */

import React, {ChangeEvent} from "react"
import "./index.scss"

interface inputParams {
    value: string,
    onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void,
    lable: string,
    lableAliginItem?: string,
    type?: string
}

function InputItem(props: inputParams): JSX.Element {
    let {
        value = "",
        onChange,
        lable = "",
        lableAliginItem = "center",
        type = "text"
    } = props
    return <>
        <div className="input-item-container">
            <div className={`input-lable text-${lableAliginItem}`}>
                {lable}
            </div>
            
            <div className="input-wrapper">
                {
                    type == "textarea"
                    ?
                    <textarea value={value} onChange={onChange}/>
                    :
                    <input type={type} value={value} onChange={onChange}/>
                }
            </div>
        </div>
    </>
}

export default InputItem
