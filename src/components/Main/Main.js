import React from "react";
import './main.modules.css'
import CardComponent from '../Card/Card'
import meerkat from '../../assets/meerkat.jpg'
import Container from 'react-bootstrap/Container'

const Main = () => {

    const cards = [
        {
            id: 1,
            title: 'djesi',
            img: `${meerkat}`,
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec luctus quam. Sed eget malesuada sem. Maecenas id quam ac sapien cursus tempor. Phasellus nulla ligula, rutrum id mi at, posuere rhoncus mauris.'
        },
        {
            id: 2,
            title: 'djesi',
            img: `${meerkat}`,
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec luctus quam. Sed eget malesuada sem. Maecenas id quam ac sapien cursus tempor. Phasellus nulla ligula, rutrum id mi at, posuere rhoncus mauris.'
        },
        {
            id: 3,
            title: 'djesi',
            img: `${meerkat}`,
            txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec luctus quam. Sed eget malesuada sem. Maecenas id quam ac sapien cursus tempor. Phasellus nulla ligula, rutrum id mi at, posuere rhoncus mauris.'
        },
    ]

    return (
        <main id="main" className="main">
            <Container>
                <div className="grid-cont">
                {
                    cards.map(el => (
                        <CardComponent key={el.id} img={el.img} txt={el.txt} title={el.title} />
                    ))
                }
                </div>
            </Container>
        </main>
    )
}


export default Main