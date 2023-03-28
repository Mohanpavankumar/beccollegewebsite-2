import ExamHeader from "/src/components/examheader/examheader.jsx";
import Staff from "/src/components/staff/staff.jsx";
import staffData from "/src/Data/staffData/examinationCell/staffData.js";

const StaffD = staffData.map((dataArg) => {
	return <Staff key={dataArg.staffId} item={dataArg} />;
});

export default function exampages() {
	return (
		<>
			<ExamHeader bannerName="Examination Cell" />
			<div className="staff-container grid grid-flow-row justify-center gap-6 mt-2 mb-2 md:grid-cols-2 md:justify-items-center lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
				{StaffD}
			</div>
		</>
	);
}
