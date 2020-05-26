let activeWijet = -1;
let isRunActive;
let lastResponse = new Date().getTime();
let isClick = false;

let allWijets = [
    [
        [],
        []
    ],

    [
        []
    ]
];

let options = {
    users: [{
            name: "Марина",
            notify: true,
            theme: false,
            responseMode: true,
            reachLevel: 1,
            rooms: [
                ["Гостинная"],
                []
            ]
        },
        {
            name: "Володя",
            notify: true,
            theme: false,
            responseMode: true,
            reachLevel: 0,
            rooms: [
                [],
                ["Помидоры"]
            ]
        },
        {
            name: "Тамара",
            notify: true,
            theme: false,
            responseMode: true,
            reachLevel: 2,
            rooms: [
                ["Кухня"],
                []
            ]
        }
    ],
    names: [
        ["Кухня", "Гостинная"],
        ["Помидоры"]
    ],
    ESPSettings: [{
        url: "http://192.168.43.150",
        name: "ESP-1",
        rooms: [
            ["Кухня", "Гостинная"],
            []
        ],
        pins: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        isOnline: false
    }],
    superAdmin: {
        name: "Андрей",
        notify: true,
        theme: true,
        responseMode: true,
        reachLevel: 3
    },
    selectedUser: {
        selectedUserName: "Андрей"
    }
};

let selectedUserNumber;

if ($("body").width() <= 991) {
    $("#m0").attr("id", "li0");
    $("#m1").attr("id", "li1");
    $("#m2").attr("id", "li2");
}

let userSettings = {
    signOut() {
        confirm("Вы точно хотите выйти?");
    },
    resetPass() {
        prompt("Введите код приглашения");
        prompt("Введите новый пароль");
    },
    userSettingsRender() {
        this.userSettingsReload();
        this.userSwitchReload();
        wijetsInit();
        $("#nameOfAccount").text(this.name);
        $("#notifyOfAccount").click(this.userSwitchNotify);
        $("#themeOfAccount").click(this.userSwitchTheme);
        $("#responseModeOfAccount").click(this.userSwitchResponseMode);
        $("#leaveOfAccount").click(this.signOut);
        $("#resetPassOfAccount").click(this.resetPass);
    },
    userSettingsReload() {
        if (options.selectedUser.selectedUserName == options.superAdmin.name) {
            this.reachLevel = 3;
            this.name = options.superAdmin.name;
            this.notify = options.superAdmin.notify;
            this.theme = options.superAdmin.theme;
            this.responseMode = options.superAdmin.responseMode;
            selectedUserNumber = -1;
            isRunActive = !this.responseMode;
            $(".slHiden").removeClass("slHiden");
        } else {
            for (let i = 0; i < options.users.length; i++) {
                if (options.users[i].name == options.selectedUser.selectedUserName) {
                    this.reachLevel = options.users[i].reachLevel;
                    this.name = options.users[i].name;
                    this.notify = options.users[i].notify;
                    this.theme = options.users[i].theme;
                    this.responseMode = options.users[i].responseMode;
                    selectedUserNumber = i;
                    isRunActive = !this.responseMode;
                    if (this.reachLevel == 0) {
                        $(".container-fluid").remove();
                        $(".serverContainer").remove();
                        $("#navbarSupportedContent").html('Доступ к комнатам запрещен.');
                        $("<div class=\"BAN\"><span>Вас забанили!</span></div>").appendTo("body");
                    }
                    if (this.reachLevel > 1) {
                        $(".slHiden").removeClass("slHiden");
                    }
                    // break;
                }
            }
        }
        let flatsOfAccount;
        let roundsOfAccount;
        if (selectedUserNumber == -1) {
            flatsOfAccount = allWijets[0].length
            roundsOfAccount = allWijets[1].length
        } else if (selectedUserNumber > -1) {
            flatsOfAccount = options.users[selectedUserNumber].rooms[0].length;
            roundsOfAccount = options.users[selectedUserNumber].rooms[1].length;
        }
        $("#flatsOfAccount").text(flatsOfAccount);
        $("#roundsOfAccount").text(roundsOfAccount);
        let status = "Заблокированный аккаунт";
        if (this.reachLevel == 1) {
            status = "Пользователь";
        } else if (this.reachLevel == 2) {
            status = "Администратор";
        } else if (this.reachLevel == 3) {
            status = "Создатель";
        }
        $("#statusOfAccount").text(status);
    },
    userSwitchReload() {
        if (this.theme) {
            $("#themeOfAccount").addClass("userSettingsMainSwitchActive");
        } else {
            $("#themeOfAccount").removeClass("userSettingsMainSwitchActive");
        }
        if (this.notify) {
            $("#notifyOfAccount").addClass("userSettingsMainSwitchActive");
        } else {
            $("#notifyOfAccount").removeClass("userSettingsMainSwitchActive");
        }
        if (this.responseMode) {
            $("#responseModeOfAccount").addClass("userSettingsMainSwitchActive");
        } else {
            $("#responseModeOfAccount").removeClass("userSettingsMainSwitchActive");
        }
    },
    userSwitchNotify() {
        userSettings.notify = !userSettings.notify;
        if (userSettings.notify) {
            $("#notifyOfAccount").addClass("userSettingsMainSwitchActive");
        } else {
            $("#notifyOfAccount").removeClass("userSettingsMainSwitchActive");
        }
        if (selectedUserNumber > -1) {
            options.users[selectedUserNumber].notify = userSettings.notify;
        }
        if (selectedUserNumber == -1) {
            options.superAdmin.notify = userSettings.notify;
        }
    },
    userSwitchResponseMode() {
        userSettings.responseMode = !userSettings.responseMode;
        if (userSettings.responseMode) {
            $("#responseModeOfAccount").addClass("userSettingsMainSwitchActive");
        } else {
            $("#responseModeOfAccount").removeClass("userSettingsMainSwitchActive");
        }
        if (selectedUserNumber > -1) {
            options.users[selectedUserNumber].responseMode = userSettings.responseMode;
        }
        if (selectedUserNumber == -1) {
            options.superAdmin.responseMode = userSettings.responseMode;
        }
        isRunActive = !userSettings.responseMode;
    },
    userSwitchTheme() {
        userSettings.theme = !userSettings.theme;
        if (userSettings.theme) {
            $("#themeOfAccount").addClass("userSettingsMainSwitchActive");
        } else {
            $("#themeOfAccount").removeClass("userSettingsMainSwitchActive");
        }
        if (selectedUserNumber > -1) {
            options.users[selectedUserNumber].theme = userSettings.theme;
        }
        if (selectedUserNumber == -1) {
            options.superAdmin.theme = userSettings.theme;
        }
        taglines();
    }
};

