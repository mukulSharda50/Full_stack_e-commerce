import styled from "styled-components";

import Card from "./Card.jsx";
const Cart = () => {
	return (
		<Container>
			<Card imgSrc="https://random.imagecdn.app/500/161" imgAlt="cart-item" price="344" title="boots" />
		</Container>
	)
};

const Container = styled.div`
	border: 2px solid red;
	display: grid;
	place-items: center;
`;

export default Cart;
