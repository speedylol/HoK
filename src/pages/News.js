import React from 'react';
//import "../components/news.css"
const News = () => {

    const newsPage = {
        container: {
            display: "flex",
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'blue',
            fontFamily: 'Aria',
            position: 'absolute',
            left: 0,
            width: '100%',
            height: '100%',
        },

        article: {
            backgroundColor: 'orange',
            width: 100,
        }

    };

    return (
        <div style={newsPage.container}>
            <h2> News </h2>
            

            <div style={newsPage.article}>
                <h3> Test article</h3>
                <p> Testing news article here </p>
                <a href='www.google.com'> Read More</a>
            </div>



        </div>
    );
}

export default News;