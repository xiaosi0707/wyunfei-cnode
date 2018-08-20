/*Created by SmallFour on 2018/8/20*/
import React, { Component } from 'react'
import { Tag } from 'antd'
const tab = {
    top: {
        color: '#80bd01',
        text: '置顶'
    },
    good: {
        color: '#80bd01',
        text: '精华'
    },
    job: {
        color: 'gray',
        text: '招聘'
    },
    share: {
        color: 'gray',
        text: '分享'
    },
    ask: {
        color: 'gray',
        text: '问答'
    }
}
function getTab(data) {
    return (
        data.top ? 'top' : data.goods ? 'good' : data.tab
    )
}
class TitleTag extends Component {
    render() {
        let nowTab = tab[getTab(this.props.data)]
        return <Tag color={nowTab.color}>{nowTab.text}</Tag>
    }
}

export default TitleTag