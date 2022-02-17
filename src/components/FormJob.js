import React from 'react'
import './css/style.css'

const err = 'Please complete all fields'
const done = 'Done'

let msg = '' ;
let textColor = '' ;

class FormJob extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isDone : false,
            sendAllow: false,
            email : '',
            title : '',
            description : '',
            tag : '',
            time : ''
        }

        this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
        this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
        this.handleOnChangeDescription = this.handleOnChangeDescription.bind(this);
        this.handleOnChangeTag = this.handleOnChangeTag.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChangeEmail(e){
        this.setState({email : e.target.value})
    }
    handleOnChangeTitle(e){
        this.setState({title : e.target.value})
    }
    handleOnChangeDescription(e){
        this.setState({description : e.target.value})
    }
    handleOnChangeTag(e){
        this.setState({tag : e.target.value})
    }

    messageForUI = ()=>{
        msg = this.state.isDone ? done : err
        textColor = this.state.isDone ? 'message-field-done' : 'message-field-err'
    }

    handleValidation(){
        if( this.state.email.length != 0 &&
            this.state.title.length != 0 &&
            this.state.description.length != 0 ){
                this.setState({isDone:true},this.messageForUI);
        }else{
            this.setState({isDone:false},this.messageForUI);
        }
    }
    handleOnSubmit(e){
        if(this.state.isDone){
            this.props.handleSubmit.bind(this,this.state)
        }else{
            e.preventDefault()
        }
    }
    render(){
        return(
            <div className="form-add-job-background">
                <form className='form-job' onSubmit={this.handleOnSubmit}>
                    <div className={textColor}>
                        {msg}
                    </div>
                    <label>E-mail</label>
                    <input type="email" onChange={this.handleOnChangeEmail}/>
                    <label>Job Title</label>
                    <input type="text" onChange={this.handleOnChangeTitle}/>
                    <label>Description</label>
                    <textarea onChange={this.handleOnChangeDescription}></textarea>
                    <label>Tag</label>
                    <select onChange={this.handleOnChangeTag}>
                        <option>Back-end</option>
                        <option>Front-end</option>
                        <option>Full-Stack</option>
                        <option>Database</option>
                    </select>
                    <div className='form-add-job-btn'>
                        <button onClick = {this.props.cancel} className='btn-Cancel-job'>Cancel</button>
                        <button className='btn-add-job' onClick={this.handleValidation}>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default FormJob