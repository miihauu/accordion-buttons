import React from 'react';
import Accordion from './Accordion';

class AccordionGroup extends React.Component {
    constructor(props) {
        super(props);
        const openSections = {};
        this.state = { openSections };

        this.props.children.forEach(child => {
            if(child.props.isOpen) {
                openSections[child.props.title] = true;
            }
        });

    }

    onClick = title => {
        const {
            props: { enableOpen },
            state: { openSections },
        } = this;
        

        //If openSections is null or undefined, double negation changes the value to false. Otherwise it will be true.
        const isOpen = !!openSections[title];

        if (enableOpen) {
            this.setState({
                openSections: {
                    ...openSections,
                    [title]: !isOpen
                }
            });
        } else {
            this.setState({
                openSections: {
                    [title]: !isOpen
                }
            });
        }


    };

    render() { 
        const {
            onClick,
            props: { children },
            state: { openSections }
        } = this;

        console.log(this.state)
        return ( 
            <div>
                {children.map(child => (
                    <Accordion
                        isOpen={!!openSections[child.props.title]}
                        title={child.props.title}
                        onClick={onClick}
                    >
                        {child.props.children}
                    
                    </Accordion>
                ))}
            </div>
         );
    }
}
 
export default AccordionGroup;