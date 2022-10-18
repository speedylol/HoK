import React from 'react';


import  article1  from './article1.png';
import  article2  from './kanautica.jpg'
import  article3 from './article3.jpg'
import article4 from './kanautica2.jpg'
import "../components/news.css"

const News = () => {

    return (
        <>



        <div className='services_section'>
            <h2> News </h2>


        <div className='news_post'>
            <div className='article_img'>
                <img src={article1}/>
            </div>

            <div className='article_info'> 
                <div className='article_date'> 
                    <span> 10/15/2022 </span>
                    <span> October </span>
                </div>

                <h1 className='article_title'> Kanautica Zayre-Brown's Lawsuit Against State Prison Proceeds</h1>
                <p className='article_text'>
                     House of Kanautica founder Kanautica Zayre-Brown was held in a mens prison for years. This article highlights her fight to be moved to a women's prison.
                </p>

                <a href='https://amp.charlotteobserver.com/news/state/north-carolina/article264798014.html' className='article_link'> Read More</a>
            </div>
        </div>

        <div className='news_post'>
            <div className='article_img'>
                <img src={article2} style={{ minHeight: '25rem', maxHeight: '25rem' }}/>
            </div>

            <div className='article_info'> 
                <div className='article_date'> 
                    <span> 10/15/2022 </span>
                    <span> October </span>
                </div>

                <h1 className='article_title'> Kanautica Fights For Gender Affirming Care </h1>
                <p className='article_text'>
                     The state is being held accountable for denying gender affirming care to Kanautica Zayre-Brown. House of Kanautica stands with Kanautica as she fights for gender affirming care while incarcerated.  
                </p>

                <a href='https://ncpolicywatch.com/2021/11/05/transgender-prisoner-fighting-for-gender-affirming-surgery/' className='article_link'> Read More</a>
            </div>
        </div>

        <div className='news_post'>
            <div className='article_img'>
                <img src={article3}  style={{ minHeight: '20rem', maxHeight: '20rem' }}/>
            </div>

            <div className='article_info' >
                <div className='article_date'> 
                    <span> 10/15/2022 </span>
                    <span> October </span>
                </div>

                <h1 className='article_title'> House of Kanautica and Other Groups Commit $10,000 To Black Trans Community </h1>
                <p className='article_text'>
                     Following the brutal murder of two black trans women, House of Kanautica and other groups local to Charlotte, NC committed $10,000 to provide housing and support for housing insecure black trans folk. 
                </p>

                <a href='https://www.wbtv.com/2021/04/21/lgbtq-groups-commit-support-relief-black-transgender-community/?outputType=amp' className='article_link'> Read More</a>
            </div>

        </div>
        

        <div className='news_post'>
            <div className='article_img'>
                <img src={article4}/>
            </div>

            <div className='article_info' style={{ lineHeight: '1.6rem' }}> 
                <div className='article_date'> 
                    <span> 10/15/2022 </span>
                    <span> October </span>
                </div>

                <h1 className='article_title'> Kanautica Zayre-Brown and the Cold, Routine Cruelty of How the Criminal Justice System Treats Trans Women </h1>
                <p className='article_text'>
                     Prisons and jails are exceptionally cruel to Black trans women. This rings true in the experience of Kanautica Zayre-Brown, a trans woman who has spent a majority of her sentence incarcerated in men's prisons and denied gender affirming care. 
                </p>

                <a href='https://www.theroot.com/kanautica-zayre-brown-and-the-cold-routine-cruelty-of-1832819640/amp' className='article_link'> Read More</a>
            </div>
        </div>
        
        <br></br>

    </div>

        </>
    );
}

export default News;