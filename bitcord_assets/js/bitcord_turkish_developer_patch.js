/*!
 *  Bu yama paketi geliştiriciler için tasarlanmıştır 
 *  Uyumlu olduğu Bitcord sürümü: version beta_1.0.1 - Bitcord
 */

function mesaj_getir(karakter_isim_veya_id,mesaj, fonksiyon_baslatma_zamani = 0, beraber_calisacak_fonksiyon = null) {
    return getMessage(karakter_isim_veya_id,mesaj, fonksiyon_baslatma_zamani, beraber_calisacak_fonksiyon);
};

function arama_getir(karakter_isim_veya_id, fonksiyon_baslatma_zamani = 0, otomatik_kapatma_zamani = null, arama_kabul_edilirse, arama_reddedilirse, arama_kacirilirsa, konusma_bittiginde_kapatilirsa, konusma_bitmeden_kapatilirsa) {
    return get_callModal(karakter_isim_veya_id, fonksiyon_baslatma_zamani, otomatik_kapatma_zamani, arama_kabul_edilirse, arama_reddedilirse, arama_kacirilirsa, konusma_bittiginde_kapatilirsa, konusma_bitmeden_kapatilirsa);
};

function konusma_sesi_oynat(karakter_isim_veya_id, ses_dosyasi, fonksiyon_baslatma_zamani = 0, yeni_arama = true) {
    return playSpeechSound(karakter_isim_veya_id, ses_dosyasi, fonksiyon_baslatma_zamani, yeni_arama);
};

function sahneyi_getir(sahne_adi, fonksiyon_baslatma_zamani = 0){
    return nextStage(sahne_adi, fonksiyon_baslatma_zamani);
}

function karakter_getir(karakter_isim_veya_id) {
    return get_character(karakter_isim_veya_id);
};

function karakterin_özelligini_degistir(karakter_isim_veya_id, ozellik_adi, yeni_deger, fonksiyon_baslatma_zamani = 0, program_veya_manuel = false) {
    return character_content_change(karakter_isim_veya_id, ozellik_adi, yeni_deger, fonksiyon_baslatma_zamani, program_veya_manuel);
};

function mesaj_gecmisini_sil(karakter_isim_veya_id = null, spesifik_veya_herkes, fonksiyon_baslatma_zamani = 0) {
    return deleteMessages(karakter_isim_veya_id, spesifik_veya_herkes, fonksiyon_baslatma_zamani);
};

function mesaj_getir_talebini_sil(karakter_isim_veya_id, fonksiyon_baslatma_zamani = 0) {
    return clear_gml(karakter_isim_veya_id, fonksiyon_baslatma_zamani);
};

function mesaj_sablonu_olustur(karakter_isim_veya_id, mesaj) {
    return createMessageHtml(karakter_isim_veya_id, mesaj);
};

function buton_olustur(metin, tiklama_fonksiyonu, buton_style, buton_class, buton_id) {
    return createButton(metin, tiklama_fonksiyonu, buton_style, buton_class, buton_id);
}

function gorsel_olustur(gorsel_url, tiklama_fonksiyonu, gorsel_style, gorsel_class, gorsel_id) {
    return createImage(gorsel_url, tiklama_fonksiyonu, gorsel_style, gorsel_class, gorsel_id);
}

function konusma_sesi_bul(dosya_adi) {
    return findSpeech(dosya_adi);
}

function konusma_sesi_olustur(ses_dosyasi) {
    return createSpeechSound(ses_dosyasi);
};

function konusma_bitis_belirteci(karakter_isim_veya_id, fonksiyon_baslatma_zamani = 0) {
    return get_screen(karakter_isim_veya_id, fonksiyon_baslatma_zamani);
}

function aramayi_kapat(karakter_isim_veya_id, fonksiyon_baslatma_zamani = 0) {
    return closeCall_ST(karakter_isim_veya_id, fonksiyon_baslatma_zamani);
}

function fake_bildirim(karakter_isim_veya_id, tip = "message", ses_oynat = null) {
    return notification(karakter_isim_veya_id, tip, ses_oynat);
}

function ekran_getir(karakter_isim_veya_id, tip = "message") {
    return get_screen(karakter_isim_veya_id, tip);
}

function sayac_olustur(fonksiyon_baslatma_zamani = 0) {
    return createTimer(fonksiyon_baslatma_zamani);
};