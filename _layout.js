const NAV_HTML = `
<nav class="nav">
  <div class="nav-logo">
    <img src="https://www.covez.jp/assets/img/header_logo_pc.jpg" alt="城南コベッツ"
         onerror="this.style.display='none'">
    <div>
      城南コベッツ
      <span class="sub">三郷中央駅前教室</span>
    </div>
  </div>
  <div class="nav-links">
    <a href="index.html">ホーム</a>
    <a href="feature.html">指導の特徴</a>
    <a href="course.html">コース・料金</a>
    <a href="voice.html">合格実績・口コミ</a>
    <a href="trial.html">無料体験申込</a>
    <a href="aki2025.html" style="color:#D4AF37;border-color:#D4AF37;">🍁秋期特訓</a>
  </div>
  <div class="nav-tel">
    <a href="tel:048-949-1107">048-949-1107</a>
    <small>平日15:00〜21:30 ／ 土14:00〜20:00</small>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-col">
      <h4>城南コベッツ 三郷中央駅前教室</h4>
      <p>〒341-0038<br>埼玉県三郷市中央1-13-12<br>リヴェールメゾン102</p>
      <p style="margin-top:8px">つくばエクスプレス 三郷中央駅 徒歩4分</p>
    </div>
    <div class="footer-col">
      <h4>受付時間</h4>
      <p>平日 15:00〜21:30</p>
      <p>土曜 14:00〜20:00</p>
      <p>日曜・祝日 休</p>
      <div class="footer-tel" style="margin-top:8px">048-949-1107</div>
    </div>
    <div class="footer-col">
      <h4>サイトメニュー</h4>
      <a href="index.html">ホーム</a>
      <a href="feature.html">指導の特徴</a>
      <a href="course.html">コース・料金</a>
      <a href="voice.html">合格実績・口コミ</a>
      <a href="trial.html">無料体験申込</a>
    <a href="aki2025.html" style="color:#D4AF37;border-color:#D4AF37;">🍁秋期特訓</a>
    </div>
  </div>
  <div class="footer-bottom">© 城南コベッツ 三郷中央駅前教室 / 株式会社城南進学研究社</div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if(navEl) navEl.outerHTML = NAV_HTML;
  if(footEl) footEl.outerHTML = FOOTER_HTML;
});
