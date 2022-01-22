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

function guide_bitcord() {
    mesaj_gecmisini_sil(true, 300);
    mesaj_getir('bitcord', '--- Kılavuz --- ', 1000);
    mesaj_getir('bitcord', 'Bitcord Framework ile istediğin senaryoyu gerçeğe dönüştürebilirsin', 2000);
    mesaj_getir('bitcord', 'Hangi fonksiyonu öğrenmek istersin ?', 3000);
    mesaj_getir('bitcord', 'Fonksiyonlar: <hr>' +
        buton_olustur('<i class="fa fa-commenting-o"></i> Mesaj getirmek', 'mesaj_getirme_fonksiyonu()', null, "bbtn bbtn-blue") +
        " - " +
        buton_olustur('<i class="fa fa-phone"></i> Arama işlemi', 'arama_islemi_fonksiyonu()', null, "bbtn bbtn-blue") +
        " - " +
        buton_olustur('<i class="fa fa-user"></i> Karakterin özelliğini değiştirmek', 'karakterin_özelligini_degistirme_fonksiyonu()', null, "bbtn bbtn-blue"), 4000);

    // mesaj_gecmisini_sil('bitcord', 5000);
    // mesaj_getir('bitcord', buton_olustur("bas", "valorant_videosu()"));
}

function mesaj_getirme_fonksiyonu() {
    mesaj_gecmisini_sil('bitcord', 300);
    mesaj_getir('bitcord', 'Mesaj getirme fonksiyonu <code class="code">mesaj_getir(karakter,mesaj,süre)</code>', 1000);
    mesaj_getir('bitcord', '1. "<span class="text-h-blue">Karakter</span>" <span class="text-h-yellow">string</span><br>Hangi karakterden mesaj gelmesini istiyorsanız o karakterin "code_name" değerinin yazılacağı kısımdır.', 3000);
    mesaj_getir('bitcord', '2. "<span class="text-h-blue">Mesaj</span>" <span class="text-h-yellow">string</span><br>Karakterden gelecek mesajn yazılacağı kısımdır.', 4000);
    mesaj_getir('bitcord', '3. "<span class="text-h-blue">Süre</span>" <span class="text-h-yellow">int</span><br>Senaryo başlatıldıktan kaç saniye sonra bu mesaj gelecek ? Belirlediğiniz sürenin milisaniye cinsinden yazılacağı kısımdır', 5000);
    rand_char = get_random_character();
    mesaj_getir('bitcord', 'Örnek kod: <code class="code">mesaj_getir("' + rand_char.code_name + '","Bu bir test mesajıdır",1000)</code>', 6000);
}

function arama_islemi_fonksiyonu() {
    mesaj_gecmisini_sil('bitcord', 300);
    mesaj_getir('bitcord', 'Arama getirme fonksiyonu <code class="code">arama_getir()</code>', 1000);
}

function karakterin_özelligini_degistirme_fonksiyonu() {
    mesaj_gecmisini_sil('bitcord', 300);
    mesaj_getir('bitcord', 'Karakterin özelliğini değiştirme fonksiyonu <code class="code">karakterin_özelligini_degistir()</code>', 1000);
    rand_char = get_random_character();
    mesaj_getir('bitcord', 'Örnek kod: <code class="code">karakterin_özelligini_degistir("' + rand_char.code_name + '","display_name","Çin Aslanı",1000)</code>', 5000);
}