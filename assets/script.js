/*Создать объект «Документ», в котором определить свойства «Заголовок, Тело, Футер, Дата». Создать в 
объекте вложенный объект – «Приложение». Создать в объекте «Приложение», вложенные объекты, 
«Заголовок, Тело, Футер, Дата». Создать методы для заполнения и отображения документа. */

var Today = new Date();

var MyDate = {
    dd: String(Today.getDate()).padStart(2, '0'),
    mm: String(Today.getMonth() + 1).padStart(2, '0'), //January is 0!
    yyyy: Today.getFullYear(),
}

var Documents = {
    title: "<H1>Заголовок документа.</H1><br/>",
    body: "Тело документа.<br/>",
    footer: "<footer>Нижний колонтитул документа.</footer><br/>",
    data: "Текущая дата: " + MyDate.dd + "/" + MyDate.mm + "/" + MyDate.yyyy + "<br/>",
    application: {
        title: "<H3>Заголовок приложения.</H3><br/>",
        body: "Тело приложения.<br/>",
        footer: "<footer>Нижний колонтитул приложения.</footer><br/>",
        data: "Текущая дата: " + MyDate.dd + "/" + MyDate.mm + "/" + MyDate.yyyy + "<br/>",
    },
    documentChanger: function () {
        var userInsert = prompt("Введите желаемое изменение заголовка документа", "сюда");
        var titleChange = "<H1>" + userInsert + "</H1><br/>";
        userInsert = prompt("Введите желаемое изменение тела документа", "сюда");
        var bodyChange = userInsert + "<br/>";
        userInsert = prompt("Введите желаемое изменение футер (нижнего колонтитула) документа", "сюда");
        var footerChange = "<footer>" + userInsert + "</footer><br/>";
        Documents.title = titleChange;
        Documents.body = bodyChange;
        Documents.footer = footerChange;
    },
    applicationChanger: function () {
        userInsert = prompt("Введите желаемое изменение заголовка документа", "сюда");
        titleChange = "<H1>" + userInsert + "</H1><br/>";
        userInsert = prompt("Введите желаемое изменение тела документа", "сюда");
        bodyChange = userInsert + "<br/>";
        userInsert = prompt("Введите желаемое изменение футер (нижнего колонтитула) документа", "сюда");
        footerChange = "<footer>" + userInsert + "</footer><br/>";
        Documents.application.title = titleChange;
        Documents.application.body = bodyChange;
        Documents.application.footer = footerChange;
    },
    documentWrite: function () {
        document.write(Documents.title);
        document.write(Documents.body);
        document.write(Documents.footer);
        document.write(Documents.data);
    },
    applicationWrite: function () {
    document.write(Documents.application.title);
    document.write(Documents.application.body);
    document.write(Documents.application.footer);
    document.write(Documents.application.data);
    },
};

var userChoise = confirm("Хотите ли внести изменения в документ?", "да", "нет");
if (userChoise == true) {Documents.documentChanger(); Documents.documentWrite();}
else {Documents.documentWrite();}

userChoise = confirm("Хотите ли внести изменения в приложение?", "да", "нет");
if (userChoise == true) {Documents.applicationChanger(); Documents.applicationWrite();}
else {Documents.applicationWrite();};
