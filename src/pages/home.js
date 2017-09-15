import React, {Component} from 'react';
import List from '../components/list';
import {
    Card,
    Affix
} from 'antd';
import './home.css';

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

    render(){
        return(
            <div className="body">
                <div className="bodyLeft">
                    <Affix>
                        <div className='box'></div>
                    </Affix>
                </div>

                <div className='bodyRight'>
                    <Card>
                        { List(lists) }
                    </Card>
                </div>

            </div>
        )
    }
}