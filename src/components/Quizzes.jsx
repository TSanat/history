import React, {useState} from 'react';
import {data} from '../data';

function FlowCards(props) {

	const [number, setNumber] = React.useState(41);

	const item = data.find(obj => obj.id === number);

	const [showAns, setShowAns] = useState(false);

	const toggleAns = () => {
		setShowAns(true);
	}

	const handleNext = () => {
		setShowAns(false);
		setNumber(number + 1)
	}

	const handlePrev = () => {
		setShowAns(false);
		if(number > 1){
			setNumber(number - 1)
		}

	}

	return (
		<div className={"gl-h-lg"}>
			<div className={"m-5 w-75 h-50"}>
				<p className={"fw-semibold fs-3"}>{item.id + ". " + item.question}</p>
				{
					showAns ? <p className={"fw-normal fs-5"}>{item.answer}</p> : null
				}
			</div>

			<div className={"d-flex align-items-center justify-content-center gap-4 m-auto"}>
				<button className={"btn btn-danger"} onClick={handlePrev}>Prev Question</button>
				<button className={"btn btn-secondary"} onClick={toggleAns}>Answer</button>
				<button className={"btn btn-primary"} onClick={handleNext}>Next Question</button>
			</div>
		</div>
	)
}

export default FlowCards;