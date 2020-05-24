function serverHTMLReload() {
    $(".serverSelectFlat").html('');
    $(".serverSelectRound").html('');
    $(".serverSelectUser").html('');
    $(".serverWathUsers").html('');
    $(".serverSelectESP").html('');
    for (let i = 0; i < allWijets[0].length; i++) {
        $("<option value=" + "flat_" + options.names[0][i] + ">" + options.names[0][i] + "</option>").appendTo(".serverSelectFlat");
    }
    for (let i = 0; i < allWijets[1].length; i++) {
        $("<option value=" + "round_" + options.names[1][i] + ">" + options.names[1][i] + "</option>").appendTo(".serverSelectRound");
    }
    for (let i = 0; i < options.users.length; i++) {
        $("<option value=" + "user_" + options.users[i].name + ">" + options.users[i].name + "</option>").appendTo(".serverSelectUser");
    }
    for (let i = 0; i < options.users.length; i++) {
        $("<option value=" + "userReachLevel_" + options.users[i].name + ">" + options.users[i].name + " - " + options.users[i].reachLevel + "</option>").appendTo(".serverWathUsers");
    }
    for (let i = 0; i < options.ESPSettings.length; i++) {
        $("<option value=" + "ESP_" + options.ESPSettings[i].name + ">" + options.ESPSettings[i].name + " - " + options.ESPSettings[i].url + "</option>").appendTo(".serverSelectESP");
    }
    htmlAddListeners();
}

function htmlAddListeners() {
    $("#serverAddFlatButton").click(function () {
        serverAddFlat(0, 1);
    });
    $("#serverAddRoundButton").click(function () {
        serverAddFlat(1, 8);
    });
    $("#serverRemoveFlatButton").click(function () {
        serverRemoveFlat(0, 2);
    });
    $("#serverRemoveRoundButton").click(function () {
        serverRemoveFlat(1, 9);
    });
    $("#serverRenameFlatButton").click(function () {
        serverRenameFlat(0, 3);
    });
    $("#serverRenameRoundButton").click(function () {
        serverRenameFlat(1, 10);
    });
    $("#serverAddUserToFlatButton").click(function () {
        serverAddUser(0, 4, 5);
    });
    $("#serverAddUserToRoundButton").click(function () {
        serverAddUser(1, 11, 12);
    });
    $("#serverRemoveUserToFlatButton").click(function () {
        serverRemoveUser(0, 6, 7);
    });
    $("#serverRemoveUserToRoundButton").click(function () {
        serverRemoveUser(1, 13, 14);
    });
    $("#serverAddAdminStatusButton").click(function () {
        serverUserStatus(15, 2);
    });
    $("#serverRemoveAdminStatusButton").click(function () {
        serverUserStatus(16, 1);
    });
    $("#serverAddUserBanButton").click(function () {
        serverUserStatus(17, 0);
    });
    $("#serverRemoveUserBanButton").click(function () {
        serverUserStatus(18, 1);
    });
    $("#serverAddESPToFlatButton").click(function () {
        addESPToFlat(0, 26, 27)
    });
    $("#serverRemoveESPToFlatButton").click(function () {
        removeESPToFlat(0, 28, 29)
    });
    $("#serverAddESPToRoundButton").click(function () {
        addESPToFlat(1, 30, 31)
    });
    $("#serverRemoveESPToRoundButton").click(function () {
        removeESPToFlat(1, 32, 33)
    });
    $("#serverRemoveUserButton").click(removeUser);
    $("#serverRenameUserButton").click(renameUser);
    $("#serverAddESPButton").click(addESP);
    $("#serverRemoveESPButton").click(removeESP);
    $(".serverButton").click(serverButtonReload);
}

$(".serverButton").click(serverButtonReload);

function serverButtonReload() {
    $('.serverSelectFlat').children('option:selected').prop('selected', false);
    $('.serverSelectRound').children('option:selected').prop('selected', false);
    $('.serverSelectUser').children('option:selected').prop('selected', false);
    $('.serverWathUsers').children('option:selected').prop('selected', false);
    $('.serverSelectESP').children('option:selected').prop('selected', false);
    $("input").val('');
    userSettings.userSettingsReload();
    htmlRender();
}

