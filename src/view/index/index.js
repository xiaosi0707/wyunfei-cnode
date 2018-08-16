/*Created by SmallFour on 2018/8/16*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Row, Col } from 'antd'

class Index extends Component {
    render() {
        let arr = []
        for (let i=0; i<100;i++) {
            arr.push(<li>这是第${i}个li</li>)
        }
        return (
            <Row className='wrap'>
                <Col md={6}>
                <Menu className='index-menu'>
                    <Menu.Item>
                        <Link to='/index/all'>全部</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/index/good'>精华</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/index/ask'>问答</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/index/share'>分享</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/index/job'>招聘</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/index/dev'>客户端测试</Link>
                    </Menu.Item>
                </Menu>
                </Col>
                <Col md={18} className='index-list'>
                    {arr}
                </Col>
            </Row>
        )
    }
}

export default Index