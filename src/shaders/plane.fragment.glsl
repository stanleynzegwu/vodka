uniform float time;
uniform vec2 uCursor;
uniform vec3 color;
uniform vec3 colorB;
uniform float uProgression;
uniform sampler2D uPerlinTexture;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

#include ./includes/pointLight.glsl

void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDirection = normalize(vPosition - cameraPosition);

    /*********** LIGHT ***************/
    vec3 light = vec3(0.0);

        light += pointLight(
        vec3(1.0, 1.0, 1.0), // Light color
        0.025,                 // Light intensity,
        normal,              // Normal
        vec3(uCursor.x, uCursor.y, 2.0), // Light position
        viewDirection,       // View direction
        20.0,                // Specular power
        vPosition,           // Position
        0.25                // Light decay
    );
    
    /*********** BACKGROUND TRANSITION ***************/

    // Remap uv to now go from 0.4 => 1.0
    float newUv = mix(0.4, 1.0, vUv.y);

    // Calculate the distance from the top right corner of the screen
    vec2 distanceFromCorner = abs(vUv - vec2(0.0, 0.0));
    //vec2 distanceFromCorner = abs(vUv - vec2(1.0, 1.0)); //the transition will start from bottom left

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

    /*********** FINAL COLOR ***************/

    // Output the final color with the remapped uv
    gl_FragColor = vec4(mx + light, newUv);
    
         // Define your two colors
    // vec3 colorA = vec3(0.1, 0.0, 0.0);  // Red color
    // vec3 colorB = vec3(0.007, 0.0, 0.0);  // Black color

    // // Calculate the interpolation factor based on uv.y
    // float t = smoothstep(0.0, 0.8, vUv.y);

    // // Interpolate between colorA and colorB using the interpolation factor
    // vec3 interpolatedColor = mix(colorA, colorB, t);

    // // Output the interpolated color
    // gl_FragColor = vec4(interpolatedColor, 1.0);
    
    // Include additional shader fragments if needed
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}


