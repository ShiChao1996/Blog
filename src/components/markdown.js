import React, { Component } from 'react';
import MarkDown from 'react-markdown';
import './markdown2.css'

export default class MyMarkDown extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    componentWillMount(){
        if(this.props.text){
            this.setState({
                text: this.props.text
            })
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            text: nextProps.text
        })
    }

    render(){
        return(
            <MarkDown className='markdown-body' source={this.state.text} />
        )
    }
}