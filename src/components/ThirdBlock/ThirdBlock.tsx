import classes from './ThirdBlock.module.css';

const ThirdBlock = () => {
	return (
		<section>
			<div id='ThirdBlock' className={classes.wrapper}>
				<div className={classes.block}>
					<h2 className={classes.title}>Круто, ты дошел до третьего блока</h2>
					<div className= {classes.description}>
						<p className={classes.text}>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</p>
						<p className={classes.text}>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
					</div>
				</div>
				<div className={classes.image}></div>
			</div>
		</section>
	);
};

export default ThirdBlock;