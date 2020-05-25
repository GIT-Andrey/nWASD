let wijetsNumb = wijetMass[0].length;
let autowateringWijetsNumb = 2;

function navRightContainerRender() {
    $(".vidgetsContainer").html('');
    if (navStatus == 0) {
        if ($("body").width() < 575) {
            for (let i = 0; i < wijetsNumb; i++) {
                $("<div class=\"mainVidjetContainer\" id=\"wjMain-" + i + "\"><div class=\"vidjetImg\"><img src=\"../Images/" + i + "-h.jpg\" alt=\"\" id=\"wjImg-" + i + "\"></div><i class=\"fas fa-plus\" id=\"wj-" + i + "\"></i><span>" + wijetMass[0][i].title + "</span></div>").appendTo(".rightMenuPanel .vidgetsContainer");
                $("#wj-" + i).click(wjClick);
                $("#wjMain-" + i).css("background", wijetMass[0][i].background);
            }
        } else {
            for (let i = 0; i < wijetsNumb; i++) {
                $("<div class=\"mainVidjetContainer\" id=\"wjMain-" + i + "\"><div class=\"vidjetImg\"><img src=\"../Images/" + i + "-h.jpg\" alt=\"\" id=\"wjImg-" + i + "\"></div><i class=\"fas fa-plus\" id=\"wj-" + i + "\"></i><span>" + wijetMass[0][i].title + "</span></div>").appendTo(".navPanelRight .vidgetsContainer");
                $("#wj-" + i).click(wjClick);
                $("#wjMain-" + i).css("background", wijetMass[0][i].background);
            }
        }
    } else if (navStatus == 1) {
        if ($("body").width() < 575) {
            for (let i = 0; i < autowateringWijetsNumb; i++) {
                $("<div class=\"mainVidjetContainer\" id=\"wjMain-" + i + "\"><div class=\"vidjetImg\"><img src=\"../Images/" + i + "-g.jpg\" alt=\"\"></div><i class=\"fas fa-plus\" id=\"wj-" + i + "\"></i></div>").appendTo(".rightMenuPanel .vidgetsContainer");
                $("#wj-" + i).click(wjClick);
                $("#wjMain-" + i).css("max-width", "200px");
                $("#wjMain-" + i).css("background", wijetMass[1][i].background);
                $("#wjMain-" + i + " span").css("background", wijetMass[1][i].background);
            }
        } else {
            for (let i = 0; i < autowateringWijetsNumb; i++) {
                $("<div class=\"mainVidjetContainer\" id=\"wjMain-" + i + "\"><div class=\"vidjetImg\"><img src=\"../Images/" + i + "-g.jpg\" alt=\"\"></div><i class=\"fas fa-plus\" id=\"wj-" + i + "\"></i></div>").appendTo(".navPanelRight .vidgetsContainer");
                $("#wj-" + i).click(wjClick);
                $("#wjMain-" + i).css("max-width", "200px");
                $("#wjMain-" + i).css("background", wijetMass[1][i].background);
                $("#wjMain-" + i + " span").css("background", wijetMass[1][i].background);
            }
        }
    }
    if ($("body").width() > 575) {
        setTimeout(function () {
            for (let i = 0; i < wijetsNumb; i++) {
                let id = "#wjImg-" + i;
                let maxWjWidth = $(id).width();
                maxWjWidth += 45;
                maxWjWidth += "px";
                $("#wjMain-" + i).css("max-width", maxWjWidth);
            }
        }, 600);
    }
}

function wjClick() {
    let targetWijet = parseInt(event.target.id.split('-')[1]);
    let wijet;
    if (navStatus == 0 && activeNavLeft != undefined) {
        switch (targetWijet) {
            case 0:
                wijet = new BigButton(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, undefined, undefined, "input");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 1:
                wijet = new Switch(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, undefined, undefined, "input");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 2:
                wijet = new OnOff(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "#1abc9c", '0', "input");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 3:
                wijet = new Lamp(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "#ffd9ab", undefined, "input");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 4:
                wijet = new Tape(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, undefined, undefined, "input");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 5:
                wijet = new Socket(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, undefined, undefined, "input");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 6:
                wijet = new Blind(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, undefined, undefined, "input");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 7:
                wijet = new Slider(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, 0, 100, "input");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 8:
                wijet = new SetValue(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, 1, undefined, "input");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 9:
                wijet = new LabeledButton(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "ON / OFF", "#fed330", "input");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 10:
                wijet = new DispValue(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, '°C', "#0abde3", "output");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 11:
                wijet = new DispValue(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, 'mrs', "#ff6b6b", "output");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 12:
                wijet = new DispValue(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, '%', "#55E6C1", "output");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 13:
                wijet = new DispValue(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, '', "#576574", "output");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 14:
                wijet = new Light(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "#4cd137", "", "output");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 15:
                wijet = new PinsEqually(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", undefined, "condition");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 16:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0", "condition", "==");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 17:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0", "condition", "===");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 18:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0", "condition", "!=");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 19:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0", "condition", ">");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 20:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0", "condition", "<");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 21:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0, 0", "condition", ">>");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 22:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0, 0", "condition", "<<");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 23:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0", "condition", "+=");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 24:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0", "condition", "-=");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 25:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0", "condition", "*=");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 26:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0", "condition", "/=");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 27:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0", "condition", "%");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 28:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0, 0", "condition", ">=<");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 29:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "0, 0", "condition", "<=>");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 30:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "pin-this-1", "condition", "OR");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 31:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "pin-this-1", "condition", "XOR");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 32:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "pin-this-1", "condition", "NOR");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 33:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "pin-this-1", "condition", "AND");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 34:
                wijet = new Condition(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", "pin-this-1", "condition", "NAND");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 35:
                wijet = new PinsGroup(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "pin-this-0", undefined, "condition");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 36:
                wijet = new Func(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, undefined, undefined, "function", '// Ваш код здесь ...');
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 37:
                wijet = new Timer(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "00:00", "0 - 1", "timer");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 38:
                wijet = new Interval(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "(00:00 - 00:00) / 1", "0 - 0/1", "interval");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            case 39:
                wijet = new Notify(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, "текст уведомления {}", undefined, "notify");
                allWijets[navStatus][activeNavLeft].push(wijet);
                break;
            default:
                toast("Ошибка! Такого виджета нет в системе. Обратитесь к создателю");
                break;
        }
        wijetsRender();
    } else if (navStatus == 1 && activeNavLeft != undefined) {
        alert("Grow - " + targetWijet);
    } else {
        toast("Вы не выбрали комнату/круг полива для добавления виджета!");
    }
}


$(function () {
    $(".timerTogle").knob({
        'width': 81,
        'height': 81,
        'bgColor': '#315f55',
        'fgColor': '#55E6C1'
    });
});

// case 9:
//     wijet = new Timer(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, undefined, "push", 0, "00:01");
//     allWijets[navStatus][activeNavLeft].push(wijet);
//     break; 
// case 10:
//     wijet = new Timer(wijetMass[0][targetWijet].html, wijetMass[0][targetWijet].title, 0, undefined, undefined, undefined, "togle", 0, "00:01");
//     allWijets[navStatus][activeNavLeft].push(wijet);
//     break; 