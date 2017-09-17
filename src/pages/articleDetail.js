import React, {Component} from 'react';
import List from '../components/list';
import {
    Card,
    Affix,
    Button
} from 'antd';
import MarkDown from '../components/markdown';
import Container from '../container/container';
import './articleDetail.css';
import str from './aa';
import { Http } from '../utils/http';

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
        Http.post('http://127.0.0.1:7002/animaldetail/get', '', {id: 6}, (data)=>{
            console.log(data.resp.content)
            let str = data.resp.content.replace("\"", '')
            this.setState({
                text: str
            })
        })
    }

    get(){
        fetch('127.0.0.1:7002/species/get', {
            method: 'GET',
        })
    }

    render(){
        return(
            <div style={{width: '100%'}}>
                <Container child={this.child} />
            </div>

        )
    }

    child = () => {
        return (
            <div className='content'>
                <MarkDown text={this.state.text} />
            </div>
        )
    }
}