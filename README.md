Run `npx http-server` or `python -m SimpleHTTPServer` and visit http://localhost:8080/

# Tasks

1.  Keep player in bounds
    - Hint: You can use `canvasHeight` to find the lower bounds
2.  Change the background color
    - Hint: see [`ctx.fillStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) and [`ctx.fillRect`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)
3.  Make the pickups move across the screen
    - Hint: update each pickup's `x` position. You can use `SCROLL_SPEED_PX` (don't forget about `delta` as well) to set the rate of change.
4.  Increase score if player collides with pickup
    - Hint: you can use the helpful `isColliding` function to check if two rectangles intersect (i.e. objects with `x`, `y`, `width` and `height`).
    - Remember that we should perform the following distinct actions in our game loop: update positions, check for collisions, resolve collisions, render.
5.  Remove pickups on collision
    - Hint: you could consider using [`Array.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
6.  Show the player's score
    - Hint: see [`ctx.fillText`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText) and [`ctx.font`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font)
7.  Remove pickups when they are off screen
    - Hint: you can test the pickup's `x` coordinate
8.  Render pickups as circles
    - Hint: see [`ctx.arc`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)
9.  Our player is an uninspiring rectangle. Let's fix that!
    - Hint: you can use `player.png` and [`ctx.drawImage`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
