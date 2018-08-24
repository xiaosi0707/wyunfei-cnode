/*Created by SmallFour on 2018/8/16*/
import React, { Component } from 'react'
import { Avatar, Row, Col } from 'antd'
import data from './data'
import UserInfo from '../common/user-list'

class User extends Component {
    render() {
        let { avatar_url, loginname, score, create_at, recent_topics, recent_replies } = data.data
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
                <UserInfo
                    loading={false}
                    title='最近创建的话题'
                    data={recent_topics}
                ></UserInfo>
                <UserInfo
                    loading={false}
                    title='最近回复的话题'
                    data={recent_replies}
                ></UserInfo>
            </div>
        )
    }
}

export default User