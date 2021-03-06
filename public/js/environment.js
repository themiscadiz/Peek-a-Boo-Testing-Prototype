var sphereArray;
var diamSphere = 2.5;
var shapeShere = 24;

let mixer;
const clock = new THREE.Clock();

let loader;
let model;

let time = 0;
let counter = 100;

let ballIsMoving = false;

// const raycaster = new THREE.Raycaster();

function createEnvironment(scene) {

  console.log("Adding environment");

  let ground = getGround();
  ground.position.y = 0.01;
  ground.rotation.x = - Math.PI / 2;
  ground.scale.set(.01, .01, .01);
  scene.add(ground);

  let sphere = createSphere(diamSphere, shapeShere, shapeShere);
  // sphere.position.x = -20;
  sphere.position.x = -14;
  sphere.position.y = 2.5;
  sphere.position.z = -3;

  scene.add(sphere);

  // To move sphere
  sphere.name = 'sphere-1';
  sphereArray = scene.getObjectByName('sphere-1');

  window.addEventListener("mouseup", (e) => ballBounce(e), false);

  // light
  // White directional light at half intensity shining from the top.
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);


  // ****************
  // ****************
  // ****************

  // ROOM
  // Load the GLTF space model
  loader = new THREE.GLTFLoader();
  //  var axis = new THREE.Vector3(0, 4, 0).normalize();
  //  var speed = 0.01;
  loader.load(
    // resource URL
    //  './assets/staticModel/icosahedron.glb',
    './assets/staticModel/Room_02.glb',
    // './assets/staticModel/ToyBox.glb',
    // onLoad callback: what get's called once the full model has loaded
    gltf => {
      model = gltf.scene;
      scene.add(gltf.scene);
      model.position.z = -20;
      model.rotation.y = (Math.PI * 3) / 2.2;
      //  model.rotation.y = THREE.Math.degToRad(90);
      //  model.rotateOnAxis(axis, speed);
      model.scale.set(1, 1, 1);

      // model.scale.set(.10, .10, .10);
      console.log("model here");
      console.log(scene.children);
    },
    // onProgress callback: optional function for showing progress on model load
    undefined,
    // onError callback
    error => {
      console.error(error);
    }
  );


  // ****************
  // ****************
  // ****************
  // OTHER BEAR
  // Load the GLTF space model
  loader = new THREE.GLTFLoader();
  loader.load(
    // resource URL
    './assets/staticModel/bear.glb',
    // onLoad callback: what get's called once the full model has loaded
    gltf => {
      model = gltf.scene;
      scene.add(gltf.scene);
      model.position.x = -12;
      model.position.z = 12;
      model.position.y = -1;

      model.scale.set(.05, .05, .05);
      console.log("model here");
      console.log(scene.children);
    },
    // onProgress callback: optional function for showing progress on model load
    undefined,
    // onError callback
    error => {
      console.error(error);
    }

  );

  // ****************
  // ****************
  // ****************

  // ****************
  // ****************
  // ****************
  // OTHER BEAR
  // Load the GLTF space model
  loader = new THREE.GLTFLoader();
  loader.load(
    // resource URL
    './assets/staticModel/bear.glb',
    // onLoad callback: what get's called once the full model has loaded
    gltf => {
      model = gltf.scene;
      scene.add(gltf.scene);
      model.position.x = -6;
      model.position.z = 12;
      model.position.y = -1;

      model.scale.set(.05, .05, .05);
      console.log("model here");
      console.log(scene.children);
    },
    // onProgress callback: optional function for showing progress on model load
    undefined,
    // onError callback
    error => {
      console.error(error);
    }

  );

  // ****************
  // ****************
  // ****************

  // ****************
  // ****************
  // ****************
  // OTHER BEAR
  // Load the GLTF space model
  loader = new THREE.GLTFLoader();
  loader.load(
    // resource URL
    './assets/staticModel/bear.glb',
    // onLoad callback: what get's called once the full model has loaded
    gltf => {
      model = gltf.scene;
      scene.add(gltf.scene);
      model.position.x = 50;
      model.position.z = 0;
      model.position.y = -2;

      model.scale.set(.1, .1, .1);
      console.log("model here");
      console.log(scene.children);
    },
    // onProgress callback: optional function for showing progress on model load
    undefined,
    // onError callback
    error => {
      console.error(error);
    }

  );
  

  // ****************
  // ****************
  // ****************


  // ****************
  // ****************
  // ****************

  // BLOCK TOY
  // Load the GLTF space model
  loader = new THREE.GLTFLoader();
  loader.load(
    // resource URL
    './assets/block/scene.gltf',
    // onLoad callback: what get's called once the full model has loaded
    gltf => {
      model = gltf.scene;
      scene.add(gltf.scene);
      model.position.x = -9;
      model.position.z = 12;
      model.position.y = 1;
      model.scale.set(1, 1, 1);
      console.log("model here");
      console.log(scene.children);
    },
    // onProgress callback: optional function for showing progress on model load
    undefined,
    // onError callback
    error => {
      console.error(error);
    }
  );

  // ****************
  // ****************
  // ****************

  // BLOCK TOY
  // Load the GLTF space model
  loader = new THREE.GLTFLoader();
  loader.load(
    // resource URL
    './assets/tricycle_rig/scene.gltf',
    // onLoad callback: what get's called once the full model has loaded
    gltf => {
      model = gltf.scene;
      scene.add(gltf.scene);
      model.position.x = 30;
      model.position.z = -20;
      model.position.y = 0;
      model.scale.set(1, 1, 1);
      console.log("model here");
      console.log(scene.children);
    },
    // onProgress callback: optional function for showing progress on model load
    undefined,
    // onError callback
    error => {
      console.error(error);
    }
  );

  // ****************
  // ****************
  // ****************

  // Animation
  // load the model texture
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("./assets/models/Spotted-Jelly.png");
  // read more about why we need these settings here
  // https://threejs.org/docs/#examples/en/loaders/GLTFLoader
  texture.encoding = THREE.sRGBEncoding;
  texture.flipY = false;

  // Load the GLTF model
  loader = new THREE.GLTFLoader();
  loader.load(
    // FILE
    './assets/models/Spotted-Jelly.gltf',

    // onLoad callback: what get's called once the full model has loaded
    (gltf) => {
      model = gltf.scene;
      // model.position.z = -3; // change the z position a bit
      addTextureToModel(texture); // add a texture to the model


      let scaleModel = 2
      model.scale.x = scaleModel;
      model.scale.y = scaleModel;
      model.scale.z = scaleModel;

      model.position.z = -4;
      model.position.x = 0;
      model.position.y = 2;

      // setup the model animation
      // read more about animation here: 
      // https://threejs.org/docs/#manual/en/introduction/Animation-system
      // a mixer object controls the actual playback of the animation
      mixer = new THREE.AnimationMixer(gltf.scene);
      // the gltf animations array contains animtation clips for the model
      console.log(gltf.animations);
      gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play(); // start playing each animation clip
      });
      // ****
      // ****
      // ****

      // scene.add(gltf.scene);
      
      // ****
      // ****
      // ****
    },
    // onProgress callback: optional function for showing progress on model load
    undefined,
    // onError callback
    (error) => {
      console.error(error);
    }
  );

  // ****************
  // ****************
  // ****************
}

