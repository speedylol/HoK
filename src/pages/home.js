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
        width: '640px',
        position: 'relative',
        margin: '0 auto',
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

      <div className="home-banner" id="about"> </div>

      <br/> <br/> 
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

      <br></br>
      <section>

      <br id="serv"/>
      <div style={homePage.content}>
        <h2 align='center'> Services Provided</h2>
        <br/><br/>
        <ul class="list-unstyled list pl-5">
          <li class="d-flex flex-column">
            <h3 class="p-2">Burial Expenses For Murdered Trans Individuals </h3>
            <h5 class="p-2">
            Fatal transphobic violence has been on the rise for decades. 
            Often times, when trans people are murdered their loved ones 
            struggle to afford large funeral costs. House of Kanautica helps support
            the cost of burial or cremation expenses for transgender community members who have passed.
            </h5>
          </li>

          <li>
            <h3 class="p-2">Advocacy To Advance Medically Necessary Care For Trans Indivduals</h3>
            <h5 class="p-2">
            Throughout all walks of life, but especially in prisons, jails, and detention centers, trans people are denied
            autonomy over their bodies. House of Kanautica recognizes gender-affirming healthcare as a medical necessity, and 
            acts an advocate for trans folks who struggle to obtain this care.
            </h5>
          </li>

          <li class="d-flex flex-column">
            <h3 class="p-2">Housing Support</h3>
            <h5 class="p-2">
            Trans people who have been formerly incarcerated have extremely unique housing needs that often cannot be accomodated in
            shelters and traditional housing nonprofits. House of Kanautica provides temporary financial support for trans individuals struggling with
            housing as well as support with finding more permanent housing solutions.
            </h5>

          </li>

          <li class="d-flex flex-column">
            <h3 class="p-2">Support During and After Incarceration</h3>
            <h5 class="p-2">
            Prisons and jails are used as a tool to disappear Black trans people. Especially while serving their sentence, and 
            even after they are released, Black trans people are isolated from society and unsupported by the greater community. House 
            of Kanautica provides long-term advocacy, support, and community to incarcerated Black trans individuals.
            </h5>

          </li>
        </ul>
      </div>


      <div class="card shadow mb-4" align='center'>
                <div class="card-body p-5">
                    
                    <h4 class="mb-4">Services Provided</h4>
                    <ul class="list-unstyled list pl-5">

                        <li class="mb-3 d-flex align-items-center">
                          <i class="fa fa-flask mr-3 text-primary"></i>
                              <h5>

                              </h5>

                          </li>

                        <li class="mb-3 d-flex align-items-center">
                          <i class="fa fa-hourglass-end mr-3 text-primary"></i>Consectetur adipisicing elit.

                        </li>

                        <li class="mb-3 d-flex align-items-center"><i class="fa fa-inbox mr-3 text-primary"></i>Sed do eiusmod tempor incididunt.</li>
                        <li class="mb-3 d-flex align-items-center"><i class="fa fa-rocket mr-3 text-primary"></i>Ut labore et dolore magna aliqua. </li>
                        <li class="mb-3 d-flex align-items-center"><i class="fa fa-trophy mr-3 text-primary"></i>Exercitation ullamco laboris nisi.</li>
                    </ul>
                </div>
            </div>



      </section>

      </>



    );
}

export default Home;