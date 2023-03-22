import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


const Leaf = ({ to, label }, idx) => {
    return (
        <Nav.Link className='my-auto' key={`leaf-${idx}`} href={to} >{label}</Nav.Link>
    )
}


const Branch = ({ label, children }, idx) => {
    return (
        <NavDropdown title={label} id={`basic-nav-dropdown-${idx}`} key={`basic-nav-dropdown-${idx}`}>
                {children.map(x =>
                    <NavDropdown.Item href={x.to}>{x.label}</NavDropdown.Item>
                )}
        </NavDropdown>
    )
}

export const NavBarList = ({ nodes }) => {
    return (
        <div className="flex justify-center">
            {nodes.map(x =>
                x.children && x.children.length
                    ?
                    <Branch label={x.label} children={x.children} /> :
                    <Leaf label={x.label} to={x.to} />
            )}
        </div>
    )
}
