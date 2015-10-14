/**
 * Created by VicYork on 13/10/15.
 */
var DalaiLama = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("id", "dalaiLama");
  this.$node.append(('<img src="assets/dalai-lama-disobey.png">'));
};

DalaiLama.prototype = Object.create(Dancer.prototype);
DalaiLama.prototype.constructor = DalaiLama;

DalaiLama.prototype.step = function () {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();

  this.$node.animate({
    width: "70%",
    height: "70%"
    //opacity: 0.4,
    //marginLeft: "0.6in",
    //fontSize: "3em",
    //borderWidth: "10px"
  }, 1500, function () {
  }).toggle();


};