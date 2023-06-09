import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";

function hello() {
    alert('Hello IT-KAMASUTRA')
}

hello();

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Raiting value={1}/>
            <Accordion titleValue={"Menu"} collapsed={true} />
            <Accordion titleValue={"Users"} collapsed={false} />
            Article 2
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle (props: PageTitlePropsType) {
    debugger
    console.log("PageTitle  rendering")
    return <h3>{ props.title }</h3>
}



export default App;
