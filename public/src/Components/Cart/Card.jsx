import { useState } from 'react';
import styled from 'styled-components';

const Card = ({ imgSrc, imgAlt, price, title }) => {
    const [qty, setQty] = useState(1);
    const IncreaseQty = () => {
        setQty(prevQty => prevQty + 1);
    }
    const DecreaseQty = () => {
        setQty(prevQty => prevQty - 1);
    }
    return (
        <Container>
            <ImgContainer>
                <Img src={imgSrc} alt={imgAlt} />
            </ImgContainer>
            <Content>
                <div className='text-3xl font-bold underline'>{title}</div>
                <h6>Price: Rs.{price}</h6>
                <QtyContainer>
                    <button onClick={IncreaseQty}>+</button>
                    <span>Quantity: {qty}</span>
                    {qty > 1 && <button onClick={DecreaseQty}>-</button>}
                </QtyContainer>
                <button>Remove from Cart</button>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 2px solid black;
    margin-inline: 3rem;
    margin-top: 1rem;
    width: 50%;
`;
const ImgContainer = styled.div`
    height: 200px;
    width: 200px;
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const QtyContainer = styled.div`
    display: flex;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default Card