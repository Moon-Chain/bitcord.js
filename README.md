# bitcord
Bitcord - (Discord Simulation Framework)

------------------------------- How To Use -------------------------------

Karakterler assets/js/characters.js dosyasına eklenir

Karakter görselleri assets/images/profile/ klasörüne eklenir

Konuşma sesleri assets/sounds/speech_sounds/ klasörüne eklenir

Dilediğiniz oyun senaryosunu yazmak için assets/js/game.js dosyasını kullanın



** Her senaryo için bir function açmanız önerilir (karışmaması için) **



------------------------------- Functions -------------------------------

1. mesaj_getir(karakter_isim_veya_id,mesaj, fonksiyon_baslatma_zamani = 0, beraber_calisacak_fonksiyon = null);

2. arama_getir(karakter_isim_veya_id, fonksiyon_baslatma_zamani = 0, otomatik_kapatma_zamani = null, arama_kabul_edilirse, arama_reddedilirse, arama_kacirilirsa, konusma_bittiginde_kapatilirsa, konusma_bitmeden_kapatilirsa);

3. konusma_sesi_oynat(karakter_isim_veya_id, ses_dosyasi, fonksiyon_baslatma_zamani = 0, yeni_arama = true);

4. sahneyi_getir(sahne_adi, fonksiyon_baslatma_zamani = 0);

5. karakter_getir(karakter_isim_veya_id);

6. karakterin_özelligini_degistir(karakter_isim_veya_id, ozellik_adi, yeni_deger, fonksiyon_baslatma_zamani = 0, program_veya_manuel = false);

7. mesaj_gecmisini_sil(karakter_isim_veya_id = null, spesifik_veya_herkes, fonksiyon_baslatma_zamani = 0);

8. mesaj_getir_talebini_sil(karakter_isim_veya_id, fonksiyon_baslatma_zamani = 0);

9. mesaj_sablonu_olustur(karakter_isim_veya_id, mesaj);

10. buton_olustur(metin, tiklama_fonksiyonu, buton_style, buton_class, buton_id);

11. gorsel_olustur(gorsel_url, tiklama_fonksiyonu, gorsel_style, gorsel_class, gorsel_id);

12. konusma_sesi_bul(dosya_adi);

13. konusma_sesi_olustur(ses_dosyasi);

14. konusma_bitis_belirteci(karakter_isim_veya_id, fonksiyon_baslatma_zamani = 0);

15. aramayi_kapat(karakter_isim_veya_id, fonksiyon_baslatma_zamani = 0);

16. fake_bildirim(karakter_isim_veya_id, tip = "message", ses_oynat = null);

17. ekran_getir(karakter_isim_veya_id, tip = "message");

18. sayac_olustur(fonksiyon_baslatma_zamani = 0);

