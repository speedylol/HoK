import React from 'react';
import "../index.css"
import kanautica from "./kanautica.jpg"

const Home = () => {

    const homePage = {



      content: {
        paddingTop: '16px',
       
      
        minHeight: '90%',
        backgroundColor: 'white',
        fontSize: '1.6vw',
        display: 'block',
        verticalAlign: 'middle',
        flex: '1 auto',
      },

      picture: {
        backgroundImage: 'url(../../public/kanautica.jpg)',
        
        
      },

      img: {
          borderRadius: '50%',
          width: '300px',
          height: '300px',
      },

      quote:{
        display: 'flex',
        verticalAlign: 'middle',
      },
      
      quoteText:{
        width: '400px',
        fontWeight: 'bold',
        fontSize: '28px',
      },

      
    }


    return (
      <>

      <div className="home-banner"> </div>

      <section >
          <div style={homePage.content}>

          <div style={homePage.quote} >
            <p style={homePage.quoteText}> 
              "Trans people are the ultimate symbol of a rejection of conformity"
              <br/>- Kanautica Zayre Brown
            </p>
           <p>    </p>
            <img src={kanautica } style={homePage.img}/> 
          </div>
          <br></br>

          <h2 align='center'> Who we are</h2>
          <p>
            House of Kanautica (HofK), a 501(c)(3) Domestic Nonprofit Corporation,
            is dedicated to providing Trans and Non-Binary folks bail fund, safe spaces
            and equality while incarcerated, action to advance access to adequate medical
            care, and final life expenses at the hands of violence.

            All programs of House of Kanautica (HofK) includes;
            empowering public education of Trans and Non-Binary folks, an academically and
            unrelenting understanding of modern milestones, along with interconnected achievements.
          </p>
        </div>

      </section>

      </>



    );
}

export default Home;