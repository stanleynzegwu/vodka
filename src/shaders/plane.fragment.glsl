uniform float time;
uniform vec3 color;
uniform vec3 colorB;
uniform float uProgression;
uniform sampler2D uPerlinTexture;
varying vec2 vUv;

// void main() {
//     //remap uv to now go from 0.4 => 1.0
//     float newUv = mix(0.4, 1.0, vUv.y);
//     float invertedProgression = 1.0 - uProgression;
//     // vec3 mx = mix(color, colorB, step(invertedProgression, vUv.x));
//     // vec4 perlin = texture2D(uPerlinTexture,vUv);
//     vec3 mx = mix(color, colorB, step(invertedProgression, vUv.x));
//     gl_FragColor = vec4(mx, newUv);
//     #include <tonemapping_fragment>
//     #include <colorspace_fragment>
// }

void main() {
    // Remap uv to now go from 0.4 => 1.0
    float newUv = mix(0.4, 1.0, vUv.y);

    // Calculate the distance from the top right corner of the screen
    vec2 distanceFromCorner = abs(vUv - vec2(0.0, 0.0));

    // Calculate the maximum distance from the top right corner (diagonal distance to the corner)
    float maxDistanceFromCorner = sqrt(2.0); // Length of the diagonal from (0,0) to (1,1)

    // Normalize the distance to get a value between 0 and 1
    float normalizedDistance = length(distanceFromCorner) / maxDistanceFromCorner;

    // Calculate the size of the circle based on the inverted progression
    float circleSize = smoothstep(0.0, 1.0, 1.0 - uProgression);

    // Calculate the alpha value based on the normalized distance and circle size
    float alpha = smoothstep(circleSize - 0.01, circleSize + 0.01, normalizedDistance);

    // Mix the colors based on the alpha value
    vec3 mx = mix(color, colorB, alpha);

    // Output the final color with the remapped uv
    gl_FragColor = vec4(mx, newUv);
    
    // Include additional shader fragments if needed
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}


