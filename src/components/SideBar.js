import styled from 'styled-components'
import '../styles.css'
import NavLinks from '../navbar/NavLinks'

const Nav = styled.div`
	display: flex;
	flex-direction: column;

	width: 20%;
	height: 100vh;
	background: #E6E6EA;
`

const Title = styled.h2`
	font-family: "Inter";
	text-align: center;
	font-size: 20px;
	margin: 0;
	padding: 0;
	padding: 20px 20px 0px 20px;
`

const NavLink = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	padding: 5px 10px 5px 10px;


	li {
		font-size: 18px;
		list-style: none;
		font-family: "Work Sans";
		padding-top: 9px;
		a {
			display: block;
			padding: 5px 10px 5px 10px;
			text-decoration: none;
			color: #2E2836;
			&:hover{
				border-radius: 5px;
				background: #F4F4F8;
				color: #19647E;
			}
		}

	}


	li ul {
		display: block;
	}
`


const SideBar = () => {

	return (
		<Nav>

		<Title>Components</Title>

		<div>


		<NavLinks/>
		<NavLinks/>

	

		</div>

		</Nav>
		)

}

export default SideBar