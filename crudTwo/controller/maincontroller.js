// model import gareko create update delete garna ko lagi model bata
const db = require('../model')
const User = db.users


// index page rander garne
exports.getindex = (req, res, next) => {
    res.render('index')
}

// user ko details view garna ko lagi 
exports.getview = (req, res, next) => {
    User.findAll({})
        .then(userdatas => {
            console.log(userdatas)
            res.render('view', { userdatas })
        })

}

// updated garan ko lagi jun update garne ho tyko lagi id lerw text filed ma data import garna ko lagi rw update render garan ko lagi 
exports.getupdate = (req, res, next) => {
    let id = req.params.id

    User.findOne({ where: { id: id } })
        .then(data => {
            res.render('update', { data })
        }).catch(err => {
            console.log(err)
        })

}


// delete garna ko lagi id anushar
exports.getdelete = (req, res) => {
    let id = req.params.id
    User.destroy({ where: { id: id } })
        .then(() => {
            res.redirect('/view')
        }).catch(err => {
            console.log(err)
        })


}

// database ma index ko text file ko data save garna ko lagi
exports.postIndex = (req, res, next) => {
    let userdetails = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    console.log(userdetails)
    const user = User.create(userdetails)
    res.redirect('/')

}


/// ju update garne ko tyo uptaed garna ko lagi rw data database ma save garna ko lagi
exports.postupdateddata = (req, res, next) => {
    let id = req.params.id
    User.update(req.body, { where: { id: id } })
        .then(e => {
            res.redirect('/view')
        }).catch(err => {
            console.error(err)
        })
}