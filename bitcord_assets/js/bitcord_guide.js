/*!
 *  Bu Kılavuz paketi geliştiriciler için tasarlanmıştır
 *  Uyumlu olduğu Bitcord sürümü: version beta_1.0.3 - Bitcord
 */

if (debug_mode) {
    mesaj_getir('bitcord', 1000, '--- Geliştirici modu ---');
    mesaj_getir('bitcord', 2000, 'Sağ üstte bulunan Bağlam menüsünü aktif et');
    cmenu_opened = setInterval(() => {
        if (context_menu) {
            clearInterval(cmenu_opened);
            mesaj_getir('bitcord', 200, 'Bağlam menüsü aktifken ekranın herhangi bir yerine sağ tıkla');
            mesaj_getir('bitcord', 2000, 'Detaylı bilgi için bağlam menüsünü kullanarak "Bitcord kılavuz" başlat ' + emoji_olustur("3.png"));
        }
    }, 100);
}

function guide_bitcord() {
    mesaj_gecmisini_sil(true, 300);
    mesaj_getir_talebini_sil('bitcord', 0);
    mesaj_getir_talebini_sil('bitcord_js', 0);
    mesaj_getir('bitcord_js', 1000, 'Kılavuz üzerinde fonksiyon seçtiğinde, örnek kodları buraya düşecektir.');
    mesaj_getir('bitcord', 2000, '--- Kılavuz --- ');
    mesaj_getir('bitcord', 2100, 'Bitcord Framework ile istediğin senaryoyu gerçeğe dönüştürebilirsin', false);
    mesaj_getir('bitcord', 2200, 'Hangi fonksiyonu öğrenmek istersin ?', false);
    sahne_getir("guide_functions", 2300);
}

