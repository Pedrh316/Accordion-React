import React from 'react';
import {FaChevronRight, FaChevronDown} from 'react-icons/fa';
import styled from 'styled-components';
import useToggle from '../hooks/useToggle';

const SAccordion = styled.article`

button{
    padding:1rem;
    display:flex;
    justify-content:space-between;
    width:100%;
    border:none;
    border-radius:.5rem;
    background-color:#c4fcef;
    color:#4d8076;
}
.content{
        background-color:white;
        font-weight:100;
        p{
            font-size:.8rem;
            letter-spacing:1px;
            word-spacing:3px;
            line-height:1.4;
            padding:1rem;
        }
    }
`

const ExpandContext = React.createContext();
const {Provider} = ExpandContext;

const Accordion = (props) => {
    const {title, content} = props;
    const {status:expand, toggleStatus:toggleExpand} = useToggle();
    const value = {
        expand, toggleExpand
    };

    

    return (
        <Provider value={value}>
            <SAccordion>            
                <AccordionHeader>{title}</AccordionHeader>
                <AccordionContent>{content}</AccordionContent>
            </SAccordion>
        </Provider>
    )
}

const AccordionHeader = ({children}) => {
    const {toggleExpand} = React.useContext(ExpandContext);
    return (
        <button onClick={toggleExpand}>
            {children}
            <AccordionIcon iconOpened={<FaChevronRight/>} iconClosed={<FaChevronDown/>}/>
        </button>
    )
}

const AccordionContent = ({children}) => {
    const {expand} = React.useContext(ExpandContext);
    return expand && (
        <div className="content">
            <p>{children}</p>
        </div>
    )
}

const AccordionIcon = ({iconOpened, iconClosed}) => {
    const {expand} = React.useContext(ExpandContext);
    return (
        <span>{expand ? iconOpened : iconClosed}</span>
    )
}

export default Accordion;