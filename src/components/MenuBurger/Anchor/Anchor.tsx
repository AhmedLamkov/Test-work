import classes from './Anchor.module.css';
import Arrow from '../../Icons/Arrow';

interface Props {
	onClick: () => void;
};

interface Link {
	id: number;
	text: string;
	href: string;
};

const Links: readonly Link[] = [
	{
		id: 1,
		text: 'Как это работает',
		href: '#HowItWorks'
	},
	{
		id: 2,
		text: '3-й блок',
		href: '#ThirdBlock'
	},
	{
		id: 3,
		text: 'Вопросы и ответы',
		href: '#Faq'
	},
	{
		id: 4,
		text: 'Форма',
		href: '#Form'
	}
];

const Anchor = ({ onClick }: Props) => {
	return (
		<div className={classes.anchors}>
			{Links.map((link)=> {
				return (
					<a key={link.id} onClick={onClick} href={link.href} className={classes.wrapper}>
						<span className={classes.anchor}>{link.text}</span>
						<div className={classes.icon}><Arrow /></div>
					</a>
				)
			})}
		</div>
	);
};

export default Anchor;