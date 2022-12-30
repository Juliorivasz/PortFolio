import styled from "styled-components";

export const ContainerBw = styled.div`
    width: 100%;
    padding-top: 3rem;
	background-color: transparent;
	transition: 0.5s all ease-in;
`;

export const Wraper = styled.div`
    width: 100%;
	max-width: 1388px;
	margin: auto;
	padding-top: 1rem;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row-reverse;
    padding-right: 1rem;
`;

export const Text = styled.p`
	display: none;
	@media screen and (min-width:1880px) {
		color: ${({theme})=>theme.bgc == "#161616"? "#fff" : "#000" };
		font-size: 1.5rem;
		font-family: Roboto,san-serif;
		margin: 0;
		display: flex;
		justify-content: end;
		padding-right: 11.5rem;
	}
`

export const SwitchBw = styled.div`
    position: relative;
	width: 60px;
	height: 35px;
	border-radius: 38px;
	background-color: ${({theme})=>theme.bgc == "#161616"? "#fff" : "#161616" };
	transition: 1s all ease-in;
`;

export const ButtonBw = styled.button`
    position: absolute;
	cursor: pointer;
	bottom: 5px;
	left: ${({position})=> position ? "30px" : "5px"};
	width: 25px;
	height: 25px;
	border:  none;
	border-radius: 58%;
	background-color: ${({theme})=>theme.toggle == "#fff"? "#000" : "#fff" };
	transition: 0.4s all ease-in;
	outline: none;
	color: ${({theme})=>theme.bgc == "#161616"? "#fff" : "#000" };
	font-family: Roboto,san-serif;
	font-size: 1.1rem;
`;