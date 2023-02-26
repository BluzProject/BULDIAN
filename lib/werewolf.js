const fs = require('fs')
const toMs = require("ms")
const moment = require("moment");
const { connect } = require('http2')
const data = JSON.parse(fs.readFileSync('./database/ww.json'))

// FUNCTION ADD DATA
const addData = (id, owner) => {
    ress = {
        id: id,
        owner: owner,
        status: false,
        iswin: null,
        cooldown: null,
        day: 0,
        time: "malem",
        player: [],
        dead: [],
        voting: false,
        seer: false,
        guradian: []
    }
    data.push(ress)
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const addPlayer = (sesi, id) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    ress = {
        id: id,
        idny: data[indexDB].player.length + 1,
        sesi: sesi,
        status: false,
        role: false,
        effect: [],
        vote: 0,
        isdead: false,
        isvote: false
    }
    data[indexDB].player.push(ress)
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

// FUNCTION CHECK DATA
const checkData = (id) => {
    const indexDB = data.findIndex(i => i.id === id)
    if (indexDB === -1) return false
    return true
}

const checkSkill = (sesi, id) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.id === id)
    if (indexPlayer === -1) return false
    return data[indexDB].player[indexPlayer].status
}


const checkPlayer = (sesi, id) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    const indexP = data[indexDB].player.findIndex(i => i.id === id)
    if (indexP === -1) return true
    return false
}

const checkPlayerinRole = (sesi, role) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return true
    db_rol = data[indexDB].player
    const indexP = db_rol.filter(arr => arr.role === role)
    return indexP
}

const checkAllCmd = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    const db_cmd = data[indexDB].filter(arr => arr.role != 'warga' && arr.isdead != true && arr.status === true)
    return db_cmd.length
}

const dataPlayer = (id) => {
    var list = [].concat.apply([], data.map(arr => arr.player));
    const indexPlayer = list.findIndex(i => i.id === id)
    if (indexPlayer === -1) return false
    return list[indexPlayer]
}

const dataSesi = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    return data[indexDB]
}

const shortPlayer = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    data[indexDB].player.sort((a, b) => a.idny - b.idny)
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const getPlayer = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    return data[indexDB].player
}

const totalPlayer = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    return data[indexDB].player.length
}

const checkallData = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    return data[indexDB]
}

const chatPCPlayer = (sender) => {
    for (let i = 0; i < data.length; i++) {
        for (let a = 0; a < data[i].player.length; a++) {
            if (data[i].player[a] === undefined) return false
            return true
        }
    }
}

