var Pitbull = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("id", "pitbull");
};

Pitbull.prototype = Object.create(Dancer.prototype);
Pitbull.prototype.constructor = Pitbull;

Pitbull.prototype.step = function () {
  Dancer.prototype.step.call(this);

  this.$node.animate({
    //top : "",
    //bottom: "",
    left: "toggle"
  }, 5000, function () {
  });
};