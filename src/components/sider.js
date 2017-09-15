import React from 'react';
import {
    Card,
    Avatar,
    Button,
    Icon
} from 'antd';
import './sider.css';

const sider = (name, desc) => {
    return(
        <Card>
            <div className="sideBox">
                <img src={require('../image/avatar.png')} className='avatar'/>
                <h1>{name}</h1>
                <p>{desc}</p>
                <div className="links">
                    <Icon type="github" style={{fontSize: 18}} />
                    <img src={require('../image/jianshu.png')}  width='18' />
                    <Icon type="mail" style={{fontSize: 18}} />
                </div>
            </div>

        </Card>
    )
};

export default sider;