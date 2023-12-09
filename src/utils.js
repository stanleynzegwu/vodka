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

export const animateToVodkaCan = (model) => {
  // controls.enabled = false;
  const timeline = gsap.timeline();

  timeline.to(model.rotation, {
    y: model.rotation.y + Math.PI * 2,
    duration: 0.5,
    ease: "linear",
  });
  // timeline.to(
  //   {},
  //   {
  //     onUpdate: () => {
  //       camera.lookAt(artPosition);
  //     },
  //   }
  // );
};

// export const clip_Animation = (camera,isMobile) => {
//   const timeline = gsap.timeline();
//   timeline

//   .to(camera.rotation, {
//     x: -2.40,
//     y: 0.87,
//     z: 2.44,
//     duration: 1,
//     ease: "power1.inOut"
//   })
//   .to(camera.position, {
//     x: isMobile ? 17 : 11,
//     y: isMobile ? 17 : 13,
//     z: isMobile ? -17.5 : -23.5,
//     duration: 1,
//     ease: "power1.inOut"
//   })

// };