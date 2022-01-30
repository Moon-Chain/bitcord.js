// oyunu başlatır
function start_game() {
    sahne_getir("sahne_baslangic_konusmasi");
}

function sahne_baslangic_konusmasi() {
    mesaj_getir('mag', 0, 'Bitcord projesi MoonArctic Games tarafından yürütülmektedir.');
    mesaj_getir('mag', 1000, 'Proje henüz geliştirme aşamasında, ilgili düşüncelerinizi lütfen bize iletin. Geri bildirimleriniz bizim için çok önemli' + emoji_olustur("1.png"), false);
    mesaj_getir('mag', 1100, 'Bitcord ' + buton_olustur('<i class="fa fa-external-link"></i> incele', 'proje_link()', null, "bbtn bbtn-blue") + '<br> MoonArctic Games ' + buton_olustur('<i class="fa fa-external-link"></i> incele', 'mag_link()', null, "bbtn bbtn-blue"), false);
    mesaj_getir('bitcord', 3000, 'Bitcord ile dilediğin senaryoyu oyun haline getirebilirsin.');
    mesaj_getir('bitcord', 4000, 'Senaryoları daha kolay yazmak ve kılavuz desteği için geliştirici modunu kullan.', false);
    mesaj_getir('bitcord', 5000, 'Geliştirici modunu aktifleştirmek için mevcut linkin sonuna <span class="text-h-green">?debugMode=true</span> ekleyin <span class="text-h-blue">veya</span> sol üstteki <span class="text-h-green">logoya 3 defa tıklayın.</span> <br>', false);
    mesaj_getir('bitcord', 6000, 'Logo <br>' + gorsel_olustur("bitcord_assets/gifs/debug_mode.gif", null, "width:400px; height:225px;"));
    mesaj_getir('eset', 7000, '<div class="bbtn-red">Bilgisayarınız tehlike altında <br> Algılandı: PUABundler:Win32/PC_Cyborg_1984 <br> Durum: Riskli</div>');
    mesaj_getir('eset', 8000, 'Knk ne yapalım ? sil dersen silicem bak ' + emoji_olustur("2.png"));
    mesaj_getir('eset', 10000, 'Yazacağın her senaryo, bu tarz gerçekçi bir deneyim haline gelecektir.');
}

function proje_link() {
    window.open("https://github.com/Moon-Chain/bitcord", "_blank");
}

