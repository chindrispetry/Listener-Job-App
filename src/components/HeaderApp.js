import React from 'react'
import './css/style.css'

class HeaderApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inputValue:''
        }
        this.updateValue = this.updateValue.bind(this)
    }
    updateValue(e){
        this.setState({inputValue:e.target.value})
    }

    render(){
        return(
            <div className='search-bar'>
                <input type="text" className="search-input"  value={this.state.value} onChange={this.updateValue} placeholder="Search job..."/>
                <button onClick = {this.props.search.bind(this,this.state.inputValue)} className='btn-search'>Search</button>
                <button onClick = {this.props.add} className='btn-add-job'>Add</button> 
            </div>
        )
    }
}
export default HeaderApp