import * as THREE from 'three'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const LoadTextures = (imagePaths) => {
    const textureLoader = new THREE.TextureLoader();
    const textures = {};
  
    imagePaths.forEach((img) => {
      const path = `/textures/${img}.jpg`;
      const texture = textureLoader.load(path);
      texture.flipY = false;
      textures[img] = texture;
    });
  
    return textures;
};