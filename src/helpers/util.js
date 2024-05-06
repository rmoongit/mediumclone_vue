// Функция возвращает от 1 до N элементов
/**
 *
 * @param {Number} start Начальное значение диапазона
 * @param {Number} end До какого диапазона
 * @param {Array} Array Выводит значения в массив от и до
 */
export const rangeFrom = (start, end) => {
  return [...Array(end).keys()].map((number) => number + start)
}
