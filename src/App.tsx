import React, { memo } from 'react'
import './App.css'
import routerConfig from './router'
import RouterView from './router/routerView'
const RouterViewPro = memo(RouterView)
function App() {
    return (
        <>
           <RouterViewPro routerList={routerConfig.config} />
        </>
    )
}

export default App