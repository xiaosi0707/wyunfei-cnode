/*Created by SmallFour on 2018/8/20*/
import React, { Component } from 'react'
import { List,Avatar } from 'antd'
import { Link } from 'react-router-dom'
import TitleTag from '../common/tag'
import Axios from 'axios'
class IndexList extends Component {
    constructor(props){
        super(props)
        this.state = {
            topicData: []
        }
    }
    render() {
        return <List
            // loading={true}
            dataSource={ this.state.topicData }
            renderItem={item => (<List.Item actions={['回复' + item.reply_count, '访问' + item.visit_count]}>
                <List.Item.Meta
                    avatar={<Avatar src={item.author.avatar_url} />}
                    title={<div><TitleTag data={item}></TitleTag><Link to={"/detail/"+ item.id}>{item.title}</Link></div>}
                    description={(<p>
                        <Link to={"/user/" + item.author.loginname}>{item.author.loginname}发表于：{item.create_at.split('1')[0]}</Link>
                    </p>)}
                ></List.Item.Meta>
            </List.Item>)}
        />
    }
    componentDidMount() {
        Axios.get('https://cnodejs.org/api/v1/topics').then(res => {
            console.log(res)
            let { data } = res.data
            this.setState({
                topicData: data
            })
        })
    }
}

export default IndexList