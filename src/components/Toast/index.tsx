/*
 * @Author: zhangzheng
 * @Date: 2020-11-11 15:25:00
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-13 15:10:21
 * @Descripttion: loding加载
 */

import React from 'react'
import ReactDOM from 'react-dom';
import './index.scss'
function Toast(props: any): JSX.Element {
    return (
        <>
            <div className="over-toast">{props.value}</div>
        </>
    )
}

function CToast(value: string, time: number): void {
    let div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Toast value={value} />, div)
    setTimeout(() => {
        document.body.removeChild(div);
    }, time)
}

function LodingToast(props: any): JSX.Element {
    return <>
        <div className="loding-wrap">
            <div className="loding-mask"></div>
            <div className="loading-contant">
                <div className="loding-pic">
                    <img src="http://music.fishfairy.cn/images/c88167d676e96054a79d48622a1c1d10.png" alt="" />
                </div>
            </div>
        </div>
    </>
}

export class ToastLoding {

    dom = null

    loading(): void {
        this.dom = document.createElement('div');
        document.body.appendChild(this.dom);
        ReactDOM.render(<LodingToast />, this.dom)
    }

    hide(): void {
        document.body.removeChild(this.dom);
    }
}

export default CToast