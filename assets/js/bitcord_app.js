var startTime = Date.now();
var debug_mode = false;
var debug_click = 0;
var context_menu = false;
var active_call = false;
var active_call_id = null;
var active_screen_id = null;
var call_interval;
var startCallST;
var closeCallST;
var active_call_sound;
var speech_ended = true;
var mic_is_open = false;
var last_message_timeout;
var calling_now_id = null;
var calling_start_time;
var if_call_closed_function = null;
var variable_if_call_closed = null;
var variable_if_speech_not_ended = null;
var glitch_interval = null;
var discord_call_sound = new sound("../assets/sounds/discord_call.mp3");
var discord_join_sound = new sound("../assets/sounds/discord_join.mp3");
var discord_leave_sound = new sound("../assets/sounds/discord_leave.mp3");
var discord_mute_sound = new sound("../assets/sounds/discord_mute.mp3");
var discord_unmute_sound = new sound("../assets/sounds/discord_unmute.mp3");
var discord_notification_sound = new sound("../assets/sounds/discord_notification.mp3");
var button_click = new sound("../assets/sounds/button_click.wav");
var dial_up = new sound("../assets/sounds/dial_up_internet.mp3");
var windows_error = new sound("../assets/sounds/windows_error.mp3");
var get_debug_info = location.search.split('debugMode=')[1];
var timerVal = 0;
var char_c;
var last_screen = {};
var program_list = {
    force_tools: false,
};
var toast;
var user_joined = false
var bitcord_mode = false;
var active_program;
var forceStarted = 0;
var forceUsed = 0;
var hacked_list = [];
var achievements = {}
var f5_protection = true;
var responsive_val = "pc";
var swal = Swal;

if (window.matchMedia("(min-width: 570px)").matches) {
    responsive_val = "pc";
} else {
    responsive_val = "mobile";
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];
today_text = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;
today = dd + '.' + mm + '.' + yyyy;

// F5 koruması
$(window).on('beforeunload', function () {
    if (f5_protection) {
        return 'Your own message goes here...';
    }
});

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

$(document).ready(function () {
    var date_text_list = document.querySelectorAll(".date_today");
    date_text_list.forEach(date_text => {
        date_text.innerText = today;
    });

    var date_text_list = document.querySelectorAll(".date_today_text");
    date_text_list.forEach(date_text => {
        date_text.innerText = today_text;
    });

});

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

var callbackArr = [];

function characterSwitch(casestmt, callback) {
    var callbackObj = {};
    callbackObj['cs'] = casestmt;
    callbackObj['clbkfn'] = callback;
    callbackArr.push(callbackObj);
}

function characterSwitchExecute(condition) {
    found = callbackArr.findIndex(data => data.cs === condition);
    if (found != -1) {
        return callbackArr[found].clbkfn;
    } else {
        return false;
    }
}

function get_character(name_or_id) {
    return_val = null;
    if (typeof name_or_id == "string") {
        char_id = characterSwitchExecute(name_or_id.toLowerCase());
        return_val = characters[char_id];
    }
    return_val == null ? return_val = characters[name_or_id] : null;
    return_val == null ? alert(name_or_id + " adlı kullanıcı bulunamadı, characters.js dosyasında bir hata olabilir.") : null;
    return return_val;
}

var chat_list = []
var message_timeout_list = []
characters.forEach(ch => {
    chat_list[ch.id] = [];
    message_timeout_list[ch.id] = [];
    characterSwitch(ch.code_name.toLowerCase(), ch.id);
});

function arrayRemove(array_name, index_num) {
    const index = array_name.indexOf(index_num);
    if (index > -1) {
        array_name.splice(index, 1);
    }
}

function requestFullScreen(el) {
    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
    return false
}

function toggleFullScreen(el) {
    if (!el) {
        el = document.body; // Make the body go full screen.
    }
    var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) || (document.mozFullScreen || document.webkitIsFullScreen);

    if (isInFullScreen) {
        cancelFullScreen();
    } else {
        requestFullScreen(el);
    }
    return false;
}

function startTimerClock() {
    timerVal = timerVal + 500;
    var toast_text = document.getElementById("toast_text");
    if (toast_text != undefined) {
        toast_text.value = timerVal;
    }
};

