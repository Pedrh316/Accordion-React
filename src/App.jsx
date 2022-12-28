import Accordion from './components/Accordion';
import data from './data';
import {nanoid} from 'nanoid';
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap');

    *{
        font-family:'Poppins', sans-serif;
    }
    
    #root{
        max-width:350px;
        width:100%;
        margin:3rem auto;
    }

    body{
        background-color:#c4fcef;
        place-items:center;
    }
    *{
        margin:0;
        padding:0;
    }
`

const SAccordionContainer = styled.section`
    padding:2rem;
    border-radius:.5rem;
    margin:auto;
    background-color:#eee;
    display:flex;
    background-color:#00c9a7;
    flex-direction:column;
    width:100%;

    .title{
        color:white;
        padding-block:0 1rem;
    }
`

const App = () => {

    const accordions = data.map(({question, answer}) => {
        return <Accordion key={nanoid()} title={question} content={answer}/>
    })

    return (
        <>
            <GlobalStyle/>
            <SAccordionContainer>
                <h1 className="title">Questionário de React</h1>
                {accordions}
            </SAccordionContainer>
        </>
    )
}

export default App;