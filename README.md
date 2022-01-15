# bitcord
Bitcord - (Discord Simulation Framework)

------------------------------- How To Use -------------------------------

Karakterler assets/js/characters.js dosyasına eklenir

Karakter görselleri assets/images/profile/ klasörüne eklenir

Konuşma sesleri assets/sounds/speech_sounds/ klasörüne eklenir

Dilediğiniz oyun senaryosunu yazmak için assets/js/game.js dosyasını kullanın



Her senaryo için bir function açmanız önerilir (karışmaması için)



------------------------------- Functions -------------------------------



get_callModal(1, 2, 3, 4, 5, 6, 7, 8);Gelen arama oluşturmak için

1 - Karakter (name veya id değeri)

2 - Arama kaç saniye sonra başlatılsın ? MS cinsinden yazılır / Yoksa null yazın

3 - Konuşma kaç saniye sonra otomatik kapansın ? MS cinsinden yazılır / Yoksa null yazın

4 - Arama kabul edildiğinde yapılacaklar / Yoksa null yazın

5 - Arama reddedildiğinde yapılacaklar / Yoksa null yazın

6 - Arama cevapsız kalırsa yapılacaklar / Yoksa null yazın

7 - Konuşma bitince kapatılırsa yapılacaklar / Yoksa null yazın

8 - Konuşma bitmeden yüzüne kapatılırsa yapılacaklar / Yoksa null yazın




speechSound(1, 2, 3);Konuşmayı oynatmak için

1 - Karakter (name veya id değeri)

2 - Ses dosyası

3 - Konuşmaya ne zaman başlasın / Varsayılan 1500 MS



speechEnd_indicator(1, 2); Aramayı kapatmadan konuşmanın bittiği süreyi belirtmek için 
(Arama kapatıldığında, yüzüne mi kapatılmış yoksa konuşma bittiği zaman mı kapatılmış. Şeklinde ayırt etmek için kullanılır)

1 - Karakter (name veya id değeri)

2 - Konuşma ne zaman sonra bitecek ? / Varsayılan 0 MS



findSpeech(1); Ses dosyasını bulmak için

1 - ses dosyasının adı ve uzantısı (sesin konumu assets/sounds/speech_sounds) olmak şartıyla




getMessage(1, 2, 3); Mesaj Almak için

1 - Karakter (name veya id değeri)

2 - Mesaj

3 - Mesaj ne zaman gelsin / Varsayılan 0 MS



deleteMessages(1, 2); Mesajları silmek için

1 - Karakter (name veya id değeri) (Opsiyonel)

2 - Tüm mesajlar silinecekse ("all") değeri verilmelidir (Opsiyonel)



createButton(1, 2, 3, 4); - Mesajların içerisine buton koymak için

1 - Buton üzerindeki metin

2 - "Onclick" Butona Tıklandığına çalışacak fonksiyon / Varsayılan null

3 - Butonun style değerleri / Varsayılan null

4 - Butonun class değerleri / Varsayılan null



createImage(1, 2, 3, 4); - Mesajların içerisine görsel koymak için

1 - Görsel URL

2 - "Onclick" Görsele tıklandığına çalışacak fonksiyon / Varsayılan null

3 - Görselin style değerleri / Varsayılan null

4 - Görselin class değerleri / Varsayılan null



get_screen(1, 2); - Ekranı değiştirmek için

1 - Karakter (name veya id değeri)

2 - Arama veya mesaj ekranları getirilebilir / "call" veya "only_message" değerleri alabilir.



notification(1, 2); - Sadece bildirim almak için (Fake Notification olarak kullanılabilir) 

1 - Karakter (name veya id değeri)

2 - mesaj bildirimleri için "message" yazılması yeterli.

