import React, { Component } from 'react';
class Table extends Component {
    state ={
        index:0,
        list:[]
    }
    render() {
        let {index} = this.state;
        let {list} = this.props;
        return (
            <div className='tabbox'>
                <ul>
                    {
                        list.map((item,ind)=>{
                            return <li 
                            onClick = {()=>this.oClick(ind)}
                            className = {index === ind ? "active":null}
                            key={ind}>
                            {item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
    
    oClick = (index) =>{
        this.props.change(index)
        this.setState({
            index
        })
    }
}

export default Table;