const getWaktu = (id) => {
    const indexDB = data.findIndex(i => i.id === id)
    if (indexDB === -1) return false
    data[indexDB].cooldown = Date.now() + toMs(90 + "s")
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const getSesi = (id) => {
    const list = [].concat.apply([], data.map(arr => arr.player));
    const indexPlayer = list.findIndex(i => i.id === id)
    if (indexPlayer === -1) return false
    return list[indexPlayer].sesi
}

const getTrop = (from) => {
    const indexDB = data.findIndex(i => i.id === from)
    if (indexDB === -1) return false
    if (data[indexDB].iswin === false) {
        let datawin = []
        for (let i = 0; i < data[indexDB].player.length; i++) {
            return datawin.push(data[indexDB].player[i])
        }
    } else {
        return false
    }
}

const chatPCData = (sender) => {
    var listplayer = [].concat.apply([], data.map(arr => arr.player));
    if (listplayer.length < 1) return undefined
    var player = listplayer.findIndex(i => i.id === sender);
    if (listplayer[player] === undefined) return undefined
    var indexDB = data.findIndex(i => i.id === listplayer[player].sesi);
    if (indexDB === -1) return false
    return data[indexDB]
}

const chatPC = (sender) => {
    var listplayer = [].concat.apply([], data.map(arr => arr.player));
    var player = listplayer.find(i => i.id === sender);
    if (player === undefined) return undefined
    return player
}

const checkDeath = (sender) => {
    var listplayer = [].concat.apply([], data.map(arr => arr.player));
    var player = listplayer.find(i => i.id === sender);
    if (player === undefined) return false
    return player.isdead ? true : false
}

const changeStatusPlayer = (id) => {
    for (let i = 0; i < data.length; i++) {
        for (let a = 0; a < data[i].player.length; a++) {
            if (data[i].player[a].id === id) {
                data[i].player[a].status = true
                fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
            }
        }
    }
}

// FUNTION CHANGE 
const wargaTrue = (from) => {
    const indexDB = data.findIndex(i => i.id === from)
    if (indexDB === -1) return false
    for (let i = 0; i < data[indexDB].player.length; i++) {
        if (data[indexDB].player[i].role === "warga") {
            data[indexDB].player[i].status = true
            fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
        }
        if (data[indexDB].player[i].isdead === true) {
            data[indexDB].player[i].status = true
            data[indexDB].player[i].isvote = true
            fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
        }
    }
}

const allCommand = (from) => {
    const indexDB = data.findIndex(i => i.id === from)
    if (indexDB === -1) return false
    let p = 0
    for (let i = 0; i < data[indexDB].player.length; i++) {
        if (data[indexDB].player[i].status === true || data[indexDB].player[i].role === 'warga') {
            p += 1
        }
    }
    if (p === data[indexDB].player.length) {
        return true
    } else {
        return false
    }
}//knp ga pake 
const allCommandPC = (sender) => {
    var listplayer = [].concat.apply([], data.map(arr => arr.player));
    if (listplayer.length < 1) return false
    var player = listplayer.findIndex(i => i.id === sender);
    if (listplayer[player] === undefined) return false
    var indexDB = data.findIndex(i => i.id === listplayer[player].sesi);
    if (indexDB === -1) return false
    let p = 0
    for (let i = 0; i < data[indexDB].player.length; i++) {
        if (data[indexDB].player[i].status === true || data[indexDB].player[i].role === 'warga') {
            p += 1
        }
    }
    if (p === data[indexDB].player.length) {
        return true
    } else {
        return false
    }
}

const malemTrue = (from) => {
    const indexDB = data.findIndex(i => i.id === from)
    if (indexDB === -1) return false
    data[indexDB].malam = true
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const allVote = (from) => {
    const indexDB = data.findIndex(i => i.id === from)
    if (indexDB === -1) return false
    let p = 0
    for (let i = 0; i < data[indexDB].player.length; i++) {
        if (data[indexDB].player[i].isvote === true) {
            p += 1
        }
    }
    var p2 = data[indexDB].player.filter(i => i.isvote === true).length
    if (p === data[indexDB].player.length) {
        return true
    } else if (p2 === data[indexDB].player.length) {
        return true
    } else {
        return false
    }
}
const allVotePC = (sender) => {
    var listplayer = [].concat.apply([], data.map(arr => arr.player));
    if (listplayer.length < 1) return false
    var player = listplayer.findIndex(i => i.id === sender);
    if (listplayer[player] === undefined) return false
    var indexDB = data.findIndex(i => i.id === listplayer[player].sesi);
    if (indexDB === -1) return false
    let p = 0
    for (let i = 0; i < data[indexDB].player.length; i++) {
        if (data[indexDB].player[i].isvote === true) {
            p += 1
        }
    }
    var p2 = data[indexDB].player.filter(i => i.isvote === true).length
    if (p === data[indexDB].player.length) {
        return true
    } else if (p2 === data[indexDB].player.length) {
        return true
    } else {
        return false
    }
}
// FUNTION CLEAR ALL
const clearAllVote = (from) => {
    const indexDB = data.findIndex(i => i.id === from)
    if (indexDB === -1) return false
    for (let i = 0; i < data[indexDB].player.length; i++) {
        data[indexDB].player[i].vote = 0
        data[indexDB].player[i].isvote = false
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }
}
const clearAllVotePC = (sender) => {
    var listplayer = [].concat.apply([], data.map(arr => arr.player));
    if (listplayer.length < 1) return false
    var player = listplayer.findIndex(i => i.id === sender);
    if (listplayer[player] === undefined) return false
    var indexDB = data.findIndex(i => i.id === listplayer[player].sesi);
    if (indexDB === -1) return false
    for (let i = 0; i < data[indexDB].player.length; i++) {
        data[indexDB].player[i].vote = 0
        data[indexDB].player[i].isvote = false
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }
}
const clearAllSTATUS = (from) => {
    const indexDB = data.findIndex(i => i.id === from)
    if (indexDB === -1) return false
    for (let i = 0; i < data[indexDB].player.length; i++) {
        data[indexDB].player[i].status = false
        data[indexDB].player[i].effect = []
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }
}
const clearAllPCSTATUS = (sender) => {
    const listplayer = [].concat.apply([], data.map(arr => arr.player));
    if (listplayer.length < 1) return false
    const player = listplayer.findIndex(i => i.id === sender);
    if (listplayer[player] === undefined) return false
    const indexDB = data.findIndex(i => i.id === listplayer[player].sesi);
    if (indexDB === -1) return false
    for (let i = 0; i < data[indexDB].player.length; i++) {
        data[indexDB].player[i].status = false // ini dah d
        data[indexDB].player[i].effect = []// nap
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }
}
const clearAll = (from) => {
    const indexDB = data.findIndex(i => i.id === from)
    if (indexDB === -1) return false
    data[indexDB].dead = []
    data[indexDB].seer = false
    data[indexDB].guradian = []
    data[indexDB].voting = false
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}
const clearAllPC = (sender) => {
    const listplayer = [].concat.apply([], data.map(arr => arr.player));
    if (listplayer.length < 1) return false
    const player = listplayer.findIndex(i => i.id === sender);
    if (listplayer[player] === undefined) return false
    const indexDB = data.findIndex(i => i.id === listplayer[player].sesi);
    if (indexDB === -1) return false
    data[indexDB].dead = []
    data[indexDB].seer = false
    data[indexDB].guradian = []
    data[indexDB].voting = false
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}
// FUNCTION SKILL
const UseSkill = (sesi, id) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.id === id)
    if (indexPlayer === -1) return false
    data[indexDB].player[indexPlayer].status = true
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const killPlayer = (sesi, id) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.id === id)
    data[indexDB].player[indexPlayer].isdead = true
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const defGuard = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    let list = []
    for (let j = 0; j < data[indexDB].dead.length; j++) {
        if (data[indexDB].guardian.includes(data[indexDB].dead[j])) {
            list.push(data[indexDB].dead[j])
        }
    }
    if (list.length === 0) {
        return false
    } else if (list.length > 0) {
        return { list: list }
    }
}