function addTextureToModel(textureToAdd) {
  model.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.map = textureToAdd;

      // Probably need the lines below if you will change the texture after 
      // the model has been added to the scene
      // child.material.needsUpdate = true;
      // child.material.map.needsUpdate = true;
    }
  });
}

function getGround() {
  // load a texture, set wrap mode to repeat
  const texture = new THREE.TextureLoader().load("../assets/grasslight-big.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(25, 25);

  var geometry = new THREE.PlaneGeometry(20000, 20000);
  let material = new THREE.MeshBasicMaterial({ map: texture });
  var mesh = new THREE.Mesh(geometry, material);

  mesh.receiveShadow = true;
  return mesh;

}


function createSphere(size) {
  var geometry = new THREE.SphereGeometry(size, 24, 24);
  //replace new THREE.MeshBasicMaterial for new THREE.MeshPhongMaterial

  //  // ****with texture
  // let texture = new THREE.TextureLoader().load("../assets/ball-texture-01.png");
  // let material = new THREE.MeshBasicMaterial({ map: texture });
  // myMesh = new THREE.Mesh(geometry, material);
  // return myMesh;


  var material = new THREE.MeshPhongMaterial({
    color: '#eb3471'
  });

  var mesh = new THREE.Mesh(
    geometry,
    material
  );

  mesh.castShadow = true;
  return mesh;
}


function ballBounce(){
  // ballIsMoving = true;
  ballIsMoving = !ballIsMoving;
}



function updateEnvironment(scene) {

  // let moveSphere = bounceBall();
  // console.log(moveSphere);

  const delta = clock.getDelta();
  if (mixer) {
    // Update the animation mixer on each frame
    mixer.update(delta);
  }

  if(ballIsMoving){
    // sphereArray.rotation.x = time * 4;
    // sphereArray.position.y = 0.5 + Math.abs(Math.sin(time * 3)) * 2;
    // sphereArray.position.z = Math.cos(time) * 4;

    sphereArray.position.y = 2.4 + Math.abs(Math.sin(time * 3)) * 2;
    sphereArray.position.x = -14 + Math.cos(time) * 1;
    sphereArray.position.z = 0 + Math.cos(time) * 2;

    time += delta;
  }
  if(!ballIsMoving){
    sphereArray.position.y = 2.40;
    sphereArray.position.x = -14;
    sphereArray.position.z = 0;
    // sphereArray.position.y = 2.5 + Math.abs(Math.sin(counter * 3)) * 2;
    // sphereArray.position.x = -20 + Math.cos(counter) * 4;
    // counter = counter -0.1;
  }

  // console.log(ballIsMoving);
  // sphereArray.position.x += 0.01;
}


