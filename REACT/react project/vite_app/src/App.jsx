import websiteLogo from './assets/logo.png'
import searchbtn from './assets/icons8-search-50.png'
import account from './assets/account.png'
import inbox from './assets/inbox-img.svg'
import whatsapp from './assets/whatsapp-img.svg'
import adbanner from './assets/ad-banner.png'
import viedo from './assets/videoplayback.mp4'




import './wholemonkey.css';

function App() {
  return (
    <>
      <div className="whole-navbar">
        <div className="nav-heading">
          New Year 2025 Offer, Prepaid Order & Get 180 Rs Discount. Code (NEWYEAR2025)
        </div>

        <div className="navbar">
          <img src={websiteLogo} alt="Logo" />

          <div className="nav-left">
            <h2 className="title">Wholemonkey Marketing E-commerce</h2>
            <p className="punch-line">"you are in good hands"</p>
          </div>

          <div className="nav-right">
            <div className="searchbtn">
              <img src={searchbtn} alt="Search" />
            </div>
            <div className="accountbtn">
              <img src={account} alt="Account" />
            </div>
            <div className="inboxbtn">
              <img src={inbox} alt="Inbox" />
            </div>
            <div className="whatsappbtn">
              <img src={whatsapp} alt="WhatsApp" />
            </div>
          </div>
        </div>

        <div className="nav-bottom">
          <p>Computer Accessories</p>
          <p>Mobile Accessories And Gadgets</p>
          <p>Smart Watch</p>
          <p>Mobile Phones</p>
          <p>Trending Gadgets</p>
          <p>More</p>
          <p>Contact us</p>
        </div>
      </div>

      <div className="ad-banners">
        <img src={adbanner} className="ad-banner" />
      </div>
      {/* browser caterogries section */}


      <section className="browse-categories">
        <h2 className="browse-title"><u>Browse Categories</u></h2>
        <div className="categories-cointainer">
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/2-1718109110991.jpeg?width=384&format=webp" />
            </div>
            <p>Mobile Phones</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/1-1718109096462.jpeg?width=384&format=webp" />
            </div>
            <p>Mobile Accesories <br />And Gadgets</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/4-1718109143119.jpeg?width=384&format=webp" />
            </div>
            <p>Computer Accessories</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign1-1730892101063.jpeg?width=384&format=webp" />
            </div>
            <p>Refurbished Laptops</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign3-1718179065115.jpeg?width=384&format=webp" />
            </div>
            <p>Smart Watch</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign1-1718178807411.jpeg?width=384&format=webp" />
            </div>
            <p>Mobile Panel & <br />Covers</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign4-1718179632067.jpeg?width=384&format=webp" />
            </div>
            <p>Mobile Camera</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign2-1718178794976.jpeg?width=384&format=webp" />
            </div>
            <p>Trending Products</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/6-1718109167631.jpeg?width=384&format=webp" />
            </div>
            <p>Wireless Speakers</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/7-1718109181836.jpeg?width=384&format=webp" />
            </div>
            <p>HDMI VGA Devices</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/9-1718109210631.jpeg?width=384&format=webp" />
            </div>
            <p>Hardware Devices</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign-1718194653600.jpeg?width=384&format=webp" />
            </div>
            <p>Home Decor</p>
          </div>
        </div>
      </section>

      {/* new launched section */}

      <section className="newly-launched">
        <h2 className="newly-title"><u>NEWLY LAUNCHED</u></h2>
        <div className="newlylaunched-cointainer">
          <div className="newlylaunched-items">

            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/SKU-1347_0-1729429150229.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

            <div className="price">
              <span className="current-price">₹49,999</span>
              <span className="original-price">₹1,05,999</span>
            </div>
            <select className="varaint-selector">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
              <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                    <button className="add-btn">+ Add</button>
            </div>


          </div>
          <div className="newlylaunched-items">

            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/SKU-1288_0-1716372344392.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">Pods Pro-2 Plus With Screen<br />Display With All Features 6.. </p>
            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
              <button
                className="whatsapp"
                style={{ background: 'url(${whatsapp)' }}
              ></button>                    <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">

            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/SKU-1257_0-1714108694386.webp?width=600&format=webp" />
            </div>
            <p className="img-text">OPPO F5 Mobile Phone 4GB<br />RAM REFURBISHED Just Lik.. </p>
            <div className="price">
              <span className="current-price">₹5,500</span>
              <span className="original-price">₹19,990</span>
            </div>
            <select className="varaint-selector">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
              <button className="whatsapp" style={{ background: 'url{whatsapp}' }}></button>
              <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">

            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/SKU-1243_0-1713725831122.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung Galaxy Z Flip 4<br />Activated Imported Mobile...</p>
            <div className="price">
              <span className="current-price">₹33,999</span>
              <span className="original-price">₹87,000</span>
            </div>
            <select className="varaint-selector">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
              <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                    <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">

            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/SKU-1223_0-1713623525276.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">Pods Pro-2 Plus With Screen<br />Display With All Features 6..</p>
            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
              <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                    <button className="add-btn">+ Add</button>

            </div>
          </div>
        </div>


      </section>


      {/* mobile accesories and gadgets  */}

      <section className="newly-launched">
        <h2 className="newly-title"><u>MOBILE ACESSORIES AND GADGETS</u></h2>
        <div className="newlylaunched-cointainer">
          <div className="newlylaunched-items">
            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/1693060256277_SKU-0827_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">USB Cable Compatible with<br />iPhone Xs Max, iPhone 11 Pro,...</p>

            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
              <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                       <button className="add-btn">+ Add</button>

            </div>

          </div>
          <div className="newlylaunched-items">
            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/1692987597020_SKU-0821_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Pods Pro-2 ANC & Cover Combo<br />with 1 year Warranty </p>
            <div className="price">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹5,999</span>
            </div>
            <select className="varaint-selector">
              <option value="black-256gb">White</option>
              <option value="white-128gb">Black</option>
            </select>
            <div className="action">
              <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                       <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">
            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/1689352952124_SKU-0752_0.webp?width=600&format=webp" />
            </div>
            <p className="img-text">3 in 1 Wireless Multifunction<br />Magnetic Charging Station Dock... </p>
            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
              <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                       <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">
            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/camera-stand-clip-bracket-holder-tripod-monopod-mo-1686046576421_SKU-0604_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Camera Stand Clip Bracket Holder<br />Tripod Monopod Mount Adapter...</p>
            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
              <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                       <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">
            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/fully-foldable-tabletop-desktop-tablet-mobile-stan-1686046552430_SKU-0584_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Fully Foldabale Taabletop Desktop<br />Tablet Mobile Stand Holder...</p>
            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
              <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                       <button className="add-btn">+ Add</button>

            </div>
          </div>
        </div>
      </section>


      {/* new updatwe section  */}

      <section class="newly-launched">
        <h2 class="newly-title"><u>NEW UPDATES</u></h2>
        <div class="newly-title">
            <video class="video" src={viedo} controls autoplay loop></video>
        </div>
        </section>


        {/* computer accessories section */}

        <section class="newly-launched">
    <h2 class="newly-title"><u>COMPUTER ACESSORIES </u></h2>
    <div class="newlylaunched-cointainer">
        <div class="newlylaunched-items">
            <div class="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/1693161915763_SKU-0830_0.webp?width=600&format=webp" />
            </div>
            <p class="img-text">All in One 3 USB Ports and all in<br />One Card reader USB 2.0 for PC...</p>

            <div class="price no-option">
                <span class="current-price">₹449</span>
                <span class="original-price">₹999</span>
            </div>

            <div class="action no-option">
 <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                  <button class="add-btn">+ Add</button>

            </div>

        </div>
        <div class="newlylaunched-items">
            <div class="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/displayport-display-port-dp-to-vga-adapter-cable-m-1686046583185_SKU-0610_0.jpg?width=600&format=webp" />
            </div>
            <p class="img-text">Display Port Display Port DP to <br />VGA Adapter Cable Male to .. </p>
            <div class="price no-option">
                <span class="current-price">₹210</span>
                <span class="original-price">₹400</span>
            </div>

            <div class="action no-option">
 <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                  <button class="add-btn">+ Add</button>

            </div>  
        </div>
        <div class="newlylaunched-items">
            <div class="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/quality-assured-usb-20-morpho-cable-morpho-device-1686046547131_SKU-0580_0.jpg?width=600&format=webp" />
            </div>
            <p class="img-text">Quality Assured USB 2.0 morpho<br /> cable, morpho device cable for .. </p>
            <div class="price no-option">
                <span class="current-price">₹129</span>
                <span class="original-price">₹600</span>
            </div>

            <div class="action no-option">
 <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                  <button class="add-btn">+ Add</button>

            </div>
        </div>
        <div class="newlylaunched-items">
            <div class="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/consistent-ssd-25%22-sata-128gb-5yrs-warranty-1686046497423_SKU-0525_0.jpg?width=600&format=webp" />
            </div>
            <p class="img-text">Consistenet SSD 2.5 " SATA 128Gb<br />5yrs warranty</p>
            <div class="price no-option">
                <span class="current-price">₹999</span>
                <span class="original-price">₹1,299</span>
            </div>

            <div class="action no-option">
 <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                  <button class="add-btn">+ Add</button>

            </div>
        </div>
        <div class="newlylaunched-items">
            <div class="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/mini-composite-av-rca-to-hdmi-video-converter-adap-1686046495895_SKU-0524_0.jpeg?width=600&format=webp" />
            </div>
            <p class="img-text">Mini Composite AV RCA to HDMI<br />Viedo Converter Adapter Full HD..</p>
            <div class="price no-option">
                <span class="current-price">₹390</span>
                <span class="original-price">₹1,300</span>
            </div>

            <div class="action no-option">
 <button
                className="whatsapp"
                style={{ background: 'url(whatsapp)' }}
              ></button>                  <button class="add-btn">+ Add</button>

            </div>
        </div>
    </div>


</section>

    </>
  );
}

export default App;