const getPlayerById = (sender, id) => {
    var sesi = getSesi(sender)
    if(!sesi) return false
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.idny === id)
    if (indexPlayer === -1) return false
    return { index: indexPlayer, sesi: data[indexDB].player[indexPlayer].sesi, db: data[indexDB].player[indexPlayer] }
}

const killww = (from, id) => {
    const indexDB = data.findIndex(i => i.id === from)
    if (indexDB === -1) return false
    for (let j = 0; j < data[indexDB].dead.length; j++) {
        idd = getPlayerById(data[indexDB].player[0].id, data[indexDB].dead[j])
        if (!idd) return false
        if (data[indexDB].player[idd.index].effect.includes("guardian")) return
        data[indexDB].player[idd.index].isdead = true
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }
}

const killwerewolf = (sender, id) => {
    var sesi = getSesi(sender)
    let i = data.findIndex(i => i.id === sesi)
    if (i === -1) return false    
    if (!sesi) return false
    var idd = data[i].player.findIndex(x => x.idny === parseInt(id))
    if(idd === -1) return false
    if (data[i].player[idd].effect.includes("guardian")) {
        data[i].guradian.push(parseInt(id))
        data[i].dead.push(parseInt(id))
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    } else if (!data[i].player[idd].effect.includes("guardian")) {
        data[i].dead.push(parseInt(id))
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }
}

const checkPlayerById = (sesi, id) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    return data[indexDB].player[id - 1]
}

