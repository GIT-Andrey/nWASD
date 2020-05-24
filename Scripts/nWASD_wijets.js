// bigButton

let wijetMass = [
    [{
            html: "<div class=\"mainWijetWrap mainButtonWijetWrap\"><div class=\"bigButtonWrap\"><div class=\"bigButton\"><i class=\"fas fa-power-off\"></i></div></div></div>",
            title: "кнопка",
            background: "#303952"
        },
        {
            html: "<div class=\"mainWijetWrap mainSwichWijetWrap\"><div class = \"swichWrap\"><div class=\"swich\">OFF</div></div></div>",
            title: "выключатель",
            background: "#303952"
        },
        {
            html: "<div class=\"mainWijetWrap mainOnOffWijetWrap\"><div class=\"OnOffWrap\"><div class=\"onOffButton onOffButtonUp\">|</div><div class=\"lightIndicator\"></div><div class=\"onOffButton onOffButtonDown\">◯</div></div></div>",
            title: "вкл - выкл",
            background: "#303952"
        },
        {
            html: "<div class=\"mainWijetWrap mainLampWijetWrap\"><div class=\"lampPatron\"></div><div class=\"lamp\"></div><div class=\"lampDecore\">Lamp</div><div class=\"lampWrap\"></div><div class=\"lampShadow\"></div></div>",
            title: "лампочка",
            background: "#303952"
        },
        {
            html: "<div class=\"mainWijetWrap mainTapeWijetWrap\"><div class=\"tapeWrap\"><div><span></span></div><div><span></span></div><div><span></span></div><div><span></span></div><div><span></span></div><div><span></span></div><div><span></span></div></div></div>",
            title: "свето-лента",
            background: "#303952"
        },
        {
            html: "<div class=\"mainWijetWrap mainSocketWijetWrap\"><div class=\"socketWrap\"><div class=\"socket\"><div></div><div></div></div></div></div>",
            title: "розетка",
            background: "#303952"
        },
        {
            html: "<div class=\"mainWijetWrap mainBlindWijetWrap\"><div class=\"blindDecore\"></div><div class=\"blindWrap\"><div class=\"blindBackground\"></div><div class=\"blind\"></div><input type=\"range\" class=\"blindSlider\" min=\"0\" max=\"100\" step=\"1\" value=\"0\"></div></div>",
            title: "шторка",
            background: "#303952"
        },
        {
            html: "<div class=\"mainWijetWrap mainSliderWijetWrap\"><div class=\"sliderWrap\"><div class=\"volume\">0</div><input type=\"range\" class=\"slider\" min=\"0\" max=\"98\" step=\"1\" value=\"0\"></div> </div>",
            title: "ползунок",
            background: "#303952"
        },
        {
            html: "<div class=\"mainWijetWrap mainSetValueWijetWrap\"><div class=\"setValueWrap\"><div class=\"setValueButton1 setValueButton\"><i class=\"fas fa-minus\"></i></div><input class=\"setValue\" type=\"number\" value=\"0\"><div class=\"setValueButton2 setValueButton\"><i class=\"fas fa-plus\"></i></div></div></div>",
            title: "значение",
            background: "#303952"
        },
        {
            html: "<div class=\"mainWijetWrap mainLabeledButtonWijetWrap\"><div class=\"labeledButton\">OFF</div></div>",
            title: "кнопка с фиксацией",
            background: "#303952"
        },
        // {
        //     html: "<div class=\"mainWijetWrap mainTimerPushWijetWrap\"><input type=\"text\" class=\"timer\" value=\"0\" data-linecap=round data-thickness=.15><div class=\"timerPushVal timerVal\">off</div><div class=\"timerTime\">...</div></div>",
        //     title: "push таймер",
        //     background: "#303952"
        // },
        // {
        //     html: "<div class=\"mainWijetWrap mainTimerTogleWijetWrap\"><input type=\"text\" class=\"timer\" value=\"0\" data-linecap=round data-thickness=.15><div class=\"timerTogleVal timerVal\">off</div></div>",
        //     title: "togle таймер",
        //     background: "#303952"
        // },
        {
            html: "<div class=\"mainWijetWrap mainTempWijetWrap\"><div class=\"temp\"><span class=\"showVal\">0</span><span class=\"name\">°C</span></div></div>",
            title: "температура",
            background: "#323052"
        },
        {
            html: "<div class=\"mainWijetWrap mainPressWijetWrap\"><div class=\"press\"><span class=\"showVal\">0</span><span class=\"name\">mrs</span></div></div>",
            title: "давление",
            background: "#323052"
        },
        {
            html: "<div class=\"mainWijetWrap mainHumWijetWrap\"><div class=\"hum\"><span class=\"showVal\">0</span><span class=\"name\">%</span></div></div>",
            title: "влажность",
            background: "#323052"
        },
        {
            html: "<div class=\"mainWijetWrap mainValDispWijetWrap\"><div class=\"valDisp\"><span class=\"showVal\">0</span><span class=\"name\"></span></div></div>",
            title: "значение",
            background: "#323052"
        },
        {
            html: "<div class=\"mainWijetWrap mainLightWijetWrap\"><div class=\"light\"></div><div class=\"lightBorder\"></div><div class=\"lightLengA\"></div><div class=\"lightLengK\"></div></div>",
            title: "светодиод",
            background: "#323052"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> = </div>",
            title: "присвоить",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> == </div>",
            title: "сравнение",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> === </div>",
            title: "ст. сравнение",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> != </div>",
            title: "не равно",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> > </div>",
            title: "больше",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> < </div>",
            title: "меньше",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> >> </div>",
            title: "больше на",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> << </div>",
            title: "меньше на",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> += </div>",
            title: "прибавить",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> -= </div>",
            title: "вычесть",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> *= </div>",
            title: "умножить",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> /= </div>",
            title: "поделить",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> % </div>",
            title: "остаток",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> >=< </div>",
            title: "IN диап.",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> <=> </div>",
            title: "OUT диап.",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> OR </div>",
            title: "лог. OR",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> XOR </div>",
            title: "лог. XOR",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> NOR </div>",
            title: "лог. NOR",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> AND </div>",
            title: "лог. AND",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> NAND </div>",
            title: "лог. NAND",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionWijetWrap\"> =pin </div>",
            title: "группа пинов",
            background: "#bdc3c7"
        },
        {
            html: "<div class=\"mainWijetWrap mainConditionGoldWijetWrap\"> Func </div>",
            title: "функция",
            background: "#EAB543"
        },
        {
            html: "<div class=\"mainWijetWrap mainTimerWijetWrap\"><div class=\"timerTop\"></div><div class=\"timerButtonWrap\"><div class=\"timerDecoreLL\"></div><div class=\"timerDecoreL\"></div><div class=\"timerDecoreB\"></div><div class=\"timerDecoreT timerText1\"></div><div class=\"timerDecoreT timerText2\"></div><div class=\"timerDecoreT timerText3\"></div></div></div>",
            title: "таймер",
            background: "#0d5e4d"
        },
        {
            html: "<div class=\"mainWijetWrap mainTimerWijetWrap\"><div class=\"timerTop\"></div><div class=\"timerButtonWrap\"><div class=\"timerDecoreLL\"></div><div class=\"timerDecoreL\"></div><div class=\"timerDecoreB\"></div><div class=\"timerDecoreT timerText1\"></div><div class=\"timerDecoreT timerText2\"></div><div class=\"timerDecoreT timerText3\"></div></div></div>",
            title: "интервал",
            background: "#0d5e4d"
        }
    ],
    [{
            html: "",
            title: "кнопка полива",
            background: "#3fcf00"
        },
        {
            html: "",
            title: "интервал полива",
            background: "#698cc8"
        }
    ]
];

