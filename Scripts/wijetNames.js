let navStatus = 0;

let banHTML = "<div class=\"BAN\"><span>Вас забанили!</span></div>";

let serverHTML = "<div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Добавить комнату</span><div class=\"serverContainerItemMain\"><input type=\"text\" id=\"serverAddFlatName\" placeholder=\"Название комнаты\"><select name=\"user\" class=\"serverSelectUser\" multiple id=\"select1\"></select><i class=\"fas fa-plus serverButton\" id=\"serverAddFlatButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Удалить комнату</span><div class=\"serverContainerItemMain\"><select name=\"flat\" class=\"serverSelectFlat\" multiple id=\"select2\"></select><i class=\"fas fa-trash-alt serverButton\" id=\"serverRemoveFlatButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Переименовать комнату</span><div class=\"serverContainerItemMain\"><select id=\"select3\" name=\"flat\" class=\"serverSelectFlat\" multiple></select><input type=\"text\" id=\"serverNewFlatName\" placeholder=\"Новое название\"><i class=\"fas fa-sliders-h serverButton\" id=\"serverRenameFlatButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Добавить юзера в комнату</span><div class=\"serverContainerItemMain\"><select id=\"select4\" name=\"flat\" class=\"serverSelectFlat\" multiple></select><select id=\"select5\" name=\"user\" class=\"serverSelectUser\" multiple></select><i class=\"fas fa-user-plus serverButton\" id=\"serverAddUserToFlatButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Удалить юзера из комнаты</span><div class=\"serverContainerItemMain\"><select id=\"select6\" name=\"flat\" class=\"serverSelectFlat\" multiple></select><select id=\"select7\" name=\"user\" class=\"serverSelectUser\" multiple></select><i class=\"fas fa-user-minus serverButton\" id=\"serverRemoveUserToFlatButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Добавить круг полива</span><div class=\"serverContainerItemMain\"><input type=\"text\" id=\"serverAddRoundName\" placeholder=\"Название круга полива\"><select id=\"select8\" name=\"user\" class=\"serverSelectUser\" multiple></select><i class=\"fas fa-plus serverButton\" id=\"serverAddRoundButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Удалить круг полива</span><div class=\"serverContainerItemMain\"><select id=\"select9\" name=\"flat\" class=\"serverSelectRound\" multiple></select><i class=\"fas fa-trash-alt serverButton\" id=\"serverRemoveRoundButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Переименовать круг</span><div class=\"serverContainerItemMain\"><select id=\"select10\" name=\"flat\" class=\"serverSelectRound\" multiple></select><input type=\"text\" id=\"serverNewRoundName\" placeholder=\"Новое название\"><i class=\"fas fa-sliders-h serverButton\" id=\"serverRenameRoundButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Добавить юзера в круг</span><div class=\"serverContainerItemMain\"><select id=\"select11\" name=\"flat\" class=\"serverSelectRound\" multiple></select><select id=\"select12\" name=\"user\" class=\"serverSelectUser\" multiple></select><i class=\"fas fa-user-plus serverButton\" id=\"serverAddUserToRoundButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Удалить юзера из круга</span><div class=\"serverContainerItemMain\"><select id=\"select13\" name=\"flat\" class=\"serverSelectRound\" multiple></select><select id=\"select14\" name=\"user\" class=\"serverSelectUser\" multiple></select><i class=\"fas fa-user-minus serverButton\" id=\"serverRemoveUserToRoundButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Добавить статус админа</span><div class=\"serverContainerItemMain\"><select id=\"select15\" name=\"user\" class=\"serverSelectUser\" multiple></select><i class=\"fas fa-plus serverButton\" id=\"serverAddAdminStatusButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Убрать статус админа</span><div class=\"serverContainerItemMain\"><select id=\"select16\" name=\"user\" class=\"serverSelectUser\" multiple></select><i class=\"fas fa-minus serverButton\" id=\"serverRemoveAdminStatusButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Забанить пользователя</span><div class=\"serverContainerItemMain\"><select id=\"select17\" name=\"user\" class=\"serverSelectUser\" multiple></select><i class=\"fas fa-user-lock serverButton\" id=\"serverAddUserBanButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Разбанить пользователя</span><div class=\"serverContainerItemMain\"><select id=\"select18\" name=\"user\" class=\"serverSelectUser\" multiple></select><i class=\"fas fa-user serverButton\" id=\"serverRemoveUserBanButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Переименовать пользователя</span><div class=\"serverContainerItemMain\"><select id=\"select19\" name=\"user\" class=\"serverSelectUser\" multiple></select><input type=\"text\" id=\"serverRenameUser\" placeholder=\"Новое имя\"><i class=\"fas fa-user-cog serverButton\" id=\"serverRenameUserButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Удалить пользователя</span><div class=\"serverContainerItemMain\"><select id=\"select20\" name=\"user\" class=\"serverSelectUser\" multiple></select><i class=\"fas fa-trash-alt serverButton\" id=\"serverRemoveUserButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Скопировать код приглашения</span><div class=\"serverContainerItemMain\"><i class=\"fas fa-circle-notch fa-spin serverButton\" id=\"serverAddCodeButton\"></i><input type=\"text\" id=\"serverAddCode\" placeholder=\"Код приглашения\" readonly></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Уровни пользователей</span><div class=\"serverContainerItemMain\"><select name=\"user\" class=\"serverWathUsers\" multiple></select></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Добавить ESP</span><div class=\"serverContainerItemMain\"><input type=\"text\" id=\"serverAddESP\" placeholder=\"ip:port#name\"><i class=\"fas fa-plus serverButton\" id=\"serverAddESPButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Удалить ESP</span><div class=\"serverContainerItemMain\"><select name=\"ESP\" class=\"serverSelectESP\" multiple id=\"select25\"></select><i class=\"fas fa-minus serverButton\" id=\"serverRemoveESPButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Добавить ESP в комнату</span><div class=\"serverContainerItemMain\"><select id=\"select26\" name=\"flat\" class=\"serverSelectFlat\" multiple></select><select id=\"select27\" name=\"user\" class=\"serverSelectESP\" multiple></select><i class=\"fas fa-plus serverButton\" id=\"serverAddESPToFlatButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Удалить ESP из комнаты</span><div class=\"serverContainerItemMain\"><select id=\"select28\" name=\"flat\" class=\"serverSelectFlat\" multiple></select><select id=\"select29\" name=\"user\" class=\"serverSelectESP\" multiple></select><i class=\"fas fa-minus serverButton\" id=\"serverRemoveESPToFlatButton\"></i></div></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Добавить ESP в круг полива</span><div class=\"serverContainerItemMain\"><select id=\"select30\" name=\"flat\" class=\"serverSelectRound\" multiple></select><select id=\"select31\" name=\"user\" class=\"serverSelectESP\" multiple></select><i class=\"fas fa-plus serverButton\" id=\"serverAddESPToRoundButton\"></i></div></div><div class=\"serverContainerItem\"><span class=\"serverContainerItemTitle\">Удалить ESP из круга полива</span><div class=\"serverContainerItemMain\"><select id=\"select32\" name=\"flat\" class=\"serverSelectRound\" multiple></select><select id=\"select33\" name=\"user\" class=\"serverSelectESP\" multiple></select><i class=\"fas fa-minus serverButton\" id=\"serverRemoveESPToRoundButton\"></i></div></div>";

let info = "Документация: <br><br> toast(\"...\") - уведомление <br> options.ESPSettings[] - обьект со всеми платами <br> options.ESPSettings[].pins[] - значения пинов платы <br> options.ESPSettings[].isOnline - В сети ли плата <br> wijetsInit() - обновить состояния виджетов <br> sendPin(this.url, this.pin, this.val, this.espNumb, староеЗнач) - послать значение <br><br> Обьект виджета: <br><br> this.pin - пин <br> this.title - название <br> this.url - url платы виджета <br> this.esp - название платы виджета <br> this.val1 - первый аргумент <br> this.val2 - второй аргумент <br> this.type - тип виджета <br> this.espNumb - текущая плата <br> this.id - id на странице ";