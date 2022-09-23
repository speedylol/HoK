import React from 'react';
//import "../components/news.css"
const News = () => {

    const newsPage = {
        container: {
            display: "flex",
            
            flexDirection: 'row',
            backgroundColor: 'blue',
            fontFamily: 'Aria',
            position: 'absolute',
            left: '10%',
            right: '5%',
            width: '60%',
            height: '100%',
            paddingBottom: '100px',
            overflow: 'auto',
        },

        article: {
            backgroundColor: 'orange',
            width: 100,
        },

        html: {
            height: '100%',
        },

        body: {
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
        }


    };

    return (
        <div style={newsPage.container}>
            <h2> News </h2>
            

            <div style={newsPage.article}>
                <h3> Test article</h3>
                <p> Testing news article here </p>
                <a href='https://amp.charlotteobserver.com/news/state/north-carolina/article264798014.html'> Read More</a>
            </div>

            <div style={newsPage.article}>
                <h3> Test article 2</h3>
                <p> Testing news article here </p>
                <a href='https://ncpolicywatch.com/2021/11/05/transgender-prisoner-fighting-for-gender-affirming-surgery/'> Read More</a>
            </div>

            <div style={newsPage.article}>
                <h3> Test article 3</h3>
                <p> Testing news article here </p>
                <a href='https://www.wbtv.com/2021/04/21/lgbtq-groups-commit-support-relief-black-transgender-community/?outputType=amp'> Read More</a>
            </div>

            <div style={newsPage.article}>
                <h3> Test article</h3>
                <p> Testing news article here </p>
                <a href='https://www.theroot.com/kanautica-zayre-brown-and-the-cold-routine-cruelty-of-1832819640/amp'> Read More</a>
            </div>                        

        </div>
    );
}

export default News;