function createTimer(ms = 0) {
    setTimeout(function () {
        times = setInterval(startTimerClock, 500);
    }, ms);
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        disableTimeOut: true,
        tapToDismiss: false,
        closeButton: true,
        extendedTimeOut: 0,
        timeOut: 0,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr["info"](
        '<div><div><ul id="toast_list"></ul></div><div><input id="toast_text"><span> MS</span><div><div><button type="button" onclick="stopTimer()" class="btn btn-primary">Durdur</button><div></div>'
    );
}

function stopTimer() {
    var toast_list = document.getElementById("toast_list");
    toast_list.innerHTML = toast_list.innerHTML + '<li>' + timerVal + '</li>';
}

function character_content_change(character_value, content_name, new_value, time = 0, program = false) {
    char_c = setTimeout(function () {
        character = get_character(character_value);
        if (content_name == "img_url" && !program) {
            new_value = profile_file + new_value;
        }
        var old_value;
        var old_display_name = JSON.stringify(character.display_name);

        switch (content_name) {
            case "img_url":
                old_value = JSON.stringify(character.img_url);
                character.img_url = new_value;
                message_text = "profil fotoğrafını";
                break;
            case "name":
                old_value = JSON.stringify(character.name);
                character.name = new_value;
                message_text = "adını";
                break;
            case "surname":
                old_value = JSON.stringify(character.surname);
                character.surname = new_value;
                message_text = "soyadını";
                break;
            case "display_name":
                old_value = JSON.stringify(character.display_name);
                character.display_name = new_value;
                message_text = "kullanıcı adını";
                break;
            default:
                message_text = null;
                break;
        }

        if (last_screen.char_id == character.id) {
            get_screen(last_screen.char_id, last_screen.name);
        }

        if (content_name == "img_url") {
            getMessage(character_value, '<i style="color:#5865F2" class="bx bxs-edit-alt"></i>' + character.display_name + ' | kullanıcısı <i style="color:#5865f2">' + message_text + '</i> değiştirdi.' + createImage(JSON.parse(old_value), null, null, "servericon") + " -> " + createImage(new_value, null, null, "servericon"));
        } else {
            getMessage(character_value, '<i style="color:#5865F2" class="bx bxs-edit-alt"></i>' + JSON.parse(old_display_name) + ' kullanıcısı <i style="color:#5865f2">' + message_text + '</i>  ' + new_value + ' olarak  değiştirdi.');
        }
    }, time);
}

function character_content_change_void() {
    if (char_c != null || char_c != undefined) {
        character_content_change = cleartTimeout(char_c);
    }
}

function getM(character_value, message) {
    character = get_character(character_value);
    character_chat = chat_list[character.id];
    character_chat.push(message);
    notification(character.id, "message");

    if (active_screen_id == character.id) {
        message_line_html =
            '<div class="message_line"><img class="characterImg profilePhoto" src="' + character.img_url +
            '" /><div class="mbox"><strong class="character_DisplayName">' +
            character.display_name +
            '</strong> <span class="date_today" style="font-size:12px; text-indent: 50px; color:#72767D">' +
            today +
            '</span><span class="message">' + message +
            '</span><p></p></div></div>';

        //<div><button onclick="" class="emoji_button">🥳</button></div>; emoji çalışması

        message_box = document.querySelectorAll(".message_box");
        only_message_screen = document.querySelector("#only_message_screen");
        call_container = document.querySelector("#call_container");
        setTimeout(function () {
            only_message_screen.scrollTo({
                top: 99999,
                behavior: 'smooth'
            });
            call_container.scrollTo({
                top: 99999,
                behavior: 'smooth'
            });
        }, 100);
        message_box.forEach(box => {
            box.innerHTML = box.innerHTML + message_line_html;
        });
    }
}

function getMessage(character_value, message, ms = 0, with_func = null) {
    character = get_character(character_value);
    var obj = {}
    // clear_gml yapıldıktan sonra çakışmaması için 1ms süre timeout verildi
    return setTimeout(function () {
        obj.timeout_func =
            setTimeout(function () {
                getM(character_value, message);
                if (with_func != null) {
                    with_func();
                }
            }, ms);
        index_number = message_timeout_list[character.id].push(obj) - 1;
    }, 1)
}

