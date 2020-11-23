/*
 * @Author: zhangzheng
 * @Date: 2020-10-30 14:50:28
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-23 17:33:00
 * @Descripttion: 自己上传图片
 */
import React, { useEffect, useState } from  "react";
import { observer, inject } from 'mobx-react';
import { List, Slider } from 'antd-mobile';
import Atlas from "components/Atlas"
import Grow from "@material-ui/core/Grow";
import Paper from '@material-ui/core/Paper';
import "../Home/index.scss"
import {Header, Sidebar} from "components/index"
import {getPrivateList} from "../../api/index"
const Item = List.Item;



function Home(props) {
    let [index, setIndex] = useState(0)
    let [open, setOpen] = useState(false)
    let [pageNo, setPageNo] = useState(1)
    let [pageSize, setPageSize] = useState(4)
    let [pageTotal, setPageTotal] = useState(0)
    let [atlasList, setAtlasList] = useState([])
    let {userInfo} = props.Store

   
    const leftIconClick = () => {
        props.history.push("/index")
    }

    useEffect(() => {
        getAtlas()
    }, [])

    const deleteCallback = async () => {
        let params = {
            pageNo: 1,
            pageSize
        }
        let res = await getPrivateList(params)
        setAtlasList(res.atlasList)
        setPageNo(res.pageNo)
        setPageTotal(res.pageTotal)
    }
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

    const getAtlas = async (page?) => {
        let num
        if (page) {
            num = page
        } else {
            num = pageNo
        }
        let params = {
            userId: sessionStorage.getItem("userId"),
            pageNo: num,
            pageSize
        }
        let res = await getPrivateList(params)
        setAtlasList([
            ...atlasList,
            ...res.atlasList
        ])
        setPageNo(res.pageNo)
        setPageTotal(res.pageTotal)
    }
    return <>
        <div className="home-wrapper">
            <Header leftIconClick={leftIconClick} title="private" leftIconName="icon-back" rightIconName=""/>
            <div className="home-container" onScroll={(e) => {scrollBottom(e)}}>
            {
                atlasList.map((item, index) => {
                    return <Grow in={true} {...{ timeout: 2 * 1000 }} key={index}>
                    <Paper elevation={4}>
                        <Atlas {...props} detail={item} deleteCallback={deleteCallback}/>
                    </Paper>
                </Grow>
                })
            }
            </div>
        </div>
    </>
}

export default inject('Store')(observer(Home))
