import classes from './Links.module.css';

const Links = () => {
	return (
		<div className={classes.links}>
			<a className={classes.link} href="#HowItWorks">Как это работает</a>
			<a className={classes.link} href="#ThirdBlock">3-й блок</a>
			<a className={classes.link} href="#Faq">Вопросы и ответы</a>
			<a className={classes.link} href="#Form">Форма</a>
		</div>
	);
}; 

export default Links;