function deleteMessages(character_value = null, select, time = 0) {
    return setTimeout(function () {
        if (select == "all") {
            characters.forEach(ch => {
                chat_list[ch.id] = [];
            });
        } else {
            if (character_value != null) {
                character = get_character(character_value);
                chat_list[character.id] = [];
                if (character.id == last_screen.char_id) {
                    get_screen(character.id, last_screen.name);
                }
            }
        }
    }, time);
}

function clear_gml(character_value, time = 0) {
    character = get_character(character_value);
    setTimeout(function () {
        message_timeout_list[character.id].forEach(mtl => {
            clearTimeout(mtl.timeout_func);
        });
        message_timeout_list[character.id] = [];
    }, time)
}

function createMessageHtml(character_value, message) {
    chrctr = get_character(character_value);
    html = '<div class="message_line"><img class="profilePhoto" src="' + chrctr.img_url + '"><div class="mbox"><strong>' + chrctr.display_name + '</strong><span class="message">' + message + '</span><p></p></div></div>';
    return html;
}

function createSpeechSound(sound_url) {
    var a_talk_user = document.getElementById("character_user");
    var audioCtx = new AudioContext();
    var url = sound_url;
    var source;
    var created_audio = new Audio(url);
    var processor = audioCtx.createScriptProcessor(2048, 1, 1);
    var meter = document.getElementById('meter');

    created_audio.addEventListener('canplaythrough', function () {
        source = audioCtx.createMediaElementSource(created_audio);
        source.connect(processor);
        source.connect(audioCtx.destination);
        processor.connect(audioCtx.destination);
        // created_audio.play();
    }, false);

    // loop through PCM data and calculate average
    // volume for a given 2048 sample buffer

    // konuştukça yeşil yanan halkayı oluşturur
    processor.onaudioprocess = function (evt) {
        var input = evt.inputBuffer.getChannelData(0),
            len = input.length,
            total = i = 0,
            rms;
        while (i < len) total += Math.abs(input[i++]);
        rms = Math.sqrt(total / len);
        average = (rms * 100);
        if (average > 7) {
            a_talk_user.getElementsByClassName("servericon")[0].classList.add("talk");
        } else {
            a_talk_user.getElementsByClassName("servericon")[0].classList.remove("talk");
        }

    };

    return created_audio;
}

var foreign_user = document.getElementById("foreign_user");
navigator.mediaDevices.getUserMedia({
        audio: true,
    })
    .then(function (stream) {
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(stream);
        const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);
        scriptProcessor.onaudioprocess = function () {
            const array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            const arraySum = array.reduce((a, value) => a + value, 0);
            const average = arraySum / array.length;
            // console.log(Math.round(average));

            if (foreign_user != undefined) {
                if (average > 10 && mic_is_open) {
                    foreign_user.getElementsByClassName("servericon")[0].classList.add("talk");
                } else {
                    foreign_user.getElementsByClassName("servericon")[0].classList.remove("talk");
                }
            }

        };
    })
    .catch(function (err) {
        /* handle the error */
        console.error(err);
    });


function get_callModal(character_value, time, close_time, if_accept, if_denied, if_missed, if_call_closed, if_speech_not_ended) {
    character = get_character(character_value);
    startCallST = setTimeout(function () {
        callModal(character_value, close_time, if_accept, if_denied, if_missed, if_call_closed, if_speech_not_ended)
    }, time);
}

function callModal(character_value, close_time, if_accept, if_denied, if_missed, if_call_closed, if_speech_not_ended) {
    character = get_character(character_value);
    calling_now_id = character.id;
    calling_start_time = setTimeout(function () {
        missedCall(character_value);
        calling_now_id = null;
        if (if_missed != null) {
            if_missed();
        }
    }, 10000);
    playSound();
    call_interval = setInterval(playSound, 500);
    Swal.fire({
        customClass: "call_style",
        title: '<img class="shaking" style="border-radius:50%; width:80px;" src="' + character.img_url +
            '"><br>' +
            character.name + " " + character.surname,
        text: "Gelen arama...",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: '<i class="bx bx-sm bxs-phone-call"></i>',
        confirmButtonColor: '#3BA55D',
        denyButtonText: '<i class="bx bx-sm bxs-phone-off"></i>',
        denyButtonColor: '#ED4245',
        allowOutsideClick: false,
        allowEscapeKey: false
    }).then((result) => {
        if (result.isConfirmed) {
            characters.forEach(ccst => {
                if (ccst != character.id) {
                    ccst.closeCallST = false;
                }
            });
            close_time != undefined || close_time != null ? closeCall_ST(character_value, close_time) : null;
            active_call_id = character.id;
            active_call = true;

            variable_if_call_closed = if_call_closed;
            variable_if_speech_not_ended = if_speech_not_ended;
            calling_now_id = null;
            clearTimeout(calling_start_time);
            if (if_accept != null) {
                if_accept()
            }
            stopSound();
        } else if (result.isDenied) {
            if_call_closed_function = null;
            calling_now_id = null;
            clearTimeout(calling_start_time);
            if (if_denied != null) {
                if_denied();
            }
            stopSound();
        }
    })
}

