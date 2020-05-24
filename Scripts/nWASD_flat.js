let activeNumber = 0;
let activeNavLeft = undefined;

let flatsNumb = 0;

function navLeftContainerRender() {
    $(".navLeftContainer").html('');
    if (navStatus == 0) {
        if ($("body").width() < 767) {
            for (let i = 0; i < flatsNumb; i++) {
                if (selectedUserNumber == -1 || options.users[selectedUserNumber].rooms[0].indexOf(options.names[0][i]) != -1) {
                    let spanNumber = i + 1;
                    $("<div class=\"flatMainWrap\" id=\"fl-" + i + "\"><i class=\"fas fa-home\"></i><span>" + spanNumber + "</span><div id=\"flClc-" + i + "\"></div></div>").appendTo(".leftMenuPanel .navLeftContainer");
                    $("#flClc-" + i).click(flClick);
                }
            }
        } else {
            for (let i = 0; i < flatsNumb; i++) {
                if (selectedUserNumber == -1 || options.users[selectedUserNumber].rooms[0].indexOf(options.names[0][i]) != -1) {
                    let spanNumber = i + 1;
                    $("<div class=\"flatMainWrap\" id=\"fl-" + i + "\"><i class=\"fas fa-home\"></i><span>" + spanNumber + "</span><div id=\"flClc-" + i + "\"></div></div>").appendTo(".navPanelLeft .navLeftContainer");
                    $("#flClc-" + i).click(flClick);
                }
            }
        }
    } else if (navStatus == 1) {
        if ($("body").width() < 767) {
            for (let i = 0; i < flatsNumb; i++) {
                if (selectedUserNumber == -1 || options.users[selectedUserNumber].rooms[1].indexOf(options.names[1][i]) != -1) {
                    let spanNumber = i + 1;
                    $("<div class=\"pipeMainWrap\" id=\"piMain-" + i + "\"><span id=\"pi-" + i + "\">" + spanNumber + "</span></div>").appendTo(".leftMenuPanel .navLeftContainer");
                    $("#pi-" + i).click(flClick);
                    let rgb = "rgb(" + (i * (255 / flatsNumb) + ", ") + (((255 - (i * (255 / flatsNumb))) + ", ") + (255 - (255 / flatsNumb))) + ")";
                    $("#piMain-" + i).css("background", rgb);
                    $("#pi-" + i).css("background", rgb);
                }
            }
        } else {
            for (let i = 0; i < flatsNumb; i++) {
                if (selectedUserNumber == -1 || options.users[selectedUserNumber].rooms[1].indexOf(options.names[1][i]) != -1) {
                    let spanNumber = i + 1;
                    $("<div class=\"pipeMainWrap\" id=\"piMain-" + i + "\"><span id=\"pi-" + i + "\">" + spanNumber + "</span></div>").appendTo(".navPanelLeft .navLeftContainer");
                    $("#pi-" + i).click(flClick);
                    let rgb = "rgb(" + (i * (255 / flatsNumb) + ", ") + (((255 - (i * (255 / flatsNumb))) + ", ") + (255 - (255 / flatsNumb))) + ")";
                    $("#piMain-" + i).css("background", rgb);
                    $("#pi-" + i).css("background", rgb);
                }
            }
        }
    }
}

function flClick() {
    activeNumber = event.target.id.split('-')[1];
    if (navStatus == 0) {
        $(".flatMainWrap").css("box-shadow", "none");
        $(event.target.id).css("box-shadow", "3px 3px 3px 1px #151824");
    } else if (navStatus == 1) {
        for (let i = 0; i < flatsNumb; i++) {
            $("#pi-" + i).css("border", "none");
        }
        $(event.target.id).css("border", "2px white solid");
    }
    // activeNumber = event.target.id.split('-')[1];
    // $(".flatMainWrap").css("box-shadow", "none");
    // $(event.target.id).css("box-shadow", "3px 3px 3px 1px #151824");
    activeNavLeft = parseInt(activeNumber);
    wijetsRender();
}