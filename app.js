/*
 * @Author: your name
 * @Date: 2021-06-24 16:39:52
 * @LastEditTime: 2021-06-24 17:40:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pug-express/app.js
 */
const express = require('express')
const app = express()
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