const dataPlayerById = (sender, id) => {
    var sesi = getSesi(sender)
    if(!sesi) return false
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.idny === id)
    if (indexPlayer === -1) return false
    return data[indexDB].player[indexPlayer]
}

const dataPlayerById2 = (from, id) => {
    const indexDB = data.findIndex(i => i.id === from)
    if (indexDB === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.idny === id)
    if (indexPlayer === -1) return false
    return data[indexDB].player[indexPlayer]
}

const dreamySeer = (sender, id) => {
    const indexDB = data.findIndex(i => i.id === getSesi(sender))
    if (indexDB === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.idny === id)
    if (indexPlayer === -1) return false
    if (data[indexDB].player[parseInt(indexPlayer)].role === "werewolf") {
        data[indexDB].seer = true
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }
    return data[indexDB].player[parseInt(indexPlayer)].role
}


const sorcerer = (sender, id) => {
    const indexDB = data.findIndex(i => i.id === getSesi(sender))
    if (indexDB === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.idny === id)
    if (indexPlayer === -1) return false
    return data[i].player[parseInt(indexPlayer)].role
}

const protectGuardian = (sender, id) => {
    const indexDB = data.findIndex(i => i.id === getSesi(sender))
    if (indexDB === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.idny === parseInt(id))
    if (indexPlayer === -1) return false
    data[indexDB].player[indexPlayer].effect.push("guardian")
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}




// FUNCTION GAME 
const StartingGame = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    data[indexDB].status = true
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const ExitGame = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    data.splice(indexDB, 1)
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const playerExit = (sesi, id) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.id === id)
    data[indexDB].player.splice(indexPlayer, 1)
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const changeDay = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    if (data[indexDB].time === "pagi") {
        data[indexDB].time = "voting"
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));    
    } else if (data[indexDB].time === "malem") {
        data[indexDB].time = "pagi"
        data[indexDB].day += 1
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }else if (data[indexDB].time === 'voting'){
        data[indexDB].time = "malem"
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }
}
const dayVoting = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    if (data[indexDB].time === "malem") {
        data[indexDB].time = "voting"
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    } else if (data[indexDB].time === "pagi") {
        data[indexDB].time = "voting"
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }
}
const dayPengumuman = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    data[indexDB].time = "pengumuman"
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}


const getWinner = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    var ww = 0
    var orang_baek = 0
    for (let i = 0; i < data[indexDB].player.length; i++) {
        if (data[indexDB].player[i].isdead === false) {
            if (data[indexDB].player[i].role === "werewolf" || data[indexDB].player[i].role === "sorcerer") {
                ww += 1
            } else if (data[indexDB].player[i].role === "warga" || data[indexDB].player[i].role === "guardian" || data[indexDB].player[i].role === "seer") {
                orang_baek += 1
            }
        }
    }   
    if(data[indexDB].voting){
        console.log(1111)
        var b = voteResult(sesi)
        console.log(b)        
        if(b != 0 && b != 1){
            console.log('a')
            if(b.role === "werewolf" || b.role === "sorcerer"){
                console.log('b')        
                ww -= 1
            }else if(b.role === "warga" || b.role === 'seer' || b.role === 'guardian'){
                orang_baek -= 1
                console.log('c')
            }
        }        
    }
    if (ww === 0) {
        data[indexDB].iswin = true
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
        return { voting: data[indexDB].voting, status: true }
    } else if (ww === orang_baek) {
        data[indexDB].iswin = false
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
        return { voting: data[indexDB].voting, status: false }
    } else if(orang_baek === 0){
        data[indexDB].iswin = false
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
        return { voting: data[indexDB].voting, status: false }
    }else {
        return { voting: data[indexDB].voting, status: null }
    }
}

// FUNTION VOTE
const vote = (sesi, id, sender) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    const idGet = data[indexDB].player.findIndex(i => i.id === sender)
    if (idGet === -1) return false
    const indexPlayer = data[indexDB].player.findIndex(i => i.idny === id)
    if (indexPlayer === -1) return false
    if (idGet !== -1) {
        data[indexDB].player[idGet].isvote = true
        fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
    }
    data[indexDB].player[indexPlayer].vote += 1
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const checkVote = (sesi, id) => {
    const Index = data.findIndex(i => i.id === sesi)
    const indexPlayer = data[Index].player.findIndex(i => i.id === id)
    return data[Index].player[indexPlayer].isvote
}

