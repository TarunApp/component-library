import styled from 'styled-components';

const Row = styled.div`
	display: flex;
	flex-direction: row;
	position: ${props => props.position ? props.position : 'none'};
`

const Nav = styled.div`
	padding-left: 40px;
	padding-right: 40px;
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;	
	flex-flow: row nowrap;
	// border-bottom: 1px solid #c0c2d3;
	box-shadow: 0 1px 8px rgb(0 0 0 / 0.2);

`

const NavButton = styled.a`
	padding: 5px 8px 5px 8px;
	font-family: "Work Sans";
	font-size: 17px;
	margin-left: 15px;
	margin-right: 15px;
	margin-top: -4px;
	text-decoration: none;
	color: black;
	border-radius: 5px;
	background: ${props => props.background ? "#BED8FF" : "none"};

`

const Logo = styled.a`
	padding: 6px 8px 6px 8px;
	font-family: "Inter";
	margin-left: 15px;
	margin-right: 15px;
	text-decoration: none;
	color: black;
	font-size: 20px;
	background: linear-gradient(90deg, hsla(239, 100%, 67%, 1) 0%, hsla(187, 100%, 89%, 1) 100%);
	// 
	border-radius: 5px;
	color: white;
`

const NavColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`


const NavBar = () => {
	return (
		<Nav>
				<div>
					<Logo href="/test">Logo</Logo>
				</div>
				<Row position="absolute" style={{"right": 40}}>
					<NavButton href="/test">Test Link</NavButton>
					<NavButton background  href="/test">Test Link</NavButton>
					<NavButton href="/test">GitHub</NavButton>
				</Row>
			</Nav>
		)
}

export default NavBar