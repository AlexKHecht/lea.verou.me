import { Question, SingleChoiceQuestion, MultiChoiceQuestion } from './models.js'

export default [
	new MultiChoiceQuestion({
		id: "interactive_elements",
		question: "Static site generators",
		description: "These generate a set of HTML files from data and templates, during a build step. The website is then served as a static site. Which have you used?",
		optionComments: false,
		allowCustom: true,
		options: [
			{
				"label": "Eleventy",
				"value": "eleventy",
			},
			{
				"label": "Gatsby",
				"value": "gatsby",
			},
			{
				"label": "Hugo",
				"value": "hugo",
			},
			{
				"label": "Jekyll",
				"value": "jekyll",
			},
			{
				"label": "Next.js",
				"value": "next",
			},
			{
				"label": "Nuxt.js",
				"value": "nuxt",
			},
			{
				"label": "🚫 None of the above",
				"value": "none",
				"sentiments": null
			}
		]
	}),
];