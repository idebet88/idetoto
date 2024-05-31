document.addEventListener('DOMContentLoaded', () => {
  // Features
  const min = 123;
  const max = 999;
  const memberOnline = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // Get Element
  let elSidebarNav = document.getElementsByClassName("sidebar-nav")[0];
  let elSlider = document.getElementById("slider");
  let elProvider = document.getElementById("latest-results");
  let elSidebarCard = document.getElementsByClassName("results")[0];
  
  // Set Element
  let navPrediksi = `<li><a href="${linkPrediksi}" target="_blank"><i class="fa fa-newspaper-o"></i>Prediksi Togel</a></li>`;
  let navLaporan = `<li><a href='${linkLaporan}' target='_blank'><i class='fa fa-wpforms'></i>Keluhan Member</a></li>`;
  let navRtp = `<li><a href='${linkRTP}' target='_blank'><i class="fa fa-gamepad"></i>RTP Slot Gacor</a></li>`;
  let navBukti = `<div class="sidebar-button pulse" align="center"><a href="${linkBukti}" class="btn btn-secondary-sidebar">Bukti Pembayaran</a></div>`;
  // let midBanner = `<a href="//register.php/" title="idetoto Bandar Togel"><img src="${linkBannerMid}" style="width:100%;width:100%;"></a>`;
  let sidebarSocial = `<div class="results"><h4><i class="fa fa-info-circle"></i>  Social Media</h4><ul class="list-menubaru"><li> <i class="fa fa-star"></i> Facebook <a target="_blank" href="${linkFb}">Klik Disini</a></li><li> <i class="fa fa-star"></i> Instagram <a target="_blank" href="${linkIg}">Klik Disini</a></li><li> <i class="fa fa-star"></i> Twitter <a target="_blank" href="${linkTwt}">Klik Disini</a></li> <li> <i class="fa fa-star"></i> TikTok <a target="_blank" href="${linkTiktok}">Klik Disini</a></li> <li> <i class="fa fa-star"></i> Youtube <a target="_blank" href="${linkYt}">Klik Disini</a></li> </ul></div>`;
  let elFeature = `<ul class="menu-linkalt"><div><a href="https://${linkALt1}/" class="btn-linkalt">WWW.${linkALt1.toLocaleUpperCase()}</a></div> <div><a href="https://${linkALt2}/" class="btn-linkalt">WWW.${linkALt2.toUpperCase()}</a></div> <div><a href="https://${linkALt3}/" class="btn-linkalt">WWW.${linkALt3.toUpperCase()}</a></div> </ul> <div class="wrapper-service"> <div class="item-service"> <h1>Deposit</h1> <div class="status-wrapper"> <p>Rata-Rata</p> <p><span class="count-item">02</span> Menit</p> </div> <div class="progress21 progress-moved2"> <div class="progress-bar21"></div> </div> </div> <div class="item-service"> <h1>Withdraw</h1> <div class="status-wrapper"> <p>Rata-Rata</p> <p><span class="count-item">03</span> Menit</p> </div> <div class="progress31 progress-moved11"> <div class="progress-bar31"></div> </div> </div> <div class="item-service"> <h1>Member Online</h1> <div class="status-wrapper-mem"> <p><span class="count-item">${memberOnline}</span> Member</p> </div> </div> <div class="item-service"> <p style="text-align: center;">Cari Kami di Google</p> <div class="google-wrapper"> <img src="https://cdn-idetoto.com/images/icon/google.png" /> <p>idetoto</p> </div> </div> </div>`;
  
  // Inject Element
  elSidebarNav.insertAdjacentHTML("beforeend", navPrediksi);
  elSidebarNav.insertAdjacentHTML("beforeend", navLaporan);
  elSidebarNav.insertAdjacentHTML("beforeend", navRtp);
  elSidebarNav.insertAdjacentHTML("afterend", navBukti);
  // elSlider.insertAdjacentHTML("afterend", midBanner);
  elSlider.insertAdjacentHTML("afterend", elFeature);
  elSidebarCard.insertAdjacentHTML("afterend", sidebarSocial);
  
  
  // Deposit & Withdraw
  const getProvider = document.querySelector('#latest-results');
  
  const transWrap = document.createElement('div'); // create an el for WD
  transWrap.className = 'wrapper-transactions'; // add class to el
  
  const transWrapDp = document.createElement('div'); // create an ell for Depo
  transWrapDp.className = 'wrapper-transactions'; // add class to el1
  
  const transContent = document.createElement('div'); // create an el for WD content
  transContent.className = 'content-trans'; // add class to el
  
  const transContentDp = document.createElement('div'); // create an el for Depo content
  transContentDp.className = 'content-trans'; // add class to el1
  
  const makeDp = document.createElement('div'); // create a wrapper for Depo
  makeDp.className = 'deposit-members'; // add class to wrapper
  
  const makeWd = document.createElement('div'); // create a wrapper for WD
  makeWd.className = 'withdraw-members'; // add class to wrapper
  
  const titleDp = document.createElement('h3');
  titleDp.className = 'text-centertitle';
  titleDp.textContent = 'PEJUANG Rp';
  
  const titleWd = document.createElement('h3');
  titleWd.className = 'text-centertitle';
  titleWd.textContent = 'PEMENANG Rp';
  
  transContentDp.appendChild(makeDp);
  transContent.appendChild(makeWd);
  transWrapDp.appendChild(titleDp);
  transWrap.appendChild(titleWd);
  
  transWrapDp.appendChild(transContentDp);
  transWrap.appendChild(transContent);
  
  const wrapAllTrans = document.createElement('div');
  wrapAllTrans.className = 'wrap-all-trans';
  
  wrapAllTrans.appendChild(transWrapDp);
  wrapAllTrans.appendChild(transWrap);
  
  getProvider.parentNode.insertBefore(wrapAllTrans, getProvider);
  
  
  // Functions
  function getDeposit() {
    $.ajax({
      url: "https://cdn-idetoto.com/json/members.json",
      type: "GET",
      dataType: "JSON",
      success: function (response) {
        const getUser = randomUser(response.slice(0, 50));
        $.each(getUser, function (index, items) {
          // IDR Value
          const dana_wd = uangRupiahDp(5000, 50000);
  
          $(".deposit-members").append(
            '<div class="item-trans"><div class="avatar-wrapper"><img src="https://cdn-idetoto.com/images/icon/avatar.png" class="avatar-trans" />' +
              items.user +
              ' | Deposit:</div> <span class="rupiah-trans">Rp.' +
              dana_wd +
              "</span></div>"
          );
        });
      },
    });
  }
  
  function getWithdraw() {
    $.ajax({
      url: "https://cdn-idetoto.com/json/members.json",
      type: "GET",
      dataType: "JSON",
      success: function (response) {
        const getUser = randomUser(response.slice(0, 50));
        $.each(getUser, function (index, items) {
          // IDR Value
          const dana_wd = uangRupiah(50000, 2000000);
          $(".withdraw-members").append(
            '<div class="item-trans"><div class="avatar-wrapper"><img src="https://cdn-idetoto.com/images/icon/avatar.png" class="avatar-trans" />' +
              items.user +
              ' | Withdraw:</div> <span class="rupiah-trans">Rp.' +
              dana_wd +
              "</span></div>"
          );
        });
      },
    });
  }
  
  function uangRupiah(min, max) {
    function getRandomRoundNumber(min, max) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      const returnNum = Math.floor(randomNumber / 10000) * 10000;
      if (returnNum != 0 || !isNaN(returnNum)) {
        return returnNum;
      }
    }
  
    const randomRoundNumber = getRandomRoundNumber(min, max);
    const roundedNumber = randomRoundNumber;
    return new Intl.NumberFormat().format(roundedNumber);
  }
  
  function uangRupiahDp(min, max) {
    function getRandomRoundNumber(min, max) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      const returnNum = Math.floor(randomNumber / 5000) * 5000;
      if (returnNum != 0 || !isNaN(returnNum)) {
        return returnNum;
      }
    }
  
    const randomRoundNumber = getRandomRoundNumber(min, max);
    const roundedNumber = randomRoundNumber;
    return new Intl.NumberFormat().format(roundedNumber);
  }
  
  function randomUser(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    // While there remain elements to shuffle
    while (0 !== currentIndex) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // Swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  getWithdraw();
  getDeposit();
  
  });