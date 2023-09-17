import React from 'react'
import styled from '@emotion/styled'
import Navbar from './common/Navbar'
import Sidebar from './common/Sidebar'
import { Row } from 'react-bootstrap'

const StyledLayout = styled.div`
max-width: 100%;
`
const StyledRow = styled.div`
width: 100%;
display: flex;

`


const Layout = ({ children }) => {
    return (
        <StyledLayout>
            <Navbar />
            <StyledRow>
                <Sidebar />
                {children}
            </StyledRow>
        </StyledLayout>
    )
}

export default Layout