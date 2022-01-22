import styled from 'styled-components'
import {useState} from 'react'


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
		display: ${props => props.show ? "block" : "none"};
	}
`

const Button = styled.button`
				display: block;
			padding: 5px 10px 5px 10px;
			text-decoration: none;
			color: #2E2836;
			&:hover{
				border-radius: 5px;
				background: #F4F4F8;
				color: #19647E;
			}
`

const [show,setShow] = useState('false')

const show = (e) => {

	e.preventDefault()
	console.log("test")

}

const NavLinks = () => {

	return (


			<NavLink>
				<li> <Button onClick={show}>List Heading</Button>
					<ul className="left">
						<li> <a href="test">List Content</a> </li>
						<li> <a href="test">List Content</a> </li>
					</ul>
				</li>
			</NavLink>


		)


}


export default NavLinks