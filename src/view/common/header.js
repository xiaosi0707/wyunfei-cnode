/*Created by SmallFour on 2018/8/16*/
import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

class Header extends Component {
    render() {
        return <Layout.Header>
            <Row className='wrap'>
                <Col md={6} xs={24}>
                    <h1 id='logo'>cnode</h1>
                </Col>
                <Col md={18} xs={0}/>
            </Row>
        </Layout.Header>
    }
}

export default Header