const voteResult = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    data[indexDB].player.sort((a, b) => (a.vote < b.vote) ? 1 : -1)
    if (data[indexDB].player[0].vote === 0) return 0
    if (data[indexDB].player[0].vote === data[indexDB].player[1].vote) return 1
    return data[indexDB].player[0]
}
const voteKill = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    data[indexDB].player.sort((a, b) => (a.vote < b.vote) ? 1 : -1)
    if (data[indexDB].player[0].vote === 0) return 0
    if (data[indexDB].player[0].vote === data[indexDB].player[1].vote) return 1
    data[indexDB].player[0].isdead = true
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}
const resetVote = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    for (let i = 0; i < data[indexDB].player.length; i++) {
        data[indexDB].player[i].vote = 0
        fs.writeFileSync("./database/w w.json", JSON.stringify(data, null, 2));
    }
}

const voteDone = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    data[indexDB].voting = false
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

const voteStart = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    data[indexDB].voting = true
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2));
}

//ROLE 

const changeRole = (sesi, id, role) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    var index = data[indexDB].player.findIndex(i => i.id === id)
    if (index === -1) return false
    data[indexDB].player[index].role = role
    fs.writeFileSync("./database/ww.json", JSON.stringify(data, null, 2))
}

const rolegenerator = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    if (data[indexDB].player.length == 4) {
        var warga = 1
        var werewolf = 1
        var seer = 1
        var guardian = 1
        var sorcerer = 0
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    }else if (data[indexDB].player.length == 5) {
        var warga = 3
        var werewolf = 1
        var seer = 1
        var guardian = 0
        var sorcerer = 0
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    } else if (data[indexDB].player.length == 6) {
        var warga = 2
        var werewolf = 2
        var seer = 1
        var guardian = 1
        var sorcerer = 0
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    } else if (data[indexDB].player.length == 7) {
        var warga = 3
        var werewolf = 2
        var seer = 1
        var guardian = 1
        var sorcerer = 0
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    } else if (data[indexDB].player.length == 8) {
        var warga = 4
        var werewolf = 2
        var seer = 1
        var guardian = 1
        var sorcerer = 0
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    } else if (data[indexDB].player.length == 9) {
        var warga = 4
        var werewolf = 2
        var seer = 1
        var guardian = 1
        var sorcerer = 1
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    } else if (data[indexDB].player.length == 10) {
        var warga = 5
        var werewolf = 2
        var seer = 1
        var guardian = 1
        var sorcerer = 1
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    } else if (data[indexDB].player.length == 11) {
        var warga = 5
        var werewolf = 2
        var seer = 1
        var guardian = 2
        var sorcerer = 1
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    } else if (data[indexDB].player.length == 12) {
        var warga = 6
        var werewolf = 2
        var seer = 1
        var guardian = 2
        var sorcerer = 1
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    } else if (data[indexDB].player.length == 13) {
        var warga = 7
        var werewolf = 2
        var seer = 1
        var guardian = 2
        var sorcerer = 1
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    } else if (data[indexDB].player.length == 14) {
        var warga = 7
        var werewolf = 2
        var seer = 2
        var guardian = 2
        var sorcerer = 1
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    } else if (data[indexDB].player.length == 15) {
        var warga = 6
        var werewolf = 3
        var seer = 2
        var guardian = 3
        var sorcerer = 1
        return { werewolf: werewolf, seer: seer, guardian: guardian, warga: warga, sorcere: sorcerer }
    }
}

