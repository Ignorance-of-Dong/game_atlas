import React, { memo } from 'react'
import './App.css'
import routerConfig from './router'
import RouterView from './router/routerView'
const RouterViewPro = memo(RouterView)
function App() {
    console.log(
    "*\n" +
    "* 　　┏┓　　　┏┓+ +\n" +
    "* 　┏┛┻━━━┛┻┓ + +\n" +
    "* 　┃　　　　　　　┃ 　\n" +
    "* 　┃　　　━　　　┃ ++ + + +\n" +
    "*  ████━████ ┃+\n" +
    "* 　┃　　　　　　　┃ +\n" +
    "* 　┃　　　┻　　　┃\n" +
    "* 　┃　　　　　　　┃ + +\n" +
    "* 　┗━┓　　　┏━┛\n" +
    "* 　　　┃　　　┃　　　\n" +　　　　　　　　
    "* 　　　┃　　　┃ + + + +\n" +
    "* 　　　┃　　　┃\n" +
    "* 　　　┃　　　┃ +  神兽保佑   \n" +
    "* 　　　┃　　　┃    代码无bug　\n" +
    "* 　　　┃　　　┃　　+　　  \n" +　　　　　　　
    "* 　　　┃　 　　┗━━━┓ + + \n" +
    "* 　　　┃ 　　　　　　　┣┓ \n" +
    "* 　　　┃ 　　　　　　　┏┛ \n" +
    "* 　　　┗┓┓┏━┳┓┏┛ + + + +\n" +
    "* 　　　　┃┫┫　┃┫┫       \n" +
    "* 　　　　┗┻┛　┗┻┛+ + + +\n")
    return (
        <>
           <RouterViewPro routerList={routerConfig.config} />
        </>
    )
}

export default App