let imagegallery = (props) => {
	return (
		<div className="gallery-template m-8 transition-transform duration-500 hover:transform hover:scale-105 ">
			<div>
				<img
					className="w-[17rem] h-40 md:w-[18rem] md:h-50 border rounded-2xl cursor-pointer"
					src={props.item.img}
				/>
			</div>
		</div>
	);
};
export default imagegallery;
