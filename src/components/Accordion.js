import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Accordion.css';

class Accordion extends React.Component {
    state = {
        isOpen: false
    }
  
    collapse = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        console.log(this.state.isOpen)
    }


    render() { 
        

        return ( 
            <div class="accordion"> 
            <div className="accordion__container" style={{ borderRadius: this.state.isOpen ? '10px 10px 0 0' : '10px 10px 10px 10px' }}>
                <div className="accordion__header" onClick={this.collapse} >

                    <div className="accordion__title">
                        <span>{this.props.title}</span>
                    </div>

                    <div className="accordion__button">
                        <span>{this.state.isOpen ? '-' : '+'}</span>
                    </div>

                </div>
            </div>
               <div className={this.state.isOpen ? `accordion__content` : 'accordion__content--none'}>
                        <span>{this.props.children}</span>
                </div>
                </div>
         );
    }
}
 
export default Accordion;