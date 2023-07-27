import styled from "styled-components";
import Card from "./Card";

import { Carousel } from 'react-responsive-carousel';
const data = [
    {
        imgSrc: "https://random.imagecdn.app/500/151",
        imgAlt: "random",
        title: "Shirt",
        price: "Under 899"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/131",
        imgAlt: "random",
        title: "T-Shirt",
        price: "Under 1299"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/161",
        imgAlt: "random",
        title: "Jeans",
        price: "Under 899"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/151",
        imgAlt: "random",
        title: "Shirt",
        price: "Under 899"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/131",
        imgAlt: "random",
        title: "T-Shirt",
        price: "Under 1299"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/161",
        imgAlt: "random",
        title: "Jeans",
        price: "Under 899"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/151",
        imgAlt: "random",
        title: "Shirt",
        price: "Under 899"
    },
]

const Tile = ({ title }) => {
    return (
        <div>
            <p>
                {title}
            </p>
            <Container>
                {
                    data.map((dataItem, index) => (
                        <div key={index}>
                            <Card
                                imgSrc={dataItem.imgSrc}
                                imgAlt={dataItem.imgAlt}
                                price={dataItem.price}
                                title={dataItem.title} />
                        </div>
                    ))
                }
            </Container>
        </div>

    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px 5px;
    margin: 1rem 0;
    // padding-inline: 3rem;
    cursor: pointer;
    overflow-x: hidden;
`;

export default Tile