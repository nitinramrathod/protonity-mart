import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const StyledNavbar = styled.nav`
    color: red;
    background: linear-gradient(66deg, #3966ae, #002e80);
    display: flex;
    width: 100%;
    padding: 0 40px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const StyledLinksWrapper = styled.ul`
    display: flex;
    gap: 30px;
    margin: 0;
`
const StyledListItem = styled.li`
    list-style: none ;

    a{
        text-decoration: none;
        color: white;
        font-size: 16px;
        font-weight: 500;
    }
`
const Logo = styled.h3`
    list-style: none ;
    font-size: 24px;
    color: white;
    margin: 0;
`
// const StyledLinksWrapper = styled.ul``
const Navbar = () => {
    return (
        <StyledNavbar>
                <Logo>BBM</Logo>
                <StyledLinksWrapper>
                    <StyledListItem>
                        <Link to="/">Home</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link to="products">Products</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link to="laptops">Laptops</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link to="accessories">Accessories</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link to="cart">Carts</Link>
                    </StyledListItem>
                </StyledLinksWrapper>
        </StyledNavbar>
    )
}

export default Navbar