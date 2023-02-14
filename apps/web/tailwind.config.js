const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind");
const { join } = require("path");

module.exports = {
	presets: [require("../../tailwind-workspace-preset.js")],
	content: [
		join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
		...createGlobPatternsForDependencies(__dirname),
	],
	darkMode: "media",
	theme: {
		extend: {},
		aspectRatio: {
			auto: "auto",
			square: "1 / 1",
			video: "16 / 9",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12",
			13: "13",
			14: "14",
			15: "15",
			16: "16",
		},
	},
	variants: {
		extend: {},
		aspectRatio: ["responsive", "hover"],
	},
	corePlugins: {
		aspectRatio: false,
	},
};