function sendPin(url, pin, val, espNumb, oldPinValue, noSinc = false) {
    let timeNow = new Date().getTime();
    if (timeNow - lastResponse > 50) {
        lastResponse = timeNow;
        if (val == true) {
            val = 1;
        }
        if (val == false) {
            val = 0;
        }
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("pin=" + pin + "&val=" + val);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status != 200) {
                console.log('err', xhr.status);
                toast("Плата не в сети!");
                options.ESPSettings[espNumb].pins[pin] = oldPinValue;
                isClick = false;
                if (!noSinc) {
                    wijetsInit();
                }
            } else {
                console.log('ok');
                let rezult = xhr.responseText.split(",");
                for (let i = 0; i < 20; i++) {
                    options.ESPSettings[espNumb].pins[i] = parseInt(rezult[i]);
                }
                if (!noSinc) {
                    wijetsInit();
                }
            }
        }
    }
}

function sendTimer(url, pin, val, hours, minutes, targetPin) {
    let timeNow = new Date().getTime();
    if (timeNow - lastResponse > 50) {
        lastResponse = timeNow;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url + "/set_timer", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("pin=" + pin + "&hours=" + hours + "&minutes=" + minutes + "&val=" + val + "&targetPin=" + targetPin);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status != 200) {
                console.log('err', xhr.status);
                toast("Плата не в сети!");
            } else {
                console.log('ok');
            }
        }
    }
}

function sendInterval(url, pin, valIn, valOut, hoursIn, minutesIn, hoursOut, minutesOut, days, targetPin) {
    let timeNow = new Date().getTime();
    if (timeNow - lastResponse > 50) {
        lastResponse = timeNow;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url + "/set_interval", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("pin=" + pin + "&hoursIn=" + hoursIn + "&minutesIn=" + minutesIn + "&hoursOut=" + hoursOut + "&minutesOut=" + minutesOut + "&days=" + days + "&valIn=" + valIn + "&valOut=" + valOut + "&targetPin=" + targetPin);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status != 200) {
                console.log('err', xhr.status);
                toast("Плата не в сети!");
            } else {
                console.log('ok');
            }
        }
    }
}


class SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        this.html = html;
        this.title = title;
        this.pin = pin;
        this.url = url;
        this.esp = esp;
        this.val1 = val1;
        this.val2 = val2;
        this.type = type;
    }
    settings(i) {
        modalUpdate();
        $("#wijetTitle").val(this.title);
        $("#pin").val(this.pin);
        $("#timeLine1").val(this.val1);
        $("#timeLine2").val(this.val2);
        $('[value = "' + this.esp + '"]').prop('selected', true);
        activeWijet = i;
    }
    init(id) {
        let espNumb;
        if (this.esp == undefined || this.pin < 1 || this.pin > 20) {
            toast("Выберите пин и плату подключения!");
            return;
        }
        let espName = this.esp.split("_")[1];
        for (let i = 0; i < options.ESPSettings.length; i++) {
            if (espName == options.ESPSettings[i].name) {
                espNumb = i;
            }
        }
        if (espNumb == undefined) {
            toast("Не валидное значение пина на виджете " + id + ". Исправляем на дефолтное");
            options.ESPSettings[espNumb].name = 0;
        }
        this.script(id, espNumb);
    }
}

class BigButton extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        let url = this.url;
        let pin = this.pin - 2;
        $(id + " .bigButton").off();
        $(id + " .bigButton").mousedown(function () {
            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            options.ESPSettings[espNumb].pins[pin] = !options.ESPSettings[espNumb].pins[pin];
            sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue);
            isClick = pin;
            wijetsInit();
            $(id + " .bigButtonWrap").css("background", "#ffc782a1");
            $(id + " .bigButton").css("background", "#ffc682");
            $(id + " .bigButton").css("box-shadow", "0 0 30px #ffc682");
            $(id + " .bigButton").css("transform", "scale(0.96)");
            setTimeout(function () {
                options.ESPSettings[espNumb].pins[pin] = !options.ESPSettings[espNumb].pins[pin];
                sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue);
                isClick = pin;
                wijetsInit();
                $(id + " .bigButtonWrap").css("background", "#546ce59a");
                $(id + " .bigButton").css("background", "#546de5");
                $(id + " .bigButton").css("box-shadow", "1px 3px 3px rgba(0, 0, 0, 0.4), 2px 5px 13px rgba(0, 0, 0, 0.1), 2px 7px 23px rgba(0, 0, 0, 0.1)");
                $(id + " .bigButton").css("transform", "scale(1)");
            }, 600);
        });
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class Switch extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        this.run(id, espNumb, this.pin);
        let url = this.url;
        let run = this.run;
        let pin = this.pin - 2;
        $(id + " .swich").off();
        $(id + " .swich").mousedown(function () {
            isClick = pin;
            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            options.ESPSettings[espNumb].pins[pin] = !options.ESPSettings[espNumb].pins[pin];
            sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue);
            if (isRunActive) {
                run(id, espNumb, pin + 2);
            }
        });
    }
    run(id, espNumb, pin) {
        if (options.ESPSettings[espNumb].pins[pin - 2] == 0) {
            $(id + " .swich").html("OFF");
            $(id + " .swich").css("bottom", "0");
            $(id + " .swich").css("background", "#fc5c65");
            $(id + " .swich").css("box-shadow", "1px 3px 3px rgba(0, 0, 0, 0.4), 2px 5px 13px rgba(0, 0, 0, 0.1), 2px 7px 23px rgba(0, 0, 0, 0.1), 0px 0px 30px #fc5c65");
        } else {
            $(id + " .swich").html("ON");
            $(id + " .swich").css("bottom", "-52px");
            $(id + " .swich").css("background", "#26de81");
            $(id + " .swich").css("box-shadow", "1px 3px 3px rgba(0, 0, 0, 0.4), 2px 5px 13px rgba(0, 0, 0, 0.1), 2px 7px 23px rgba(0, 0, 0, 0.1), 0px 0px 30px #26de81");
        }
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class OnOff extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        this.run(id, this.val1, this.val2, espNumb);
        let url = this.url;
        let pin = this.pin - 2;
        $(id + " .onOffButtonUp").off();
        $(id + " .onOffButtonDown").off();
        $(id + " .onOffButtonUp").mousedown(function () {
            isClick = pin;
            options.ESPSettings[espNumb].pins[pin] = true;
            sendPin(url + "/pin_switch", pin, true, espNumb, false);
            if (isRunActive) {
                wijetsInit();
            }
        });
        $(id + " .onOffButtonDown").mousedown(function () {
            isClick = pin;
            options.ESPSettings[espNumb].pins[pin] = false;
            sendPin(url + "/pin_switch", pin, false, espNumb, true);
            if (isRunActive) {
                wijetsInit();
            }
        });
    }
    run(id, val1, val2, espNumb) {
        $(id + " .onOffButton").css("background", val1);
        $(id + " .lightIndicator").css("background", val1);

        let rotate = parseInt(val2);

        if (rotate > 35 && rotate < 325) {
            $(id + " .mainOnOffWijetWrap").css("width", "148px");
            $(id + " .offline").css("width", "148px");
        } else {
            $(id + " .mainOnOffWijetWrap").css("width", "98px");
            $(id + " .offline").css("width", "98px");
        }

        $(id + " .OnOffWrap").css("transform", "rotate(" + rotate + "deg)");

        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class Lamp extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        this.run(id, espNumb, this.pin, this.val1);
        let run = this.run;
        let url = this.url;
        let pin = this.pin - 2;
        let val = this.val1;
        $(id + " .lampShadow").off();
        $(id + " .lampShadow").click(function () {
            isClick = pin;
            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            options.ESPSettings[espNumb].pins[pin] = !options.ESPSettings[espNumb].pins[pin];
            sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue);
            if (isRunActive) {
                run(id, espNumb, pin + 2, val);
            }
        });
    }
    run(id, espNumb, pin, val) {
        $(id + " .mainLampWijetWrap").css("--lamp-background", val);
        if (options.ESPSettings[espNumb].pins[pin - 2]) {
            $(id + " .lampWrap").addClass("lampWrapActive");
            $(id + " .lampShadow").css("box-shadow", "0 0 30px 12px var(--lamp-background)");
            $(id + " .lampShadow").css("background", "var(--lamp-background)");
        } else {
            $(id + " .lampWrap").removeClass("lampWrapActive");
            $(id + " .lampShadow").css("box-shadow", "none");
            $(id + " .lampShadow").css("background", "#ffffff");
        }
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class Tape extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        this.run(id, espNumb, this.pin);
        let run = this.run;
        let url = this.url;
        let pin = this.pin - 2;
        $(id + " .tapeWrap").off();
        $(id + " .tapeWrap").click(function () {
            isClick = pin;
            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            options.ESPSettings[espNumb].pins[pin] = !options.ESPSettings[espNumb].pins[pin];
            sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue);
            if (isRunActive) {
                run(id, espNumb, pin + 2);
            }
        });
    }
    run(id, espNumb, pin) {
        if (options.ESPSettings[espNumb].pins[pin - 2]) {
            $(id + " .tapeWrap div span").addClass("tapeActive");
        } else {
            $(id + " .tapeWrap div span").removeClass("tapeActive");
        }
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class Socket extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        this.run(id, espNumb, this.pin);
        let run = this.run;
        let url = this.url;
        let pin = this.pin - 2;
        $(id + " .socketWrap").off();
        $(id + " .socketWrap").click(function () {
            isClick = pin;
            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            options.ESPSettings[espNumb].pins[pin] = !options.ESPSettings[espNumb].pins[pin];
            sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue);
            if (isRunActive) {
                run(id, espNumb, pin + 2);
            }
        });
    }
    run(id, espNumb, pin) {
        if (options.ESPSettings[espNumb].pins[pin - 2]) {
            $(id + " .socket").css("border", "5px solid #00cec9");
            $(id + " .socket div").css("background", "#00cec9");
        } else {
            $(id + " .socket").css("border", "5px solid #f3f7f8");
            $(id + " .socket div").css("background", "#2c3e50");
        }
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class Blind extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        let run = this.run;
        let pin = this.pin - 2;
        let url = this.url;
        let blindSlider = document.getElementById(id.split("#")[1]).querySelector('.blindSlider');
        blindSlider.removeEventListener('touchmove', blindMove);
        blindSlider.removeEventListener('touchend', blindMove);
        $(id + " .blindSlider").off();
        $(id + " .blindSlider").val(options.ESPSettings[espNumb].pins[pin]);
        this.run(id, espNumb, pin + 2);
        $(id + " .blindSlider").mousemove(blindMove);
        $(id + " .blindSlider").click(blindMove);
        blindSlider.addEventListener('touchmove', blindMove);
        blindSlider.addEventListener('touchend', blindMove);

        function blindMove() {
            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue, true);
            run(id, espNumb, pin + 2);
            blindSlider.removeEventListener('touchmove', blindMove);
            blindSlider.removeEventListener('touchend', blindMove);
            $(id + " .blindSlider").off();
            wijetsInit();
        }
    }
    run(id, espNumb, pin) {
        options.ESPSettings[espNumb].pins[pin - 2] = $(id + " .blindSlider").val();
        let val = parseInt($(id + " .blindSlider").val());
        val;
        $(id + " .blindSlider").css("top", "-" + (val * 1.58) + "px");
        $(id + " .blind").css("height", (val + 2) + "px");
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class Slider extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        let run = this.run;
        let pin = this.pin - 2;
        let url = this.url;
        let slider = document.getElementById(id.split("#")[1]).querySelector('.slider');
        slider.min = this.val1;
        slider.max = this.val2;
        slider.removeEventListener('touchmove', sliderFunc);
        slider.removeEventListener('touchend', sliderFunc);
        $(id + " .slider").off();
        $(id + " .slider").val(options.ESPSettings[espNumb].pins[pin]);
        this.run(id, espNumb, pin + 2);
        $(id + " .slider").mousemove(sliderFunc);
        $(id + " .slider").click(sliderFunc);
        slider.addEventListener('touchmove', sliderFunc);
        slider.addEventListener('touchend', sliderFunc);

        function sliderFunc() {
            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue, true);
            run(id, espNumb, pin + 2);
            $(id + " .slider").off();
            slider.removeEventListener('touchmove', sliderFunc);
            slider.removeEventListener('touchend', sliderFunc);
            wijetsInit();
        }
    }
    run(id, espNumb, pin) {
        let min = document.getElementById(id.split("#")[1]).querySelector('.slider').min;
        let max = document.getElementById(id.split("#")[1]).querySelector('.slider').max;
        options.ESPSettings[espNumb].pins[pin - 2] = $(id + " .slider").val();
        let val = $(id + " .slider").val();
        let newPosition = 100 / (max - min);
        newPosition = (newPosition * ((val - min) * 0.95) + 3) + "px";
        $(id + " .sliderWrap div").css("left", newPosition);
        $(id + " .sliderWrap div").text(val);
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class SetValue extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        let run = this.run;
        let pin = this.pin - 2;
        let url = this.url;
        let step = parseInt(this.val1);
        $(id + " .setValue").off();
        $(id + " .setValueButton1").off();
        $(id + " .setValueButton2").off();
        $(id + " .setValue").val(parseInt(options.ESPSettings[espNumb].pins[pin]));
        this.run(id, espNumb, pin + 2);
        $(id + " .setValue").mouseleave(setValueFunc);
        $(id + " .setValueButton1").mousedown(function () {
            setValueFunc(-1 * step);
        });
        $(id + " .setValueButton2").mousedown(function () {
            setValueFunc(step);
        });


        function setValueFunc(step) {
            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            run(id, espNumb, pin + 2, step);
            setTimeout(function () {
                sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue);
            }, 100);
            wijetsInit();
        }
    }
    run(id, espNumb, pin, step) {
        let val = $(id + " .setValue").val();
        let valInt = parseInt(val);
        if (step > 0 || step < 0) {
            valInt += step;
        }
        if (val != '') {
            options.ESPSettings[espNumb].pins[pin - 2] = valInt;
        }
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class LabeledButton extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        let run = this.run;
        let pin = this.pin - 2;
        let val1 = this.val1;
        let val2 = this.val2;
        let url = this.url;
        this.run(id, espNumb, this.pin, val1, val2);
        $(id + " .labeledButton").off();
        $(id + " .labeledButton").mousedown(function () {
            isClick = pin;
            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            options.ESPSettings[espNumb].pins[pin] = !options.ESPSettings[espNumb].pins[pin];
            sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue);
            if (isRunActive) {
                run(id, espNumb, pin + 2, val1, val2);
            }
        });
    }
    run(id, espNumb, pin, val1, val2) {
        if (options.ESPSettings[espNumb].pins[pin - 2] == false) {
            $(id + " .labeledButton").text(val1.split('/')[1].replace(' ', ''));
            $(id + " .labeledButton").css("background", "#303952");
            $(id + " .labeledButton").css("border-color", val2);
            $(id + " .labeledButton").css("color", val2);
        } else {
            $(id + " .labeledButton").text(val1.split('/')[0].replace(' ', ''));
            $(id + " .labeledButton").css("background", val2);
            $(id + " .labeledButton").css("border-color", val2);
            $(id + " .labeledButton").css("color", "#303952");
        }
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class DispValue extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        this.run(id, espNumb, this.pin - 2, this.val1, this.val2);
    }
    run(id, espNumb, pin, val1, val2) {
        $(id + " .showVal").text(options.ESPSettings[espNumb].pins[pin]);
        $(id + " .name").text(val1);
        $(id + " .mainWijetWrap div").css("border", "3px solid " + val2);
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class Light extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        let url = this.url;
        this.run(id, espNumb, this.pin - 2, this.val1, this.val2);
    }
    run(id, espNumb, pin, val1) {
        if (options.ESPSettings[espNumb].pins[pin] == true) {
            let m = val1.slice(1).match(/.{2}/g);

            m[0] = parseInt(m[0], 16);
            m[1] = parseInt(m[1], 16);
            m[2] = parseInt(m[2], 16);

            let bg1 = "rgb(" + m[0] + ',' + m[1] + ',' + m[2] + ')';
            let bg2 = "rgb(" + (m[0] - 20) + ',' + (m[1] - 20) + ',' + (m[2] - 20) + ')';

            $(id + " .light").css("background", bg1);
            $(id + " .light").css("box-shadow", "0px -1px 6px " + bg1);
            $(id + " .lightBorder").css("background", bg2);
        } else {
            $(id + " .light").css("background", "#fff9e9");
            $(id + " .light").css("box-shadow", "none");
            $(id + " .lightBorder").css("background", "#ebe5d5");
        }
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class Condition extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type, mode) {
        super(html, title, pin, url, esp, val1, val2, type);
        this.mode = mode;
    }
    script(id, espNumb) {
        let url = this.url;
        let pin = this.pin - 2;
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();

            let oldPinValue = options.ESPSettings[espNumb].pins[this.pin];
            this.run(id, espNumb, pin + 2, this.val1, this.val2, this.mode);
            setTimeout(function () {
                sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue, true);
            }, 60);
        } else {
            $(id + " .offline").show();
        }
    }
    run(id, espNumb, pin, val1, val2, mode) {
        let values1 = val1.split(',');
        let values2 = val2.split(',');
        for (let i = 0; i < values1.length; i++) {
            values1[i] = values1[i].replace(' ', '');
            if (values1[i].split('-')[0] == 'pin') {
                let selectedEsp = values1[i].split('-')[1];
                let selectedPin = values1[i].split('-')[2] - 2;
                if (selectedEsp == "this") {
                    selectedEsp = espNumb;
                }
                values1[i] = options.ESPSettings[selectedEsp].pins[selectedPin];
            } else {
                if (values1[i] == 'true') {
                    values1[i] = true;
                } else if (values1[i] == 'false') {
                    values1[i] = false;
                } else {
                    values1[i] = parseInt(values1[i]);
                }
            }
        }
        for (let i = 0; i < values2.length; i++) {
            values2[i] = values2[i].replace(' ', '');
            if (values2[i].split('-')[0] == 'pin') {
                let selectedEsp = values2[i].split('-')[1];
                let selectedPin = values2[i].split('-')[2] - 2;
                if (selectedEsp == "this") {
                    selectedEsp = espNumb;
                }
                values2[i] = options.ESPSettings[selectedEsp].pins[selectedPin];
            } else {
                if (values2[i] == 'true') {
                    values2[i] = true;
                } else if (values2[i] == 'false') {
                    values2[i] = false;
                } else {
                    values2[i] = parseInt(values2[i]);
                }
            }
        }
        switch (mode) {
            case '==':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] == values2[0]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case '===':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] === values2[0]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case '!=':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] != values2[0]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case '>':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] > values2[0]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case '<':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] < values2[0]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case '>>':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] - values2[0] > values2[1]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case '<<':
                for (let i = 0; i < values1.length; i++) {
                    if (values2[0] - values1[i] > values2[1]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case '+=':
                for (let i = 0; i < values1.length; i++) {
                    options.ESPSettings[espNumb].pins[pin - 2] = values1[i] + values2[0];
                }
                break;
            case '-=':
                for (let i = 0; i < values1.length; i++) {
                    options.ESPSettings[espNumb].pins[pin - 2] = values1[i] - values2[0];
                }
                break;
            case '*=':
                for (let i = 0; i < values1.length; i++) {
                    options.ESPSettings[espNumb].pins[pin - 2] = values1[i] * values2[0];
                }
                break;
            case '/=':
                for (let i = 0; i < values1.length; i++) {
                    options.ESPSettings[espNumb].pins[pin - 2] = parseInt(values1[i] / values2[0]);
                }
                break;
            case '%':
                for (let i = 0; i < values1.length; i++) {
                    options.ESPSettings[espNumb].pins[pin - 2] = values1[i] % values2[0];
                }
                break;
            case '>=<':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] > values2[0] && values1[i] < values2[1]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case '<=>':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] < values2[0] || values1[i] > values2[1]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case 'OR':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] || values2[0]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case 'XOR':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] ^ values2[0]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case 'NOR':
                for (let i = 0; i < values1.length; i++) {
                    if (!values1[i] && !values2[0]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case 'AND':
                for (let i = 0; i < values1.length; i++) {
                    if (values1[i] && values2[0]) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
            case 'NAND':
                for (let i = 0; i < values1.length; i++) {
                    if (!(values1[i] && values2[0])) {
                        options.ESPSettings[espNumb].pins[pin - 2] = true;
                        return;
                    }
                    options.ESPSettings[espNumb].pins[pin - 2] = false;
                }
                break;
        }
    }
}

