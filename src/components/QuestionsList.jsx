import React from 'react';
import {data} from '../data';

function QuestionsList(props) {
	return (<>
			<div>
				{
					data.map((item, index) => (
						Object.keys(item).map((key) => {
							return key === "id" ?
								<p className={"fs-4 fs-md-5 fs-lg-1 fw-bold"} key={key}>{"Question " + item[key]}</p> :
								key === "question" ? <p className={"mx-5 mx-sm-1 mx-sm-5 fs-5"} key={key}><b>Сұрақ: </b><u className={"fw-semibold"}>{item[key]}</u></p> :
									<p className={"mx-5"} key={key}><b>Жауап: </b>{item[key]}</p>
						})
					))
				}
			</div>
		</>

	)
}

export default QuestionsList;