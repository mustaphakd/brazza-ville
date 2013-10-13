enyo.kind({
	name: "korhogo.BrazzaApp",
	kind: "FittableColumns",
	classes: "enyo-fit",
	components: [
		{kind: "FittableRows", style: "width: 20%;", components: [
			{fit: true, style: "background-color: orange"},
			{kind: "onyx.Toolbar", components: [
				{kind: "onyx.Button", content: "express"}
			]}
		]},
		{kind: "FittableRows", style: "width: 20%;", classes: "fittable-sample-shadow", components: [
			{fit: true, style: ""},
			{kind: "onyx.Toolbar", components: [
				{kind: "onyx.Button", content: "meta-xplorer"}
			]}
		]},
		{kind: "FittableRows", fit: true, classes: "fittable-sample-shadow", components: [
			{fit: true, style: "background-color: green", classes: "fittable-sample-fitting-color"},
			{kind: "onyx.Toolbar", components: [
				{kind: "onyx.Button", content: "real estate"}
			]}
		]}
	]
});