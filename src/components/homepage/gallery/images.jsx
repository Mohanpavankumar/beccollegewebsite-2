import React from "react";
import Modal from 'react-bootstrap/Modal';


let ImageGallery = (props) => {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<div className="gallery-template m-8 transition-transform duration-500 hover:transform hover:scale-105 ">
			<div onClick={()=>setModalShow(true)}>
				<img
					className="w-[17rem] h-40 md:w-[18rem] md:h-50 border rounded-2xl cursor-pointer"
					src={props.item.img}
				/>
			</div>
			{
				modalShow && <Modal
					show={modalShow}
					onHide={() => setModalShow(false)}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<img src={props.item.img} alt="LargeImage" />
				</Modal>
			}
		</div>
	);
};
export default ImageGallery;