function selectedItems(numbOfSelect) {
    let items = [];
    let itemsInSelect = $("#select" + numbOfSelect).val()
    for (let i = 0; i < itemsInSelect.length; i++) {
        items[i] = itemsInSelect[i].split('_')[1];
    }
    return items;
}

function serverAddFlat(devision, number) {
    let name;
    if (devision) {
        name = $("#serverAddRoundName").val();
    } else {
        name = $("#serverAddFlatName").val();
    }
    let users = selectedItems(number);
    for (let i = 0; i < options.names[devision].length; i++) {
        if (name == options.names[devision][i]) {
            toast("Данное имя уже используется!");
            return;
        }
    }
    options.names[devision].push(name);
    allWijets[devision].push([]);
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < options.users.length; j++) {
            if (options.users[j].name == users[i]) {
                options.users[j].rooms[devision].push(name);
            }
        }
    }
    toast("Success!");
    wijetsInit();
}

function serverRemoveFlat(devision, number) {
    let names = selectedItems(number);
    if (names.length == 0) {
        toast("Вы не выбрали комнат/кругов!");
        return;
    }
    for (let i = 0; i < names.length; i++) {
        options.names[devision].splice(options.names[devision].indexOf(names[i]), 1);
        allWijets[devision].splice(options.names[devision].indexOf(names[i]), 1);
        for (let j = 0; j < options.users.length; j++) {
            let roomNumber = options.users[j].rooms[devision].indexOf(names[i]);
            if (roomNumber != -1) {
                options.users[j].rooms[devision].splice(roomNumber, 1);
            }
        }
    }
    toast("Success!");
    wijetsInit();
}

function serverRenameFlat(devision, number) {
    let newName;
    if (devision) {
        newName = $("#serverNewRoundName").val();
    } else {
        newName = $("#serverNewFlatName").val();
    }
    let oldName = selectedItems(number);
    if (newName == '') {
        toast("Введите новое название!");
        return;
    }
    for (let i = 0; i < options.names[devision].length; i++) {
        if (newName == options.names[devision][i]) {
            toast("Данное имя уже используется!");
            return;
        }
    }
    if (oldName.length > 1) {
        toast("Выберите только одну комнату/круг полива!");
        return;
    }
    if (oldName.length == 0) {
        toast("Выберите комнату/круг полива!");
        return;
    }
    let oldNameText = oldName[0];
    options.names[devision][options.names[devision].indexOf(oldNameText)] = newName;
    for (let i = 0; i < options.users.length; i++) {
        options.users[i].rooms[devision][options.users[i].rooms[devision].indexOf(oldNameText)] = newName;
    }
    toast("Success!");
    wijetsInit();
}

function serverAddUser(devision, number1, number2) {
    let userNames = selectedItems(number2);
    let flatsNames = selectedItems(number1);
    if (userNames.length == 0 || flatsNames.length == 0) {
        toast("Выберите минимум одно значение!");
        return;
    }

    for (let i = 0; i < flatsNames.length; i++) {
        for (let j = 0; j < options.users.length; j++) {
            for (let l = 0; l < userNames.length; l++) {
                if (options.users[j].name == userNames[l]) {
                    if (options.users[j].rooms[devision].indexOf(flatsNames[i]) == -1) {
                        options.users[j].rooms[devision].push(flatsNames[i]);
                    }
                }
            }
        }
    }
    wijetsInit();
    toast("Success!");
}

function serverRemoveUser(devision, number1, number2) {
    let userNames = selectedItems(number2);
    let flatsNames = selectedItems(number1);
    if (userNames.length == 0 || flatsNames.length == 0) {
        toast("Выберите минимум одно значение!");
        return;
    }

    for (let i = 0; i < flatsNames.length; i++) {
        for (let j = 0; j < options.users.length; j++) {
            for (let l = 0; l < userNames.length; l++) {
                if (options.users[j].name == userNames[l]) {
                    if (options.users[j].rooms[devision].indexOf(flatsNames[i]) != -1) {
                        options.users[j].rooms[devision].splice(options.users[j].rooms[devision].indexOf(flatsNames[i]), 1);
                    }
                }
            }
        }
    }
    wijetsInit();
    toast("Success!");
}

