import React from 'react'
import eticheta from '../img/Eticheta.png'

class Eticheta extends React.Component{
    render(){
        const tag = this.props.tag
        return(
            <div className="eticheta">
                <img src={eticheta} alt="simbol" className="eticheta-size"/>
                <p>{tag}</p>
            </div>
        )
    }
}
export default Eticheta