function missedCall(character_value) {
    Swal.close();
    character = get_character(character_value);
    stopSound();
    discord_leave_sound.play();
    getMessage(character_value, '<i style="color:#ED4245" class="bx bxs-phone"></i>' + character.display_name + ' kullanıcısından bir cevapsız arama.');
}

function closeCall() {
    if (active_call) {
        character_value = active_call_id;
        character = get_character(character_value);
        active_call_id = null;
        active_call = false;
        discord_leave_sound.play();
        character.closeCallST = false;
        notification(character_value, "end_call");
        get_screen(character_value, "only_message")
        clearInterval(call_interval);
        clearTimeout(startCallST)
        if (speech_ended) {
            if_call_closed_function = variable_if_call_closed;
        } else {
            if_call_closed_function = variable_if_speech_not_ended;
        }
        if (if_call_closed_function != null) {
            if_call_closed_function();
            if_call_closed_function = null;
        }
        if (active_call_sound != undefined) {
            active_call_sound.pause();
            active_call_sound = undefined;
        }
    }
}

function closeCall_ST(character_value, time = 0) {
    character = get_character(character_value);
    character.closeCallST = true;
    return setTimeout(function () {
        closeCall_with_control(character_value)
    }, time)
}

function closeCall_with_control(character_value) {
    character = get_character(character_value);
    if (active_call_id == character.id && character.closeCallST == true) {
        closeCall();
        character.closeCallST = false;
    }
}

//arama sesini oynat
function playSound() {
    discord_call_sound.play();
}

//arama sesini durdur
function stopSound() {
    discord_call_sound.stop();
    clearInterval(call_interval);
}

function click_server(character_value) {
    notification(character_value, "read_message");
    get_screen(character_value, "only_message");
}

//incele
function notifications_clear(character_value, time) {
    character = get_character(character_value);
    if (character != null) {
        var find_user = document.getElementById("user_" + character.id);
    }
    return setTimeout(function () {
        find_user.html = "";
    }, time);
}

function notification(character_value, type, play_sound = null) {
    var find_user;
    character = get_character(character_value);

    var user_list = document.getElementById("user_list");
    if (character != null) {
        var find_user = document.getElementById("user_" + character.id);
    }

    //Html oluşturulmadan önce okunmamış mesaj verisi 1 arttırılır
    type == "message" ? character.unread_message = character.unread_message + 1 : null;

    if (type == "end_call") {
        active_call_id = null;
        active_call = false;
        if (find_user != undefined) {
            var notification_call_badge = find_user.getElementsByClassName("notification")[0].getElementsByClassName("user_active_call")[0];
            notification_call_badge.classList.remove("user_active_call");
            notification_call_badge.classList.add("call_badge_visibility");
        }
        return;
    }

    var add_user_active_call_class = character.id == active_call_id ? "user_active_call" : false;
    var html = '<div id="user_' + character.id + '" class="server" onclick="click_server(' + character.id +
        ')"><img class="servericon" src="' +
        character.img_url +
        '"><div class="notification"><span class="call_badge call_badge_visibility ' +
        add_user_active_call_class + '"><i class="bx bxs-volume-full"></i></span><span class="badge" style="visibility: hidden;">' +
        character.unread_message + '</span></div></div>';

    if (type == "message") {
        if (play_sound == null) {
            discord_notification_sound.play();
        }
        if (find_user != null) {
            find_user.remove();
        }

        user_list.innerHTML = html + user_list.innerHTML;
        find_user = document.getElementById("user_" + character.id);
        var notification_badge = find_user.getElementsByClassName("notification")[0].getElementsByClassName(
            "badge")[0];
        if (last_screen.char_id == character.id) {
            character.unread_message = character.unread_message - 1;

        } else {
            notification_badge.style.visibility = "visible";
        }

    } else if (type == "call") {
        if (active_call) {
            var user_active_call = document.getElementsByClassName("user_active_call")[0];
            user_active_call != undefined ? user_active_call.classList.remove("user_active_call") : null;
        }

        active_call = true;
        active_call_id = character.id;
        if (find_user != null) {
            find_user.remove();
        }
        user_list.innerHTML = html + user_list.innerHTML;
        find_user = document.getElementById("user_" + character.id);
        var notification_call_badge = find_user.getElementsByClassName("notification")[0]
            .getElementsByClassName("call_badge")[0];
        if (character.unread_message > 0) {
            var notification_badge = find_user.getElementsByClassName("notification")[0]
                .getElementsByClassName("badge")[0];
            notification_badge.style.visibility = "visible";
        }
        notification_call_badge.classList.add("user_active_call");
    } else if (type == "read_message") {
        find_user = document.getElementById("user_" + character.id);
        var notification_badge = find_user.getElementsByClassName("notification")[0]
            .getElementsByClassName("badge")[0];
        notification_badge.style.visibility = "hidden";
    }
}

