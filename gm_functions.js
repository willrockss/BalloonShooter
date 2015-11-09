function instance_create(x_, y_, obj) {
	return e = Crafty.e(obj).attr({x: x_, y: y_});
}
function getRandomArbitary(min, max)
{
  return Math.random() * (max - min) + min;
}

/*
function get_instance_by_id(index){
	return Crafty('2D').get()[index];
}*/