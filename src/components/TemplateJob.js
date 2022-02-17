import React from 'react'
import {Button,Card} from 'react-bootstrap'
import Eticheta from './Eticheta'
import MoreInfo from './MoreInfo'
class TemplateJob extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            viewForm:false
        }
        this.showMoreInfo = this.showMoreInfo.bind(this)
        this.cancelHandler = this.cancelHandler.bind(this)
        this.moreInfo = null
    }
    cancelHandler(){
        console.log('cancel')
        this.setState({viewForm: !this.state.viewForm})
    }
    showMoreInfo(){
        this.setState({viewForm: !this.state.viewForm})
        this.moreInfo = <MoreInfo info = {this.props} click = {this.cancelHandler}/>
    }
    render(){
        const title =this.props.title
        const date =this.props.date
        const description =this.props.description
        const tag =this.props.tag
        return(  
            <div className="template-job">
                <div className='template-inline'>
                    <h4>{title}</h4>
                    <p>{date}</p>
                </div>
                <div className='more-info-description'>
                    {description}
                </div>
                <div className='template-inline'>
                    <Eticheta tag = {tag}/>
                    <button onClick = {this.showMoreInfo} className='btn-show-more-info'>Show more info</button>
                </div>
                {this.state.viewForm ? this.moreInfo : ''}
            </div>
        )
    }
}
export default TemplateJob