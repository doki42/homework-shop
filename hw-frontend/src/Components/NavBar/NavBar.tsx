import React from "react";
import { IUser } from "../../Interfaces";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import { logOut } from '../../Requests';
import { Outlet } from "react-router";

interface NavbarProps {
    currentUser: IUser|null;
    onLogOut: () => void;
}

export function NavBar(props: NavbarProps) {

    async function logOutAndRedirect() {
        await logOut();
        props.onLogOut();
    }

    return (
        <Container id="n1" fluid >
            <header>Szögi András, +36704331529</header>
        <Navbar bg={"primary"} variant={"dark"} expand="lg">
            <Container className="justify-content-center mb-2">
                <Nav>
                    <NavLink href='/'>HOME</NavLink>
                    <NavLink href='/stats'>STATISZTIKA</NavLink>
                    <NavLink href='/login'>LOGIN</NavLink>
                </Nav>
            </Container>
        </Navbar>
        <div id="n2" className="mt-4">
            <Outlet/>
        </div>
        </Container>
    )
}