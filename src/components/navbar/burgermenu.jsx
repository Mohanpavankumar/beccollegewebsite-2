import React from "react";
import "./burger.css";
import { burgerData } from "./burgerData";
import { BurgerList } from "./burgerLinks";


const Menu = ({ className }) => (
    <div className={className}>
        <BurgerList nodes={burgerData}/>
    </div>
);


const Hamburger = ({ className, onClick }) => (
    <button onClick={onClick} className={className}>
        <span className={"hamburger-box"}>
            <span className={"hamburger-inner"} />
        </span>
    </button>
);

export default class HamburgerMenu extends React.Component {
    state = {
        isOpen: false
    };

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <>
                <Hamburger
                    onClick={this.handleClick}
                    className={
                        this.state.isOpen
                            ? `${"hamburger"} ${"hamburgeractive"}`
                            : "hamburger"
                    }
                />
                <Menu
                    className={
                        this.state.isOpen
                            ? `${"hamburger-navigation"} ${"hamburger-navigationactive"}`
                            : "hamburger-navigation"
                    }
                />
            </>
        );
    }
}