function wijetsRender() {
    // $(".blockContainer").html('');
    if (navStatus == 0 || navStatus == 1) {
        flatsNumb = allWijets[navStatus].length;
        navLeftContainerRender();

        if (activeNavLeft !== undefined) {
            wijetsRenderRun(navStatus, activeNavLeft);
        }
    }
}


function wijetsRenderRun(devision, item) {
    userSettings.userSettingsReload();
    // выбор комнаты / круга полива
    $(".flatMainWrap").css("box-shadow", "none");
    $(".pipeMainWrap span").css("border", "none");
    if (devision) {
        $("#pi-" + item).css("border", "2px white solid");
    } else {
        $("#fl-" + item).css("box-shadow", "3px 3px 3px 1px #151824");
    }
    let roomName = options.names[devision][item];
    roomName += " -";
    for (let i = 0; i < options.users.length; i++) {
        for (let j = 0; j < options.users[i].rooms[devision].length; j++) {
            if (options.users[i].rooms[devision][j] == options.names[devision][item]) {
                roomName += " ";
                roomName += options.users[i].name;
                roomName += ",";
            }
        }
    }
    roomName = roomName.substring(0, roomName.length - 1);
    $(".mainTitle span").html(roomName);

    // Рендер виджетов

    if (devision == 0) {
        for (let i = 0; i < allWijets[devision][item].length; i++) {
            let idOfWijet = "blockItem-" + devision + "-" + item + "-" + i;
            $("<div class=\"blockItem\" id=\"" + idOfWijet + "\"></div>").appendTo(".blockContainer");
            $(allWijets[devision][item][i].html).appendTo("#" + idOfWijet);
            $("<div class=\"downMenuWrap\"><span class=\"numberOfWijet\"></span><span class=\"titleOfWijet\"></span><i class=\"fas fa-cog\" data-toggle=\"modal\" data-target=\"#modal\"></i></div><div class=\"offline\"></div>").appendTo("#" + idOfWijet);
            // wijet[0].id = "blockItem-" + devision + "-" + item + "-" + i;
            allWijets[devision][item][i].init("#" + idOfWijet);
            $("#" + idOfWijet + " .numberOfWijet").text(i);
            $("#" + idOfWijet + " .titleOfWijet").text(allWijets[devision][item][i].title);
            $("#" + idOfWijet + " .downMenuWrap i").click(function () {
                allWijets[devision][item][i].settings(i);
            });
            $("#" + idOfWijet + " .offline").css("width", $("#" + idOfWijet).width());
        }
    } else {
        for (let i = 0; i < allWijets[devision][item].length; i++) {
            let idOfWijet = "blockItem-" + devision + "-" + item + "-" + i;
            $("<div class=\"blockItem\" id=\"" + idOfWijet + "\"></div>").appendTo(".blockContainer");
            $(allWijets[devision][item][i].html).appendTo("#" + idOfWijet);
            $("<div class=\"downMenuWrap\"><span class=\"numberOfWijet\"></span><span class=\"titleOfWijet\"></span><i class=\"fas fa-cog\" data-toggle=\"modal\" data-target=\"#modal\"></i></div><div class=\"offline\"></div>").appendTo("#" + idOfWijet);
            allWijets[devision][item][i].init("#" + idOfWijet);
            $("#" + idOfWijet + " .numberOfWijet").text(i);
            $("#" + idOfWijet + " .titleOfWijet").text(allWijets[devision][item][i].title);
            $("#" + idOfWijet + " .downMenuWrap i").click(function () {
                allWijets[devision][item][i].settings(i);
            });
            $("#" + idOfWijet + " .offline").css("width", $("#" + idOfWijet).width());
        }
    }
    // flat = "flat_" + item;
    // if (devision == 0) {
    //     for (let i = allWijets[devision][item].lenght;)
    // }
}

