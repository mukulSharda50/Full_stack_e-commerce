import Hero from './Hero';
import Tile from './Tile';

const Home = () => {
	return (
		<div>
			<Hero />
			<Tile title={"Deal of the day"} />
			<Tile title={"Top picks"} />
		</div>
	);
};

export default Home;
