import { useDispatch, useSelector } from 'react-redux';
import { increase } from './features/countSlice';
import { toggle } from './features/divisibleByFour';

import styled from 'styled-components';

const App = () => {
	const dispatch = useDispatch();
	const count = useSelector(state => state.count.value);
	const even = useSelector(state => state.even.value);

	const handleClick = async () => {
		console.log('here')
	};

	return (
		<FullScreen>
			<TextContainer>
				<Text>count: </Text>
				<Text>{count}</Text>
			</TextContainer>
			<TextContainer>
				<Text>divisible by 4:</Text>
				<Text>{even.toString()}</Text>
			</TextContainer>
			<Button onClick={handleClick}>Increment Count</Button>
		</FullScreen>
	);
};

const FullScreen = styled.main`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const TextContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 40%;
	margin: 1rem 0rem;
`;

const Text = styled.div`
	font-size: 3rem;
`;

const Button = styled.div`
	cursor: pointer;
	background: rgb(79 70 229);
	border-radius: 5px;
	border: 3px solid rgb(49 46 129);
	color: rgb(199 210 254);
	margin: 0 1em;
	padding: 0.5em 1.5em;
	font-size: 1.5rem;
	user-select: none;

	&:hover {
		background: rgb(55 48 163);
	}

	&:active {
		background: rgb(49 46 129);
	}
`;

export default App;
