// oyunu başlatır
function start_game() {
    sahneyi_getir("sahne_baslangic_konusmasi");
}

function sahne_baslangic_konusmasi() {

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