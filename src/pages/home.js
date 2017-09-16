import React, {Component} from 'react';
import List from '../components/list';
import {
    Card,
    Affix,
    Button
} from 'antd';
import Side from '../components/sider';
import './home.css';
import Header from '../components/header';
import 'whatwg-fetch';

const request = require('request');
const lists = [
    {title: '算法', desc: '冒泡排序。。。。。'},
    {title: '算法', desc: '冒泡排序。。。。。'},
    {title: '算法', desc: '冒泡排序。。。。。'},
    {title: '算法', desc: '冒泡排序。。。。。'},
    {title: '算法', desc: '冒泡排序。。。。。'},
    {title: '算法', desc: '冒泡排序。。。。。'},
    {title: '算法', desc: '冒泡排序。。。。。'},
]

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentWillMount(){

    }

    get(){
        fetch('127.0.0.1:7002/species/get', {
            method: 'GET',
        })
    }

    render(){
        return(
            <div className="body">
                <Header />
                <div className='bodyRight'>
                    <Card>
                        { List(lists) }
                    </Card>
                </div>

                <div className="bodyLeft">
                    <Affix>
                        <div className='box'>
                            <Button onClick={() => this.get()}>aa</Button>
                            { Side('Lovae', '杨柳岸，晓风残月') }
                        </div>
                    </Affix>
                </div>

            </div>
        )
    }
}