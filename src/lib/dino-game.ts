// ============================================================
// Dino Hopp! - A simple endless runner for small children
// Wrapped as a closure for React integration
// ============================================================

export function initDinoGame(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d')!;

  // Logical game dimensions (always the same internally)
  const W = 900;
  const H = 500;
  canvas.width = W;
  canvas.height = H;

  // Resize canvas CSS to fill parent while keeping aspect ratio
  function resizeCanvas() {
    const ratio = W / H;
    const parent = canvas.parentElement;
    if (!parent) return;
    const parentW = parent.clientWidth;
    const parentH = parent.clientHeight;

    let cssW, cssH;
    if (parentW / parentH > ratio) {
      cssH = parentH;
      cssW = parentH * ratio;
    } else {
      cssW = parentW;
      cssH = parentW / ratio;
    }

    canvas.style.width = cssW + 'px';
    canvas.style.height = cssH + 'px';
  }

  resizeCanvas();

  const onResize = () => resizeCanvas();
  const onOrientationChange = () => setTimeout(resizeCanvas, 100);
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onOrientationChange);

  // Ground level
  const GROUND_Y = H - 100;

  // Game states
  const STATE = { START: 0, PLAYING: 1, GAME_OVER: 2 } as const;
  let gameState: number = STATE.START;

  // ============================================================
  // Sound effects (Web Audio API)
  // ============================================================
  let audioCtx: AudioContext | null = null;

  function ensureAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
  }

  function playJumpSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.2);
  }

  function playHitSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.3);
  }

  function playScoreSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.setValueAtTime(900, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.15);
  }

  // ============================================================
  // Dinosaur
  // ============================================================
  const dino = {
    x: 120,
    y: GROUND_Y,
    width: 70,
    height: 80,
    velocityY: 0,
    isJumping: false,
  };

  const GRAVITY = 0.55;
  const JUMP_FORCE = -14;

  function resetDino() {
    dino.y = GROUND_Y;
    dino.velocityY = 0;
    dino.isJumping = false;
  }

  function updateDino() {
    if (dino.isJumping) {
      dino.velocityY += GRAVITY;
      dino.y += dino.velocityY;
      if (dino.y >= GROUND_Y) {
        dino.y = GROUND_Y;
        dino.velocityY = 0;
        dino.isJumping = false;
      }
    }
  }

  function jump() {
    if (!dino.isJumping) {
      dino.velocityY = JUMP_FORCE;
      dino.isJumping = true;
      playJumpSound();
    }
  }

  function drawDino() {
    const x = dino.x;
    const y = dino.y;

    ctx.fillStyle = '#4CAF50';
    roundRect(x, y - dino.height, dino.width, dino.height, 16);

    ctx.fillStyle = '#A5D6A7';
    roundRect(x + 12, y - dino.height + 25, dino.width - 28, dino.height - 35, 10);

    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.arc(x + dino.width - 15, y - dino.height - 5, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x + dino.width - 10, y - dino.height - 8, 9, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#222';
    ctx.beginPath();
    ctx.arc(x + dino.width - 7, y - dino.height - 8, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x + dino.width - 5, y - dino.height - 10, 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(x + dino.width - 5, y - dino.height + 2, 6, 0.1, Math.PI - 0.1);
    ctx.stroke();

    const legOffset = dino.isJumping ? -4 : 0;
    ctx.fillStyle = '#388E3C';
    roundRect(x + 12, y - 4 + legOffset, 16, 14, 4);
    roundRect(x + dino.width - 28, y - 4 - legOffset, 16, 14, 4);

    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.moveTo(x, y - 30);
    ctx.lineTo(x - 25, y - 50);
    ctx.lineTo(x, y - 55);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#66BB6A';
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(x + 18 + i * 16, y - dino.height - 3, 6, Math.PI, 0);
      ctx.fill();
    }
  }

  // ============================================================
  // Obstacles
  // ============================================================
  interface Obstacle {
    x: number;
    y: number;
    width: number;
    height: number;
    type: string;
  }

  const OBSTACLE_TYPES = ['bush', 'rock', 'stump', 'mushroom'];
  let obstacles: Obstacle[] = [];
  let obstacleTimer = 0;
  let obstacleInterval = 180;
  let gameSpeed = 3;

  function resetObstacles() {
    obstacles = [];
    obstacleTimer = 0;
    obstacleInterval = 180;
    gameSpeed = 3;
  }

  function spawnObstacle() {
    const type = OBSTACLE_TYPES[Math.floor(Math.random() * OBSTACLE_TYPES.length)];
    let width = 45, height = 35;

    switch (type) {
      case 'bush':
        width = 45;
        height = 35 + Math.random() * 15;
        break;
      case 'rock':
        width = 45 + Math.random() * 10;
        height = 30 + Math.random() * 10;
        break;
      case 'stump':
        width = 40;
        height = 35 + Math.random() * 15;
        break;
      case 'mushroom':
        width = 45;
        height = 38 + Math.random() * 10;
        break;
    }

    obstacles.push({ x: W + 20, y: GROUND_Y, width, height, type });
  }

  function updateObstacles() {
    obstacleTimer++;
    if (obstacleTimer >= obstacleInterval) {
      spawnObstacle();
      obstacleTimer = 0;
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
      obstacles[i].x -= gameSpeed;
      if (obstacles[i].x + obstacles[i].width < -10) {
        obstacles.splice(i, 1);
      }
    }
  }

  function drawObstacle(obs: Obstacle) {
    switch (obs.type) {
      case 'bush': drawBush(obs); break;
      case 'rock': drawRock(obs); break;
      case 'stump': drawStump(obs); break;
      case 'mushroom': drawMushroom(obs); break;
    }
  }

  function drawBush(bush: Obstacle) {
    const { x, y, width: w, height: h } = bush;
    ctx.fillStyle = '#2E7D32';
    roundRect(x + 5, y - h + 10, w - 10, h - 10, 8);
    ctx.fillStyle = '#388E3C';
    ctx.beginPath(); ctx.arc(x + w / 2, y - h + 8, w / 3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + w / 2 - 12, y - h + 15, w / 4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + w / 2 + 12, y - h + 15, w / 4, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#1B5E20';
    ctx.lineWidth = 3;
    roundRectStroke(x + 5, y - h + 10, w - 10, h - 10, 8);
  }

  function drawRock(obs: Obstacle) {
    const { x, y, width: w, height: h } = obs;
    ctx.fillStyle = '#78909C';
    ctx.beginPath();
    ctx.moveTo(x + 8, y); ctx.lineTo(x + w - 8, y);
    ctx.lineTo(x + w - 2, y - h * 0.5); ctx.lineTo(x + w * 0.6, y - h);
    ctx.lineTo(x + w * 0.3, y - h * 0.9); ctx.lineTo(x + 2, y - h * 0.4);
    ctx.closePath(); ctx.fill();

    ctx.fillStyle = '#90A4AE';
    ctx.beginPath();
    ctx.moveTo(x + w * 0.3, y - h * 0.9); ctx.lineTo(x + w * 0.6, y - h);
    ctx.lineTo(x + w * 0.5, y - h * 0.6); ctx.lineTo(x + w * 0.25, y - h * 0.6);
    ctx.closePath(); ctx.fill();

    ctx.strokeStyle = '#546E7A';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + 8, y); ctx.lineTo(x + w - 8, y);
    ctx.lineTo(x + w - 2, y - h * 0.5); ctx.lineTo(x + w * 0.6, y - h);
    ctx.lineTo(x + w * 0.3, y - h * 0.9); ctx.lineTo(x + 2, y - h * 0.4);
    ctx.closePath(); ctx.stroke();
  }

  function drawStump(obs: Obstacle) {
    const { x, y, width: w, height: h } = obs;
    ctx.fillStyle = '#795548';
    roundRect(x + 5, y - h, w - 10, h, 6);

    ctx.strokeStyle = '#5D4037';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 12, y - h + 8); ctx.lineTo(x + 12, y - 4);
    ctx.moveTo(x + w - 12, y - h + 8); ctx.lineTo(x + w - 12, y - 4);
    ctx.stroke();

    ctx.fillStyle = '#A1887F';
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y - h + 2, w / 2 - 5, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#795548';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y - h + 2, w / 4 - 2, 4, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#4E342E';
    ctx.lineWidth = 3;
    roundRectStroke(x + 5, y - h, w - 10, h, 6);
  }

  function drawMushroom(obs: Obstacle) {
    const { x, y, width: w, height: h } = obs;
    const stemW = w * 0.35;
    const capH = h * 0.55;

    ctx.fillStyle = '#F5F5DC';
    roundRect(x + w / 2 - stemW / 2, y - h + capH - 5, stemW, h - capH + 5, 4);
    ctx.strokeStyle = '#D7CCC8';
    ctx.lineWidth = 2;
    roundRectStroke(x + w / 2 - stemW / 2, y - h + capH - 5, stemW, h - capH + 5, 4);

    ctx.fillStyle = '#E53935';
    ctx.beginPath();
    ctx.arc(x + w / 2, y - h + capH, w / 2, Math.PI, 0);
    ctx.closePath(); ctx.fill();

    ctx.strokeStyle = '#B71C1C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x + w / 2, y - h + capH, w / 2, Math.PI, 0);
    ctx.closePath(); ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.beginPath(); ctx.arc(x + w / 2 - 8, y - h + capH - 10, 4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + w / 2 + 7, y - h + capH - 14, 3.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + w / 2, y - h + capH - 20, 3, 0, Math.PI * 2); ctx.fill();
  }

  // ============================================================
  // Collision detection (AABB)
  // ============================================================
  function checkCollision() {
    const dx = dino.x + 15;
    const dy = dino.y - dino.height + 15;
    const dw = dino.width - 30;
    const dh = dino.height - 20;

    for (const obs of obstacles) {
      const bx = obs.x + 14;
      const by = obs.y - obs.height + 16;
      const bw = obs.width - 28;
      const bh = obs.height - 16;
      if (dx < bx + bw && dx + dw > bx && dy < by + bh && dy + dh > by) {
        return true;
      }
    }
    return false;
  }

  // ============================================================
  // Score and difficulty
  // ============================================================
  let score = 0;
  let frameCount = 0;

  function resetScore() {
    score = 0;
    frameCount = 0;
  }

  function updateScore() {
    frameCount++;
    if (frameCount % 6 === 0) {
      score++;
    }
    if (score > 0 && score % 50 === 0 && frameCount % 6 === 0) {
      playScoreSound();
    }
    if (frameCount % 500 === 0 && gameSpeed < 6) {
      gameSpeed += 0.2;
      if (obstacleInterval > 110) {
        obstacleInterval -= 5;
      }
    }
  }

  // ============================================================
  // Drawing helpers
  // ============================================================
  function roundRect(x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
  }

  function roundRectStroke(x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.stroke();
  }

  // ============================================================
  // Scene drawing
  // ============================================================
  function drawBackground() {
    const gradient = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
    gradient.addColorStop(0, '#B8E6FF');
    gradient.addColorStop(1, '#E3F6FF');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, GROUND_Y);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    drawCloud(150, 60, 1);
    drawCloud(450, 90, 0.8);
    drawCloud(700, 45, 1.1);

    ctx.fillStyle = '#FFD54F';
    ctx.beginPath(); ctx.arc(780, 70, 40, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#FFECB3';
    ctx.beginPath(); ctx.arc(780, 70, 30, 0, Math.PI * 2); ctx.fill();
  }

  function drawCloud(x: number, y: number, scale: number) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.arc(0, 0, 25, 0, Math.PI * 2);
    ctx.arc(25, -5, 20, 0, Math.PI * 2);
    ctx.arc(-22, 2, 18, 0, Math.PI * 2);
    ctx.arc(10, 8, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawGround() {
    ctx.fillStyle = '#66BB6A';
    ctx.fillRect(0, GROUND_Y, W, 8);
    ctx.fillStyle = '#8D6E63';
    ctx.fillRect(0, GROUND_Y + 8, W, H - GROUND_Y - 8);
    ctx.fillStyle = '#4CAF50';
    for (let i = 0; i < W; i += 30) {
      ctx.beginPath();
      ctx.arc(i + 15, GROUND_Y + 2, 8, Math.PI, 0);
      ctx.fill();
    }
  }

  // ============================================================
  // Score display on canvas
  // ============================================================
  function drawScore() {
    ctx.fillStyle = '#2E7D32';
    ctx.font = "bold 32px 'Comic Sans MS', sans-serif";
    ctx.textAlign = 'right';
    ctx.fillText(String(score), W - 20, 40);
    ctx.textAlign = 'start';
  }

  // ============================================================
  // Screen overlays
  // ============================================================
  function drawStartScreen() {
    drawBackground();
    drawGround();
    drawDino();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#2E7D32';
    ctx.font = "bold 64px 'Comic Sans MS', sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText('DINO HOPP!', W / 2, H / 2 - 50);

    ctx.fillStyle = '#444';
    ctx.font = "bold 36px 'Comic Sans MS', sans-serif";
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) {
      ctx.fillText('Peka for att borja!', W / 2, H / 2 + 30);
    } else {
      ctx.fillText('Tryck SPACE for att borja!', W / 2, H / 2 + 30);
    }
    ctx.textAlign = 'start';
  }

  function drawGameOverScreen() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#D32F2F';
    ctx.font = "bold 60px 'Comic Sans MS', sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText('Aj!', W / 2, H / 2 - 60);

    ctx.fillStyle = '#2E7D32';
    ctx.font = "bold 44px 'Comic Sans MS', sans-serif";
    ctx.fillText('Poang: ' + score, W / 2, H / 2 + 10);

    ctx.fillStyle = '#444';
    ctx.font = "bold 32px 'Comic Sans MS', sans-serif";
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) {
      ctx.fillText('Peka for att spela igen!', W / 2, H / 2 + 80);
    } else {
      ctx.fillText('Tryck SPACE for att spela igen!', W / 2, H / 2 + 80);
    }
    ctx.textAlign = 'start';
  }

  // ============================================================
  // Main game loop
  // ============================================================
  let animFrameId = 0;

  function gameLoop() {
    ctx.clearRect(0, 0, W, H);

    if (gameState === STATE.START) {
      drawStartScreen();
    } else if (gameState === STATE.PLAYING) {
      drawBackground();
      drawGround();
      updateDino();
      updateObstacles();
      updateScore();

      for (const obs of obstacles) {
        drawObstacle(obs);
      }
      drawDino();
      drawScore();

      if (checkCollision()) {
        gameState = STATE.GAME_OVER;
        playHitSound();
      }
    } else if (gameState === STATE.GAME_OVER) {
      drawBackground();
      drawGround();
      for (const obs of obstacles) {
        drawObstacle(obs);
      }
      drawDino();
      drawGameOverScreen();
    }

    animFrameId = requestAnimationFrame(gameLoop);
  }

  // ============================================================
  // Input handling
  // ============================================================
  function handleInput() {
    ensureAudio();
    if (gameState === STATE.START) {
      gameState = STATE.PLAYING;
    } else if (gameState === STATE.PLAYING) {
      jump();
    } else if (gameState === STATE.GAME_OVER) {
      resetDino();
      resetObstacles();
      resetScore();
      gameState = STATE.PLAYING;
    }
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      handleInput();
    }
  };

  const onTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    handleInput();
  };

  const onClick = () => {
    handleInput();
  };

  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
  };

  document.addEventListener('keydown', onKeyDown);
  canvas.addEventListener('touchstart', onTouchStart, { passive: false });
  canvas.addEventListener('click', onClick);
  canvas.addEventListener('touchmove', onTouchMove, { passive: false });

  // Start the game loop
  animFrameId = requestAnimationFrame(gameLoop);

  // ============================================================
  // Cleanup function
  // ============================================================
  return () => {
    cancelAnimationFrame(animFrameId);
    document.removeEventListener('keydown', onKeyDown);
    canvas.removeEventListener('touchstart', onTouchStart);
    canvas.removeEventListener('click', onClick);
    canvas.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('orientationchange', onOrientationChange);
    if (audioCtx) {
      audioCtx.close();
    }
  };
}
