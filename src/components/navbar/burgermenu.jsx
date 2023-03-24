import React from "react";
import "./burger.css";
import { navigationData } from "./navigation";
import { BurgerList } from "./burgerList";


const Menu = ({ className, handleClick }) => (
	<div className={className}>
		<BurgerList nodes={navigationData} handleClick={handleClick} />
	</div>
);

const Hamburger = ({ className, onClick, isOpen }) => (
	<button onClick={onClick} className={className}>
		{!isOpen ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>}

	</button>
);

export default class HamburgerMenu extends React.Component {
	state = {
		isOpen: false,
	};

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen,
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
					isOpen={this.state.isOpen}
				/>
				{this.state.isOpen && (
					<Menu
						className={
							this.state.isOpen
								? `${"hamburger-navigation"} ${"hamburger-navigationactive"}`
								: "hamburger-navigation"
						}
						handleClick={this.handleClick}
					/>
				)}
			</>
		);
	}
}
