import React from 'react';
import Accordion from './Accordion';
import AccordionGroup from './AccordionGroup';

class App extends React.Component {
    
    render() { 
        return ( 
            <div>
                <AccordionGroup enableOpen>
                    <Accordion 
                        
                        title={'AccordOne'}> 
                            Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages. 
                            Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. 
                            Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive strongly who age domestic. 
                    </Accordion>
                    <Accordion 
                        enabled
                        title={'AccordTwo'}> 
                            Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages. 
                            Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. 
                            Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive strongly who age domestic. 
                    </Accordion>
                    <Accordion 
                        enabled
                        title={'AccordThree'}> 
                            Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages. 
                            Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. 
                            Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive strongly who age domestic. 
                    </Accordion>
                </AccordionGroup>
                
                <AccordionGroup>
                    <Accordion 
                        
                        title={'AccordFour'}> 
                            Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages. 
                            Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. 
                            Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive strongly who age domestic. 
                    </Accordion>
                    <Accordion 
                        enabled
                        title={'AccordFive'}> 
                            Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages. 
                            Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. 
                            Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive strongly who age domestic. 
                    </Accordion>
                    <Accordion 
                        enabled
                        title={'AccordSix'}> 
                            Is education residence conveying so so. Suppose shyness say ten behaved morning had. Any unsatiable assistance compliment occasional too reasonably advantages. 
                            Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added. Married he hearing am it totally removal. Remove but suffer wanted his lively length. 
                            Moonlight two applauded conveying end direction old principle but. Are expenses distance weddings perceive strongly who age domestic. 
                    </Accordion>
                </AccordionGroup>

            </div>
         );
    }
}
 
export default App;