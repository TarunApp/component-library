import styled from 'styled-components'

const PrimaryButton = styled.button`
	border: none;
	border-radius: 5px;

	background: #2B2D42;
	color: white;
	padding: 10px;
	font-size: 15px;
	font-family: "Inter";
	cursor: pointer;
`

const OutlineButton = styled.button`
	border: 2px solid #2B2D42;
	border-radius: 5px;

	background: white;
	color: #2B2D42;
	padding: 4px 10px 4px 10px;
	font-size: 15px;
	font-family: "Inter";	
	cursor: pointer;
`


export {PrimaryButton, OutlineButton}