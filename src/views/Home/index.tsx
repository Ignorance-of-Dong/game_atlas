/*
 * @Author: zhangzheng
 * @Date: 2020-10-30 14:50:28
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-19 18:14:36
 * @Descripttion: 首页展示
 */
import React, { useEffect, useState } from  "react";
import { observer, inject } from 'mobx-react';
import { List, Slider } from 'antd-mobile';
import Atlas from "components/Atlas"
import Grow from "@material-ui/core/Grow";
import Paper from '@material-ui/core/Paper';
import "./index.scss"
import {Header, Sidebar} from "components/index"
import {getAtlasList} from "../../api/index"
const Item = List.Item;



function Home(props) {
    let [index, setIndex] = useState(0)
    let [open, setOpen] = useState(false)
    let [pageNo, setPageNo] = useState(1)
    let [pageSize, setPageSize] = useState(5)
    let [atlasList, setAtlasList] = useState([])
    let {userInfo} = props.Store

    const closeSlide = (status) => {
        setOpen(status)
    }
    const leftIconClick = () => {
        setOpen(true)
    }

    useEffect(() => {
        getAtlas()
    }, [])

    const getAtlas = async () => {
        let params = {
            pageNo,
            pageSize
        }
        let res = await getAtlasList(params)
        setAtlasList(res.atlasList)
    }
    return <>
        <div className="home-wrapper">
            <Header leftIconClick={leftIconClick}/>
            <Sidebar open={open} closeCallback={closeSlide} {...props} userInfo={userInfo}/>
            <div className="home-container">
            {
                atlasList.map((item, index) => {
                    return <Grow in={true} {...{ timeout: index * 1000 }} key={index}>
                    <Paper elevation={4}>
                        <Atlas {...props} detail={item}/>
                    </Paper>
                </Grow>
                })
            }
        </div>
        </div>
    </>
}

export default inject('Store')(observer(Home))
