/*Created by SmallFour on 2018/8/20*/
import React, { Component } from 'react'
import {Card, Avatar, List} from 'antd'
import {Link} from 'react-router-dom'
import data from './data'

class RepliesList extends Component{
    render() {
        let { replies, repliesCount } = this.props
        return (
            <Card
                title={repliesCount + '条回复'}
                type='inner'
            >
                <List
                    className='replies-avatar'
                    itemLayout='vertical'
                    dataSource={replies}
                    renderItem={item => (
                        <List.Item
                            key={item.id}
                            extra={item.ups.length>0?<span>有{item.ups.length}觉得很赞</span>:''}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url} />}
                                description={<p><Link to={'/user/' + item.author.loginname}>{item.author.loginname}</Link><span style={{marginLeft: '5px'}}>发表于：{item.create_at.split('T')[0]}</span></p>}
                            ></List.Item.Meta>
                            <div dangerouslySetInnerHTML={{
                                __html:item.content
                            }}></div>
                        </List.Item>
                    )}
                >
                </List>
            </Card>
        )
    }
}

export default RepliesList