function serverUserStatus(number, reachLevel) {
    let userNames = selectedItems(number);
    if (userNames.length == 0) {
        toast("Выберите минимум одного пользователя!");
        return;
    }
    for (let i = 0; i < options.users.length; i++) {
        for (let j = 0; j < userNames.length; j++) {
            if (options.users[i].name == userNames[j]) {
                options.users[i].reachLevel = reachLevel;
            }
        }
    }
    toast("Success!");
    wijetsInit();
}

function renameUser() {
    let userNames = selectedItems(19);
    let newName = $("#serverRenameUser").val();
    if (userNames.length == 0) {
        toast("Выберите одного пользователя!");
        return;
    }
    if (userNames.length > 1) {
        toast("Выберите только одного пользователя!");
        return;
    }
    if (newName == '') {
        toast("Введите новое название!");
        return;
    }
    for (let i = 0; i < options.users.length; i++) {
        if (newName == options.users[i].name) {
            toast("Данное имя уже используется!");
            return;
        }
    }
    for (let i = 0; i < options.users.length; i++) {
        if (options.users[i].name == userNames[0]) {
            options.users[i].name = newName;
            toast("Success!");
            return;
        }
    }
    toast("Неизвестная ошибка! Обновите страницу.");
    wijetsInit();
}

function removeUser() {
    let userNames = selectedItems(20);
    if (userNames.length == 0) {
        toast("Выберите минимум одного пользователя!");
        return;
    }
    for (let i = 0; i < options.users.length; i++) {
        for (let j = 0; j < userNames.length; j++) {
            if (options.users[i].name == userNames[j]) {
                options.users.splice(i, 1);
            }
        }
    }
    toast("Success!");
    wijetsInit();
}

function addESP() {
    let espName = $("#serverAddESP").val();
    if (espName == '') {
        toast("Введите код ESP!");
        return;
    }
    let url = espName.split("#")[0];
    let name = espName.split("#")[1];
    for (let i = 0; i < options.ESPSettings.length; i++) {
        if (name == options.ESPSettings[i].name) {
            toast("Данный код уже используется!");
            return;
        }
    }
    try {
        if (url.indexOf("#") != -1 || name.indexOf(":") != -1) {
            toast("Код введен неверно!");
            return;
        }
    } catch {
        toast("Код введен неверно!");
        return;
    }
    options.ESPSettings.push({
        url: url,
        name: name,
        rooms: [
            [],
            []
        ],
        pins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        isOnline: false
    });
    toast("Success!");
    wijetsInit();
}

function removeESP() {
    let names = selectedItems(25);
    if (names.length == 0) {
        toast("Выберите хотя-бы одну ESP");
        return;
    }
    for (let i = 0; i < options.ESPSettings.length; i++) {
        for (let j = 0; j < names.length; j++) {
            if (options.ESPSettings[i].name == names[j]) {
                options.ESPSettings.splice(i, 1);
            }
        }
    }
    toast("Success!");
    wijetsInit();
}

function addESPToFlat(devision, item1, item2) {
    let flats = selectedItems(item1);
    let esp = selectedItems(item2);
    if (flats.length == 0 || esp.length == 0) {
        toast("Вы не выбрали один из параметров!");
        return;
    }

    for (let i = 0; i < flats.length; i++) {
        for (let j = 0; j < options.ESPSettings.length; j++) {
            for (let l = 0; l < esp.length; l++) {
                if (options.ESPSettings[j].name == esp[l]) {
                    if (options.ESPSettings[j].rooms[devision].indexOf(flats[i]) == -1) {
                        options.ESPSettings[j].rooms[devision].push(flats[i]);
                    }
                }
            }
        }
    }
    wijetsInit();
    toast("Success!");
}

