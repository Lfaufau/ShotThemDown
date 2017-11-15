var Ennemy = function(width, height) {

    this.color = colors[Math.floor(Math.random()*colors.length)];
    this.position = new THREE.Vector2(Math.floor(Math.random()*width),
      Math.floor(Math.random()*height));

//    this.bullets = new Array();
    this.direction = Math.PI / 2;
    this.speed = 0;

    this.material = new THREE.MeshLambertMaterial({
        color: this.color,
        });

    ennemyMesh = new THREE.Mesh(new THREE.CylinderGeometry(0, 10, 10, 12, 12, false), this.materialBumper);
    ennemyMesh.rotation.x = Math.PI / 2 ;

    sphere = new THREE.SphereGeometry(6, 8, 8);
    THREE.GeometryUtils.merge(sphere, ennemyMesh);


    this.graphic = new THREE.Mesh(sphere, this.ennemyMesh);
    this.graphic.position.z = 6;
    //this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), this.direction);
};

Ennemy.prototype.accelerate = function (distance) {
    var max = 2;

    this.speed += distance / 4;
    if (this.speed >= max) {
        this.speed = max;
    }
};

Ennemy.prototype.move = function () {
    var moveTo = new THREE.Vector3(
        this.speed * Math.cos(this.direction) + this.graphic.position.x,
        this.speed * Math.sin(this.direction) + this.graphic.position.y,
        this.graphic.position.z
    );

    this.graphic.position = moveTo;
    if (this.speed > 0) {
        this.speed = this.speed - 0.04;
    }
    else if (this.speed < 0) {
        this.speed = this.speed + 0.04
    }
};
