import React from 'react';
import "../index.css"
import cashapp from './cashapp.png'

//Donation Links

const Contribute = () => {

    const donatePage = {

  

        content: {
            margin: "auto",
            paddingTop: '32px',
            maxWidth: '70%',
            width: '94%',
            backgroundColor: 'white',
            height: '50%',
            fontSize: '1.5vw',
            display: 'flex',
            verticalAlign: 'middle',
          },

        cashLogo: {
            height: '200px',
            width: '300px',
        },

    
    }



    return (
        <section>

            <h2> Donate </h2>
            <div style={donatePage.content}>
                
                <img src={cashapp} style={donatePage.cashLogo} /> 
                <h3> $HouseOfKanautica</h3>
            </div>

            <p> Donations go to supporting black trans people throughout the state of 
                North Carolina.
            </p>
        </section>

    );
}

export default Contribute;