function removeESPToFlat(devision, item1, item2) {
    let flats = selectedItems(item1);
    let esp = selectedItems(item2);
    if (flats.length == 0 || esp.length == 0) {
        toast("Вы не выбрали один из параметров!");
        return;
    }

    for (let i = 0; i < flats.length; i++) {
        for (let j = 0; j < options.ESPSettings.length; j++) {
            for (let l = 0; l < esp.length; l++) {
                if (options.ESPSettings[j].name == esp[l]) {
                    if (options.ESPSettings[j].rooms[devision].indexOf(flats[i]) != -1) {
                        options.ESPSettings[j].rooms[devision].splice(options.ESPSettings[j].rooms[devision].indexOf(flats[i]), 1);
                    }
                }
            }
        }
    }
    wijetsInit();
    toast("Success!");
}

function modalUpdate() {
    $("#esp").html('');
    for (let i = 0; i < options.ESPSettings.length; i++) {
        if (options.ESPSettings[i].rooms[navStatus].indexOf(options.names[navStatus][activeNavLeft]) != -1) {
            $("<option value=" + "esp_" + options.ESPSettings[i].name + ">" + options.ESPSettings[i].name + " - " + options.ESPSettings[i].url + "</option>").appendTo("#esp");
        }
    }
    $("#wijetTitle").val('');
    $("#pin").val('');
    $("#outputPins").val('');
    $("#time").val('');
    $("#timeLine2").val('');
    $("#timeLine1").val('');
    $("#wijetTitle").val('');
    $("#moveWijetTo").val('');
}
let toastID = 0;

function toast(what) {
    if (selectedUserNumber == -1) {
        if (options.superAdmin.notify) {
            toast(what)
            return;
        }
    } else if (options.users[selectedUserNumber].notify) {
        toast(what)
        return;
    }

    function toast(what) {
        $("<div role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" class=\"toast\" data-autohide=\"true\" data-delay=\"5000\" id=\"toast" + toastID + "\"><div class=\"toast-header\"><strong class=\"mr-auto\">nWASD</strong><button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"toast-body\"></div></div>").appendTo(".toastWrap");
        $('#toast' + toastID).toast('show');
        $("#toast" + toastID + " .toast-body").text(what);
        let audio = new Audio(); // Создаём новый элемент Audio
        audio.src = "../Sounds/facebookme_lz4ikc6j.mp3";
        audio.play();
        toastID = toastID + 1;
    }
}

let oldEspVals = [];

function isESPOnline() {
    for (let i = 0; i < options.ESPSettings.length; i++) {
        oldEspVals[i] = options.ESPSettings[i].isOnline;
        let xhr = new XMLHttpRequest();
        xhr.timeout = 6000;
        xhr.open('POST', options.ESPSettings[i].url + "/is_online", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status != 200) {
                if (oldEspVals[i]) {
                    options.ESPSettings[i].isOnline = false;
                    wijetsInit();
                }

            } else {
                if (!oldEspVals[i]) {
                    options.ESPSettings[i].isOnline = true;
                    wijetsInit();
                }
                // let rezult = xhr.responseText.split(",");
                // for (let j = 0; j < 20; j++) {
                //     options.ESPSettings[i].pins[j] = parseInt(rezult[j]);
                // }
                // wijetsInit();
            }
        }
    }
}

function pinsReload() {
    for (let i = 0; i < options.ESPSettings.length; i++) {
        oldEspVals[i] = options.ESPSettings[i].isOnline;
        let xhr = new XMLHttpRequest();
        xhr.timeout = 6000;
        xhr.open('POST', options.ESPSettings[i].url + "/pins_status", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status == 200) {
                let rezult = xhr.responseText.split(",");
                for (let j = 0; j < 20; j++) {
                    options.ESPSettings[i].pins[j] = parseInt(rezult[j]);
                }
                wijetsInit();
            }
        }
    }
}

setInterval(isESPOnline, 6000);
setInterval(pinsReload, 12000);