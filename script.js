function getPilihanComp() {
  const comp = Math.random();
  if (comp < 0.34) return "kertas";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "batu";
}

function getHasil(comp, player) {
  if (player == comp)
    return "SERI";
  if (player == "kertas") return (comp == "batu") ? "MENANG" : "KALAH";
  if (player == "batu") return (comp == "kertas") ? "KALAH" : "MENANG";
  if (player == "gunting") return (comp == "batu") ? "KALAH" : "MENANG";
}

function putar() {
  const imgComp = document.querySelector('.img-komputer');
  const gambar = ['kertas', 'gunting', 'batu'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 70)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (e) {
  e.addEventListener('click', function () {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = e.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComp = document.querySelector('.img-komputer')
      imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

      const info = document.querySelector('.info')
      info.innerHTML = hasil;
    }, 1000)


  })

})











// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function () {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlayer = pKertas.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComp = document.querySelector('.img-komputer')
//   imgComp.setAttribute('src', 'img/' + pilihanComp + '.png')

//   const info = document.querySelector('.info')
//   info.innerHTML = hasil;
// });

// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function () {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlayer = pGunting.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComp = document.querySelector('.img-komputer')
//   imgComp.setAttribute('src', 'img/' + pilihanComp + '.png')

//   const info = document.querySelector('.info')
//   info.innerHTML = hasil;
// });


// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function () {
//   const pilihanComp = getPilihanComp();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComp, pilihanPlayer);

//   const imgComp = document.querySelector('.img-komputer')
//   imgComp.setAttribute('src', 'img/' + pilihanComp + '.png')

//   const info = document.querySelector('.info')
//   info.innerHTML = hasil;
// });