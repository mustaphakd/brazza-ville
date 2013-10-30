enyo.kind({
	name: "PaneChrome",
	kind: "Panels",
	fit: true,
	arrangerKind: "TopBottomArranger",
	
	published: {
		title : ""
	},
	
	components: [
		{name: "TopHostContainer", kind:"korhogo.Panehost", style: "margin-left: 1px; height: 100%;", content: "Top host container", fit: true},
		{name: "BottomHostContainer", kind: "korhogo.Panehost", style: "margin-left: 1px; height: 100%; ", content: "Top host dsgd", fit: true} //Panehost
	],
	
	GetTopContainer: function()
	{
		if( this.topContainer === null)
		{
			if( this.hasNode() && this.$.TopHostContainer.hasNode())
			{
				this.topContainer = this.$.TopHostContainer;
			}
		}
		return this.topContainer;
	},
	
	GetBottomContainer: function()
	{
		if( this.bottomContainer === null)
		{
			if( this.hasNode() && this.$.BottomHostContainer.hasNode())
			{
				this.bottomContainer = this.$.BottomHostContainer;
			}
		}
		return this.bottomContainer;
	},
	
	//* @private
	topContainer: null,
	bottomContainer: null,
	previousIndex: null,

	rendered: function()	
	{
		this.inherited(arguments);
		this.previousIndex = this.index;
		/*
			this.$.TopHostContainer.addTabItemComponent( "t Mustmus", "we iflkjlk fasjfl;kjas jl;kjkj;j;ljl;k", 0);
			this.$.TopHostContainer.addTabItemComponent( "rwe", "hp;s jp;sj hola hola hola", 0);
			
			this.$.BottomHostContainer.addTabItemComponent( " Mustmus", "we iflkjlk fasjfl;kjas jl;kjkj;j;ljl;k", 0);
			this.$.BottomHostContainer.addTabItemComponent( "musmsusmsus", "hp;s jp;sj hola hola hola", 0);
		*/
	},
	
	AddComponentToTopContainer: function(header, uiComponent)
	{
		var container =  this.GetTopContainer();
		container.addTabItemComponent( header, uiComponent, 0);
	},
	
	AddComponentToBottomContainer: function(header, uiComponent)
	{
		var container = this.GetBottomContainer();
		container.addTabItemComponent( header, uiComponent, 0);
	},
	
	handlers: {
		onTransitionFinish: "TransitionFinish"
	},
	
	TransitionFinish: function(inSender, inEvent)
	{
		var tc = this.GetTopContainer();
		tc.applyStyle("height","100%");
		tc.applyStyle("margin-left","1px");
		tc = this.GetBottomContainer();
		tc.applyStyle("height","100%");
		tc.applyStyle("margin-left","1px");
		
		this.previousIndex = this.previousIndex || 0;
		if(this.index != this.previousIndex)
		{
			var pnls = this.getPanels();
			var previousControl = pnls[this.previousIndex];
			previousControl.applyStyle("z-index",1);
			var currentControl = pnls[this.index];
			currentControl.applyStyle("z-index",3);
			this.previousIndex = this.index;
			
			var controlMatrix = this.GetComputerTransformStyle(currentControl);
			var mtrx = new korhogo.Matrix(controlMatrix);
			
			if(mtrx.hasBeenTranslated())
			{
				this.AdjustHorizontalTranslation(currentControl);
			}
		}
		else
		{
			var pnls = this.getPanels();
			var previousControl = pnls[this.previousIndex];
			previousControl.applyStyle("z-index", '');
			previousControl.applyStyle("z-index",3);
			var previousControlMatrix = this.GetComputerTransformStyle(previousControl);
			var mtrx = new korhogo.Matrix(previousControlMatrix);
			
			if(mtrx.hasBeenTranslated())
			{
				this.AdjustHorizontalTranslation(previousControl);
			}
		}
	},
	
	GetComputerTransformStyle: function( element)
	{
		var matrix = element.getComputedStyleValue("-webkit-transform") ||
					 element.getComputedStyleValue("-moz-transform") ||
					 element.getComputedStyleValue("-ms-transform") ||
					 element.getComputedStyleValue("-o-transform") ||
					 element.getComputedStyleValue("transform") || 
					 "matrix(1, 0, 0, 1, 0, 0)";
						
		return matrix;
	},

	AdjustHorizontalTranslation: function(inControl)
	{
		var trnsProp = enyo.dom.getCssTransformProp(); 
		var domTrx = inControl.domTransforms
		var offsety = parseFloat(domTrx.translateY);
		var deltaY = .98 * offsety;
		var newYtrxval = '';
		if(offsety > 0)
		{
			newYtrxval = (offsety - deltaY) + "px";
		}
		else
		{
			newYtrxval = (offsety + deltaY) + "px";
		}
		inControl.domTransforms.translateY = newYtrxval;
		enyo.dom.transformsToDom(inControl);
	}
});