enyo.kind({
	name: "korhogo.Panehost",
	kind: enyo.Control,
	fit: true,
	headerTotabentity: {},
	headerCount: 0,

	published: {
		panes: []
	},
	
	components:[
			{tag: "div", name:"tabWidget", fit: true, attributes:{ height: "100%"}, components:[
				{tag: "ul", name : "tabHeader"},
				{tag: "div", name: "tabContainer"}
			]}
	],
	
	addTabItemComponent: function( header, uiComponent, index)
	{
	   var prepender = this.$.tabWidget.getId();
		var currentheaderCount = this.headerCount++;
		var componentId = prepender + 'brz_fragment-' + currentheaderCount;
		var componentHref = '#' + componentId;
		this.headerTotabentity[header] =  new Array();
		this.headerTotabentity[header]["tabheader"] = this.createTabHeader(header, componentHref, this.$.tabHeader); 
		this.headerTotabentity[header]["tabhontent"] = this.createTabContent(componentId, uiComponent, this.$.tabContainer);  
		this.refresh();		
	},
	
	create: function() {
      this.inherited(arguments); 
	},
	
	rendered: function() {
		this.inherited(arguments);
		var name = "#" + this.$.tabWidget.getId();	  
		$(name).tabs();
	},
	
	removeComponent: function(header)	
	{
	},
	
	createTabHeader: function(header, paramhref, hostingContainer)
	{		
		var tabHeader = new enyo.Control({
							tag: 'li',
							container: hostingContainer,
							style: 'color: blue'
						});
						
		var anchor = new enyo.Control({ tag:'a', attributes:{ href: paramhref}, content: header, container: tabHeader});
		return tabHeader;
	},
	
	createTabContent: function(tagId, tabContent, hostingContainer)
	{
		var netcontrol = new enyo.Control({ 
							tag:"div",
							container: hostingContainer,							
							name: tagId, 
							content: tabContent
						});
		return netcontrol;
	},

	refresh: function()
	{
		var name = "#" + this.$.tabWidget.getId();	  
		 
		this.$.tabWidget.render();
		$('#tabs').tabs('destroy');
		this.$.tabHeader.render();
		this.$.tabContainer.render(); 	  
		 $(name).tabs();
		 $(name).tabs('destroy');
		 $(name).tabs();
	},
	
	addTabItems: function(tabItem)
	{
		tabItem["tabheader"].container = this.$.tabHeader;
		tabItems["tabhontent"].container = this.$.tabContainer;
	}
	
});