function open_mic() {
    var mics_button = document.querySelectorAll(".open_mic");
    var mic_notification = document.getElementById("foreign_user");
    mics_button.forEach(microphone_button => {
        var mic_button_logo = microphone_button.getElementsByTagName("i")[0];

        if (mic_is_open) {
            mic_is_open = false;
            microphone_button.classList.add("pressed");
            mic_button_logo.classList.remove("bxs-microphone");
            mic_button_logo.classList.add("bxs-microphone-off");
            mic_notification.getElementsByClassName("call_screen_notification")[0]
                .getElementsByClassName("badge")[0]
                .style.visibility = "visible";
            discord_mute_sound.play();
        } else {
            mic_is_open = true;

            microphone_button.classList.remove("pressed");
            mic_button_logo.classList.remove("bxs-microphone-off");
            mic_button_logo.classList.add("bxs-microphone");
            mic_notification.getElementsByClassName("call_screen_notification")[0]
                .getElementsByClassName("badge")[0]
                .style.visibility = "hidden";
            discord_unmute_sound.play();

        }

    });

    // var mic_button_logo = microphone_button.getElementsByTagName("i")[0];
    // if (mic_logo.classList.contains("bxs-microphone-off")) {
    //     microphone_button.style.backgroundColor = "#36393F";
    //     microphone_button.style.color = "#ffffff";
    //     mic_button_logo.classList.remove("bxs-microphone-off");
    //     mic_button_logo.classList.add("bxs-microphone");
    // } else {
    //     microphone_button.style.backgroundColor = "#ffffff";
    //     microphone_button.style.color = "#000000";
    //     mic_button_logo.classList.remove("bxs-microphone");
    //     mic_button_logo.classList.add("bxs-microphone-off");
    // }
}

