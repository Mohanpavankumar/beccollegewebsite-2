import gallerydata from "/src/Data/homepage/imggallerydata.js";
import Gallery from "/src/components/homepage/gallery/images.jsx";

const Galery = gallerydata.map((galleryarg) => {
	return <Gallery key={galleryarg.id} item={galleryarg} />;
});

export default function gallery() {
	return (
		<>
			<div className="flex flex-wrap justify-center">{Galery}</div>
		</>
	);
}
