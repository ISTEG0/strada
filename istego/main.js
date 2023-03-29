const phoneBook = {
    "Артем Димитров": 89823673498,
    "Ярослав Менторович": 89867678999,
    "Михаил Королев": 89833355523,
    "Strada": 89128424274,
    "Настя": 89123467865,
    "Илья": 89127687233
}

const questionStart = +prompt('Если хотите просмотреть список контактов введите 1, добавить контакт введите 2, удалить контакт 3');
const whoseNumber = 'Чей номер вас интересует? Только вводите как в консоли, можете просто скопировать)';
const errorEntered = 'Кажется вы ввели не правильно, попробуйте снова, без пробелов, без ничего, как в консоли!';
const cancelProgram = 'Вы отменили работу программы!';

let phoneName = null;
let phoneNumber = null;

if (questionStart === 1) {
    const notice = confirm('Здорово, ОТКРОЙТЕ КОНСОЛЬ разработчика и нажмите ОК, список имен появится там!')
    if (notice === true) {
        for (phone in phoneBook) {
            console.log(phone);
        }
        let question = prompt(whoseNumber);
        if (question === null) {
            alert(cancelProgram);
        } else if (phoneBook[question] === undefined) {
            while (phoneBook[question] === undefined) {
                alert(errorEntered);
                question = prompt(whoseNumber);
                if (question === null) {
                    alert(cancelProgram);
                    break;
                } else if (phoneBook[question] === undefined) {
                    alert(errorEntered);
                    question = prompt(whoseNumber);
                } else {
                    alert('Ну вот вам и номер ' + question + ': ' + phoneBook[question]);
                }
            }
        } else {
            alert('Ну вот вам и номер ' + question + ': ' + phoneBook[question]);
        }
    }
    else {
        alert(cancelProgram);
    }
} else if (questionStart === 2) {
    phoneName = prompt('Введите имя');
    phoneNumber = +prompt('Введите номер');
    addContact(phoneName, phoneNumber);
} else if(questionStart === 3) {
    for (phone in phoneBook) {
        console.log(phone);
    }
    phoneName = prompt('Введите имя контакта, который хотите удалить');
    deleteContact(phoneName);
}
else {
    alert(cancelProgram);
}


function addContact(Name, Number) {
    phoneBook[Name] = Number;
    console.log('Запись добавлена!');
    console.log(phoneBook);
}

function deleteContact(nameDelete) {
    delete phoneBook[nameDelete];
    console.log('Запись удалена!');
    console.log(phoneBook);
}