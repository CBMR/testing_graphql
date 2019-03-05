const express = require('express')
const cors = require('cors')

const PORT = 4111

const corsOptions = {
  methods: ('GET,PUT,POST,PATCH')
}

server.use(express.json())
server.use(cors(corsOptions))