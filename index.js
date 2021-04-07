const SPAWN_INTERVAL_MS = 1000;
const PLAYER_SPEED_PX = 120;
const SCROLL_SPEED_PX = 120;

export default function (canvas, canvasWidth, canvasHeight) {
  // The 2d rendering context, used to interact with the canvas, e.g. ctx.fillRect
  const ctx = canvas.getContext('2d');

  // The game state
  const state = {
    // Active keys
    keys: new Set(),
    // The player's score
    score: 0,
    // The last game tick time in ms
    lastTickTime: 0,
    // The last pickup spawn time in ms
    lastSpawnTime: 0,
    // An array of "pickup" entities
    pickups: []
  };

  // The player object. This is effectively a 2d rect.
  const player = {
    // The player's x coordinate
    x: 20,
    // The player's y coordinate
    y: canvasHeight / 2,
    // The player's dimensions in px
    width: 80,
    height: 40
  };

  // Collision detection
  // Checks if rect1 and rect2 intersect, i.e. collide
  // Returns `true` if there is an intersection, otherwise `false`
  function isColliding(rect1, rect2) {
    // Use bounding box collision detection to check for overlap
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  }

  // Returns a new "pickup" object with a random y coordinate
  function getPickup() {
    return {
      x: canvasWidth,
      y: Math.floor(Math.random() * canvasHeight),
      width: 20,
      height: 20
    };
  }

  function drawPlayer() {
    ctx.fillStyle = '#000';
    ctx.fillRect(player.x, player.y, player.width, player.height);
    // TODO #9 - render a better player
  }

  function drawPickup(pickup) {
    ctx.fillStyle = '#000';
    ctx.fillRect(pickup.x, pickup.y, pickup.width, pickup.height);
    // TODO #8 - render pickups as circles
  }

  function loop(timestamp) {
    // Delta is the amount of time (in seconds) that has passed since the last tick
    const delta = (timestamp - state.lastTickTime) / 1000;
    state.lastTickTime = timestamp;

    // Game loops often run in the following order:
    // 1. User Interaction
    // 2. Update positions
    // 3. Detect and resolve collisions
    // 4. Render

    /*** Update positions ***/

    if (state.keys.has('ArrowUp')) {
      player.y = player.y - PLAYER_SPEED_PX * delta;
    } else if (state.keys.has('ArrowDown')) {
      player.y = player.y + PLAYER_SPEED_PX * delta;
    }

    // TODO #1 - keep player in bounds

    // TODO #3 - move pickups across screen

    // Spawn pickups
    if (timestamp - state.lastSpawnTime > SPAWN_INTERVAL_MS) {
      state.lastSpawnTime = timestamp;
      state.pickups.push(getPickup());
    }

    /*** Collision detection ***/

    // TODO #4 - increment score if player collides with pickup
    // TODO #5 - remove pickup on collision
    // TODO #7 - remove pickups when they move off screen

    /*** Render ***/

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // TODO #2 - change bg color

    // Render player
    drawPlayer();
    // Render pickups
    for (const pickup of state.pickups) {
      drawPickup(pickup);
    }

    // TODO #6 - render player's score

    // Next tick
    window.requestAnimationFrame(loop);
  }

  // Add keyboard listeners
  window.addEventListener('keydown', (e) => {
    // Add key to active keys list
    state.keys.add(e.key);
  });
  window.addEventListener('keyup', (e) => {
    // Remove key from active keys list
    state.keys.delete(e.key);
  });

  // Call the game loop for the first time
  loop(window.performance.now());
}
