const images = document.querySelectorAll('.draggable-image');
const radius = 300;
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const angleIncrement = (Math.PI * 2) / images.length;

images.forEach((image, index) => {
  let isDragging = false;
  let startPosX = 0;
  let startPosY = 0;
  let offsetX = 0;
  let offsetY = 0;

  image.addEventListener('mousedown', startDrag);
  image.addEventListener('mouseup', endDrag);
  image.addEventListener('mousemove', drag);

  function startDrag(event) {
    isDragging = true;
    startPosX = event.clientX;
    startPosY = event.clientY;
    offsetX = image.offsetLeft;
    offsetY = image.offsetTop;
  }

  function endDrag() {
    isDragging = false;
  }

  function drag(event) {
    if (isDragging) {
      const diffX = event.clientX - startPosX;
      const diffY = event.clientY - startPosY;
      image.style.left = offsetX + diffX + 'px';
      image.style.top = offsetY + diffY + 'px';
    }
  }

  const angle = angleIncrement * index;
  const randomRotation = (Math.random() - 0.5) * 20; // 随机生成一个旋转角度（范围为 -10 到 10 度）
  const randomX = Math.cos(angle) * radius + centerX;
  const randomY = Math.sin(angle) * radius + centerY;

  image.style.position = 'absolute';
  image.style.transform = `translate(-50%, -50%) rotate(${randomRotation}deg)`; // 添加旋转角度
  image.style.top = randomY + 'px';
  image.style.left = randomX + 'px';

  image.style.zIndex = index + 1;
});
