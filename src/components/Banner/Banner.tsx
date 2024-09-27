import Header from '../Header';
import classes from './Banner.module.css';

const Banner = () => {
	return (
		<div className={classes.banner}>
			<Header />
			<div className={classes.wrapper}>
				<h1 className={classes.title}>Говорят, никогда не поздно сменить профессию</h1>
				<div className={classes.description}>Сделай круто тестовое задание и у тебя получится</div>
				<button className={classes.button}>Проще простого!</button>
			</div>
		</div>
	);
};

export default Banner;