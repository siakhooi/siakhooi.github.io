import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function MyMenuBody(props) {
    return (
        <div class="MyMenuBody">{props.children}</div>
    );
}
function MyMenuGroup(props) {
    return (
        <div class="MyMenuGroup">{props.children}</div>
    );
}
function MyMenuGroupCard(props) {
    return (
        <div class="MyMenuGroupCard">{props.children}</div>
    );
}
function MyMenuGroupHeader(props) {
    return (
        <h2 class="MyMenuGroupHeader">{props.children}</h2>
    );
}
function MyMenuBars(props) {
    return (
        <button class="MyMenuBars fa fa-bars" onClick={() => props.onClick()} />
    );
}
function MyMenuTitle(props) {
    return (
        <span class="MyMenuTitle">{props.title}</span>
    );
}
function MyMenuResponsiveNav(props) {
    return (
        <div class="MyMenuResponsiveNav">
            <MyMenuTitle title={props.title} />
            <MyMenuBars onClick={props.onClick} />
        </div>
    );
}
function MyMenuNav(props) {
    return (
        <div class="MyMenuNav" displayNav={props.displayNav}>{props.children}</div>
    );
}
function MyMenuHeaders(props) {
    const [displayNav, setDisplayNav] = useState(0);

    let title;
    let headers = props.o.map((x, i) => {
        let selected = (i === props.displayTab) ? 'Y' : 'N';
        if (i === props.displayTab) title = x;
        return (
            <MyMenuHeader id={i} name={x} selected={selected} onClick={() => { props.setDisplayTab(i); setDisplayNav(0); }}></MyMenuHeader>
        );
    });
    return (
        <div class="MyMenuHeaders">
            <MyMenuResponsiveNav title={title} onClick={() => setDisplayNav((displayNav === 1 ? 0 : 1))} />
            <MyMenuNav displayNav={displayNav === 1 ? 'Y' : 'N'}>{headers}</MyMenuNav>
        </div>
    );
}
function MyMenuHeader(props) {
    return (
        <button class="MyMenuHeader" currentTab={props.selected} onClick={props.onClick}>{props.name}</button>
    );
}
function MyLinkGroup(props) {
    return (
        <div class='MyLinkGroup'>
            <ul class="MyLinkGroup">{props.children}</ul>
        </div>
    );
}
function MyLink(props) {
    let d = props.desc;
    if (d !== undefined) d = `- ${d}`;
    return (
        <li class="MyLink"><a class="MyLink" href={props.url} rel='nofollow'>{props.name}</a>{d}</li>
    );
}

function MyMenu(props) {
    const [displayTab, setDisplayTab] = useState(0);
    let body = [];

    let headers = props.menu.menu.map((x, i) => {
        if (i === displayTab) {
            x.menu.forEach((x, i) => {
                let y = x.menu.map((x, i) => {
                    return <MyLink url={x.url} desc={x.description} name={x.name} />
                });
                body.push(
                    <MyMenuGroup>
                        <MyMenuGroupCard>
                            <MyMenuGroupHeader>{x.name}</MyMenuGroupHeader>
                            <MyLinkGroup>{y}</MyLinkGroup>
                        </MyMenuGroupCard>
                    </MyMenuGroup>
                );
            });
        }
        return x.name;
    });
    return <div class="MyMenu">
        <MyMenuHeaders displayTab={displayTab} o={headers} setDisplayTab={setDisplayTab} />
        <MyMenuBody>{body}</MyMenuBody>
    </div>;
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
