import React, { Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import {ListenRoute} from "components/index"
// import Wrong from '../views/PgWrong'//404页面
function RouterView(props: any) {
    let routers = props.routers ? props.routers : props.routerList
    // const { route } = this.props;
    const defaultRouter = <Route path="/" component={() => {
        return <Redirect to="/index" key={22}/>
    }} key={22} exact/>
    return (
        <HashRouter>
            <Suspense fallback={<div></div>}>
                <Switch>
                    {
                        routers.map((item, index) => {
                            const Comp = item.component
                            return <Route path={item.path} onEnter={() => {console.log(111)}} exact={item.exact} component={(routers) => {
                                
                                return <>
                                    <Comp route={item.children} {...routers}></Comp>
                                    <ListenRoute {...routers}/>
                                </>
                            }} key={index}/>
                        }).concat(defaultRouter)
                    }
                </Switch>
            </Suspense>
            
        </HashRouter>
    )
}

export default RouterView
