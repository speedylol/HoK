import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import "../components/news.css"
const News = () => {

    const newsPage = {

        content: {
            paddingTop: '32px',
            maxWidth: '70%',
            width: '94%',
            minHeight: '90%',
            backgroundColor: 'white',
            fontSize: '1.6vw',
            verticalAlign: 'middle',
            display: 'table-cell',
            flex: '1 auto',
        },

        article: {
            display: 'flex',
            justifyContent: 'flex-start',
            backgroundColor: 'orange',
            width: '60%',
            verticalAlign: 'middle',
        },

    };

    return (
        <div style={newsPage.content}>
            <h2> News </h2>

            <Row xs={1} md={2} className='g-4'>
                
                <Col>
                    <Card style={ {width: '18rem'} }>
                        <Card.Img variant='top' src='' />
                        <Card.Title> Article 1</Card.Title>
                        <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                        </Card.Text>
                <Button variant="primary" href="https://amp.charlotteobserver.com/news/state/north-carolina/article264798014.html">
                    Read More
                    </Button>
                </Card>

                
                    
                </Col>
                
                <Col>
                    <Card style={ {width: '18rem'} }>
                        <Card.Img variant='top' src='' />
                        <Card.Title> Article 2</Card.Title>
                        <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                        </Card.Text>
                <Button variant="primary" href="https://ncpolicywatch.com/2021/11/05/transgender-prisoner-fighting-for-gender-affirming-surgery/">
                    Read More
                    </Button>
                </Card>

                
                </Col>

            </Row>

            <Row xs={1} md={2} className='g-4'>
                
                <Col>
                    <Card style={ {width: '32rem'} }>
                        <Card.Img variant='top' src='' />
                        <Card.Title> Article 3</Card.Title>
                        <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                        </Card.Text>
                <Button variant="primary" href="https://www.wbtv.com/2021/04/21/lgbtq-groups-commit-support-relief-black-transgender-community/?outputType=amp">
                    Read More
                    </Button>
                </Card>

                
                    
                </Col>
                
                <Col>
                    <Card style={ {width: '32rem'} }>
                        <Card.Img variant='top' src='' />
                        <Card.Title> Article 4</Card.Title>
                        <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                        </Card.Text>
                    <Button variant="primary" href="https://www.theroot.com/kanautica-zayre-brown-and-the-cold-routine-cruelty-of-1832819640/amp">
                    Read More
                    </Button>
                </Card>

                
                </Col>

            </Row>
                    

        </div>
    );
}

export default News;