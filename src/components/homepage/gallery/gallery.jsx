import React from "react";
import Modal from "react-bootstrap/Modal";

const Gallery = (props) => {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<div className="gallery-template m-8 transition-transform duration-500 hover:transform hover:scale-105 ">
			<div onClick={() => setModalShow(true)}>
				<img
					className="w-[20rem] h-60 md:w-[27rem] md:h-72 border rounded-2xl cursor-pointer"
					src={props.item.img}
				/>
			</div>
			<div className="w-[20rem] md:w-[27rem]  ">
				<div className=" text-lg md:text-2xl font-bold">
					{props.item.imgname}
				</div>
				{props.item.imgdescription}
			</div>
			{modalShow && (
				<Modal
					show={modalShow}
					onHide={() => setModalShow(false)}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<img src={props.item.img} alt="LargeImage" />
				</Modal>
			)}
		</div>
	);
};
export default Gallery;
