/*Created by SmallFour on 2018/8/16*/
import React, { Component } from 'react'
import { Avatar, Row, Col } from 'antd'
import data from './data'

class User extends Component {
    render() {
        let { avatar_url, loginname, score, create_at } = data.data
        return (
            <div className='wrap'>
                <Avatar src={avatar_url} className='user-avatar'/>
                <Row className='user-info'>
                    <Col md={8}>
                        用户名：{ loginname }
                    </Col>
                    <Col md={8}>
                        积分：{ score }
                    </Col>
                    <Col md={8}>
                        注册时间：{ create_at.split('T')[0] }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default User