import React from 'react'
import TemplateJob from './TemplateJob'

class ContentApp extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const jobs = []
        if(this.props.jobs.length != 0){
            this.props.jobs.forEach((job,index) => {
                    jobs.push(<TemplateJob 
                        key = {index}
                        title = {job.title}
                        author = {job.author}
                        description = {job.description}
                        date = {job.date}
                        tag = {job.tag} 
                    />)
            });
        }else{
            jobs.push(<div className='no-results'>No Results</div>)
        }
        return(
            <div className="content-overflow-y">
                {jobs}
            </div>
        )
    }
}
export default ContentApp