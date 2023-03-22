import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Drawercomp from "/src/components/drawercomponent.jsx";
// import HamburgerMenu from "./burgermenu";

function Navbar() {
    const [click, setClick] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleClick = () => {};
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => <div> hello </div>;

    return (
        <>
            {/* {isMobile ? (
                <HamburgerMenu />
            ) : ( */}
               
                <nav className="navbar font-bold text-primaryColor">
                    <div className="navbar-container">
                        
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <div className="gap-10 ml-10 hidden md:flex">
                            <Menu>
                                <MenuButton>
                                    Departments <ArrowDropDownIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem as="a">
                                        <Link to={"/departments/IT"}>IT</Link>
                                    </MenuItem>
                                    <MenuItem as="a" href="#">
                                        CSE
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton>
                                    Facilities <ArrowDropDownIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem as="a" href="#">
                                        Link 1
                                    </MenuItem>
                                    <MenuItem as="a" href="#">
                                        Link 2
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton>
                                    Academics <ArrowDropDownIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem as="a" href="/Programme">
                                        Link 1
                                    </MenuItem>
                                    <MenuItem as="a" href="#">
                                        Link 2
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton>
                                    Exams & Results <ArrowDropDownIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem as="a" href="#">
                                        Link 1
                                    </MenuItem>
                                    <MenuItem as="a" href="#">
                                        Link 2
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton>
                                    Alumni <ArrowDropDownIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem as="a" href="#">
                                        Link 1
                                    </MenuItem>
                                    <MenuItem as="a" href="#">
                                        Link 2
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton>
                                    Login <ArrowDropDownIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem as="a" href="#">
                                        Link 1
                                    </MenuItem>
                                    <MenuItem as="a" href="#">
                                        Link 2
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton>
                                    Reach us <ArrowDropDownIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem as="a" href="#">
                                        Link 1
                                    </MenuItem>
                                    <MenuItem as="a" href="#">
                                        Link 2
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                        
                    </div>
                </nav>
        
            {/* } */}
        </>
    );
}

export default Navbar;