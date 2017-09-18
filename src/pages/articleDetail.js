import React, {Component} from 'react';
import {
    Card,
    Affix,
    Button
} from 'antd';
import MarkDown from '../components/markdown';
import TopBar from '../components/topBar';
import './articleDetail.css';
import Http from '../utils/http';

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentWillMount(){
        console.log(Http)
        Http.Post('http://127.0.0.1:7001/animaldetail/get', {id: 1}, (data)=>{
            //let md = JSON.parse(data.resp.content);
            let md = data.resp.content
            console.log(md)

            this.setState({
                text: md
            })
        }, (err) => console.log(err))
    }

    render(){
        return(
            <div style={{width: '100%'}}>
                <TopBar type='dark'/>
                <div className='content'>
                    <MarkDown text={this.state.text} />
                </div>
                <div className='footer'>
                    Powered by Lovae | 2017
                </div>
            </div>

        )
    }
}