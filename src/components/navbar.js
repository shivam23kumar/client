import {Nav, Navbar, Container} from "react-bootstrap";

import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

export const Nb =() => {

    const[cookies, setCookies]=useCookies(["access_token"]);
    const navigate=useNavigate();

    const logout = ()=>{
        setCookies("access_token","");
        window.localStorage.removeItem("userID");
        navigate("/auth")
    }
  return (
    
    <Navbar  bg="dark" variant="dark">
        <Container>
            <Navbar.Brand to="/">Sheela's recipe</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/create-recipe">Create Recipe</Nav.Link>
                <Nav.Link href="/saved-recipes">Saved Recipe</Nav.Link>
                {!cookies.access_token ? (
                    <Nav.Link href="/auth">Login/Register</Nav.Link>
                ) : (<button onClick={logout}>Logout</button>)}
                
            
            </Nav>
        </Container>
    </Navbar>
    
    )
}
