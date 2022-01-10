import YardzenLogo from '../assets/YardzenLogo.png'

const Header = () => {

	return (
	<div className='header'>
		<img className='logo-image' src={ YardzenLogo } alt="Yardzen Logo" />
		{/* <div className='notalogo'>YARDZEN</div> */}
	</div>
	)
}
export default Header;
