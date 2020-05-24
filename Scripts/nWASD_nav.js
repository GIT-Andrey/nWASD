let navBarPosition = 0;
let leftMenuPosition = 0;
let rightMenuPosition = 0;

switchFunc(navStatus);
navRightContainerRender();

$(".userMenu_phone").click(navButtonClick);
$("#rightSideMenuButton").click(rightMenuRender);
$("#leftSideMenuButton").click(leftMenuRender);
$("#rightTitleIcon").click(rightMenuRender);
$("#leftTitleIcon").click(leftMenuRender);
$(".closeSideMenuButton").click(function () {
    leftMenuPosition = 1;
    rightMenuPosition = 1;
    leftMenuRender();
    rightMenuRender();
});
$(".userMenu").click(user_menu);

let blockWidth = Math.floor(($(".mainContainer").width() - 20) / 50);
blockWidth = (blockWidth * 50 + 20) + "px";
$(".blockContainer").css("width", blockWidth);

for (let i = 0; i < 3; i++) {
    $("#li" + i).click(function () {
        switchFunc(navStatus = i);
    });
}

function switchFunc(item) {
    for (let i = 0; i < 3; i++) {
        $("#li" + i).removeClass("active");
    }
    $("#li" + item).addClass("active");
    switchWindowFunc(item);
    navRightContainerRender();
}

function switchWindowFunc(item) {
    if (item == 0) {
        $(":root").css("--background-color", "#e29600");
        $("#leftTitle").html("Комната");
        $(".serverContainer").addClass("none");
        $(".userInterfaceVisible").removeClass("none");
        $(".mainContainer").css("display", "block");
        $(".mainTitle span").html("Умный дом");
    } else if (item == 1) {
        $(":root").css("--background-color", "#3fcf00");
        $("#leftTitle").html("Круг полива");
        $(".serverContainer").addClass("none");
        $(".userInterfaceVisible").removeClass("none");
        $(".mainContainer").css("display", "block");
        $(".mainTitle span").html("Автополив");
    } else {
        $(":root").css("--background-color", "#00dae2");
        $(".serverContainer").removeClass("none");
        $(".userInterfaceVisible").addClass("none");
        $(".mainContainer").css("display", "none");
        // $(".rightMenuPanel").css("display", "none");
        // $(".leftMenuPanel").css("display", "none");
    }
    activeNavLeft = undefined;
    wijetsRender();
}

function navButtonClick() {
    if (navBarPosition == 0) {
        navBarPosition = 1;
        $(".rightMenuPanel").css("top", "440px");
        $(".leftMenuPanel").css("top", "440px");
    } else {
        navBarPosition = 0;
        $(".rightMenuPanel").css("top", "40px");
        $(".leftMenuPanel").css("top", "40px");
    }
}

function rightMenuRender() {
    if (rightMenuPosition == 0) {
        rightMenuPosition = 1;
        $(".rightMenuPanel").css("display", "block");
        $(".rightTitleIcon").css("display", "none");
        setTimeout(function() {
            $(".rightMenuPanel").css("right", "0");
            setTimeout(function () {
                for (let i = 0; i < wijetsNumb; i++) {
                    let id = "#wjImg-" + i;
                    let maxWjWidth = $(id).width();
                    maxWjWidth += 45;
                    maxWjWidth += "px";
                    $("#wjMain-" + i).css("max-width", maxWjWidth);
                }
            }, 300);
        }, 100);
        if ($("body").width() < 576) {
            $(".leftMenuPanel").css("left", "-250px");
            setTimeout(function() {
                $(".leftMenuPanel").css("display", "none");
                $(".leftTitleIcon").css("display", "flex");
            }, 400);
        }
    } else {
        rightMenuPosition = 0;
        $(".rightMenuPanel").css("right", "-300px");
        setTimeout(function() {
            $(".rightMenuPanel").css("display", "none");
            if ($("body").width() < 576) {
                $(".rightTitleIcon").css("display", "flex");
            }
        }, 500);
    }
}

function leftMenuRender() {
    if (leftMenuPosition == 0) {
        leftMenuPosition = 1;
        $(".leftMenuPanel").css("display", "block");
        $(".leftTitleIcon").css("display", "none");
        setTimeout(function() {
            $(".leftMenuPanel").css("left", "0"); 
        }, 100);
        if ($("body").width() < 576) {
            $(".rightMenuPanel").css("right", "-300px");
            setTimeout(function() {
                $(".rightMenuPanel").css("display", "none");
                $(".rightTitleIcon").css("display", "flex");
            }, 400);
        }
    } else {
        leftMenuPosition = 0;
        $(".leftMenuPanel").css("left", "-250px");
        setTimeout(function() {
            $(".leftTitleIcon").css("display", "flex");
            $(".leftMenuPanel").css("display", "none");
        }, 500);
    }
}

let userMenuStatus = 0;
function user_menu() {
    if (userMenuStatus) {
        $(".userSettings").css("margin-top", "-400px");
    } else {
        $(".userSettings").css("margin-top", "0");
    }
    userMenuStatus = !userMenuStatus;
}

$(".screenTargetButton").click(function() {
    $("#notifyScreen")[0].showModal();
    $(".defalutNwasdToolScreen").css("transform", "translateY(0%)");
});

$(".-screenOffTrigger").click(function() {
    $(".defalutNwasdToolScreen").css("transform", "translateY(100%)");
    setTimeout(function() {
        $(".defalutNwasdToolScreen")[0].close();
    }, 300);
})