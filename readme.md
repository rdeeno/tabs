# Tabs

1. Объявить переменные

    1. Получить массив кнопок для переключения между табами tabBtns
    1. Получить массив с табами div.tabcontent
    1. Задать переменную для текущего положения активного элемента и присвоить ей значение 0
1. Обработчик 'click'
    1. В цикле пройти по всем элементам tabBtn
        1.Повесить на каждый tabBtn событие которое будет менять состояние   кнопок и табов на visible и active

1. Сделать функцию 
    1. Получить index кликнутой кнопки
    1. Убрать класс active на текущем активном tabBtn
    1. Убрать класс visible на текущем активном tabContent
    1. Переменной current присвоить значение index 
    1. Добавить класс active элементу на котором произошло событие 'click'
    1. Добавить класс visible элементу который соответствует индексу кликнутого элемента
    