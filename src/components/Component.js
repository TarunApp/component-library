import styled from 'styled-components'

const LandingPage = styled.div`
	display: flex;
	justify-content: center;

	width: 80%;
	height: 100vh;
`

const Component = () => {

	return (
			<LandingPage>
				<p style={{'fontFamily': "Inter"}}>Component</p>
			</LandingPage>
		)

}

export default Component