/*enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", content: "Hello World"},
		{kind: "enyo.Scroller", fit: true, components: [
			{name: "main", classes: "nice-padding", allowHtml: true}
		]},
		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button", content: "Tap me", ontap: "helloWorldTap"}
		]}
	],
	helloWorldTap: function(inSender, inEvent) {
		this.$.main.addContent("The button was tapped.<br/>");
	}{kind: "korhogo.BrazzaApp", fit: true, name: "host", style: "height: 90%"}
});*/
enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", style: "height: 30px",content: "Brazza-ville[Sinsha]"},
		{kind: "enyo.Scroller", fit: true, components: [
			{kind: "korhogo.BrazzaApp", fit: true, name: "host", style: "height: 99.9%"}
		]},
		{kind: "onyx.Toolbar", style: "height: 10px", components: [
			{kind: "onyx.Button", content: "BienVenue mon freere", ontap: "helloWorldTap"}
		]}
	],
	helloWorldTap: function(inSender, inEvent) {
		//this.$.main.addContent("The button was tapped.<br/>");
	}
});