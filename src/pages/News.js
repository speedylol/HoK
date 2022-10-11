import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import  article1  from './article1.png';
import  article2  from './stock2.jpg'
import "../components/news.css"

const News = () => {



return (
    <div className='services_section'>
        <h2> News </h2>

        <Row>  
            <Col className='col-lg-12 col-md-12 col-sm-12'>

                <div class='services_category'>
                    <div class='services_card_box'>

                        <Card style={ {width: '32rem'} }>
                            <Card.Img variant='top' src={article1}/>
                            <Card.Title> Article 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.

                                <button 
                                    href="https://amp.charlotteobserver.com/news/state/north-carolina/article264798014.html">
                                    Read More
                                </button>

                            </Card.Text>
                            
                        </Card>

                        <Card style={ {width: '32rem'} }>
                            <Card.Img variant='top' src={article2} />
                            <Card.Title> Article 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" href="https://ncpolicywatch.com/2021/11/05/transgender-prisoner-fighting-for-gender-affirming-surgery/">
                                Read More
                            </Button>
                        </Card>


                    </div>

                </div>

                <div class='services_card_box serv_card_3'>


                </div>
            
                
            
            
        

        

        
            
            
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