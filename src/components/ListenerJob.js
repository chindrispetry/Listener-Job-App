import React from 'react'
import ContentApp from './ContentApp'
import HeaderApp from './HeaderApp'
import  'bootstrap/dist/css/bootstrap.min.css'
import FormJob from './FormJob'

let Jobs = [
    {'title':'Junior Development',
    'author':'chindrispetry@yahoo.com',
    'date':'15-01-2022',
    'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
                'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,' +
                'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+ 
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
                'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'tag':'Front-end'},
    {'title':'Senior Development',
    'author':'lamong25@yahoo.com',
    'date':'15-04-2022',
    'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
                'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,' +
                'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+ 
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
                'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'tag':'Back-end'},
    {'title':'Middle Developer',
    'author':'lamong25@gmail.com',
    'date':'25-01-2022',
    'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'+
                'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,' +
                'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+ 
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,'+
                'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    'tag':'Full-stack developer'}
]

let filterJobs = []

class ListenerJob extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            formAdd : false,
            searchAllow : false,
            searchValue : ''
        }
        this.addHandler = this.addHandler.bind(this)
        this.stopSearch = this.stopSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmitFormJob = this.handleSubmitFormJob.bind(this)

        this.formAddJob = <FormJob cancel = {this.cancelHandler} handleSubmit={this.handleSubmitFormJob}/>
    }
    cancelHandler(){
        this.setState({formAdd : !this.state.formAdd})
    }
    handleSubmitFormJob(job){
        let newJob = {
            email : job.email,
            title : job.title,
            description : job.description,
            tag : job.tag,
            date : new Date()
        }
        Jobs.push(newJob);
        console.log(Jobs);
    }
    handleSubmit(value){
        const searchText = JSON.stringify(value)
        if(searchText.length !=0){
            this.setState({searchValue: searchText});
            this.setState({searchAllow:true});
        }
        filterJobs = []
        Jobs.forEach(job => {
            if(job.title.indexOf(this.state.searchValue) != -1){
                filterJobs.push(job)
            }
        })
        
    }
    addHandler(){
        this.setState({formAdd : !this.state.formAdd})
    }
    stopSearch(){
        this.setState({searchAllow:false})
    }
    componentDidMount(){
        window.addEventListener('load',this.stopSearch);
    }
    componentWillUnmount(){
        window.removeEventListener('load',this.stopSearch);
    }
    render(){
        return(
            <div className="content-center">
                <h1 className="title-center">Listener Job</h1>
                <HeaderApp add={this.addHandler} search = {this.handleSubmit}/>
                <ContentApp jobs={this.state.searchAllow ? filterJobs : Jobs} />
                {this.state.formAdd ? this.formAddJob : ''}
            </div>
        )
    }
}
export default ListenerJob