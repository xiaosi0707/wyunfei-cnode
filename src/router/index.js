/*Created by SmallFour on 2018/8/16*/
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../view/index/index'
import Book from '../view/book/index'
import About from '../view/about/index'
import Detail from '../view/detail/index'
import User from '../view/user/index'

class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact render={() => (
                    <Redirect to='/index' />
                )}></Route>
                <Route path='/index' component={Index}></Route>
                <Route path='/book' component={Book}></Route>
                <Route path='/user' component={User}></Route>
                <Route path='/detail' component={Detail}></Route>
                <Route path='/about' component={About}></Route>
            </Switch>
        )
    }
}
{/*<Switch>只渲染出第一个与当前访问地址匹配的 <Route> 或 <Redirect>。*/}

export default RouterIndex