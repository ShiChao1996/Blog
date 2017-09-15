import React, {Component} from 'react';
import {
    Card
} from 'antd';
import './listItem.css'

const List = (list) => {
    return list.map((line, index) => {
            return (
                <div className="listItem" key={index}>
                    <Card>
                        <h2>{line.title}</h2>
                        <span>{line.desc}</span>
                    </Card>
                </div>
            )
        }
    )
}

export default List;