class PinsGroup extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
            this.run(espNumb, this.pin - 2, this.val1, this.url);
        } else {
            $(id + " .offline").show();
        }
    }
    run(espNumb, pin, val1, url) {
        if (isClick === pin) {
            let startValues = val1.split(',');
            for (let i = 0; i < startValues.length; i++) {
                startValues[i] = startValues[i].replace(' ', '');
                let selectedEsp = startValues[i].split('-')[1];
                let selectedPin = startValues[i].split('-')[2] - 2;
                if (selectedEsp == "this") {
                    selectedEsp = espNumb;
                }
                let oldPinValue = options.ESPSettings[selectedEsp].pins[selectedPin];
                options.ESPSettings[selectedEsp].pins[selectedPin] = options.ESPSettings[espNumb].pins[pin];
                setTimeout(function () {
                    let isWijetsInit = true;
                    if (i == startValues.length - 1) {
                        isWijetsInit = false;
                    }
                    sendPin(url + "/pin_switch", selectedPin, options.ESPSettings[espNumb].pins[pin], selectedEsp, oldPinValue, isWijetsInit);
                }, (i + 1) * 60);
            }
            isClick = false;
        }
    }
}

class PinsEqually extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type) {
        super(html, title, pin, url, esp, val1, val2, type);
    }
    script(id, espNumb) {
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
            this.run(espNumb, this.pin - 2, this.val1, this.url);
        } else {
            $(id + " .offline").show();
        }
    }
    run(espNumb, pin, val1, url) {
        let startValues = val1.split(',');
        for (let i = 0; i < startValues.length; i++) {
            startValues[i] = startValues[i].replace(' ', '');
            let selectedEsp = startValues[i].split('-')[1];
            let selectedPin = startValues[i].split('-')[2] - 2;
            if (selectedEsp == "this") {
                selectedEsp = espNumb;
            }
            let oldPinValue = options.ESPSettings[selectedEsp].pins[selectedPin];
            options.ESPSettings[selectedEsp].pins[selectedPin] = options.ESPSettings[espNumb].pins[pin];
            setTimeout(function () {
                sendPin(url + "/pin_switch", selectedPin, options.ESPSettings[espNumb].pins[pin], selectedEsp, oldPinValue, true);
            }, (i + 1) * 60);
        }
    }
}

