/*Created by SmallFour on 2018/8/20*/
import React, { Component } from 'react'
import { Card, List, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import IndexList from "../index/list";

class UserInfo extends Component{
    render() {
        let {title, data} = this.props
        return (
            <Card
                title={title}
                type='inner'
            >
                <List
                    className='user-list'
                    dataSource={data}
                    renderItem = {(item) => (
                        <List.Item key={item.id}>
                            <Avatar src={item.author.avatar_url} />
                            <Link to={'/user/' + item.author.loginname}>{item.author.loginname}</Link>
                            <h4><Link to={'/detail/' + item.id}>{item.title}</Link></h4>
                            <time>最后回复：{item.last_reply_at.split('T')[0]}</time>
                        </List.Item>
                    )}
                ></List>
            </Card>
        )
    }
}

export default UserInfo