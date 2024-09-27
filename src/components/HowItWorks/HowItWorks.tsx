import classes from './HowItWorks.module.css';
import Waiting from '../Icons/Waiting';
import Delivery from '../Icons/Delivery';
import Secure from '../Icons/Secure';
import Money from '../Icons/Money';

const waiting = <Waiting />;
const delivery = <Delivery />;
const secure = <Secure />;
const money = <Money />;

interface Item {
	id: number,
	icon: JSX.Element,
	title: string,
	text: string
};

const Items: readonly Item[] = [
	{
		id: 1,
		icon: waiting,
		title: 'Прочитай задание внимательно',
		text:'Думаю у тебя не займет это больше двух-трех минут'
	},
	{
		id: 2,
		icon: delivery,
		title: 'Изучи весь макет заранее',
		text:'Подумай как это будет работать на разных разрешениях и при скролле'
	},
	{
		id: 3,
		icon: secure,
		title: 'Сделай хорошо',
		text:'Чтобы мы могли тебе доверить подобные задачи в будущем'
	},
	{
		id: 4,
		icon: money,
		title: 'Получи предложение',
		text:'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
	}
];

const HowItWorks = () => {
	return (
		<section>
			<div id='HowItWorks' className={classes.wrapper}>
				<h2 className={classes.title}>Как это работает</h2>
				<div className={classes.items}>
					{Items.map((item) => {
						return (
							<div className={classes.item} key={item.id}>
								<div className={classes.icon}>{item.icon}</div>
								<div className={classes.description}>
									<div className={classes.name}>{item.title}</div>
									<div className={classes.text}>{item.text}</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;