class Func extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, type, code, espNumb, id) {
        super(html, title, pin, url, esp, val1, val2, type);
        this.code = code;

        // Bind 

        this.run = this.run.bind(this);
        this.script = this.script.bind(this);
    }
    script(id, espNumb) {
        $(id + " .mainWijetWrap").off();

        $(id + " .mainWijetWrap").mouseup(function () {
            if (selectedUserNumber == -1 || options.users[selectedUserNumber].reachLevel == 2) {
                this.run(espNumb, this.pin - 2, this.val1, this.val2, this.url, id);
                wijetsInit();
            } else {
                toast("У вас нет доступа к этому виджету!");
            }
        }.bind(this));

        if ($('#codeModal').is(':visible')) {
            return;
        }

        this.espNumb = espNumb;
        this.id = id;

        let func = new Function(this.code);

        try {
            func.call(this);
        } catch {
            toast("Ошибка выполнения функции на пине " + this.pin);
        }

        func = NaN;

        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
    run(espNumb, pin, val1, val2, url, id) {
        $("#codeModal").modal('show');
        $(".infoText").hide();
        let infVisible = false
        $(".functionCode").val(this.code)
        $(".info").mousedown(function () {
            infVisible = !infVisible;
            if (infVisible) {
                $(".infoText").show();
                $(".infoText").html(info);
            } else {
                $(".infoText").hide();
            }
        });
        $("#codeModal .btn-primary").click(function () {
            this.code = $(".functionCode").val();
            toast("Сохранено!");
        }.bind(this));
        $("#codeModal .btn-danger").click(function () {
            $(".functionCode").val('');
        }.bind(this));
        $("#codeModal .btn-secondary").click(function () {
            $("#codeModal").modal('hide');
            $(".info").off();
            $("#codeModal .btn-secondary").off();
            $("#codeModal .btn-primary").off();
            $("#codeModal .btn-danger").off();
            if (this.code != $(".functionCode").val()) {
                let isOk = confirm("Последние изменения не сохранены. Сохранить?");
                if (isOk) {
                    this.code = $(".functionCode").val();
                    toast("Сохранено!");
                }
            }
            setTimeout(function () {
                wijetsInit();
            }, 200);
        }.bind(this));
    }
}