function get_screen(character_value, type) {
    character = get_character(character_value);
    active_screen_id = character.id;
    var selected_container;
    container_list = ["call_container", "only_message_container", "tetris"]
    container_list.forEach(item => {
        container = document.getElementById(item);
        container.classList.remove("display_block");
        container.classList.add("display_none");
    });

    if (type == "call" || type == "only_message") {
        message_box = document.querySelectorAll(".message_box");
        message_box.forEach(box => {
            box.innerHTML = "";
        });
        var all_messages_html = "";

        character_chat = chat_list[character.id];
        if (character_chat != null) {
            character_chat.forEach(ch => {
                old_message_line_html =
                    '<div class="message_line"><img class="characterImg profilePhoto" src="' + character.img_url +
                    '" /><div class="mbox"><strong class="character_DisplayName">' +
                    character.display_name +
                    '</strong> <span class="date_today" style="font-size:12px; text-indent: 50px; color:#72767D">' +
                    today +
                    '</span><span class="message">' + ch +
                    '</span><p></p></div></div>';
                all_messages_html = all_messages_html + old_message_line_html;

                message_box = document.querySelectorAll(".message_box");
                message_box.forEach(box => {
                    box.innerHTML = all_messages_html;
                });
            });
        }
    }

    active_call_id == character.id ? type = "call" : null;

    if (type == "call") {
        last_screen.char_id = character.id;
        last_screen.name = "call";
        character.unread_message = 0;
        var selected_container = document.getElementById("call_container");
        selected_container.classList.remove("display_none");
        selected_container.classList.add("display_block");
    } else if (type == "only_message") {
        last_screen.char_id = character.id;
        last_screen.name = "only_message";
        character.unread_message = 0;
        var selected_container = document.getElementById("only_message_container");
        selected_container.classList.remove("display_none");
        selected_container.classList.add("display_block");
    }

    only_message_screen = document.querySelector("#only_message_screen");
    call_container = document.querySelector("#call_container");
    setTimeout(function () {
        only_message_screen.scrollTo({
            top: 99999,
        });
        call_container.scrollTo({
            top: 99999,
        });
    }, 100);

    var cntext = document.querySelectorAll(".character_DisplayName");
    var cndtext = document.querySelectorAll(".character_NameSurname");
    var cnimg = document.querySelectorAll(".characterImg");
    var futext = document.querySelectorAll(".foreignUserName");
    var fuimg = document.querySelectorAll(".foreignUserImg");
    cntext.forEach(cn => {
        cn.innerText = character.display_name;
    });
    cndtext.forEach(cn => {
        cn.innerText = character.name + " " + character.surname;
    });
    cnimg.forEach(cn => {
        cn.src = character.img_url;
    });

    futext.forEach(fu => {
        fu.innerText = characters[0].display_name;
    });
    fuimg.forEach(fu => {
        fu.src = characters[0].img_url;
    });
}

function playSpeechSound(character_value, speech_sound, time = 1500, new_call = true) {
    if (new_call) {
        discord_join_sound.play();
    }
    speech_ended = false;
    notification(character_value, "call");
    get_screen(character_value, "call");
    if (speech_sound != null) {
        startCallST = setTimeout(function () {
            active_call_sound = createSpeechSound(speech_sound);
            active_call_sound.play();
        }, time);
    }
}

function speechEnded_indicator(character_value, time = 0) {
    return setTimeout(function () {
        speechEnded_indicator_with_control(character_value)
    }, time);
}

function speechEnded_indicator_with_control(character_value) {
    character = get_character(character_value);
    if (character.id == active_call_id) {
        speech_ended = true;
    }
}

function createButton(btn_innertext, btn_onclick_val, btn_style = null, btn_class = null, id = null) {
    id_html = id != undefined || id != null ? 'id="' + id + '"' : ' ';
    style_html = btn_style != undefined || btn_style != null ? 'style="' + btn_style + '"' : "";
    onclick_html = btn_onclick_val != undefined || btn_onclick_val != null ? 'onclick="clickSound(),' + btn_onclick_val + '"' : "";
    class_html = btn_class != undefined || btn_class != null ? 'class="bpoint ' + btn_class + '"' : 'class="bpoint"';
    var buttonhtml = '<button ' + id_html + style_html + " " + onclick_html + " " + class_html + '>' + btn_innertext + '</button>';
    return buttonhtml;
}

function createImage(img_src, img_onclick_val, img_style = null, img_class = null, id = null) {
    id_html = id != undefined || id != null ? 'id="' + id + '"' : ' ';
    style_html = img_style != undefined || img_style != null ? 'style="' + img_style + '"' : 'style="width:25px;"';
    onclick_html = img_onclick_val != undefined || img_onclick_val != null ? 'onclick="clickSound(),' + img_onclick_val + '"' : "";
    class_html = img_class != undefined || img_class != null ? 'class="bpoint ' + img_class + '"' : 'class="bpoint"';
    var buttonhtml = '<img ' + id_html + ' src="' + img_src + '"' + style_html + " " + onclick_html + " " + class_html + '>';
    return buttonhtml;
}

function destroyThis(variable) {
    variable.parentNode.removeChild(variable);
}

function clickSound() {
    button_click.play();
}

function findSpeech(speech_name) {
    return "../assets/sounds/speech_sounds/" + speech_name;
}

function rootDiv(mode) {
    var bar = document.getElementById("rootDiv");
    mode == "visible" ? bar.style.visibility = "visible" : bar.style.visibility = "hidden";
}

