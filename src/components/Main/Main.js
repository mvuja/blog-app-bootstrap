import React, { useEffect, useState } from "react";
import './main.modules.css'
import CardComponent from '../Card/Card'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// API KEY: 137049f91b254a0d8f4a3c95353c3935

const Main = () => {

    const [allPosts, setAllPosts] = useState([])
    const [techRuch, setTechRuch] = useState([])
    const [tesla, setTesla] = useState([])


    useEffect(() => {

        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=137049f91b254a0d8f4a3c95353c3935';

        // const req = new Request(url);

        fetch(url).then((res) => {
                return res.json()
            }).then((data) => {
                setAllPosts(data.articles)
            })
    })

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=137049f91b254a0d8f4a3c95353c3935';

        // const req = new Request(url);

        fetch(url).then((res) => {
                return res.json()
            }).then((data) => {
                setTechRuch(data.articles)
            })
    })

    useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-11-06&sortBy=publishedAt&apiKey=137049f91b254a0d8f4a3c95353c3935';

        // const req = new Request(url);

        fetch(url).then((res) => {
                return res.json()
            }).then((data) => {
                setTesla(data.articles)
            })
    })

    return (
        <main id="main" className="main">

            <Container>

                <Tabs defaultActiveKey="home" className="mb-3">
                    <Tab eventKey="home" title="All">
                        <div className="grid-cont">
                            {allPosts?.map(el=>{
                                return <CardComponent key={el.id} img={el.urlToImage} txt={el.txt} title={el.title} />
                            })}
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="TechRunch">
                        <div className="grid-cont">
                            {techRuch?.map(el=>{
                                return <CardComponent key={el.id} img={el.urlToImage} txt={el.txt} title={el.title} />
                            })}
                        </div>
                    </Tab>
                    <Tab eventKey="contact" title="Tesla">
                        <div className="grid-cont">
                            {tesla?.map(el=>{
                                return <CardComponent key={el.id} img={el.urlToImage} txt={el.txt} title={el.title} />
                            })}
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        </main>
    )
}


export default Main