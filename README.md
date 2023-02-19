<div id="header" align="center">

  # Web-приложение для триангуляции 2D-фигур

  <img src="https://media.giphy.com/media/l8yZINEDzUOBUPBlDr/giphy.gif" width="250"/>
  
  </div>
  
# [Live Demo](https://mikhail-martynenko.github.io/2D-Triangulation-Web-App)

## Для запуска проекта локально
  ```
    1. Clone or download the repository
    2. npm install
    3. npm start
  ```
  
# О проекте
В настоящее время существует множество проектов для триангуляции полигонов различной сложности, но все они предполагают установку какого-либо программного обеспечения и к тому же, многие из них требуют изучения некоторого руководства пользователя, так как имеют непростой функционал. 
* Особенностью этого проекта является упрощение пользованием инструментов 2D-триангуляции путём создания web-приложения, которым бы мог воспользоваться пользователь, не устанавливая программный модуль и не разбираясь в сложных руководствах, а также получить качественные результаты триангуляционной сетки.

# Используемые технологии
HTML, CSS, JavaScript, React, Redux, UI-библиотека Ant Design
<div>
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="50" height="50"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="50" height="50"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="50" height="50"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="50" height="50"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="50" 
</div>

# Примеры построения триангуляционных сеток с различным набором входных точек
Фигура А:
Триангуляция с использованием библиотеки Earcut

<img src='https://i.postimg.cc/zfzn4gBW/mesh-With-Earcut.png' border='0' alt='mesh-With-Earcut'/>
<details>
<summary>Показать набор точек</summary>
[[31,283],[86,436],[127,438],[129,286],[275,285],[278,436],[326,436],[327,285],[471,285],[475,436],[522,435],[522,283],[664,282],[669,431],[714,432],[765,279],[767,478],[624,484],[621,337],[574,337],[575,481],[429,482],[426,336],[376,337],[375,483],[229,483],[229,338],[177,340],[180,483],[34,482]]
</details>

# Руководство по использованию
Введите данные(массив координат точек) и нажмите кнопку "Установить массив для триангуляции". Затем выберите библиотеку с помощью которой будет происходить трингуляция и нажмите кнопку "Триангулировать". 

# Вывод
Триангуляция Делоне в базовой реализации, представленной в библиотеке d3-delaunay, лучше подходит для выпуклых фигур и построения регулярных сеток, методы на основе Earcut, лучше подходят для различных невыпуклых фигур и фигур с дырками. Разработанные модули на основе существующих библиотек позволяют гибко выбирать оптимальный метод для различных входных данных.
