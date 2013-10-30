enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", style: "height: 30px",content: "Brazza-ville[Sinsha]"},
		{kind: "korhogo.BrazzaApp", fit: true, name: "host", style: "height: 99.9%"},		
		{kind: "onyx.Toolbar", style: "height: 10px"} 
	],
	
	GetHost: function()
	{
		return this.$.host;
	},
	
	rendered: function()	
	{
		this.inherited(arguments);
	}
});