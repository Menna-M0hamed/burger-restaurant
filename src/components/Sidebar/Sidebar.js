import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute}
from "./SidebarElements";

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer issOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/burger" onClick={toggle}>Burger</SidebarLink>
                <SidebarLink to="/desert" onClick={toggle}>Desert</SidebarLink>
                <SidebarLink to="/full menu" onClick={toggle}>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/contact" onClick={toggle}>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>

    )
}



export default Sidebar
