---
hide:
  - feedback
---

<!-- 首页图片轮播 -->
<div class="hero-carousel">
  <div class="carousel-track" id="carouselTrack">
  </div>
  <button class="carousel-btn carousel-prev" id="carouselPrev">&#10094;</button>
  <button class="carousel-btn carousel-next" id="carouselNext">&#10095;</button>
</div>

<script>
(function() {
  var images = [
"assets/0B0A2234.jpg","assets/0B0A2237.jpg","assets/0B0A2247.jpg","assets/0B0A2250.jpg","assets/0B0A2268_570073.jpg","assets/0B0A2273_829972.jpg","assets/0B0A2276_350450.jpg","assets/202605280b0a0005.jpg","assets/202605280b0a0013.jpg","assets/202605280b0a0046.jpg","assets/202605280b0a0050.jpg","assets/202605280b0a0052.jpg","assets/202605280b0a0059.jpg","assets/202605280b0a0070.jpg","assets/202605280b0a0075.jpg","assets/202605280b0a0083.jpg","assets/202605280b0a0101.jpg","assets/202605280b0a0115.jpg","assets/202605280b0a0119.jpg","assets/202605280b0a0125.jpg","assets/202605280b0a0132.jpg","assets/202605280b0a0138.jpg","assets/202605280b0a0145.jpg","assets/202605280b0a0164.jpg","assets/202605280b0a0169.jpg","assets/202605280b0a0181.jpg","assets/202605280b0a0186.jpg","assets/202605280b0a0196.jpg","assets/202605280b0a0201.jpg","assets/202605290b0a4181.jpg","assets/202605290b0a4198.jpg","assets/202605290b0a4199.jpg","assets/202605290b0a4203.jpg","assets/202605290b0a4224.jpg","assets/202605290b0a4234.jpg","assets/202605290b0a4243.jpg","assets/202605290b0a4255.jpg","assets/202605290b0a4300.jpg","assets/202605290b0a4304.jpg","assets/202605290b0a4305.jpg","assets/202605290b0a4340.jpg","assets/202605290b0a4363.jpg","assets/202605290b0a4365.jpg","assets/202605290b0a4369.jpg","assets/202605290b0a4371.jpg","assets/202605290b0a4373 (1).jpg","assets/202605290b0a4373.jpg","assets/202605290b0a4376.jpg","assets/202605300b0a6115.jpg","assets/202605300b0a6139.jpg","assets/202605300b0a6165 (1).jpg","assets/202605300b0a6165.jpg","assets/202605300b0a6175 (1).jpg","assets/202605300b0a6175.jpg","assets/202605300b0a6183.jpg","assets/202605300b0a6191.jpg","assets/202605300b0a6199.jpg","assets/202605310b0a8736.jpg","assets/202605310b0a8752.jpg","assets/202605310b0a8755.jpg","assets/202605310b0a8757.jpg","assets/202605310b0a8758.jpg","assets/202605310b0a8761.jpg","assets/202605310b0a8770.jpg","assets/202605310b0a8779.jpg","assets/202605310b0a8787.jpg","assets/202605310b0a8823.jpg","assets/202605310b0a8862.jpg","assets/202605310b0a8865.jpg","assets/202605310b0a8904.jpg","assets/202605310b0a8910.jpg","assets/202605310b0a8931.jpg","assets/LMJ20260529-15474.jpg","assets/LMJ20260529-15501.jpg","assets/LMJ20260529-15563.jpg","assets/LMJ20260601-13205.jpg","assets/LMJ20260601-13206.jpg","assets/LMJ20260601-13210.jpg","assets/LMJ20260601-13212.jpg","assets/LMJ20260601-13216.jpg","assets/LMJ20260601-13218.jpg","assets/LMJ20260601-13220.jpg","assets/LMJ20260601-13224.jpg","assets/LMJ20260601-13226.jpg","assets/LMJ20260601-13227.jpg","assets/LMJ20260601-13231.jpg","assets/LMJ20260601-13234.jpg","assets/LMJ20260601-13237.jpg","assets/LMJ20260601-13242.jpg","assets/LMJ20260601-13244.jpg","assets/ZP631852.jpg","assets/ZZP14343.jpg"
  ];

  var current = 0;
  var timer = null;
  var track = document.getElementById('carouselTrack');

  // Build slides
  for (var i = 0; i < images.length; i++) {
    var slide = document.createElement('div');
    slide.className = 'carousel-slide';
    var img = document.createElement('img');
    img.src = images[i];
    img.loading = (i < 3) ? 'eager' : 'lazy';
    slide.appendChild(img);
    track.appendChild(slide);
  }

  function update() {
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
  }

  function goTo(idx) {
    current = idx;
    update();
    resetTimer();
  }

  function next() {
    current = (current + 1) % images.length;
    update();
  }

  function prev() {
    current = (current - 1 + images.length) % images.length;
    update();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 3500);
  }

  document.getElementById('carouselPrev').onclick = function() { prev(); };
  document.getElementById('carouselNext').onclick = function() { next(); };

  // Touch support
  var startX = 0;
  track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; });
  track.addEventListener('touchend', function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
  });

  update();
  timer = setInterval(next, 3500);

  // Pause on hover
  var carousel = document.querySelector('.hero-carousel');
  carousel.addEventListener('mouseenter', function() { clearInterval(timer); });
  carousel.addEventListener('mouseleave', function() { timer = setInterval(next, 3500); });
})();
</script>

# 首页

欢迎来到火锅战队技术知识库！目前知识库仅包含电控部分。

**电控知识库** 介绍了电控组的工作内容，为开发、测试和源码贡献流程提供指南。此外，目前我们正在向*机器人通用组件*和*嵌入式系统支持*两方面发展自研组件，详细的说明文档也将存放于知识库中。

其他技术组的知识库待开发。


