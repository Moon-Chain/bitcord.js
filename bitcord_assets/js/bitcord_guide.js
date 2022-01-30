/*!
 *  Bu Kılavuz paketi geliştiriciler için tasarlanmıştır
 *  Uyumlu olduğu Bitcord sürümü: version beta_1.0.3 - Bitcord
 */

function guide_bitcord() {
    mesaj_gecmisini_sil(true, 300);
    mesaj_getir('bitcord', 1000, '--- Kılavuz --- ');
    mesaj_getir('bitcord', 1100, 'Bitcord Framework ile istediğin senaryoyu gerçeğe dönüştürebilirsin', false);
    mesaj_getir('bitcord', 1200, 'Hangi fonksiyonu öğrenmek istersin ?', false);
    sahne_getir("guide_functions", 1500);
}

function guide_functions(delete_history = false) {
    if (delete_history) {
        mesaj_gecmisini_sil(true, 0);
    }
    mesaj_getir('bitcord', 1000, 'Fonksiyonlar: <hr>' +
        buton_olustur('<i class="fa fa-commenting-o"></i> Mesaj getirmek', 'mesaj_getirme_fonksiyonu()', null, "bbtn bbtn-blue") +
        " - " +
        buton_olustur('<i class="fa fa-phone"></i> Arama işlemi', 'arama_islemi_fonksiyonu()', null, "bbtn bbtn-blue") +
        " - " +
        buton_olustur('<i class="fa fa-user"></i> Karakterin özelliğini değiştirmek', 'karakterin_özelligini_degistirme_fonksiyonu()', null, "bbtn bbtn-blue"));
}

function mesaj_getirme_fonksiyonu() {
    mesaj_gecmisini_sil('bitcord', 300);
    mesaj_getir('bitcord', 1000, 'Mesaj getirme fonksiyonu <code class="code">mesaj_getir(karakter,süre,mesaj,bildirim sesi,fonksiyon)</code>');
    mesaj_getir('bitcord', 1100, '<span class="text-h-yellow">string</span> <span class="text-h-blue">Karakter</span> <br>Hangi karakterden mesaj gelmesini istiyorsanız o karakterin "code_name" değerinin yazılacağı kısımdır.', false);
    mesaj_getir('bitcord', 1200, '<span class="text-h-yellow">int</span> <span class="text-h-blue">Süre</span> <br>Senaryo başlatıldıktan kaç saniye sonra bu mesaj gelecek ? Belirlediğiniz sürenin milisaniye cinsinden yazılacağı kısımdır', false);
    mesaj_getir('bitcord', 1300, '<span class="text-h-yellow">string</span> <span class="text-h-blue">Mesaj</span> <br>Karakterden gelecek mesajn yazılacağı kısımdır.', false);
    mesaj_getir('bitcord', 1400, '<span class="text-h-yellow">bool</span> <span class="text-h-blue">Bildirim sesi</span> varsayılan true <br>Bir değer aldığında (örn: false), mesaj bildirim sesi olmadan yüklenir. Bildirim sesi almak için null bırakılmalıdır.', false);
    mesaj_getir('bitcord', 1500, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">fonksiyon</span> varsayılan null <br>Mesaj ile aynı anda çalışacak fonksiyon buraya yazılır. değerleri bir fonksiyon içerisinde yazın.', false);
    rand_char = get_random_character();
    mesaj_getir('bitcord', 3000, 'Örnek kod: <code class="code">mesaj_getir("' + rand_char.code_name + '",1000,"Bu bir test mesajıdır")</code> <br> Kodu kopyalayıp terminale yapıştırarak test edebilirsin (Sağ tık->Terminal)');
    mesaj_getir('bitcord', 4000, buton_olustur('<i class="fa fa-reply"></i> Diğer Fonksiyonlar', 'guide_functions(true)', null, "bbtn bbtn-red"), false);
}

function arama_islemi_fonksiyonu() {
    mesaj_gecmisini_sil('bitcord', 300);
    mesaj_getir('bitcord', 1000, 'Arama getirme fonksiyonu <div class="code"><code>arama_getir(karakter, süre, otomatik kapatma süresi, arama kabul edilirse, arama reddedilirse, arama kaçırılırsa, konuşma bittiğinde kapatılırsa, konuşma bitmeden kapatılırsa)</code></div>');
    mesaj_getir('bitcord', 1100, '<span class="text-h-yellow">string</span> <span class="text-h-blue">Karakter</span> <br>Hangi karakterin sizi aramasını istiyorsanız o karakterin "code_name" değerinin yazılacağı kısımdır.', false);
    mesaj_getir('bitcord', 1200, '<span class="text-h-yellow">int</span> <span class="text-h-blue">Süre</span> <br>Senaryo başlatıldıktan kaç saniye sonra bu arama gelecek ? Belirlediğiniz sürenin milisaniye cinsinden yazılacağı kısımdır', false);
    mesaj_getir('bitcord', 1300, '<span class="text-h-yellow">int</span> <span class="text-h-blue">Otomatik kapatma süresi</span> varsayılan null <br> Eğer arama kabul edilirse kaç saniye sonra otomatik kapatılsın, istemiyorsanız null olarak bırakın.', false);
    mesaj_getir('bitcord', 1400, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">Arama kabul edilirse</span> <br> Eğer arama kabul edilirse ne yapılacak ? buraya yazılır, değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 1500, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">Arama reddedilirse</span> varsayılan null <br> Eğer arama reddedilirse ne yapılacak ? buraya yazılır, değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 1600, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">Arama kaçırılırsa</span> varsayılan null <br> Eğer arama kaçırılırsa ne yapılacak ? buraya yazılır, değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 1700, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">Konuşma bittiğinde kapatılırsa</span> varsayılan null <br> Arama kabul edildikten sonra, eğer konuşma bittiğinde kapatılırsa ne yapılacak ? buraya yazılır, değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 1800, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">Konuşma bitmeden kapatılırsa</span> varsayılan null <br> Arama kabul edildikten sonra, eğer Konuşma bitmeden yüzüne kapatılırsa ne yapılacak ? buraya yazılır, değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 3000, buton_olustur('<i class="fa fa-reply"></i> Diğer Fonksiyonlar', 'guide_functions(true)', null, "bbtn bbtn-red"), false);
}

function karakterin_özelligini_degistirme_fonksiyonu() {
    mesaj_gecmisini_sil('bitcord', 300);
    mesaj_getir('bitcord', 1000, 'Karakterin özelliğini değiştirme fonksiyonu <code class="code">karakterin_özelligini_degistir()</code>');
    rand_char = get_random_character();
    mesaj_getir('bitcord', 5000, 'Örnek kod: <code class="code">karakterin_özelligini_degistir("' + rand_char.code_name + '","display_name","Çin Aslanı",1000)</code>');
    mesaj_getir('bitcord', 6000, 'devamı gelecek', false);
    mesaj_getir('bitcord', 7000, buton_olustur('<i class="fa fa-reply"></i> Diğer Fonksiyonlar', 'guide_functions(true)', null, "bbtn bbtn-red"), false);
}