function doGlitch(queryss, glitch_type, repeater = false, time = 0) {
    var objec = document.querySelectorAll(queryss);
    if (glitch_type == "scanlines") {
        objec.forEach(element => {
            element.classList.add("scanlines");
            if (repeater) {
                setTimeout(function () {
                    element.classList.remove("scanlines");
                }, time);
            }
        });
    } else if (glitch_type == "line_glitch") {
        objec.forEach(element => {
            element.classList.add("line_glitch");
            if (repeater) {
                setTimeout(function () {
                    element.classList.remove("scanlines");
                }, time);
            }
        });
    } else if (glitch_type == "glow") {
        objec.forEach(element => {
            element.classList.add("glow");
            if (repeater) {
                setTimeout(function () {
                    element.classList.remove("glow");
                }, time);
            }
        });
    }
}

function youtube_modal(link, width = 760, height = 415, id = null, accept_button_text = null, if_accept = null, deny_button_text = null, if_deny = null, cancel_button_text = null, if_cancel = null) {
    if (responsive_val == "mobile") {
        width = 400;
        height = 220;
    } else if (responsive_val == "pc") {
        width = 760;
        height = 415;
    }
    id_html = id != undefined || id != null ? 'id="' + id + '"' : ' ';
    iframee = '<iframe ' + id_html + ' width="' + width + '" height="' + height + '" src="' + link + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';

    swal_content = {
        html: '<div>' + iframee + '</div>',
        focusConfirm: false,
        customClass: 'swal2-wide',
        allowOutsideClick: false,
        allowEscapeKey: false,
    }

    if (if_accept != null) {
        swal_content.showConfirmButton = true;
        swal_content.confirmButtonColor = '#3BA55D';
        swal_content.confirmButtonText = accept_button_text;
    }
    if (if_deny != null) {
        swal_content.showDenyButton = true;
        swal_content.denyButtonColor = '#ED4245';
        swal_content.denyButtonText = deny_button_text;
    }
    if (if_cancel != null) {
        swal_content.showCancelButton = true;
        swal_content.cancelButtonText = cancel_button_text;
    }

    Swal.fire(swal_content).then((result) => {
        if (result.isConfirmed) {
            if_accept();
        }

        if (result.isDenied) {
            if_deny();
        }

        if (result.isDismissed) {
            if_close();
        }
    });
}

function nextStage(scene, time = 0) {
    timeout = setTimeout(() => {
        scenef = eval(scene);
        scenef();
    }, time);
    return timeout;
}

function cm_stage_select_page() {
    stages = getAllStages();
    html_co = '<tr class="table-header"><td>Stage Name</td><td>Process</td></tr>';
    stages.forEach(stage => {
        sahne_html = '<tr><td>' + stage + '</td><td><button style="cursor:pointer; padding:6px;" onclick="select_stage(\'' + stage + '\')">Oynat</button></td></tr>';
        html_co = html_co + sahne_html;
    });

    Swal.fire({
        html: '<div style="max-height:400px; overflow:auto;"><table class="table">' + html_co + '</table></div>',
        focusConfirm: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCloseButton: true,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Kapat'
    });
}

function cm_character_select_page() {
    html_co = '<tr class="table-header"><td>id</td><td>img</td><td>code_name</td><td>display_name</td><td>name</td><td>surname</td></tr>';
    characters.forEach(ch => {
        sahne_html = '<tr><td>' + ch.id + '</td><td><img class="floatingImg" src="' + ch.img_url + '"></img></td><td>' + ch.code_name + '</td><td>' + ch.display_name + '</td><td>' + ch.name + '</td><td>' + ch.surname + '</td></tr>';
        html_co = html_co + sahne_html;
    });

    Swal.fire({
        html: '<div style="max-height:400px; overflow:auto;"><table class="table">' + html_co + '</table></div>',
        focusConfirm: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        showCancelButton: true,
        showCloseButton: true,
        cancelButtonText: 'Kapat',
        customClass: "swal2-large"
    });
}

function select_stage(stage_name) {
    stage_buttons = document.querySelectorAll(".select_stage");
    stage_buttons.forEach(sb => {
        sb.disabled = "disabled";
    });
    Swal.close();
    Swal.fire({
        icon: "success",
        title: "Sahne Yükleniyor...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        showCancelButton: false,
        timer: 1000,
    }).then((result) => {
        eval(stage_name)();
    });
}

