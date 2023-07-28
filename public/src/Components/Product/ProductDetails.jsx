import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";

const ProductDetails = () => {
    return (
        <Container>
            <ImgContainer>
                <Carousel
                    emulateTouch={true}
                    showStatus={false}
                    useKeyboardArrows={true}
                    autoFocus={true}
                    showThumbs={false}
                >
                    <Img src="https://random.imagecdn.app/500/261" alt="random" loading='lazy' />
                    <Img src="https://random.imagecdn.app/500/261" alt="shoes" />
                    <Img src="https://random.imagecdn.app/500/260" alt="random" loading='lazy' />
                    <Img src="https://random.imagecdn.app/500/262" alt="random" loading='lazy' />
                </Carousel>
            </ImgContainer>
            <ContentContainer>
                <ProductTitle>Product title</ProductTitle>
                <ProductDescription>Product Description:</ProductDescription>
                <ProductDescriptionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem doloremque provident itaque? Ullam, amet numquam? Rerum animi minima enim ratione, nisi libero numquam ipsam, pariatur optio unde suscipit dolore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem doloremque provident itaque? Ullam, amet numquam? Rerum animi minima enim ratione, nisi libero numquam ipsam, pariatur optio unde suscipit dolore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem doloremque provident itaque? Ullam, amet numquam? Rerum animi minima enim ratione, nisi libero numquam ipsam, pariatur optio unde suscipit dolore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem doloremque provident itaque? Ullam, amet numquam? Rerum animi minima enim ratione, nisi libero numquam ipsam, pariatur optio unde suscipit dolore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem doloremque provident itaque? Ullam, amet numquam? Rerum animi minima enim ratione, nisi libero numquam ipsam, pariatur optio unde suscipit dolore!</ProductDescriptionContent>
                <h2>Product Price</h2>
                <BuyContainer>
                    <Button>Add to cart</Button>
                    <Button>Add to wishlist</Button>
                </BuyContainer>
            </ContentContainer>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-inline: 2rem;
    margin-top: 3rem;
    column-gap: 1rem;
`;

const ImgContainer = styled.div`
    max-width: 600px;
    min-height: 200px;
    box-shadow: 3px 10px 10px rgba(0, 0, 0, 0.5);
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const ContentContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
    // border: 2px solid red;
    max-width: 500px;
`;
const ProductTitle = styled.h3`
    text-transform: uppercase;
    letter-spacing: 1px;
`;
const ProductDescription = styled.h3`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 1rem;
`;
const ProductDescriptionContent = styled.p`
    word-spacing: 1px;
    font-weight: 400;
    font-size: 0.9rem;
    width: 100%;
`;
const BuyContainer = styled.div``;

const Button = styled.button`
`;


export default ProductDetails