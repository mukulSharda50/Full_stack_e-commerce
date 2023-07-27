import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styled from 'styled-components';

const Hero = () => {
	return (
		<Container>
			<Carousel
				emulateTouch={true}
				showStatus={false}
				useKeyboardArrows={true}
				autoFocus={true}
				showThumbs={false}
			>
				<div>
					<img src="https://random.imagecdn.app/500/151" alt="random" />
				</div>
				<div>
					<img src="https://random.imagecdn.app/500/151" alt="random" />
				</div>
				<div>
					<img src="https://random.imagecdn.app/500/152" alt="random" />
				</div>
			</Carousel>
		</Container>
	);
};
const Container = styled.div`
	padding-top: 1rem;
`;
export default Hero;
