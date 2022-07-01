import styled from 'styled-components';

export const Fieldbox = styled.fieldset`
  background-color: rgb(204, 204, 204, 0.8);
  border-radius: 16px;
  box-shadow: 0 0 8px black;
  border: 1px solid #ccc;
  height: 45vh;
  width: 35vh;

  z-index: 1000;
  transition: all 0.4s;

  -webkit-animation: breathing 1s ease-out infinite normal;
  animation: breathing 5s ease-out infinite normal;
  -webkit-font-smoothing: antialiased;  

  @-webkit-keyframes breathing {
    0% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }

    25% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  

  @keyframes breathing {
    0% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    25% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
`

export const Legend = styled.div`
  background-color: #5784a0;
  border-radius: 16px;
  color: white;
  box-shadow: 0 0 4px black;
  margin-bottom: 10px;
  padding: 5px;
  padding-left: 25px;
  padding-right: 25px;
  font-family: 'Times New Roman', Times, serif;
`

export const Inputbox = styled.input`
  background-color: white;
  height: 5vh;
  margin-bottom: 1vh;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid white;
  color: #5784a0;
  font-family: 'Times New Roman', Times, serif;

  &:focus {
    background-color: #5784a0;
    color: #ccc;
    border: 1px solid white;
`


export const Submitbox = styled.button`
background-color: #5784a0;
// height: 5vh;
// width: 10vh;
font-size: 24px;
margin-top: 2vh;
border-radius: 4px;
border: 1px solid #5784a0;
color: white;
font-family: 'Times New Roman', Times, serif;

&:hover {
  box-shadow: 0 0 4px white;
  background-color: white;
  transform: scale(1.1);
  color: #5784a0;
}

`