function hideMenu() {
    if (context_menu) {
        document.getElementById("contextMenu")
            .style.display = "none";
    }
}

function rightClick(e) {
    if (context_menu) {
        e.preventDefault();

        if (document.getElementById("contextMenu").style.display == "block") {
            hideMenu();
        } else {
            var menu = document.getElementById("contextMenu");
            menu.style.display = 'block';
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";
        }
    }
}

function contextMenu() {
    inp = document.getElementById("xdz");
    if (inp != undefined) {
        context_menu = inp.checked;
    }
}

function debugClick() {
    if (debug_click < 2) {
        debug_click++;
    } else {
        if (debug_mode) {
            Swal.fire({
                icon: 'info',
                title: 'Geliştirici Modu Kapatılacak',
                text: 'mod değişimi yapılsın mı?',
                confirmButtonText: '<i class="fa fa-check"></i> Evet',
                cancelButtonText: '<i class="fa fa-ban"></i> Hayır',
                allowOutsideClick: false,
                allowEscapeKey: false,
                showCancelButton: true
            }).then((result) => {
                if (result.isConfirmed) {
                    f5_protection = false;
                    window.location.assign(window.location.pathname);
                }
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Geliştirici Modu Açılacak',
                text: 'mod değişimi yapılsın mı ?',
                confirmButtonText: '<i class="fa fa-check"></i> Evet',
                cancelButtonText: '<i class="fa fa-ban"></i> Hayır',
                allowOutsideClick: false,
                allowEscapeKey: false,
                showCancelButton: true
            }).then((result) => {
                if (result.isConfirmed) {
                    f5_protection = false;
                    window.location.href = "?debugMode=true";
                }
            });
        }
    }
}

function getAllStages() {
    var stages = [];
    for (var i in window) {
        if ((typeof window[i]).toString() == "function") {
            if (window[i].name.search("sahne") != -1 && window[i].name.search("sahneyi_getir") == -1) {
                stages.push(window[i].name);
            }
        }
    }

    return stages;
}

if (get_debug_info != undefined) {
    debug_mode = (get_debug_info.toLowerCase() === 'true');
}
if (!debug_mode) {
    $(document).ready(function () {
        Swal.fire({
            title: 'Bitcord App\'e Hoşgeldin',
            confirmButtonText: 'Devam <i class="fa fa-arrow-right"></i>',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((result) => {
            Swal.fire({
                title: 'Gerçekçi bir deneyim için mikrofonunu açabilirsin (opsiyonel) ',
                text: 'Bitcord App - Discord Simulation Framework',
                confirmButtonText: 'Devam <i class="fa fa-arrow-right"></i>',
                allowOutsideClick: false,
                allowEscapeKey: false
            }).then((result) => {
                Swal.fire({
                    title: '<img style="border-radius:50%; width:60px;" src="' + characters[0].img_url +
                        '"><br>' + 'Hoşgeldin',
                    text: 'Hadi, benzersiz bir nickname belirle !',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Hazırım',
                    cancelButtonText: 'Anonim devam et',
                    allowOutsideClick: false,
                    allowEscapeKey: false
                }).then((result) => {
                    toastr.options = {
                        positionClass: "toast-bottom-right",
                        closeButton: true,
                    }
                    toast = toastr["info"](
                        '<div>Gerçekçi deneyim için Tam ekran modu aktif</div>'
                    );
                    toggleFullScreen();
                    rootDiv("visible");
                    var fuimg = document.querySelectorAll(".foreignUserImg");
                    fuimg.forEach(fu => {
                        fu.src = characters[0].img_url;
                    });
                    setTimeout(function () {
                        start_game();
                    }, 2000);

                    if (result.isConfirmed) {
                        kullanici_adi = result.value.slice(0, 12);
                        character = get_character("user");
                        character.display_name = kullanici_adi;
                        document.getElementById("username_text").innerText = kullanici_adi;
                    }
                });
            });
        });
    });
} else {

    toastr.options = {
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        disableTimeOut: true,
        tapToDismiss: false,
        closeButton: true,
        extendedTimeOut: 0,
        timeOut: 0,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "closeButton": false
    }
    toastr["info"](
        '<div><p>Bağlam Menüsü<p><label class="switch"><input id="xdz" onchange="contextMenu()" type="checkbox"><span class="slider round"></span></label></div>'
    );

    rootDiv("visible");
}