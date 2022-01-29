// oyunu başlatır
function start_game() {
    sahne_getir("sahne_baslangic_konusmasi");
}

function sahne_baslangic_konusmasi() {
    mesaj_getir('bitcord', 0, 'Bitcord ile dilediğin senaryoyu oyun haline getirebilirsin.');
    mesaj_getir('bitcord', 1000, 'Senaryoları daha kolay yazmak için geliştirici modunu kullanmanı tavsiye ederim.', false);
    mesaj_getir('bitcord', 2000, 'Geliştirici modunu aktifleştirmek için mevcut linkin sonuna <span class="text-h-green">?debugMode=true</span> ekleyin <span class="text-h-blue">veya</span> sol üstteki <span class="text-h-green">logoya 3 defa tıklayın.</span> <br>',false);
    mesaj_getir('bitcord', 3000, 'Logo <br>' + gorsel_olustur("bitcord_assets/gifs/debug_mode.gif",null,"width:400px; height:225px;"));
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