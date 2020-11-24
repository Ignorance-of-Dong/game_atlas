/*
 * @Author: zhangzheng
 * @Date: 2020-10-30 14:50:28
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-24 14:29:31
 * @Descripttion: 首页展示
 */
import React, { useCallback, useEffect, useState } from  "react";
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
    let [pageSize, setPageSize] = useState(4)
    let [pageTotal, setPageTotal] = useState(0)
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

    const scrollBottom = (e) => {
        let root: any = document.getElementsByClassName("home-container")[0]
        let scrollTop = root.scrollTop
        let height = root.offsetHeight
        let scrollHeight = root.scrollHeight

        if (scrollHeight - height == scrollTop) {
            if (pageNo < pageTotal) {
                getAtlas(pageNo + 1)
            }
            console.log("到底了")
        }
    }

    const getAtlas = useCallback(async (page?) => {
        let num
        if (page) {
            num = page
        } else {
            num = pageNo
        }
        let params = {
            pageNo: num,
            pageSize
        }
        let res = await getAtlasList(params)
        setAtlasList([
            ...atlasList,
            ...res.atlasList
        ])
        setPageNo(res.pageNo)
        setPageTotal(res.pageTotal)
    }, [atlasList])
    return <>
        <div className="home-wrapper">
            <Header leftIconClick={leftIconClick} rightIconName=""/>
            <Sidebar open={open} closeCallback={closeSlide} {...props} userInfo={userInfo}/>
            <div className="home-container" onScroll={(e) => {scrollBottom(e)}}>
            {
                atlasList.map((item, index) => {
                    return <Grow in={true} {...{ timeout: 2 * 1000 }} key={index}>
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
