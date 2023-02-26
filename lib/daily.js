const fs = require("fs")

const addData = (db, sender) => {
    const index = db.findIndex(x => x.id === sender)
    if(index === -1) return false
    var obj = {
        id: sender,
        daily: false,
        time: null
    }
    db.push(obj)
    fs.writeFileSync('./database/user/daily.json', JSON.stringify(db, null, 2))
}

const checkData = (db, sender) => {
    const index = db.findIndex(x => x.id === sender)
    if(index === -1) return false
    return db[index]
}

const removeData = (db, sender) => {
    const index = db.findIndex(x => x.id === sender)
    if(index === -1) return false
    db.splice(index, db)
    fs.writeFileSync('./databse/user/daily.json', JSON.stringify(db, null, 2))
}

const restart = (db) => {
    db = []
    fs.writeFileSync('./databse/user/daily.json', JSON.stringify(db, null, 2))
}

module.exports = {
    daily: {
        addData,
        checkData,
        removeData,
        restart
    }
}