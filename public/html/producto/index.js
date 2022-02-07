import { GLTFLoader } from './GLTFLoader.js'
import { OrbitControls } from './OrbitControls.js'

const GLTF_URL = 'glb/star_destroyer/scene.gltf'

const canvas = document.querySelector('#planetario')

var prevPos = 0

let scene = new THREE.Scene()
//scene.background = new THREE.Color(0xffffff)

let camera = new THREE.PerspectiveCamera(
    100,
    canvas.offsetWidth/canvas.offsetHeight,
    0.01,
    1000
)
camera.position.set(26.163712255461412,15.48306802915865,95.99288517704842)

let renderer = new THREE.WebGLRenderer({
    antialias: true
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
addEventListener('resize', ()=>{
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
    camera.aspect = canvas.offsetWidth/canvas.offsetHeight
    camera.updateProjectionMatrix()
    renderer.render(scene, camera)
})

let controls = new OrbitControls( camera, renderer.domElement )
controls.enableDamping = true
controls.enableZoom = false;

//document.body.appendChild(renderer.domElement)
canvas.appendChild(renderer.domElement)

var obj
let loader = new GLTFLoader()
loader.load(GLTF_URL, e => {
    obj = e.scene
    let factorCrecimiento = .1
    obj.scale.set( factorCrecimiento, factorCrecimiento, factorCrecimiento )
    scene.add(e.scene)
})

let textureLoader = new THREE.TextureLoader()
textureLoader.load("background.png", (texture) => {
    scene.background = texture
})

let hemlight = new THREE.HemisphereLight(0xffffff, 0x000000, 1)

let light = new THREE.DirectionalLight(
    0xffffff, 3.0
)
light.position.set(30, 15, 15)
light.target.position.set(-10, 0, -5)

scene.add(light)
//scene.add(hemlight)
scene.add(light.target)

addEventListener('mousemove', (e) => {
    prevPos = e.screenX
})

function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
}

animate()