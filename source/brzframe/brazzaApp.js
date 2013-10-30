enyo.kind({
	name: "korhogo.BrazzaApp",
	kind: "Panels",   //"FittableColumns",
	classes: "panels enyo-unselectable", //"enyo-fit",
	realtimeFit: true,
	arrangerKind: "CollapsingArranger",
	wrap: false,
	components: [
		{kind: "FittableColumns", style: "width: 20%;", classes: "fittable-sample-shadow", components: [			
			{name: "LeftPanel", kind:"PaneChrome" }	//FittableRows
		]},
		{kind: "FittableColumns", style: "width: 20%;", classes: "fittable-sample-shadow", components: [
			{ name: "RightPanel", kind:"PaneChrome"} //, style: "background-color: brown"
		]},
		{kind: "FittableColumns", fit: true, classes: "fittable-sample-shadow", components: [
			{fit: true, style: "background-color: green", classes: "fittable-sample-fitting-color"}
		]}
	],
	
	getRightPanel : function()
	{
		return this.$.RightPanel;
	},
	
	getLeftPanel: function()
	{
		return this.$.LeftPanel;
	},
	
	rendered: function()	
	{
		this.inherited(arguments);
		this.getRightPanel().AddComponentToTopContainer("Bojour Mustmus", "we iflkjlk fasjfl;kjas jl;kjkj;j;ljl;k");
		this.getRightPanel().AddComponentToBottomContainer("encore", "fsa hkll;k hiohajnpfa rewar;nlk");
		
		this.getLeftPanel().AddComponentToTopContainer("one", "we iflkjlk fasjfl;kjas jl;kjkj;j;ljl;k");
		this.getLeftPanel().AddComponentToTopContainer("two", "we iflkjlk fasjfl;kjas jl;kjkj;j;ljl;k");
		this.getLeftPanel().AddComponentToTopContainer("three", "we iflkjlk fasjfl;kjas jl;kjkj;j;ljl;k");
		
			//this.$.TopHostContainer.addTabItemComponent( , 0);
			//this.$.TopHostContainer.addTabItemComponent( "musmsusmsus", "hp;s jp;sj hola hola hola", 0);
		
	},
});