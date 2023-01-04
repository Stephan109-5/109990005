function initBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);

  return {
    position: positionBuffer,
  };
}

function initPositionBuffer(gl) {
  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();
  
  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the square.
  const positions = [-3.0, 2.0, -3.0, -0.5, -1.0, -0.5];

  // This is the most proper solution
  // const positions = [-3.0, 2.0, -3.0, -0.5, -1.0, -0.5, -0.9, 2.0, -2.9, 2.0, -0.9, -0.5];

  // Now pass the list of positions into WebGL to build the gl.TRIANGLE_STRIP
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}

// The two following functions are not needed for the proper solution
function initBuffers2(gl) {
  const positionBuffer = initPositionBuffer2(gl);

  return {
    position: positionBuffer,
  };
}

function initPositionBuffer2(gl) {
  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();
  
  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the square.
  const positions = [-0.9, 2.0, -2.9, 2.0, -0.9, -0.5];

  // Now pass the list of positions into WebGL to build the gl.TRIANGLE_STRIP
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}


export { initBuffers, initBuffers2 };
