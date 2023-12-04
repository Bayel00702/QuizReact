import React, {useState} from "react";
import Game from "./components/Game/Game";
import Result from "./components/Result/Result";
import './style/style.scss'


function App() {

  const questions = [
    {
      title: 'Какая форма общего уравнения квадратичной функции?',
      variants: [
          'y = mx + b',
          'y = ax^2 + bx + c',
          'y = a/x',
          'y = sqrt(x)'
      ],
      correct: 1
    },
    {
      title: 'Как называется точка, в которой график квадратичной функции пересекает ось y?',
      variants: [
          'Вершина',
          'Фокус',
          'Асимптота',
          'Пересечение'
      ],
      correct: 3
    },
    {
      title: 'Как определить, ветви графика квадратичной функции направлены вверх или вниз?',
      variants: [
          'По коэффициенту a',
          'По коэффициенту b',
          'По коэффициенту c',
          'По коэффициенту m'
      ],
      correct: 0
    },
    {
      title: 'Как найти вершину графика квадратичной функции, заданной уравнением y = ax^2 + bx + c?',
      variants: [
          '(-b/2a, c)',
          '(a/2, b/2)',
          '(b/2a, c)',
          '(-a/2, -b/2)'
      ],
      correct: 0
    },
    {
      title: 'Как называется число, которое определяет положение вершины квадратичной функции на горизонтальной оси?',
      variants: [
          'Координата y',
          'Координата x',
          'Дискриминант',
          'Коэффициент a'
      ],
      correct: 1
    },
    {
      title: 'Что представляет собой дискриминант в квадратичном уравнении ax^2 + bx + c = 0?',
      variants: [
          'Коэффициент при x',
          'Коэффициент при x^2',
          'Корень уравнения',
          'Выражение b^2 - 4ac'
      ],
      correct: 3
    },
  ]

  return (
    <div className="App">
        <Game/>
        {/*<Result/>*/}
    </div>
  );
}

export default App;
