import axios from 'axios'

/**
 *
 * @return {Array} возвращает массив тегов
 */
const getTags = () => {
  return axios.get('/tags').then((response) => response.data.tags)
}

export default {
  getTags,
}
