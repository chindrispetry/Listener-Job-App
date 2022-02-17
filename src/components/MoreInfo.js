import React from 'react'
import './css/style.css'
import Eticheta from './Eticheta'

class MoreInfo extends React.Component{
    render(){
        return(
            <div className='more-info'>
                <div className="template-header">
                    <h4>{this.props.info.title}</h4>
                    <p>{this.props.info.date}</p>
                </div>
                <h6>{this.props.info.author}</h6>
                <div className='more-info-description'>
                    {this.props.info.description}
                </div>
                <div className="more-info-bottom">
                        <Eticheta tag = {this.props.info.tag}/>
                        <button onClick = {this.props.click} className="btn-Cancel-job">Cancel</button>
                </div>
            </div>
        )
    }
}
export default MoreInfo