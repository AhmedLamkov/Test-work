import classes from './Questions.module.css';
import classNames from 'classnames';
import { useCallback, useState } from 'react';

import Plus from '../Icons/Plus';

export interface Question {
	id: number,
	title: string,
	description: string
};

const Questions = (question: Question) => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = useCallback(() => {
		setIsActive(prev => !prev)
	}, [])

	return (
		<div className={classNames(classes.wrapper, { [classes.active]: isActive })}>
			<div onClick={handleClick} className={classes.questions}>
				<div className={classes.question}>{question.title}</div>
				<div className={classes.icon}><Plus /></div>
			</div>
			<div className={classes.content}>{question.description}</div>
		</div>
	);
};

export default Questions;