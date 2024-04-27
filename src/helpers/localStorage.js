// Получаем по ключу из localStorage.
export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (error) {
    console.log('Error getting data from localStorage', error)
    return null
  }
}

// Записываем ключ и дату в localStorage.
export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.log('Error saving data to localStorage', error)
  }
}
