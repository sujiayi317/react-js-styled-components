import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

const SidebarStyled = styled.div`
  width: 12.3rem;
  height: 100vh;
  position: fixed;
  background-color: var(--sidebar-dark-color);
`

function Sidebar() {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  )
}



export default Sidebar;