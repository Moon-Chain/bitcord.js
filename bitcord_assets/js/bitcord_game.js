// oyunu başlatır
function start_game() {
    sahne_getir("sahne_baslangic_konusmasi");
}

function sahne_baslangic_konusmasi() {
    mesaj_getir('mag', 0, 'Bitcord projesi MoonArctic Games tarafından yürütülmektedir.');
    mesaj_getir('mag', 1000, 'Proje henüz geliştirme aşamasında, ilgili düşüncelerinizi lütfen bize iletin. Geri bildirimleriniz bizim için çok önemli' + emoji_olustur("1.png"), false);
    mesaj_getir('mag', 1100, 'Bitcord ' + buton_olustur('<i class="fa fa-external-link"></i> incele', 'proje_link()', null, "bbtn bbtn-blue") + '<br> MoonArctic Games ' + buton_olustur('<i class="fa fa-external-link"></i> incele', 'mag_link()', null, "bbtn bbtn-blue"), false);
    mesaj_getir('bitcord', 3000, 'Bitcord ile dilediğin senaryoyu oyun haline getirebilirsin.');
    mesaj_getir('bitcord', 4000, 'Senaryoları daha kolay yazmak ve kılavuz desteği için geliştirici modunu kullan.', false);
    mesaj_getir('bitcord', 5000, 'Geliştirici modunu aktifleştirmek için mevcut linkin sonuna <span class="text-h-green">?debugMode=true</span> ekleyin <span class="text-h-blue">veya</span> sol üstteki <span class="text-h-green">logoya 3 defa tıklayın.</span> <br>', false);
    mesaj_getir('bitcord', 6000, 'Logo <br>' + gorsel_olustur("bitcord_assets/gifs/debug_mode.gif", null, "width:400px; height:225px;"));
}

function proje_link() {
    window.open("https://github.com/Moon-Chain/bitcord", "_blank");
}

function mag_link() {
    window.open("https://www.linkedin.com/company/moonarctic", "_blank");
}

function valorant_videosu() {
    youtube_panel('https://www.youtube.com/embed/NnPWfPNvy6A', null, null, null, 'Beğen', () => {
        alert('asdasd');
    }, 'Beğenme', () => {
        alert('asdasd');
    }, 'Kapat', () => {
        alert('asdasd');
    })
}