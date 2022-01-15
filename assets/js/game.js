// oyunu başlatır
function start_game() {
    nextStage("sahne_deneme");
}

function sahne_deneme() {
    //incele youtube modal türkçe olarak eklenecek
    youtube_modal('https://www.youtube.com/embed/NnPWfPNvy6A', null, null, null,
        "Beğen", () => {
            alert("asdasd");
        }, "Beğenme", () => {
            alert("asdasd");
        }, "Kapat", () => {
            alert("asdasd");
        }
    );
    // mesaj_getir("bitcord", buton_olustur("bas","youtube_modal('https://www.youtube.com/embed/NnPWfPNvy6A')"));
    // get_callModal("bitcord",);
}