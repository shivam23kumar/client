import {Nav, Navbar, Container} from "react-bootstrap";

export const Nb =() => {
  return (
    
    <Navbar  bg="dark" variant="dark">
        <Container>
            <Navbar.Brand to="/">Sheela's recipe</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link to="/">Home</Nav.Link>
                <Nav.Link to="/create-recipe">Create Recipe</Nav.Link>
                <Nav.Link to="/saved-recipes">Saved Recipe</Nav.Link>
                <Nav.Link to="/auth">Login/Register</Nav.Link>
            
            </Nav>
        </Container>
    </Navbar>
    
    )
}
