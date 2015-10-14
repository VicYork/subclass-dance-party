var Pitbull = function(top, left, timeBetweenSteps){
	Dancer.call(this, top, left, timeBetweenSteps);
this.$node.attr("id", "pitbull");
};

Pitbull.prototype = Object.create(Dancer.prototype);
Pitbull.prototype.constructor = Pitbull;

Pitbull.prototype.step = function(){
	Dancer.prototype.step.call(this);
	//var grow = function(){
	//	this.$node.animate({
	//	width: 32px;
	//	height: 32px;
	//},1000, grow();)
  //
	//};

};