function mag_link() {
    window.open("https://www.linkedin.com/company/moonarctic", "_blank");
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

// ----------------------------------------------
// hacker programı çalıştırma kodu
// downloadProgram("force_tools");

function downloadProgram(name) {
    if (name == "force_tools" && program_list.force_tools == false) {

        toastr.options = {
            positionClass: "toast-bottom-right",
            closeButton: true,
        }
        toast = toastr["error"](
            '<div>Yazılım tehlikeli olabilir ?</div><div><button type="button" onclick="clickSound(), addProgram(\'' + name + '\')">Kur</button></div>'
        );
    }
}

function addProgram(name) {
    program_panel = document.getElementById("program_panel");
    if (name == "force_tools" && program_list.force_tools != true) {
        program_panel.innerHTML = program_panel.innerHTML + '<div class="programs" onclick="clickSound(), forcetools()">FORCE_tools.exe</div>';
        program_list.force_tools = true;

        toastr.options = {
            positionClass: "toast-top-right",
            newestOnTop: false,
            progressBar: false,
            preventDuplicates: false,
            onclick: null,
            disableTimeOut: true,
            tapToDismiss: false,
            extendedTimeOut: 0,
            timeOut: 0,
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
        }
        toast = toastr["info"](
            '<div>Force_tools.exe <button onclick="forcetools()">Run</button></div>'
        );
    }
}

function forcetools() {
    if (program_list.force_tools) {
        if (active_program != undefined) {
            active_program.remove();
        }

        ignored_users = [];
        ignored_users.push(get_character("mag").id);

        var option_list;
        characters.forEach(ch => {
            hacked_find = ignored_users.find(elem => elem == ch.id);
            if (hacked_find == undefined) {
                option_list = option_list + '<option value="' + ch.id + '">' + ch.name + ' ' + ch.surname + '</option>';
            }
        });

        var select_html = '<select name="fselect">' + option_list + '</select>';

        setTimeout(function () {
            toastr.options = {
                positionClass: "toast-bottom-right",
                closeButton: true,
            }
            toastr["success"](
                'FORCE_tools.EXE'
            );
        }, 500);


        setTimeout(function () {
            toastr.options = {
                closeButton: true,
                newestOnTop: false,
                progressBar: false,
                preventDuplicates: false,
                onclick: null,
                disableTimeOut: true,
                tapToDismiss: false,
                extendedTimeOut: 0,
                timeOut: 0,
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            }
            active_program = toastr["warning"](
                '<div><form id="nmap" action="javascript:void(0)" onsubmit="forceStart()" method="post"><div><span>Select User</span></div><div>' + select_html + '<div><div><button onclick="clickSound()" type="submit" style="cursor:pointer;" class="btn btn-primary">Hesabı kır</button><div></form></div>'
            );
        }, 1500);
    }
}

function forceStart() {
    forceStarted++;
    var elements = document.getElementById("nmap").elements;
    user_id = elements['fselect'].value;
    setTimeout(function () {
        active_program.remove();
    }, 500);
    setTimeout(function () {
        toastr.options = {
            positionClass: "toast-bottom-right",
            closeButton: true,
        }
        active_program = toastr["success"](
            '<div>Hesap işleniyor...</div>'
        );
    }, 1000);
    setTimeout(function () {
        active_program.remove();
    }, 5000);
    setTimeout(function () {
        fchar = get_character(user_id);
        toastr.options = {
            closeButton: true,
            newestOnTop: false,
            progressBar: false,
            preventDuplicates: false,
            onclick: null,
            disableTimeOut: true,
            tapToDismiss: false,
            extendedTimeOut: 0,
            timeOut: 0,
        }
        active_program = toastr["error"]('<div><span id="forced_user">name</span><hr><p>Şu olarak değiştir</p><form id="forcerequest" action="javascript:void(0)" onsubmit="forceRequest(' + fchar.id + ')" method="post"><input type="text" name="name" placeholder="Ad"><input type="text" name="surname" placeholder="Soyad"><input type="text" name="display_name" placeholder="Kullanıcı Adı"><input type="text" name="img_url" placeholder="Görsel URL"><div><button onclick="clickSound()" type="submit" style="cursor:pointer;"class="btn btn-primary">Değiştir</button></div></form></div>');
        document.getElementById("forced_user").innerText = fchar.name + " " + fchar.surname;
    }, 6000);
}

function forceRequest(user_id) {
    forceUsed++;
    var elements = document.getElementById("forcerequest").elements;
    fchar = get_character(user_id);

    hacked_find = hacked_list.find(element => element == fchar.id);
    if (hacked_find == undefined) {
        hacked_list.push(fchar.id);
    }

    if (elements['name'].value != "" && elements['name'].value != fchar.name) {
        character_content_change(fchar.id, 0, "name", elements['name'].value, true);
    }
    if (elements['surname'].value != "" && elements['surname'].value != fchar.surname) {
        character_content_change(fchar.id, 0, "surname", elements['surname'].value, true);
    }
    if (elements['display_name'].value != "" && elements['display_name'].value != fchar.display_name) {
        character_content_change(fchar.id, 0, "display_name", elements['display_name'].value, true);
    }
    if (elements['img_url'].value != "" && elements['img_url'].value != fchar.img_url) {
        character_content_change(fchar.id, 0, "img_url", elements['img_url'].value, true);
    }
}