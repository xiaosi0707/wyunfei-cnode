/*Created by SmallFour on 2018/8/16*/
import React, { Component } from 'react'
import { Layout } from 'antd'

class Footer extends Component {
    render() {
        return (
            <Layout.Footer style={{
                textAlign: 'center'
            }}>
                京IPC备123666号 - 积云教育（全栈开发专业） ©版权所有
            </Layout.Footer>
        )
    }
}

export default Footer