import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Статистика:</h2>
    <p>Добре: {good}</p>
    <p>Нейтрально: {neutral}</p>
    <p>Погано: {bad}</p>
    <p>Загально відгуків: {total}</p>
    <p>Відсоток позитивних відгуків: {positivePercentage}%</p>
  </div>
);

export default Statistics;
