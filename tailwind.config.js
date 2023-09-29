/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/Home.{js,jsx,ts,tsx}",
		"./src/**/Results.{js,jsx,ts,tsx}",
		"./src/**/Register.{js,jsx,ts,tsx}",
		"./src/**/Signin.{js,jsx,ts,tsx}",
		"./src/**/Footer.{js,jsx,ts,tsx}",
		"./src/**/Contact.{js,jsx,ts,tsx}",
		"./src/**/Admission.{js,jsx,ts,tsx}",
		"./src/**/UgPapers.{js,jsx,ts,tsx}",
		"./src/**/Modal .{js,jsx,ts,tsx}",
		"./src/**/Footer .{js,jsx,ts,tsx}",
		"./src/**/Loading .{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
