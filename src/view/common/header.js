/*Created by SmallFour on 2018/8/16*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Row, Col, Divider, Menu, Icon, Dropdown, Button } from 'antd'
import Nav from '../common/nav'

class Header extends Component {
    render() {
        return <Layout.Header>
            <Row className='wrap'>
                <Col md={6} xs={24}>
                    <h1 id='logo'>cnode</h1>
                </Col>
                <Col md={18} xs={0}>
                    <Divider type='vertical' className='header-divider'></Divider>
                    <Nav id='nav' mode='horizontal'></Nav>
                </Col>
                <Col md={0} xs={24} className='xs-nav'>
                    <Dropdown overlay={
                        <Nav mode='vertical' id='xs-nav'/>
                    }
                              trigger={['click', 'touchend']}
                    >
                        <Button><Icon type='bars'></Icon></Button>
                    </Dropdown>
                </Col>
            </Row>
        </Layout.Header>
    }
}

export default Header