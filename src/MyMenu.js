import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function MyMenuBody(props) {
    return (
        <div class="w3-container tab1">
            {props.children}
        </div>
    );
}
function MyMenuGroup(props) {
    return (
        <h2 class="w3-bar w3-theme">{props.children}</h2>
    );
}

function MyMenuHeaders(props) {
    return (
        <div class="w3-bar w3-theme-d3">{props.children}</div>
    );
}
function MyMenuHeader(props) {
    return (
        <button class="w3-bar-item w3-button" currentTab={props.selected} onClick={props.onClick}>{props.name}</button>
    );
}
function MyLinkGroup(props) {
    return <div class='mylinkgroup'><ul>{props.children}</ul></div>;
}
function MyLink(props) {
    let d = props.desc;
    if (d != undefined) d = `- ${d}`;
    return (
        <li><a href={props.url}>{props.name}</a>{d}</li>
    );
}

function MyMenu(props) {
    const [displayTab, setDisplayTab] = useState(0);
    let headers = [];
    let body = [];

    props.menu.menu.map((x, i) => {
        let selected = (i == displayTab) ? 'Y' : 'N';
        headers.push(<MyMenuHeader id={i} name={x.name} selected={selected} onClick={() => setDisplayTab(i)}></MyMenuHeader>);
        if (i == displayTab) {
            x.menu.map((x, i) => {
                body.push(<MyMenuGroup>{x.name}</MyMenuGroup>);
                let y = x.menu.map((x, i) => {
                    return <MyLink url={x.url} desc={x.desc} name={x.name} />
                });
                body.push(<MyLinkGroup>{y}</MyLinkGroup>);
            });
        }
    });
    return <>
        <MyMenuHeaders>{headers}</MyMenuHeaders>
        <MyMenuBody>{body}</MyMenuBody>
    </>;
}
function renderMenu(menu, id) {
    return new Promise((resolve, reject) => {
        ReactDOM.render(
            <MyMenu menu={menu} />,
            document.getElementById(id)
        );
        resolve();
    });
}
function renderMyMenu(url, id) {
    fetch(url)
        .then(response => response.json())
        .then(menu => { return renderMenu(menu, id) });
}

export { renderMyMenu };
export default renderMyMenu;
