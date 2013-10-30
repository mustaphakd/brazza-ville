enyo.kind({
		name: "korhogo.Matrix",
		kind: enyo.Object,
		m11:1,
		m12:0,
		m21:0,
		m22:1,
		m31:0,
		m32:0,
		//translation: {},
		//translation.x: this.m31,
		//translation.y: this.m32,
	
	constructor: function( inputMatString)
	{
		var values = inputMatString.split('(')[1];
			values = values.split(')')[0];
			values = values.split(',');
		this.m11 = values[0];
		this.m12 = values[1];
		this.m21 = values[2];
		this.m22 = values[3];
		this.m31 = values[4];
		this.m32 = values[5];
	},
	
	hasBeenTranslated: function()
	{
		return this.m31 !== 0 && this.m32 !== 0;
	},
	
	translationX: function()
	{
		return this.m31;
	},
	
	translationY: function()
	{
		return this.m32;
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
	}

});