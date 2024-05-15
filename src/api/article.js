import axios from 'axios'

/**
 * @param {String} slug ссылка на текст пользователя
 */

const getArticle = (slug) => {
  return axios
    .get(`/articles/${slug}`)
    .then((response) => response.data.article)
}

export default {
  getArticle,
}
