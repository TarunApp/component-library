import styled from 'styled-components'

const Nav = styled.div`
	display: flex;
	flex-direction: column;

	width: 20%;
	height: 100vh;
	background: green;
`

const SideBar = () => {

	return (
		<Nav>
			<p>Navigation Bar</p>
		</Nav>
		)

}

export default SideBar