userSettings.userSettingsRender();
let oldOptions = options;

function wijetsInit() {
    try {
        for (let i = 0; i < allWijets[navStatus][activeNavLeft].length; i++) {
            let idOfWijet = "blockItem-" + navStatus + "-" + activeNavLeft + "-" + i;
            allWijets[navStatus][activeNavLeft][i].init("#" + idOfWijet);
        }
    } catch {
        // alert("шлем данные на сервер!");
    }
}

htmlRender();

function htmlRender() {
    $(".serverContainerMain").html('');
    if (userSettings.reachLevel < 2) {
        $("#li2").css("display", "none");
    }
    if (userSettings.reachLevel > 1) {
        $(serverHTML).appendTo(".serverContainerMain");
        serverHTMLReload();
    }
}

$(".saveWijetSettings").click(function () {
    $("#modal").modal('hide');
    toast("Настройки сохранены!");
    allWijets[navStatus][activeNavLeft][activeWijet].title = $("#wijetTitle").val();
    allWijets[navStatus][activeNavLeft][activeWijet].pin = $("#pin").val();
    allWijets[navStatus][activeNavLeft][activeWijet].val1 = $("#timeLine1").val();
    allWijets[navStatus][activeNavLeft][activeWijet].val2 = $("#timeLine2").val();
    let ESPname = $("#esp").val();
    for (let i = 0; i < options.ESPSettings.length; i++) {
        if ("esp_" + options.ESPSettings[i].name == ESPname) {
            let url = options.ESPSettings[i].url;
            allWijets[navStatus][activeNavLeft][activeWijet].url = url;
            allWijets[navStatus][activeNavLeft][activeWijet].esp = ESPname;
            // break;
        }
    }
    if ($("#moveWijetTo").val() != '') {
        let moveTo = $("#moveWijetTo").val();
        let movedWijet = allWijets[navStatus][activeNavLeft][activeWijet];
        allWijets[navStatus][activeNavLeft].splice(activeWijet, 1);
        allWijets[navStatus][activeNavLeft].splice(moveTo, 0, movedWijet);
    }
    wijetsRender();
})

$(".deleteWijet").click(function () {
    $("#modal").modal('hide');
    toast("Виджет успешно удален!");
    allWijets[navStatus][activeNavLeft].splice(activeWijet, 1);
    wijetsRender();
});

taglines();

function taglines() {
    if (selectedUserNumber == -1) {
        if (options.superAdmin.theme) {
            $("#li0").mouseup(function () {
                $(".tagline").text("„ IOT не вставая с дивана! “");
            });
            $("#li1").mouseup(function () {
                $(".tagline").text("„ Чтоб оно всё завяло! “");
            });
            $("#li2").mouseup(function () {
                $(".tagline").text("„ Ламеров не пускать! “");
            });
            return;
        }
    } else if (options.users[selectedUserNumber].theme) {
        $("#li0").mouseup(function () {
            $(".tagline").text("„ IOT не вставая с дивана! “");
        });
        $("#li1").mouseup(function () {
            $(".tagline").text("„ Чтоб оно всё завяло! “");
        });
        $("#li2").mouseup(function () {
            $(".tagline").text("„ Ламеров не пускать! “");
        });
        return;
    }

    $("#li0").off('mouseup');
    $("#li1").off('mouseup');
    $("#li2").off('mouseup');
}