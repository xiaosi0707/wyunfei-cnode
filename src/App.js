import React, { Component } from 'react';
import MyHeader from './view/common/header'
import MyFooter from './view/common/footer'
import './view/index.css'
import RouterIndex from './router/index'
class App extends Component {
  render() {
    return (
        <div className='pageWrap'>
            <MyHeader></MyHeader>
            <main className='main'>
                <RouterIndex></RouterIndex>
            </main>
            <MyFooter></MyFooter>
        </div>
    );
  }
}

export default App;
