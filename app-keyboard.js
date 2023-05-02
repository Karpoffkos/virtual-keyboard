const listCSS = {
    TEXT: "text-area",
    KEYBOARD: "keyboard",
    FORM: "form",
    MAIN: "main",
    UL: "ulTag",
    LI: "liTag",
    INPUT: "inputTag",
    KEYBOTTON: "keybotton",
    GRAY: "gray",
    DIVDSCR: "divSescription",
}
const dataList = [
    {
      code: "Backquote",
      ru: {
        keyShiftTrue: "Ё",
        keyShiftFalse: "ё",
      },
      en: {
        keyShiftTrue: "~",
        keyShiftFalse: "`",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Digit1",
      ru: {
        keyShiftTrue: "!",
        keyShiftFalse: "1",
      },
      en: {
        keyShiftTrue: "!",
        keyShiftFalse: "1",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Digit2",
      ru: {
        keyShiftTrue: '"',
        keyShiftFalse: "2",
      },
      en: {
        keyShiftTrue: "@",
        keyShiftFalse: "2",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Digit3",
      ru: {
        keyShiftTrue: "№",
        keyShiftFalse: "3",
      },
      en: {
        keyShiftTrue: "#",
        keyShiftFalse: "3",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Digit4",
      ru: {
        keyShiftTrue: ";",
        keyShiftFalse: "4",
      },
      en: {
        keyShiftTrue: "$",
        keyShiftFalse: "4",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Digit5",
      ru: {
        keyShiftTrue: "%",
        keyShiftFalse: "5",
      },
      en: {
        keyShiftTrue: "%",
        keyShiftFalse: "5",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Digit6",
      ru: {
        keyShiftTrue: ":",
        keyShiftFalse: "6",
      },
      en: {
        keyShiftTrue: "^",
        keyShiftFalse: "6",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Digit7",
      ru: {
        keyShiftTrue: "?",
        keyShiftFalse: "7",
      },
      en: {
        keyShiftTrue: "&",
        keyShiftFalse: "7",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Digit8",
      ru: {
        keyShiftTrue: "*",
        keyShiftFalse: "8",
      },
      en: {
        keyShiftTrue: "*",
        keyShiftFalse: "8",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Digit9",
      ru: {
        keyShiftTrue: "(",
        keyShiftFalse: "9",
      },
      en: {
        keyShiftTrue: "(",
        keyShiftFalse: "9",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Digit0",
      ru: {
        keyShiftTrue: ")",
        keyShiftFalse: "0",
      },
      en: {
        keyShiftTrue: ")",
        keyShiftFalse: "0",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Minus",
      ru: {
        keyShiftTrue: "_",
        keyShiftFalse: "-",
      },
      en: {
        keyShiftTrue: "_",
        keyShiftFalse: "-",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Equal",
      ru: {
        keyShiftTrue: "+",
        keyShiftFalse: "=",
      },
      en: {
        keyShiftTrue: "+",
        keyShiftFalse: "=",
      },
      typeBtn: "inputBtn",
      rowType: "numbersRow",
    },
    {
      code: "Backspace",
      ru: {
        keyShiftTrue: "Backspace",
        keyShiftFalse: "Backspace",
      },
      en: {
        keyShiftTrue: "Backspace",
        keyShiftFalse: "Backspace",
      },
      typeBtn: "controlBtn",
      rowType: "numbersRow",
    },
    {
      code: "Tab",
      ru: {
        keyShiftTrue: "Tab",
        keyShiftFalse: "Tab",
      },
      en: {
        keyShiftTrue: "Tab",
        keyShiftFalse: "Tab",
      },
      typeBtn: "controlBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyQ",
      ru: {
        keyShiftTrue: "Й",
        keyShiftFalse: "й",
      },
      en: {
        keyShiftTrue: "Q",
        keyShiftFalse: "q",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyW",
      ru: {
        keyShiftTrue: "Ц",
        keyShiftFalse: "ц",
      },
      en: {
        keyShiftTrue: "W",
        keyShiftFalse: "w",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyE",
      ru: {
        keyShiftTrue: "У",
        keyShiftFalse: "у",
      },
      en: {
        keyShiftTrue: "E",
        keyShiftFalse: "e",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyR",
      ru: {
        keyShiftTrue: "К",
        keyShiftFalse: "к",
      },
      en: {
        keyShiftTrue: "R",
        keyShiftFalse: "r",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyT",
      ru: {
        keyShiftTrue: "Е",
        keyShiftFalse: "е",
      },
      en: {
        keyShiftTrue: "T",
        keyShiftFalse: "t",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyY",
      ru: {
        keyShiftTrue: "Н",
        keyShiftFalse: "н",
      },
      en: {
        keyShiftTrue: "Y",
        keyShiftFalse: "y",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyU",
      ru: {
        keyShiftTrue: "Г",
        keyShiftFalse: "г",
      },
      en: {
        keyShiftTrue: "U",
        keyShiftFalse: "u",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyI",
      ru: {
        keyShiftTrue: "Ш",
        keyShiftFalse: "ш",
      },
      en: {
        keyShiftTrue: "I",
        keyShiftFalse: "i",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyO",
      ru: {
        keyShiftTrue: "Щ",
        keyShiftFalse: "щ",
      },
      en: {
        keyShiftTrue: "O",
        keyShiftFalse: "o",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyP",
      ru: {
        keyShiftTrue: "З",
        keyShiftFalse: "з",
      },
      en: {
        keyShiftTrue: "P",
        keyShiftFalse: "p",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "BracketLeft",
      ru: {
        keyShiftTrue: "Х",
        keyShiftFalse: "х",
      },
      en: {
        keyShiftTrue: "{",
        keyShiftFalse: "[",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "BracketRight",
      ru: {
        keyShiftTrue: "Ъ",
        keyShiftFalse: "ъ",
      },
      en: {
        keyShiftTrue: "}",
        keyShiftFalse: "]",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "Backslash",
      ru: {
        keyShiftTrue: "/",
        keyShiftFalse: "\\",
      },
      en: {
        keyShiftTrue: "|",
        keyShiftFalse: "\\",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "Delete",
      ru: {
        keyShiftTrue: "DEL",
        keyShiftFalse: "DEL",
      },
      en: {
        keyShiftTrue: "DEL",
        keyShiftFalse: "DEL",
      },
      typeBtn: "",
      rowType: "",
    },
    {
      code: "CapsLock",
      ru: {
        keyShiftTrue: "CapsLock",
        keyShiftFalse: "CapsLock",
      },
      en: {
        keyShiftTrue: "CapsLock",
        keyShiftFalse: "CapsLock",
      },
      typeBtn: "controlBtn",
      rowType: "letterRow2",
    },
    {
      code: "KeyA",
      ru: {
        keyShiftTrue: "Ф",
        keyShiftFalse: "ф",
      },
      en: {
        keyShiftTrue: "A",
        keyShiftFalse: "a",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "KeyS",
      ru: {
        keyShiftTrue: "Ы",
        keyShiftFalse: "ы",
      },
      en: {
        keyShiftTrue: "S",
        keyShiftFalse: "s",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "KeyD",
      ru: {
        keyShiftTrue: "В",
        keyShiftFalse: "в",
      },
      en: {
        keyShiftTrue: "D",
        keyShiftFalse: "d",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "KeyF",
      ru: {
        keyShiftTrue: "А",
        keyShiftFalse: "а",
      },
      en: {
        keyShiftTrue: "F",
        keyShiftFalse: "f",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "KeyG",
      ru: {
        keyShiftTrue: "П",
        keyShiftFalse: "п",
      },
      en: {
        keyShiftTrue: "G",
        keyShiftFalse: "g",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "KeyH",
      ru: {
        keyShiftTrue: "Р",
        keyShiftFalse: "р",
      },
      en: {
        keyShiftTrue: "H",
        keyShiftFalse: "h",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "KeyJ",
      ru: {
        keyShiftTrue: "О",
        keyShiftFalse: "о",
      },
      en: {
        keyShiftTrue: "J",
        keyShiftFalse: "j",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "KeyK",
      ru: {
        keyShiftTrue: "Л",
        keyShiftFalse: "л",
      },
      en: {
        keyShiftTrue: "K",
        keyShiftFalse: "k",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "KeyL",
      ru: {
        keyShiftTrue: "Д",
        keyShiftFalse: "д",
      },
      en: {
        keyShiftTrue: "L",
        keyShiftFalse: "l",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "Semicolon",
      ru: {
        keyShiftTrue: "Ж",
        keyShiftFalse: "ж",
      },
      en: {
        keyShiftTrue: ":",
        keyShiftFalse: ";",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "Quote",
      ru: {
        keyShiftTrue: "Э",
        keyShiftFalse: "э",
      },
      en: {
        keyShiftTrue: '"',
        keyShiftFalse: "'",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow2",
    },
    {
      code: "Enter",
      ru: {
        keyShiftTrue: "ENTER",
        keyShiftFalse: "ENTER",
      },
      en: {
        keyShiftTrue: "ENTER",
        keyShiftFalse: "ENTER",
      },
      typeBtn: "controlBtn",
      rowType: "letterRow2",
    },
    {
      code: "ShiftLeft",
      ru: {
        keyShiftTrue: "Shift",
        keyShiftFalse: "Shift",
      },
      en: {
        keyShiftTrue: "Shift",
        keyShiftFalse: "Shift",
      },
      typeBtn: "controlBtn",
      rowType: "letterRow3",
    },
    {
      code: "Backslash",
      ru: {
        keyShiftTrue: "/",
        keyShiftFalse: "\\",
      },
      en: {
        keyShiftTrue: "",
        keyShiftFalse: "\\",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow1",
    },
    {
      code: "KeyZ",
      ru: {
        keyShiftTrue: "Я",
        keyShiftFalse: "я",
      },
      en: {
        keyShiftTrue: "Z",
        keyShiftFalse: "z",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow3",
    },
    {
      code: "KeyX",
      ru: {
        keyShiftTrue: "Ч",
        keyShiftFalse: "ч",
      },
      en: {
        keyShiftTrue: "X",
        keyShiftFalse: "x",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow3",
    },
    {
      code: "KeyC",
      ru: {
        keyShiftTrue: "С",
        keyShiftFalse: "с",
      },
      en: {
        keyShiftTrue: "C",
        keyShiftFalse: "c",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow3",
    },
    {
      code: "KeyV",
      ru: {
        keyShiftTrue: "М",
        keyShiftFalse: "м",
      },
      en: {
        keyShiftTrue: "V",
        keyShiftFalse: "v",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow3",
    },
    {
      code: "KeyB",
      ru: {
        keyShiftTrue: "И",
        keyShiftFalse: "и",
      },
      en: {
        keyShiftTrue: "B",
        keyShiftFalse: "b",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow3",
    },
    {
      code: "KeyN",
      ru: {
        keyShiftTrue: "Т",
        keyShiftFalse: "т",
      },
      en: {
        keyShiftTrue: "N",
        keyShiftFalse: "n",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow3",
    },
    {
      code: "KeyM",
      ru: {
        keyShiftTrue: "Ь",
        keyShiftFalse: "ь",
      },
      en: {
        keyShiftTrue: "M",
        keyShiftFalse: "m",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow3",
    },
    {
      code: "Comma",
      ru: {
        keyShiftTrue: "Б",
        keyShiftFalse: "б",
      },
      en: {
        keyShiftTrue: "<",
        keyShiftFalse: ",",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow3",
    },
    {
      code: "Period",
      ru: {
        keyShiftTrue: "Ю",
        keyShiftFalse: "ю",
      },
      en: {
        keyShiftTrue: ">",
        keyShiftFalse: ".",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow3",
    },
    {
      code: "Slash",
      ru: {
        keyShiftTrue: ",",
        keyShiftFalse: ".",
      },
      en: {
        keyShiftTrue: "?",
        keyShiftFalse: "/",
      },
      typeBtn: "inputBtn",
      rowType: "letterRow3",
    },
    {
      code: "ArrowUp",
      ru: {
        keyShiftTrue: "↑",
        keyShiftFalse: "↑",
      },
      en: {
        keyShiftTrue: "↑",
        keyShiftFalse: "↑",
      },
      typeBtn: "controlBtn",
      rowType: "controlRow",
    },
    {
      code: "ShiftRight",
      ru: {
        keyShiftTrue: "Shift",
        keyShiftFalse: "Shift",
      },
      en: {
        keyShiftTrue: "Shift",
        keyShiftFalse: "Shift",
      },
      typeBtn: "controlBtn",
      rowType: "letterRow3",
    },
    {
      code: "ControlLeft",
      ru: {
        keyShiftTrue: "Ctrl",
        keyShiftFalse: "Ctrl",
      },
      en: {
        keyShiftTrue: "Ctrl",
        keyShiftFalse: "Ctrl",
      },
      typeBtn: "controlBtn",
      rowType: "controlRow",
    },
    {
      code: "Win",
      ru: {
        keyShiftTrue: "Win",
        keyShiftFalse: "Win",
      },
      en: {
        keyShiftTrue: "Win",
        keyShiftFalse: "Win",
      },
      typeBtn: "controlBtn",
      rowType: "controlRow",
    },
    {
      code: "AltLeft",
      ru: {
        keyShiftTrue: "Alt",
        keyShiftFalse: "Alt",
      },
      en: {
        keyShiftTrue: "Alt",
        keyShiftFalse: "Alt",
      },
      typeBtn: "controlBtn",
      rowType: "controlRow",
    },
    {
      code: "Space",
      ru: {
        keyShiftTrue: " ",
        keyShiftFalse: " ",
      },
      en: {
        keyShiftTrue: " ",
        keyShiftFalse: " ",
      },
      typeBtn: "controlBtn",
      rowType: "controlRow",
    },
    {
      code: "AltRight",
      ru: {
        keyShiftTrue: "Alt",
        keyShiftFalse: "Alt",
      },
      en: {
        keyShiftTrue: "Alt",
        keyShiftFalse: "Alt",
      },
      typeBtn: "controlBtn",
      rowType: "controlRow",
    },
    {
      code: "ControlRight",
      ru: {
        keyShiftTrue: "Ctrl",
        keyShiftFalse: "Ctrl",
      },
      en: {
        keyShiftTrue: "Ctrl",
        keyShiftFalse: "Ctrl",
      },
      typeBtn: "controlBtn",
      rowType: "controlRow",
    },
    {
      code: "ArrowLeft",
      ru: {
        keyShiftTrue: "←",
        keyShiftFalse: "←",
      },
      en: {
        keyShiftTrue: "←",
        keyShiftFalse: "←",
      },
      typeBtn: "controlBtn",
      rowType: "controlRow",
    },
    {
      code: "ArrowDown",
      ru: {
        keyShiftTrue: "↓",
        keyShiftFalse: "↓",
      },
      en: {
        keyShiftTrue: "↓",
        keyShiftFalse: "↓",
      },
      typeBtn: "controlBtn",
      rowType: "controlRow",
    },
    {
      code: "ArrowRight",
      ru: {
        keyShiftTrue: "→",
        keyShiftFalse: "→",
      },
      en: {
        keyShiftTrue: "→",
        keyShiftFalse: "→",
      },
      typeBtn: "controlBtn",
      rowType: "controlRow",
    },
  ];
const specialKeyBoard = ["Backquote", "Backspace", "Tab", "Delete", "CapsLock", "Enter",
    "ShiftLeft", "ShiftRight", "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlLeft", "ControlRight",
    "Win", "AltLeft", "AltRight"];

alert(`Приветствую! Если не сложно, очень прошу сделать ревью через пару дней. Не было возможности приступить к заданию! Благодарю`)
function createKeyboard(arr){
    const keyboard = document.createElement('section')
    keyboard.classList.add(listCSS.KEYBOARD);

    const formTag = createElement('form', listCSS.FORM);
    const textArea = createElement('input', listCSS.INPUT);
    textArea.setAttribute('type', 'text');
    formTag.append(textArea);
    keyboard.append(formTag);

    const mainTag = createElement('main', listCSS.MAIN);
    keyboard.append(mainTag);

    const ulTag = createElement('ul', listCSS.UL);
    const divSescription = createElement('div', listCSS.DIVDSCR);
    divSescription.textContent = "Переключение языка: ctrl + alt (Windows)";

    mainTag.append(ulTag);
    mainTag.append(divSescription);

    for (let i = 0; i < arr.length; i++){
        const liTag = document.createElement('li');
        liTag.classList.add(listCSS.LI);
        liTag.classList.add(arr[i].code.toLowerCase().slice(0, 1)+ arr[i].code.slice(1) );
        liTag.textContent = arr[i].en.keyShiftFalse;
        const keybotton = document.createElement('div');
        keybotton.classList.add(listCSS.KEYBOTTON);
        if(specialKeyBoard.includes(arr[i].code)){
          liTag.classList.add(listCSS.GRAY);
        }
        if(i < 13){
         keybotton.textContent = arr[i].en.keyShiftTrue;
        } else if (arr[i].code == "Backslash"){
          keybotton.textContent = arr[i].en.keyShiftTrue;
        }

        liTag.append(keybotton);
        ulTag.append(liTag);
    }


    return keyboard;

}

function createElement(tagName, className){
    const tag = document.createElement(tagName);
    tag.classList.add(className)
    return tag;

}




const virtualKeyboard = createKeyboard(dataList);
document.body.append(virtualKeyboard);

