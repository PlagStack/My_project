const display = document.getElementById('display');

// Добавить символ на экран
function addToDisplay(value) {
    display.value += value;
}

// Очистить экран
function clearDisplay() {
    display.value = '';
}

// Удалить последний символ
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// ГЛАВНЫЙ АЛГОРИТМ: Вычисление
function calculate() {
    try {
        // eval — это встроенная функция, которая считает строку как пример
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Ошибка";
        setTimeout(clearDisplay, 1500); // Очистить через 1.5 сек
    }
}