import React from 'react';
import "../index.css"

//Donation Links

const Contribute = () => {

    const donatePage = {

  

        content: {
            margin: "auto",
            paddingTop: '32px',
            maxWidth: '70%',
            width: '94%',
            backgroundColor: 'aqua',
            height: '50%',
            fontSize: '1.5vw',
            display: 'table-cell',
            verticalAlign: 'middle',
          },
    
    }



    return (
        <section>
            <div style={donatePage.content}>
                <h2> Donate </h2>
                <p> Testing form here</p>
                <ul>
                    <li> Test</li>
                    <li> Test2</li>
                </ul>
            </div>
        </section>

    );
}

export default Contribute;