/*
 * @Author: zhangzheng
 * @Date: 2020-11-02 18:12:24
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-11-20 18:20:09
 * @Descripttion: 用户中心
 */
import React, {useEffect, useState} from "react"
import {Header, UploadImage} from "components/index"
import {getLoginUserInfo, updateInfoApi} from "../../api"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import DialogContentText from '@material-ui/core/DialogContentText';

const Transition = React.forwardRef(function Transition(
        props: TransitionProps & { children?: React.ReactElement<any, any> },
        ref: React.Ref<unknown>,
    ) {
    return <Slide direction="up" ref={ref} {...props} />;
});

import "./index.scss"

function UserCenter(props) {

    let [info, setInfo] = useState<any>({})
    const [open, setOpen] = useState(false);
    const [openCover, setOpenCover] = useState(false);
    let [name, setName] = useState("")
    let [sign, setSign] = useState("")
    let [brand, setBrand] = useState("")
    let [cover, setCover] = useState("")
    let [temporaryUrl, setTemporary] = useState("")

    const leftClick = () => {
        props.history.push("/index")
    }
    useEffect(() => {
        getUserInfo()
    }, [])
    const getUserInfo = async () => {
        let info = await getLoginUserInfo({
            userId: sessionStorage.getItem("userId")
        });
        setName(info.name)
        setSign(info.sign)
        setBrand(info.brand)
        setCover(info.author)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const successCallback = (url) => {
        setOpenCover(true)
        setTemporary(url)
    }

    const updateCover = async () => {
        await updateInfoApi({
            author: temporaryUrl,
            userId: sessionStorage.getItem("userId")
        })
        getUserInfo()
        setOpenCover(false)
    }

    const updateInfo = async () => {
        await updateInfoApi({
            name,
            sign,
            brand,
            userId: sessionStorage.getItem("userId")
        })
        getUserInfo()
        setOpen(false)
    }

    return <>
        <div className="user-wrapper">
            <Header leftIconClick={leftClick} title="用户中心" leftIconName="icon-back" rightIconName=""/>
            <div className="user-container">
                <div className="user-title">
                    <div className="title-mask">
                        <div className="user-edit" onClick={handleClickOpen}>
                            <i className="iconfont icon-edit"></i>
                        </div>
                        <div className="user-avator">
                            <img src={cover} alt=""/>
                            <div className="update-cream">
                                <UploadImage className="update" successCallback={successCallback}/>
                                <i className="iconfont icon-cream"></i>
                            </div>
                        </div>
                        <div className="user-name">
                            {name}
                        </div>
                        <div className="user-sign">
                            {sign}
                        </div>
                        <div className="user-brand">
                            {brand}
                        </div>
                    </div>
                </div>
                <div className="user-features">
                    <div className="features-item">
                        关于我们
                    </div>
                    <div className="features-item">
                        {sessionStorage.getItem("userId")}
                    </div>
                </div>
            </div>
        </div>
        <Dialog TransitionComponent={Transition} disableBackdropClick={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">编辑</DialogTitle>
            <DialogContent>
                <TextField label="昵称" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <TextField label="说明" value={sign} onChange={(e) => {setSign(e.target.value)}}/>
                <TextField label="铭牌" value={brand} onChange={(e) => {setBrand(e.target.value)}}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">取消</Button>
                <Button onClick={updateInfo} color="primary">提交</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={openCover}>
            <DialogTitle id="alert-dialog-title">提示</DialogTitle>
            <DialogContent>
                <DialogContentText>确定要修改头像吗？</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {setOpenCover(false)}} color="primary">取消</Button>
                <Button onClick={() => {updateCover()}} color="primary" autoFocus>确定</Button>
            </DialogActions>
        </Dialog>
    </>
}




export default UserCenter