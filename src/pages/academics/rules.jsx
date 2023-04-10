export default function rules() {
	return (
		<>
			<p className="text-xl ml-10 font-bold text-blue-800 underline mt-12">
				ACADEMICS RULES AND REGULATIONS{" "}
			</p>
			<div className="row w-screen">
				<div className="col-3">
					<div
						className="nav flex-column nav-pills text-sm"
						id="v-pills-tab"
						role="tablist"
						aria-orientation="vertical"
					>
						<div
							className="nav flex-column nav-pills text-left py-10 justify-items-start"
							id="tab"
							role="tablist"
						>
							<a
								className="nav-link bg-slate-400 text-black mb-1"
								id="YEAR20-tab"
								data-toggle="pill"
								href="#YEAR20"
								role="tab"
								aria-controls="YEAR20"
								aria-selected="false"
							>
								R20 Academic Rules & Regulations (Nov. 2021)
							</a>
							<a
								className="nav-link bg-slate-400 mb-1"
								id="YEAR18-tab"
								data-toggle="pill"
								href="#YEAR18"
								role="tab"
								aria-controls="YEAR18"
								aria-selected="false"
							>
								R18 Academic Rules & Regulations ( w.e.f 2018-19)
							</a>
							<a
								className="nav-link bg-slate-400 mb-1"
								id="YEAR14-tab"
								data-toggle="pill"
								href="#YEAR14"
								role="tab"
								aria-controls="YEAR14"
								aria-selected="false"
							>
								R14 Academic Rules & Regulations ( 2016)
							</a>
							<a
								className="nav-link bg-slate-400 mb-1"
								id="YEAR14-16-tab"
								data-toggle="pill"
								href="#YEAR14-18"
								role="tab"
								aria-controls="YEAR14-18"
								aria-selected="false"
							>
								R14 Academic Rules & Regulations ( w.e.f 2014-18)
							</a>
							<a
								className="nav-link bg-slate-400 mb-1"
								id="YEAR10-tab"
								data-toggle="pill"
								href="#YEAR10"
								role="tab"
								aria-controls="YEAR10"
								aria-selected="false"
							>
								R10 Academic Rules & Regulations ( w.e.f 2010-14)
							</a>
						</div>
					</div>
				</div>
				<div className="flex left-navcontent">
					<div className="tab-content" id="tabContent">
						<div
							className="tab-pane fade show active ml-5"
							id="YEAR20"
							role="tabpanel"
							aria-labelledby="YEAR20-tab"
						>
							<div className="mt-4">
								<h1 className="text-start text-xl text-neutral-900">
									R20 Academic Rules & Regulations (Nov. 2021)
								</h1>
								<embed
									src="/src/assets/academics/patent2019.pdf"
									width={800}
									height={500}
								></embed>
							</div>
						</div>
						<div
							className="tab-pane fade mt-4 ml-5"
							id="YEAR18"
							role="tabpanel"
							aria-labelledby="YEAR18-tab"
						>
							<h1 className="text-start text-xl text-neutral-900">
								R18 Academic Rules & Regulations ( w.e.f 2018-19)
							</h1>
							<embed
								src="/src/assets/academics/patent2020.pdf"
								width={800}
								height={500}
							></embed>
						</div>
						<div
							className="tab-pane fade mt-4 ml-5"
							id="YEAR14-18"
							role="tabpanel"
							aria-labelledby="YEAR14-18-tab"
						>
							<h1 className="text-start text-xl text-neutral-900">
								R14 Academic Rules & Regulations ( w.e.f 2014-18)
							</h1>
							<embed
								src="/src/assets/academics/patent2021.pdf"
								width={800}
								height={500}
							></embed>
						</div>
						<div
							className="tab-pane fade mt-4 ml-5"
							id="YEAR10"
							role="tabpanel"
							aria-labelledby="YEAR10-tab"
						>
							<h1 className="text-start text-xl text-neutral-900">
								R10 Academic Rules & Regulations ( w.e.f 2010-14)
							</h1>
							<embed
								src="/src/assets/academics/patent2021.pdf"
								width={800}
								height={500}
							></embed>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
