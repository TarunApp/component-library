import React from 'react'
import styled from 'styled-components'


const FooterDiv = styled.div`
	padding: 50px 100px 50px 100px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	ul {
		list-style: none;
	}

	h3 {
		color: black;
		font-size: 20px;
		margin: 0;
		margin-bottom: 10px;
	}

	li {
		font-family: "Work Sans";
		padding: 2px;
		color: #C0C2D3;
		font-size: 18px;
	}

	@media(max-width: 768px){
		flex-direction: column;
		padding: 0px;
	}
`

const FlexDiv = styled.div`
	display: flex;
	flex-direction: row;
	ul {
		margin-right: 25px;
	}

	@media(max-width: 768px){
		flex-direction: column;
	}
`

const Footer = () => {
	return (
		<div>

		<FooterDiv>
			
		<FlexDiv>
				<ul>
					<li><h3>Test Column</h3></li>
					<li>test</li>
					<li>test</li>
				</ul>

				<ul>
					<li><h3>Test Column</h3></li>
					<li>test</li>
					<li>test</li>
				</ul>


				<ul>
					<li><h3>Test Column</h3></li>
					<li>Getting Started</li>
				</ul>


		</FlexDiv>

		</FooterDiv>

		<hr style={{'width': '80%', 'marginBottom': "20px", "marginTop": "20px"}}/>

		<footer>
			<p style={{'fontFamily': "Work Sans",'textAlign': 'center'}}>Test | <a href="/test">Test</a> | Test </p>
		</footer>

		</div>
		)
}

export default Footer