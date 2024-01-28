import Heading from 'components/ui/heading/Heading'
import picture from '../../../assets/images/error.png'
import classes from './Error404.module.scss'

const Error404 = () => {
	return (
		<div className={classes.box}>
			<img src={picture} alt="" />
			<Heading>Сторінка не існує</Heading>
		</div>
	)
}
export default Error404
