const express = require('express')
const mongoose = require('mongoose')

const Message = require('./models/record')

// Create server to serve index.html
const app = express()
const http = require('http').Server(app)
const port = process.env.PORT || 3001

// Routing
app.use(express.static('public'))

// Socket.io serverSocket
const serverSocket = require('socket.io')(http)

// Start server listening process.
http.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
})

// Connect to mongo
mongoose.connect('mongodb+srv://lby1007:web2019@cluster0-vdzr6.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})
db = mongoose.connection

db.on('error', error => {
    console.log(error)
})
db.once('open', () => {
    console.log('MongoDB connected!')
    serverSocket.on('connection', socket => {
        const sendStatus = s => {
            socket.emit('status', s)
        }

        // First time running
        Message.find()
            .limit(100)
            .sort({ _id: 1 })
            .exec((err, res) => {
                if (err) throw err

                socket.emit('init', res)
            })

        socket.on('input', data => {
            let name = data.name
            let money = data.money
            let cat = data.cat
            let year = data.year
            let month = data.month
            let date = data.date

            // Check for name and message
            if (name == '' || money == '') {
                // Send error status
                sendStatus('Please enter a name and message')
            } else {
                // Insert message
                const message = new Message({ name, money, cat, year, month, date })
                message.save(err => {
                    if (err) console.error(err)

                    serverSocket.emit('output', [data])

                    // Saved!
                    sendStatus({
                        message: 'Message sent',
                        clear: true
                    })
                })
            }
        })
        socket.on('request', () => {
            // Remove all chats from collection
            Message.find()
            .limit(100)
            .sort({ _id: 1 })
            .exec((err, res) => {
                if (err) throw err
                serverSocket.emit('output', res)
            })
        })

        socket.on('deleteByID', id => {
            // Remove all chats from collection
            console.log(id)
            Message.findByIdAndDelete(id)
            .exec((err, res) => {
                if (err) throw err
            })
        })

        socket.on('clear', () => {
            // Remove all chats from collection
            Message.deleteMany({}, () => {
                // Emit cleared
                socket.broadcast.emit('cleared')
            })
        })
    })
})
