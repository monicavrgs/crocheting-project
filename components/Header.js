import styled from "styled-components"

const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 20px;
    background-color: #F2DCBB;
`

const Nav = styled.nav`
    width: 20%;
    display: flex;
    justify-content: space-around;
`

const Link = styled.a`
    text-decoration: none;
    color: #FFF;
    font-weight: bold;

    :hover{
        color: #998567;
        text-decoration: underline;
    }
`

export default function Header(){
    return(
        <HeaderContainer>
            <Nav>
                <Link href='/'>Home</Link>
                <Link href='projects'>Projects</Link>
            </Nav>
        </HeaderContainer>
    )
}