import styled from 'styled-components'

export const Logout = styled.button`
position: fixed;
color: darkblue;
top: 84px;
left: 33px;
background-color: #ccc;
border-radius: 4px;
box-shadow: 0 0 4px black;

&:hover {
  transform: scale(1.1);
  cursor: pointer;
  box-shadow: 0 0 4px red;
  border: 1px solid red;
  color: red;
}
`


export const HeaderOne = styled.h1`
color: black;
position: fixed;
top: 4px;
left: 32px;
font-size: 36px;
background-color: rgb(87, 132, 160, 0.9);
box-shadow: 0 0 4px black;
border: 1px solid black;
border-radius: 8px;
padding-left: 16px;
padding-right: 16px;
padding-bottom: 2px;
font-weight: 700;
`


export const Fieldbox = styled.fieldset`
background-color: rgb(204, 204, 204, 0.7);
border-radius: 16px;
box-shadow: 0 0 8px black;
border: 1px solid black;
margin-top: 2vh;
width: 75vh;
height: auto;
`

export const Legendbox = styled.legend`
background-color: rgb(87, 132, 160, 0.9);
border-radius: 4px;
box-shadow: 0 0 4px black;
border: 1px solid black;
color: #ccc;
padding: 4px;
padding-left: 8px;
padding-right: 8px;
font-weight: 1000;
font-family: 'Times New Roman', Times, serif;
text-align: left;
`