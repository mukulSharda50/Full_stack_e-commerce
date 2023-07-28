import styled from "styled-components";
import Card from "./Card";

import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
const data = [
    {
        imgSrc: "https://random.imagecdn.app/500/151",
        imgAlt: "random",
        price: "899"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/131",
        imgAlt: "random",
        price: "1299"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/161",
        imgAlt: "random",
        price: "899"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/151",
        imgAlt: "random",
        price: "899"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/131",
        imgAlt: "random",
        price: "1299"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/161",
        imgAlt: "random",
        price: "899"
    },
    {
        imgSrc: "https://random.imagecdn.app/500/151",
        imgAlt: "random",
        price: "899"
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
                        <CardLink key={index} to={`/products/${dataItem.price}`}>
                            <Card
                                imgSrc={dataItem.imgSrc}
                                imgAlt={dataItem.imgAlt}
                                price={`Under Rs.${dataItem.price}`}
                            />
                        </CardLink>
                    ))
                }
            </Container>
        </div>

    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1rem;
    margin: 1rem 0;
    padding-inline: 1rem;
    cursor: pointer;
    overflow-x: hidden;
`;

const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export default Tile