class Timer extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, time) {
        super(html, title, pin, url, esp, val1, val2, time);
    }
    script(id, espNumb) {
        let url = this.url;
        let pin = this.pin - 2;

        // 13 - 1

        let hours = this.val1.split(":")[0];
        let minutes = this.val1.split(":")[1];
        let val = parseInt(this.val2.split('-')[1].replace(' ', ''));
        let targetPin = this.val2.split('-')[0].replace(' ', '');

        this.run(id, espNumb, pin, hours, minutes);
        $(id + " .timerDecoreB").off();
        $(id + " .timerDecoreB").mousedown(function () {

            isClick = pin;

            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            options.ESPSettings[espNumb].pins[pin] = !options.ESPSettings[espNumb].pins[pin];

            $(id + " .timerDecoreT")
                .css("border-top", "18px #0d5e4d solid")
                .css("box-shadow", "none")
                .text('');
            setTimeout(function () {
                $(id + " .timerDecoreT")
                    .css("border-top", "none")
                    .css("box-shadow", "0 0 5px rgba(0, 0, 0, 0.4)");

                sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], oldPinValue);
                sendTimer(url, pin, val, hours, minutes, espNumb, targetPin);
                wijetsInit();
            }, 500);
        });

    }
    run(id, espNumb, pin, hours, minutes) {
        $(id + " .timerDecoreT").text('');
        if (options.ESPSettings[espNumb].pins[pin]) {
            $(id + " .timerText1").text('o');
            $(id + " .timerText2").text('n');
            $(id + " .timerText3").html('<br>');
        } else {
            $(id + " .timerText1").text('o');
            $(id + " .timerText2").text('f');
            $(id + " .timerText3").text('f');
        }
        $(id + " .timerTop").text("[Т] на " + hours + "ч " + minutes + "мин");
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}

