import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: white;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    z-index: 999;
`   

export const NavLink = styled(Link)` 
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: aqua;
    }
`

export const Bars = styled(FaBars) `
    display: none;
    color: red;

    @media screen and (max-width: 700px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.5rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 700px) {
        display: none;
    }

`

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 700px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    padding: 10px 22px;
    background-color: black;
    margin-right: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;

    &.hover {
        color: blue;
    }
`
