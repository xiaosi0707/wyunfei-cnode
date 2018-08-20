/*Created by SmallFour on 2018/8/16*/
import React, { Component } from 'react'
import { Card, Tag, Avatar } from 'antd'
import {Link} from 'react-router-dom'
import TitleTag from '../common/tag'
import RepliesList from './replies-list'
import data from './data'
class Detail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const title = (<div>
            <h1>{data.data.title}</h1>
            <div>
                <TitleTag data={data.data}></TitleTag>
                <Avatar src={data.data.author.avatar_url}></Avatar>
                <Link to={'/user/' + data.data.author.loginname}>{data.data.author.loginname}</Link>
                发表于{data.data.create_at.split('T')[0]}
            </div>
        </div>)
        return (
            <div className='wrap'>
                <Card
                title={title}>
                    <div dangerouslySetInnerHTML={{ __html: data.data.content }}></div>
                </Card>
                <RepliesList
                    replies={data.data.replies}
                    repliesCount={data.data.reply_count}
                ></RepliesList>
            </div>
        )
    }
}

export default Detail