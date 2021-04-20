function table(ctx) {
  ctx.beginPath()
  ctx.lineWidth = 0.8;
  ctx.strokeStyle = '#ccc';
  for (let i = 0; i < canvas.width / 10; i++) {
    ctx.moveTo(i * 10, 0);
    ctx.lineTo(i * 10, canvas.height);
  }
  for (let i = 0; i < canvas.height / 10; i++) {
    ctx.moveTo(0, i * 10);
    ctx.lineTo(canvas.width, i * 10)
  }
  ctx.stroke();
  ctx.closePath()
}