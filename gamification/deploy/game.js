function Parallax(element, options){
Parallax.prototype.gameify = function(){
  var xOffset = this.vx * .80 * (this.invertX ? -1 : 1);
  var yOffset = this.vy * .80 * (this.invertY ? -1 : 1);
    console.log(xOffset);
    if(xOffset > 5){
      alert('Get That Corn Out Of My Face')
    }
};
};
