import React, { Component } from 'react'
import {Icon} from 'antd'
import Table from './components/table'
import Con from './components/con1'
import Detail from './components/detail'
import Axios from 'axios';
export default class index extends Component {
    state = {
        index:0,
        list:[],
        tablist:['介绍','视频','音频']
    }
    render() {
        let {list,index,tablist} = this.state;
        return (
            <div className='wrapper'>
                <header>
                    <span>←</span>
                    <span>把冷漠变成爱-儿童诗歌舞蹈</span>
                    <span> </span>
                </header>
                <video src="https://vd3.bdstatic.com/mda-jfmkwm9biipr6p32/sc/mda-jfmkwm9biipr6p32.mp4?auth_key=1564108917-0-0-4b3daab444e2bec652ce2584c083c36b&bcevod_channel=searchbox_feed&pd=bjh&abtest=all" controls="controls">
                    您的浏览器不支持 video 标签。
                </video>
                <ul>
                    <li><Icon type="star" />收藏</li>
                    <li><Icon type="arrow-down" />下载</li>
                    <li><Icon type="branches" />分享</li>
                    <li><Icon type="import" />笔记</li>
                </ul>
                <Table list={tablist} change={this.change}/>
                {
                    index === 0?<Detail list={list}/>:<Con list={list} index={index}/>
                }
            </div>
        )
    }
    componentDidMount(){
        Axios.get('http://api.cnfuyin.net/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2').then(res=>{
            console.log(res)
            this.setState({
                list:res.data.urls
            })
        })
    }
    change= (index) =>{
        this.setState({
            index
        })
    }
}
