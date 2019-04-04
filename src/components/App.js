import React from 'react';
import Accordion from './Accordion';

class App extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Accordion />
                <Accordion />
                <Accordion />

            </div>
         );
    }
}
 
export default App;