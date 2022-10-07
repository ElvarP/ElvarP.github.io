/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				oswald: ["Oswald", "sans-serif"],
				ubuntu: ["Ubuntu", "sans-serif"],
				openSans: ["Open Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
				spaceMono: ["Space Mono", "sans-serif"],
				robotoMono: ["Roboto Mono", "sans-serif"],
				ubuntuMono: ["Ubuntu Mono", "sans-serif"],
				notoSansMono: ["Noto Sans Mono", "sans-serif"],
				ibmPlexMono: ["IBM Plex Mono", "sans-serif"],
				ptMono: ["PT Mono", "sans-serif"],
				novoMono: ["Novo Mono", "monospace"],
			},
		},
	},
	plugins: [],
};
