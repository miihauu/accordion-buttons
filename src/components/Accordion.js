import React from 'react';
import '../css/Accordion.css';

class Accordion extends React.Component {
  
    collapse = () => {
        this.props.onClick(this.props.title);
    }


    render() { 

        

        return ( 
            <div className="accordion"> 
            <div className="accordion__container" style={{ borderRadius: this.props.isOpen ? '10px 10px 0 0' : '10px 10px 10px 10px' }}>
                <div className="accordion__header" onClick={this.collapse} >

                    <div className="accordion__title">
                        <span>{this.props.title}</span>
                    </div>

                    <div className="accordion__button">
                        <span>{this.props.isOpen ? '-' : '+'}</span>
                    </div>

                </div>
            </div>
               <div className={this.props.isOpen ? `accordion__content` : 'accordion__content--none'}>
                        <span>{this.props.children}</span>
                </div>
                </div>
         );
    }
}
 
export default Accordion;