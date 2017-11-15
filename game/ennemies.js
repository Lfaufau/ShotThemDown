var Enemy = function() {
    this.name = "enemy";
    this.moveDown = true;
    this.color = colors[Math.floor(Math.random()*colors.length)];
    this.life = 1;
    this.position = new THREE.Vector2(100,100);

//    this.bullets = new Array();
    this.direction = Math.PI / 2;
    this.speed = 3;

    this.material = new THREE.MeshLambertMaterial({
        color: this.color,
        });

    enemyMesh = new THREE.Mesh(new THREE.CylinderGeometry(0, 10, 10, 12, 12, false), this.materialBumper);
    enemyMesh.rotation.x = Math.PI / 2 ;

    sphere = new THREE.SphereGeometry(6, 8, 8);
    THREE.GeometryUtils.merge(sphere, enemyMesh);

    this.graphic = new THREE.Mesh(sphere, this.enemyMesh);
    this.graphic.position.z = 6;
    //this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), this.direction);
    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;

};

Enemy.prototype.move = function () {
  if (this.graphic.position.y + HEIGHT / 2 > HEIGHT)
    this.moveDown = false;

    if (this.graphic.position.y + HEIGHT / 2 < 0)
      this.moveDown = true;

this.speed = 3;

  move = 1;
  if (!this.moveDown)
    move = -1;

  var moveTo = new THREE.Vector3(
        this.graphic.position.x,
        this.speed * move + this.graphic.position.y,
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
