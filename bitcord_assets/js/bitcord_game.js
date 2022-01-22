// oyunu başlatır
function start_game() {
    nextStage("sahne_deneme");
}

function sahne_bitcord() {
    //incele youtube modal türkçe olarak eklenecek
    mesaj_getir("bitcord", buton_olustur("bas", "valorant_videosu()"));
    // get_callModal("bitcord",);
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