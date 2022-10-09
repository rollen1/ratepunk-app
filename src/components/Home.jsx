function Home() {
    return (
      <>
<header>
  <div className="left-side">
    <a href="#"><img src="assets/logo.svg" /></a>
  </div>
  <div className="right-side">
    <nav>
      <a href="#">Chrome Extension</a>
      <a href="#">Price Comparison</a>
      <a href="#">Blog</a>
    </nav>
  </div>
</header>
<section className="refer-page">
  <div className="refer-email-board">
    <h1>Refer friends and get rewards</h1>
    <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that
      installs our extension. Minimum cash-out at 20 coins.</p>
    <form>
      <input type="email" placeholder="Enter your email address" />
      <button type="submit">Get Referral Link</button>
    </form>
    <p className="refer-email-limits">Limits on max rewards apply.</p>
  </div>
  <div className="refer-steps-container">
  <div className="refer-step-one">
    <img className="step-one-img" src="assets/invite.svg" />
    <h3>Step 1</h3>
    <h1>Invite friends</h1>
    <p>Refer friends with your unique referral link.</p>
  </div>
  <div className="refer-step-two">
    <img className="step-two-img" src="assets/collect-coins.svg" />
    <h3>Step 2</h3>
    <h1>Collect coins</h1>
    <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
  </div>
  <div className="refer-step-three">
    <img className="step-three-img" src="assets/voucher.svg" />
    <h3>Step 3</h3>
    <h1>Get Voucher</h1>
    <p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
  </div>
</div>
</section>
<section className="app-store-footer">
  <div className="app-store-container">
    <a href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk" target="_blank" className="chrome-web-store">
      <img src="./assets/chrome.svg" />
      <h3>available in the</h3>
      <h1>chrome web store</h1>
    </a>
    <a href="https://apps.apple.com/app/ratepunk/id1607823726" target="_blank" className="apple-app-store">
      <img src="./assets/apple.svg" />
      <h3>available in the</h3>
      <h1>apple app store</h1>
    </a>
    <div className="chrome-reviews">
      <p><span>★ ★ ★ ★ ★</span> Chrome store reviews</p>
    </div>
  </div>
</section>
<footer>
  <div className="footer-container">
    <div className="footer-about">
      <img src="./assets/logo.svg" />
      <p>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a
        room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be
        confident in knowing you're getting the best deal!</p>
      <p className="rights-reserved">© 2021 Ratepunk. All Rights Reserved.</p>
    </div>
    <div className="footer-links">
      <h1>Quick Links</h1>
      <ul>
        <li><a href="#">Price Comparison</a></li>
        <li><a href="#">Chrome Extension</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Ratepunk Blog</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <div className="footer-contact">
      <h1>Contact</h1>
      <p><img src="./assets/email-footer.svg" />hi@ratepunk.com</p>
      <div className="footer-social">
        <h1>Social</h1>
        <button><a href="#"><img src="./assets/instagram.svg" /></a></button>
        <button><a href="#"><img src="./assets/facebook.svg" /></a></button>
        <button><a href="#"><img src="./assets/linkedin.svg" /></a></button>
        <button><a href="#"><img src="./assets/twitter.svg" /></a></button>
        <button><a href="#"><img src="./assets/tiktok.svg" /></a></button>
      </div>
    </div>
  </div>
</footer>
</>
    );
}

export default Home;