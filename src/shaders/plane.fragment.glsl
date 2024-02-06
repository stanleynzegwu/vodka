uniform float time;
uniform vec3 color;
varying vec2 vUv;
void main() {
  // float val = smoothstep(0.0,1.0,1.0 - vUv.y);
  // gl_FragColor.rgba = vec4(val,0.0, 0.0,1.0);


  // float val = smoothstep(-0.4,0.7,vUv.x);
  // gl_FragColor.rgba = vec4(vUv.xxx,0.7);
    // gl_FragColor.rgba = vec4(1.0 - vUv.x,0.3,0.0,1.0);

    // vec3 colorGradient = vec3(1.0, 0.5 + 0.5 * 1.0 - vUv.y, 0.0);  // Adjust the green component as needed
    // gl_FragColor = vec4(colorGradient, 1.0);

    // float y = 1.0 - vUv.y ;
    // vec3 colorGradient = vec3(y, 0.0, y);
    // gl_FragColor = vec4(colorGradient, 1.0);


    gl_FragColor = vec4(vec3(smoothstep(-1.0,2.0,1.0 - vUv.y),0.0,smoothstep(-1.0,2.0,1.0 - vUv.y)), 1.0);
}

// Fragment Shader
// varying vec2 vUv;
// uniform vec2 uCursor;  // Cursor position in normalized coordinates (0.0 to 1.0)

// void main() {
//   // Calculate distance between fragment and cursor
//   float distance = length(vUv - uCursor);
//  float uRadius = 0.3;
//   // Adjust the intensity based on distance with dispersion
//   float intensity = smoothstep(uRadius - 0.3, uRadius, distance);

//   // Output the color based on intensity
//   vec3 spotlightColor = vec3(1.0); // White color for the spotlight
//   vec3 planeColor = vec3(0.2, 0.2, 0.2); // Adjust this color for the plane

//   // Interpolate between spotlight color and plane color based on intensity
//   vec3 finalColor = mix(planeColor, spotlightColor, intensity);

//   gl_FragColor = vec4(finalColor, 1.0);
//}