function guide_functions(delete_history = false) {
    if (delete_history) {
        mesaj_gecmisini_sil('bitcord', 0);
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
    mesaj_gecmisini_sil('bitcord_js', 300);
    mesaj_getir('bitcord', 1000, 'Mesaj getirme fonksiyonu <code class="code">mesaj_getir(karakter,süre,mesaj,bildirim sesi,fonksiyon)</code>');
    mesaj_getir('bitcord', 1100, '<span class="text-h-yellow">string</span> <span class="text-h-blue">Karakter</span> <span class="text-h-green"> zorunlu </span> <br>Hangi karakterden mesaj gelmesini istiyorsanız o karakterin "code_name" değerinin yazılacağı kısımdır.', false);
    mesaj_getir('bitcord', 1200, '<span class="text-h-yellow">int</span> <span class="text-h-blue">Süre</span> <span class="text-h-green"> zorunlu </span> <br>Senaryo başlatıldıktan kaç saniye sonra bu mesaj gelecek ? Belirlediğiniz sürenin milisaniye cinsinden yazılacağı kısımdır', false);
    mesaj_getir('bitcord', 1300, '<span class="text-h-yellow">string</span> <span class="text-h-blue">Mesaj</span> <span class="text-h-green"> zorunlu </span> <br>Karakterden gelecek mesajn yazılacağı kısımdır.', false);
    mesaj_getir('bitcord', 1400, '<span class="text-h-yellow">bool</span> <span class="text-h-blue">Bildirim sesi</span> <span class="text-h-green"> varsayılan true </span> <br>Bir değer aldığında (örn: false), mesaj bildirim sesi olmadan yüklenir. Bildirim sesi almak için null bırakılmalıdır.', false);
    mesaj_getir('bitcord', 1500, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">fonksiyon</span> <span class="text-h-green"> varsayılan null </span> <br>Mesaj ile aynı anda çalışacak fonksiyon buraya yazılır. değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 2000, buton_olustur('<i class="fa fa-reply"></i> Diğer Fonksiyonlar', 'guide_functions(true)', null, "bbtn bbtn-red"), false);
    rand_char = get_random_character();
    mesaj_getir('bitcord_js', 3500, 'Örnek kodları kopyalayıp terminale yapıştırarak test edebilirsin (Bağlam menüsü->Terminal)');
    mesaj_getir('bitcord_js', 4000, '<hr> <p style="text-align:center;"> <i class="fa fa-arrow-down"></i> Mesaj fonksiyonu <i class="fa fa-arrow-down"></i> </p> <hr>',false);
    mesaj_getir('bitcord_js', 4500, 'Örnek kod: <div class="code"><code><span class="code-yellow">mesaj_getir</span>(<span class="code-red">"' + rand_char.code_name + '"</span>,<span class="code-green">1000</span>,<span class="code-red">"Bu bir test mesajıdır"</span>)</code></div>', false);
}

function arama_islemi_fonksiyonu() {
    long_text = ' <div class="code"> <code> <span class="code-yellow">arama_getir</span>(<span class="code-red">"mee6"</span>, <span class="code-green">1000</span>, <span class="code-green">17000</span>,<br><span class="ci-1 code-darkblue">function</span> (){<br><span class="ci-2 code-yellow">mesaj_getir</span>(<span class="code-red">"mee6"</span>, <span class="code-green">1000</span>, <span class="code-red">"Dikkat! Müzik ses seviyesi fazla olabilir."</span>); <br><span class="ci-2 code-yellow">mesaj_getir</span>(<span class="code-red">"mee6"</span>, <span class="code-green">2000</span>, <span class="code-red">"1"</span>); <br><span class="ci-2 code-yellow">mesaj_getir</span>(<span class="code-red">"mee6"</span>, <span class="code-green">3000</span>, <span class="code-red">"2"</span>); <br><span class="ci-2 code-yellow">mesaj_getir</span>(<span class="code-red">"mee6"</span>, <span class="code-green">4000</span>, <span class="code-red">"3"</span>); <br><span class="ci-2 code-yellow">konusma_sesi_oynat</span>(<span class="code-red">"mee6"</span>,<span class="code-green">5000</span>, <span class="code-yellow">konusma_sesi_bul</span>(<span class="code-red">"rising_spirits_music.mp3"</span>)); <br><span class="ci-2 code-yellow">konusma_bitis_belirteci</span>(<span class="code-red">"mee6"</span>, <span class="code-green">16000</span>); <br><span class="ci-1">},</span> <br><span class="ci-1 code-darkblue">null</span>, <br><span class="ci-1 code-darkblue">null</span>, <br><span class="ci-1 code-darkblue">function</span> (){<br><span class="ci-2 code-yellow">mesaj_getir_talebini_sil</span>(<span class="code-red">"mee6"</span>,<span class="code-green">0</span>); <br><span class="ci-2 code-yellow">mesaj_getir</span>(<span class="code-red">"mee6"</span>, <span class="code-green">1000</span>,<span class="code-red">"Tekrar dinlemek için "</span> + <span class="code-yellow">buton_olustur</span>(<span class="code-red">"Tıkla"</span>, <span class="code-red">"mee6_arama_ornek()"</span>, <span class="code-darkblue">null</span>, <span class="code-red">"bbtn bbtn-blue"</span>)); <br><span class="ci-1">},</span> <br><span class="ci-1 code-darkblue">function</span> (){<br><span class="ci-2 code-yellow">mesaj_getir_talebini_sil</span>(<span class="code-red">"mee6"</span>, <span class="code-green">0</span>); <br><span class="ci-2 code-yellow">mesaj_getir</span>(<span class="code-red">"mee6"</span>, <span class="code-green">1000</span>, <span class="code-red">"Konuşmayı yüzüme kapattın! Tekrar dinlemek ister misin ? "</span> + <span class="ci-2 code-yellow">buton_olustur</span>(<span class="code-red">"Tıkla"</span>, <span class="code-red">"mee6_arama_ornek()"</span>, <span class="code-darkblue">null</span>, <span class="code-red">"bbtn bbtn-blue"</span>)); <br><span class="ci-1">}</span><br><span> );</span> <br></code> </div>';
    mesaj_gecmisini_sil('bitcord', 300);
    mesaj_gecmisini_sil('bitcord_js', 300);
    mesaj_getir('bitcord', 1000, 'Arama getirme fonksiyonu <div class="code"><code>arama_getir(karakter, süre, otomatik kapatma süresi, arama kabul edilirse, arama reddedilirse, arama kaçırılırsa, konuşma bittiğinde kapatılırsa, konuşma bitmeden kapatılırsa)</code></div>');
    mesaj_getir('bitcord', 1100, '<span class="text-h-yellow">string</span> <span class="text-h-blue">Karakter</span> <span class="text-h-green"> zorunlu </span> <br>Hangi karakterin sizi aramasını istiyorsanız o karakterin "code_name" değerinin yazılacağı kısımdır.', false);
    mesaj_getir('bitcord', 1200, '<span class="text-h-yellow">int</span> <span class="text-h-blue">Süre</span> <span class="text-h-green"> zorunlu </span> <br>Senaryo başlatıldıktan kaç saniye sonra bu arama gelecek ? Belirlediğiniz sürenin milisaniye cinsinden yazılacağı kısımdır', false);
    mesaj_getir('bitcord', 1300, '<span class="text-h-yellow">int</span> <span class="text-h-blue">Otomatik kapatma süresi</span> <span class="text-h-green"> varsayılan null </span> <br> Eğer arama kabul edilirse kaç saniye sonra otomatik kapatılsın, istemiyorsanız null olarak bırakın.', false);
    mesaj_getir('bitcord', 1400, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">Arama kabul edilirse</span> <span class="text-h-green"> opsiyonel veya null </span> <br> Eğer arama kabul edilirse ne yapılacak ? buraya yazılır, değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 1500, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">Arama reddedilirse</span> <span class="text-h-green"> opsiyonel veya null </span> <br> Eğer arama reddedilirse ne yapılacak ? buraya yazılır, değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 1600, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">Arama kaçırılırsa</span> <span class="text-h-green"> opsiyonel veya null </span> <br> Eğer arama kaçırılırsa ne yapılacak ? buraya yazılır, değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 1700, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">Konuşma bittiğinde kapatılırsa</span> <span class="text-h-green"> opsiyonel veya null </span> <br> Arama kabul edildikten sonra, eğer konuşma bittiğinde kapatılırsa ne yapılacak ? buraya yazılır, değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 1800, '<span class="text-h-yellow">function()</span> <span class="text-h-blue">Konuşma bitmeden kapatılırsa</span> <span class="text-h-green"> opsiyonel veya null </span> <br> Arama kabul edildikten sonra, eğer Konuşma bitmeden yüzüne kapatılırsa ne yapılacak ? buraya yazılır, değerleri bir fonksiyon içerisinde yazın.', false);
    mesaj_getir('bitcord', 2000, buton_olustur('<i class="fa fa-reply"></i> Diğer Fonksiyonlar', 'guide_functions(true)', null, "bbtn bbtn-red"), false);
    mesaj_getir('bitcord_js', 3500, 'Örnek kodları kopyalayıp terminale yapıştırarak test edebilirsin (Bağlam menüsü->Terminal)');
    mesaj_getir('bitcord_js', 4000, '<hr> <p style="text-align:center;"> <i class="fa fa-arrow-down"></i> Arama fonksiyonu <i class="fa fa-arrow-down"></i> </p> <hr>', false);
    mesaj_getir('bitcord_js', 4500, 'Örnek kod: ' + long_text, false);
    mesaj_getir('bitcord_js', 5000, 'bitcord_guide.js içerisinde <code class="code"><span class="code-yellow">mee6_arama_ornek()</span></code> fonksiyonu bulunuyor. Örnek kod üzerindeki "Tıkla" butonları bu fonksiyonu çalıştırıyor.', false);
}

function mee6_arama_ornek() {
    mesaj_gecmisini_sil('mee6', 100);
    arama_getir("mee6", 1000, 17000,
        function () {
            mesaj_getir('mee6', 1000, 'Dikkat! Müzik ses seviyesi fazla olabilir.');
            mesaj_getir('mee6', 2000, '1');
            mesaj_getir('mee6', 3000, '2');
            mesaj_getir('mee6', 4000, '3');
            konusma_sesi_oynat("mee6", 5000, konusma_sesi_bul("rising_spirits_music.mp3"));
            konusma_bitis_belirteci("mee6", 16000);
        },
        null,
        null,
        function () {
            mesaj_getir_talebini_sil("mee6", 0);
            mesaj_getir('mee6', 1000, 'Tekrar dinlemek için ' + buton_olustur('Tıkla', 'mee6_arama_ornek()', null, "bbtn bbtn-blue"));
        },
        function () {
            mesaj_getir_talebini_sil("mee6", 0);
            mesaj_getir('mee6', 1000, 'Konuşmayı yüzüme kapattın ! Tekrar dinlemek ister misin ? ' + buton_olustur('Tıkla', 'mee6_arama_ornek()', null, "bbtn bbtn-blue"));
        });
}

function karakterin_özelligini_degistirme_fonksiyonu() {
    mesaj_gecmisini_sil('bitcord', 300);
    mesaj_getir('bitcord', 1000, 'Karakterin özelliğini değiştirme fonksiyonu <code class="code">karakterin_özelligini_degistir()</code>');
    rand_char = get_random_character();
    mesaj_getir('bitcord', 5000, 'Örnek kod: <code class="code">karakterin_özelligini_degistir("' + rand_char.code_name + '","display_name","Çin Aslanı",1000)</code>');
    mesaj_getir('bitcord', 6000, 'devamı gelecek', false);
    mesaj_getir('bitcord', 7000, buton_olustur('<i class="fa fa-reply"></i> Diğer Fonksiyonlar', 'guide_functions(true)', null, "bbtn bbtn-red"), false);
}