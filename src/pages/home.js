import React from 'react';
import "../index.css"

const Home = () => {

    const homePage = {



      content: {
        paddingTop: '32px',
        maxWidth: '70%',
        width: '94%',
        backgroundColor: 'white',
        fontSize: '1.6vw',
        display: 'table-cell',
        verticalAlign: 'middle',
        flex: '1 auto',
      },

      
      
    }


    return (
      <section>
        <div style={homePage.content}>
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

    );
}

export default Home;