class Interval extends SimpleWijet {
    constructor(html, title, pin, url, esp, val1, val2, time) {
        super(html, title, pin, url, esp, val1, val2, time);
    }
    script(id, espNumb) {
        let url = this.url;
        let pin = this.pin - 2;
        // (12:00 - 13:30) / 2
        // 13 - 1/0

        let hoursIn = this.val1.split(":")[0].split("(")[1];
        let minutesIn = this.val1.split(":")[1].split("-")[0].replace(' ', '');
        let hoursOut = this.val1.split(":")[1].split("-")[1].replace(' ', '');
        let minutesOut = this.val1.split(":")[2].split(")")[0].replace(' ', '');
        let days = this.val1.split("/")[1].replace(' ', '');
        let valIn = parseInt(this.val2.split('-')[1].split('/')[0].replace(' ', ''));
        let valOut = parseInt(this.val2.split('-')[1].split('/')[1].replace(' ', ''));
        let targetPin = this.val2.split('-')[0].replace(' ', '');

        this.run(id, espNumb, pin, hoursIn, hoursOut, days);
        $(id + " .timerDecoreB").off();
        $(id + " .timerDecoreB").mousedown(function () {

            isClick = pin;

            let oldPinValue = options.ESPSettings[espNumb].pins[pin];
            options.ESPSettings[espNumb].pins[pin] = !options.ESPSettings[espNumb].pins[pin];

            $(id + " .timerDecoreT")
                .css("border-top", "18px #0d5e4d solid")
                .css("box-shadow", "none")
                .text('');
            setTimeout(function () {
                $(id + " .timerDecoreT")
                    .css("border-top", "none")
                    .css("box-shadow", "0 0 5px rgba(0, 0, 0, 0.4)");

                sendPin(url + "/pin_switch", pin, options.ESPSettings[espNumb].pins[pin], espNumb, oldPinValue);
                sendInterval(url, pin, valIn, valOut, hoursIn, minutesIn, hoursOut, minutesOut, days, targetPin);
                wijetsInit();
            }, 500);
        });

    }
    run(id, espNumb, pin, hoursIn, hoursOut, days) {
        $(id + " .timerDecoreT").text('');
        if (options.ESPSettings[espNumb].pins[pin]) {
            $(id + " .timerText1").text('o');
            $(id + " .timerText2").text('n');
            $(id + " .timerText3").html('<br>');
        } else {
            $(id + " .timerText1").text('o');
            $(id + " .timerText2").text('f');
            $(id + " .timerText3").text('f');
        }
        $(id + " .timerTop").text("[И] с " + hoursIn + "ч по " + hoursOut + "ч" + " / " + days);
        if (options.ESPSettings[espNumb].isOnline) {
            $(id + " .offline").hide();
        } else {
            $(id + " .offline").show();
        }
    }
}


// flower

let flowerActiveTime = 6000;
$(".flowerButton1").click(flower_active);

function flower_active() {
    $(".flowerDecore").addClass("flowerActive");
    $(".flowerDecore").css("background", "#5886a6");
    setTimeout(function () {
        $(".flowerDecore").css("background", "url(/Images/rain.png) #5886a6");
        $(".flowerDecore").css("transition", (flowerActiveTime / 1000) + "s ease-out");
        $(".flowerDecore").css("color", "#3498db");
    }, 1000);
    setTimeout(function () {
        $(".flowerDecore").css("transition", "1s");
        $(".flowerDecore").css("color", "#2ecc71");
        $(".flowerDecore").css("background", "#7EC0EE");
        $(".flowerDecore").removeClass("flowerActive");
    }, 1000 + flowerActiveTime);
}