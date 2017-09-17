import React, {Component} from 'react';
import {
    Card,
    Affix,
    Button
} from 'antd';
import MarkDown from '../components/markdown';
import Container from '../container/container';
import './articleDetail.css';
import { Http } from '../utils/http';

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentWillMount(){
        Http.post('http://127.0.0.1:7001/surrounddetail/get', '', {id: 5}, (data)=>{
            let md = JSON.parse(data.resp.content);
            console.log(md)

            this.setState({
                text: md
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