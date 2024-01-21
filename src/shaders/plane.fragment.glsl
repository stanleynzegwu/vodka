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

    float y = 1.0 - vUv.y ;
    vec3 colorGradient = vec3(y, 0.0, y);
    gl_FragColor = vec4(colorGradient, 1.0);


    // gl_FragColor = vec4(color, 1.0);
}