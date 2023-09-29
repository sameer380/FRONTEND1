export const routes = [
	{
		name: "HOME",
		linl: "/",
	},
	{
		name: "ABOUT US",
		link: "/about",
		subRoutes: [
			{
				name: "Profile",
				link: "about/profile",
			},
			{
				name: "Administration",
				link: "about/administration",
				subRoute: [
					{
						name: "Principal",
						link: "about/administration/principal",
					},
					{
						name: "Vice Principal",
						link: "about/administration/vice-principal",
					},
					{
						name: "Dean",
						link: "about/administration/dean",
					},
					{
						name: "Academic Officer",
						link: "about/administration/academic-officer",
					},
					{
						name: "IQA Coordinator",
						link: "about/administration/iqa",
					},
					{
						name: "Finance Officer",
						link: "about/administration/finance-officer",
					},
					{
						name: "Nodal Officer",
						link: "about/administration/nodal-officer",
					},
				],
			},
			{
				name: "Campus View",
				link: "/about/campus",
			},
			{
				name: "How To Reach",
				link: "/about/reach",
			},
			{
				name: "RTI",
				link: "/about/RTI",
			},
		],
	},

	{
		name: "Departments",
		link: "/departments",

		subRoutes: [
			{
				name: "language",
				link: "departments/language",

				subRoute: [
					{
						name: "English",
						link: "departments/language/english",
					},
					{
						name: "Hindi",
						link: "departments/language/hindi",
					},
					{
						name: "Telugu",
						link: "departments/language/telugu",
					},
				],
			},

			{
				name: "Science",
				link: "departments/science",

				subRoute: [
					{
						name: "Botany",
						link: "departments/science/botany",
					},
					{
						name: "Chemestry",
						link: "departments/science/chemestry",
					},
					{
						name: "Computer Science",
						link: "departments/science/computer-science",
					},
					{
						name: "Mathmetics",
						link: "departments/science/mathmetics",
					},
					{
						name: "Statistics",
						link: "departments/science/statistics",
					},
					{
						name: "Physics",
						link: "departments/science/physics",
					},
					{
						name: "Zoology",
						link: "departments/science/zoology",
					},
					{
						name: "Electronics",
						link: "departments/science/electronics",
					},
				],
			},
			{
				name: "Arts and Commerce",
				link: "departments/arts",

				subRoute: [
					{
						name: "Botany",
						link: "departments/arts/commerce",
					},
					{
						name: "Chemestry",
						link: "departments/arts/economics",
					},
					{
						name: "Business Administration",
						link: "departments/arts/business",
					},
				],
			},
		],
	},

	{
		name: "ACADEMICS",
		link: "/academics",
	},

	{
		name: "ADMISSIONS",
		link: "/admissions",
	},

	{
		name: "ALUMUNI",
		link: "/alumuni",
	},
	{
		name: "GALARY",
		link: "/galarry",
	},
	{
		name: "RESULTS",
		link: "/results",
	},
	{
		name: "ACTIVITY",
		link: "/activity",
	},
	{
		name: "CONTACT",
		link: "/contact",
	}
];