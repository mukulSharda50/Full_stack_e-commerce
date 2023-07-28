import styled from "styled-components";


const Card = ({ imgSrc, imgAlt, price, title }) => {
    return (
        <Container>
            <Img src={imgSrc} alt={imgAlt} loading='lazy' />
            {title}
            {price}
        </Container>
    )
}

const Container = styled.div`
    width: 220px;
    height: 150px;
    border: 1px solid lightgray;
`;

const Img = styled.img`
    background-repeat: no-repeat;
    oject-fit: cover;
    width: 100%;
    height: 70%;
`;

export default Card