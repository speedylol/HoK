import React from 'react';
import "../index.css"
import kanautica from "./kanautica.jpg"

const Home = () => {

    const homePage = {



      content: {
        paddingTop: '16px',
        maxWidth: '70%',
        width: '94%',
        minHeight: '90%',
        backgroundColor: 'white',
        fontSize: '1.6vw',
        display: 'table-cell',
        verticalAlign: 'middle',
        flex: '1 auto',
      },

      picture: {
        backgroundImage: 'url(../../public/kanautica.jpg)',
        position: 'absolute',
        right: '150px',
      },

      img: {
          borderRadius: '50%',
          width: '300px',
          height: '300px',
      },

      quote:{
        display: 'flex',
        justifyContent: 'flex-end',
      },
      
      quoteText:{
        width: '400px',
        fontWeight: 'bold',
        fontSize: '28px',
      }
      
    }


    return (
      <>



      <section>
          <div style={homePage.content}>

          <div style={homePage.quote}>
            <p style={homePage.quoteText}> 
              "Trans people are the ultimate symbol of a rejection of conformity"
              <br/>- Kanautica Zayre Brown
            </p>
           <p>    </p>
            <img src={kanautica } style={homePage.img}/> 
          </div>
          <br></br>

          <h2> Who we are</h2>
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