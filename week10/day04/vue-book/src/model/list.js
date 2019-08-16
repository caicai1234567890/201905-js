import axios from './config'

export let getAllBooks = () => axios.get('/api/books')

// 删除指定的图书
export let deleteBook = id => axios.get('/api/delet?id=' + id)

// 收藏图书
export let collectBook = book => axios.post('/api/collect', book)

// 根据id查询指定id的图书信息

export let getOneBook = id => axios.get('/api/getOne?id=' + id)
