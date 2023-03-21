import alumnidata from "/src/Data/homepage/alumniData.js";
import allalumni from "/src/components/homepage/alumni/all-alumni.jsx";

const alalumni = alumnidata.map((alumniarg) => {
	return <allalumni key={alumniarg.id} item={alumniarg} />;
});

export default function alumni() {
	return (
		<>
			<div className="flex flex-wrap justify-center">{allalumni}</div>
		</>
	);
}
