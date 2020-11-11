/*
 * @Author: zhangzheng
 * @Date: 2020-10-30 14:50:28
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-11 16:06:27
 * @Descripttion: 首页展示
 */
import React, { useState } from  "react";
import TabBar from "components/TabBar"
import { List, Slider } from 'antd-mobile';
import Atlas from "components/Atlas"
import Grow from "@material-ui/core/Grow";
import Paper from '@material-ui/core/Paper';
import "./index.scss"
import {Header, Sidebar} from "components/index"
const Item = List.Item;



function Home(props) {
    let [index, setIndex] = useState(0)
    let [open, setOpen] = useState(false)

    const closeSlide = (status) => {
        setOpen(status)
    }
    const leftIconClick = () => {
        setOpen(true)
    }
    return <>
        <div className="home-wrapper">
            <Header leftIconClick={leftIconClick}/>
            <Sidebar open={open} closeCallback={closeSlide} {...props}/>
            <div className="home-container">
            {
                [1,2,3,4].map((item, index) => {
                    return <Grow in={true} {...{ timeout: index * 1000 }} key={index}>
                    <Paper elevation={4}>
                        <Atlas {...props}/>
                    </Paper>
                </Grow>
                })
            }
        </div>
        </div>
    </>
}

export default Home
