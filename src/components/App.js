import React from 'react';
import Accordion from './Accordion';

class App extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Accordion 
                    title={'Title of accord'}> 
                        A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. 
                        Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.
                </Accordion>
                

            </div>
         );
    }
}
 
export default App;