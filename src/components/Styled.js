import styled from 'styled-components'


export const Container = styled.div`
    background: #87CEEB;
    width: 100%;
    height: 90vh;


    border-radius: 100px;

   



`;

export const Title = styled.h1 `

color: #2E384D;
text-align: center;
margin-right: 45px;
transform:translateY(120%)

`;


export const Div = styled.div `
    align-items: center;
    text-align: center;

    border-radius: 10px;
  
    display: grid;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    position: absolute;
    margin-top: 2.2rem;
    margin-left: 13.7rem;

    width: 55rem;
    height: 30rem;
    background: #5965E0;

    background-image: url('./pngwing.com.png');
    background-repeat: no-repeat;
    background-size: 24rem;
    background-position-x: 5%;
    background-position-y: 70%;
    
   
`;


export const Input = styled.input `
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-bottom: 2.5rem;
    margin-left: 22.5rem;
    padding: 10px;

    border: 0;

    width: 20rem;
    height: 40%;

    border: 1px solid #000;
    
    
`;

export const Button = styled.button `
    text-align: center;
    position: absolute;
    flex-direction: row;
    align-items: center;
    align-content: center;
    margin-top: 28rem;
    margin-left: 40rem;
    width: 25rem;
    height: 50px;

    cursor: pointer;

    background: #4953B8;
    color: #FFF;

    border-radius: 5px;

    border: 0;

      
    box-shadow: 0px 10px 10px -9px rgba(0, 0, 0, 5);

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFF;
        color: #000
        
    }   
`; 


