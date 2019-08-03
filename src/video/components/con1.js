import React, { Component } from 'react'

class Con extends Component {
    
    render() {
        let {list} = this.props;
        return (
            <ol>
                {list.map((item,index)=>{
                    return <li key={index}>{item.sort_title}</li>
                })}
            </ol>
        )
    }
}

export default Con