const shuffle  = (array) => {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) { 
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

const roleGenerator = (sesi) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    var fck = rolegenerator(sesi)
    for (var i = 0; i < fck.werewolf; i++) {
        var lista = JSON.parse(fs.readFileSync("./database/ww.json"))[indexDB].player.filter(x => x.role === false)
        var list = shuffle(lista)
        if (list.length === 0) return false
        var random = Math.floor(Math.random() * list.length)
        changeRole(sesi, list[random].id, 'werewolf') // ada yang salah kah? kok ga ke ganti ya
    }
    for (var i = 0; i < fck.seer; i++) {
        var lista = JSON.parse(fs.readFileSync("./database/ww.json"))[indexDB].player.filter(x => x.role === false)
        var list = shuffle(lista)
        if (list.length === 0) return false
        var random = Math.floor(Math.random() * list.length)
        changeRole(sesi, list[random].id, 'seer')
    }
    for (var i = 0; i < fck.guardian; i++) {
        var lista = JSON.parse(fs.readFileSync("./database/ww.json"))[indexDB].player.filter(x => x.role === false)
        var list = shuffle(lista)
        if (list.length === 0) return false
        var random = Math.floor(Math.random() * list.length)
        changeRole(sesi, list[random].id, 'guardian')
    }
    for (var i = 0; i < fck.warga; i++) {
        var lista = JSON.parse(fs.readFileSync("./database/ww.json"))[indexDB].player.filter(x => x.role === false)
        var list = shuffle(lista)
        if (list.length === 0) return false
        var random = Math.floor(Math.random() * list.length)
        changeRole(sesi, list[random].id, 'warga')
    }
    for (var i = 0; i < fck.sorcere; i++) {
        var lista = JSON.parse(fs.readFileSync("./database/ww.json"))[indexDB].player.filter(x => x.role === false)
        var list = shuffle(lista)
        if (list.length === 0) return false
        var random = Math.floor(Math.random() * list.length)
        changeRole(sesi, list[random].id, 'sorcerer')
    }
    shortPlayer(sesi)
}


// FUNCTION OWNER
const isOwnerww = (sesi, id) => {
    const indexDB = data.findIndex(i => i.id === sesi)
    if (indexDB === -1) return false
    if (data[indexDB].owner === id) {
        return true
    } else {
        return false
    }
}

const getDB = () => {
    return data
}

const emoji_role = (role) => {
    if(role === 'warga'){
        return '👱‍♂️'
    }else if(role === 'seer'){
        return '👳'
    }else if(role === 'guardian'){
        return '👼'
    }else if(role === 'sorcerer'){
        return '🔮'
    }else if(role === 'werewolf'){
        return '🐺'
    }else{
        return ''
    }
}

const playerHidup = (data) => {
    const hasil = data.player.filter(x => x.isdead === false)
    return hasil.length
}

const playerMati = (data) => {
    const hasil = data.player.filter(x => x.isdead === true)
    return hasil.length
}

module.exports = {
    werewolf: {
        addData,
        checkData,
        addPlayer,
        UseSkill,
        checkSkill,
        checkPlayerinRole,
        checkPlayer,
        StartingGame,
        ExitGame,
        vote,
        checkVote,
        voteResult,
        resetVote,
        voteDone,
        resetVote,
        playerExit,
        killPlayer,
        changeDay,
        getWinner,
        isOwnerww,
        dataPlayer,
        getPlayer,
        totalPlayer,
        checkallData,
        chatPCPlayer,
        chatPCData,
        chatPC,
        killww,
        changeStatusPlayer,
        killwerewolf,
        dreamySeer,
        sorcerer,
        protectGuardian,
        getWaktu,
        getSesi,
        getTrop,
        wargaTrue,
        roleGenerator,
        changeRole,
        allCommand,
        allCommandPC,
        clearAll,
        dayPengumuman,
        clearAllPC,
        allVote,
        allVotePC,
        clearAllVote,
        clearAllVotePC,
        clearAllSTATUS,
        clearAllPCSTATUS,
        voteKill,
        checkDeath,
        checkPlayerById,
        dayVoting,
        defGuard,
        shortPlayer,
        dataPlayerById,
        dataPlayerById2,
        dataSesi,
        getPlayerById,
        getDB,
        emoji_role,
        playerHidup,
        playerMati,
        voteStart        
    }
}