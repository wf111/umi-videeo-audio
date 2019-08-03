import React, { Component } from 'react'
export default class detail extends Component {
    render() {
        let {list} = this.props
        return (
            <div className='detail'>
                {
                    list.map((item,index) => {
                        return <p key={index}>{item.title}</p>
                    })
                }
            </div>
        )
    }
}
