const moment = require('moment-timezone')
const { getTime, runtime } = require('../lib/myfunc')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
// Menu
exports.help = ( botname, pushname, ucapanWaktu, prefix) => {
	return`Haii Kak ${pushname} ๐ฆ
	โใ ${botname} ใโ

_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
ใ๐๐ข๐ง ๐๐ก๐๐ขใ

โค Nama : ${pushname}
โค Nomor : ${m.sender.split("@")[0]}
โค Prefix : ( ${prefix} )
โค Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
โค Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
โค Total Pengguna : 
โค Runtime : ${runtime(process.uptime())}

ใ ๐ ๐๐ก๐จ๐๐จ ๐๐๐จ๐ ๐๐๐๐ ใ

Saya , Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaiki๐`
}

// List
exports.list = () => {
	return`Silahkan dipilih list menu dibawah ini๐ฆ`
}

// All Menu
exports.allmenu = (botname, ucapanWaktu, pushname, prefix, isPremium) => {
	return `
โใ ${botname} ใโ

_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

   เคโโโโเค   โนโฑโซโฐโน  เคโโโโเค
    USER INFO 
    โค ๐ค ๐จ๐๐ฒ๐ฟ: _${pushname}_
    โค โ๏ธ ๐ก๐ผ๐บ๐ผ๐ฟ: _${m.sender.split("@")[0]}_
    โค ๐ธ ๐ฆ๐ฎ๐น๐ฑ๐ผ: _Rp_
    โค ๐ ๐ฃ๐ฟ๐ฒ๐ณ๐ถ๐: ( _${prefix}_ )
    โค ๐ฅ ๐ง๐ผ๐๐ฎ๐น ๐ฃ๐ฒ๐ป๐ด๐ด๐๐ป๐ฎ: __ 
    โค ๐ ๐ง๐ฎ๐ป๐ด๐ด๐ฎ๐น ๐ฆ๐ฒ๐ฟ๐๐ฒ๐ฟ: _${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
    โค โ ๐ช๐ฎ๐ธ๐๐ ๐ฆ๐ฒ๐ฟ๐๐ฒ๐ฟ: _${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_
    โค โฒ๏ธ ๐๐ผ๐ ๐ฎ๐ฐ๐๐ถ๐๐ฒ ๐ฑ๐๐ฟ๐ถ๐ป๐ด:
      _${runtime(process.uptime())}_ อออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออ
    ${readmore}

โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ ANONYMOUS MENU ใ
โ
โ โค ${prefix}start
โ โค ${prefix}next
โ โค ${prefix}keluar
โ โค ${prefix}sendkontak
โ โค ${prefix}menfess dari|628xxx|Pesan
โ
โ โโโโชใ CONVERT MENU ใ
โ
โ โค ${prefix}tomp3 [reply video]
โ โค ${prefix}tomp4 [reply stickergif]
โ โค ${prefix}toimg [reply sticker]
โ โค ${prefix}toaud [reply voice note]
โ โค ${prefix}tovn [reply audio]
โ โค ${prefix}togif [reply media]
โ โค ${prefix}tourl [reply media]
โ โค ${prefix}removebg [reply gambar]
โ
โ โโโโชใ DOWNLOAD MENU ใ
โ
โ โค ${prefix}play [judul musik]
โ โค ${prefix}ytmp3 [link YouTube]
โ โค ${prefix}ytmp4 [link YouTube]
โ โค ${prefix}yts [music title]
โ โค ${prefix}getmusic [1]
โ โค ${prefix}getvideo [2]
โ โค ${prefix}tt [link tiktok]
โ โค ${prefix}tiktok [link tiktok]
โ โค ${prefix}ttnowm [link tiktok]
โ โค ${prefix}ttmp3 [link tiktok]
โ โค [link tiktok]
โ
โ โโโโชใ GAME MENU ใ
โ
โ โค ${prefix}family100
โ โค ${prefix}math
โ โค ${prefix}suit [tag]
โ โค ${prefix}ttc
โ โค ${prefix}tebak gambar
โ โค ${prefix}tebak kalimat
โ โค ${prefix}tebak kata
โ โค ${prefix}tebak lagu
โ โค ${prefix}tebak lirik
โ โค ${prefix}tebak lontong
โ
โ โโโโชใ GRUP MENU ใ
โ
โ โค ${prefix}add 6289696090800
โ โค ${prefix}kick 6289696090800
โ โค ${prefix}afk [tidur]
โ โค ${prefix}antilink [on/off]
โ โค ${prefix}demote [tag]
โ โค ${prefix}promote [tag]
โ โค ${prefix}editinfo [open/close]
โ โค ${prefix}grup [open/close]
โ โค ${prefix}hidetag
โ โค ${prefix}tagall
โ โค ${prefix}totag [reply msg]
โ โค ${prefix}setname [text]
โ โค ${prefix}setdesc [text]
โ โค ${prefix}setppgc [reply img]
โ
โ โโโโชใ RANDOM MENU ใ
โ
โ โค ${prefix}addmsg [reply pesan]
โ โค ${prefix}delmsg [reply pesan]
โ โค ${prefix}getmsg
โ โค ${prefix}listmsg
โ โค ${prefix}ppcouple
โ โค ${prefix}kopi
โ โค ${prefix}
โ โค ${prefix}
โ โค ${prefix}quotesanime
โ
โ โโโโชใ SEARCH MENU ใ
โ
โ โค ${prefix}google [gunung]
โ โค ${prefix}googleimage [kucing]
โ โค ${prefix}pinterest [rumah]
โ โค ${prefix}ssweb [link]
โ โค ${prefix}sshp [link]
โ โค ${prefix}sstablet [link]
โ โค ${prefix}styletext [Hallo]
โ โค ${prefix}wikimedia [pohon]
โ โค ${prefix}yts [pesawat kertas]
โ
โ โโโโชใ STICKER MENU ใ
โ
โ โค ${prefix}autosticker [on/off]
โ โค ${prefix}autostickerpc [on/off]
โ โค ${prefix}dogesticker
โ โค ${prefix}emojimix ๐+๐
โ โค ${prefix}gura
โ โค ${prefix}love
โ โค ${prefix}patrick
โ โค ${prefix}smeme [teks]
โ โค ${prefix}sticker [reply gambar]
โ โค ${prefix}stickerwm [reply gambar]
โ โค ${prefix}snobg [reply gambar]
โ โค ${prefix}sgif [reply video]
โ
โ โโโโชใ STICKER WIBU ใ
โ
โ โค ${prefix}awoo
โ โค ${prefix}beet
โ โค ${prefix}blush
โ โค ${prefix}bonk
โ โค ${prefix}bully
โ โค ${prefix}cringe
โ โค ${prefix}cry
โ โค ${prefix}cuddle
โ โค ${prefix}dance
โ โค ${prefix}glomp
โ โค ${prefix}handhold
โ โค ${prefix}happy
โ โค ${prefix}highfive
โ โค ${prefix}hug
โ โค ${prefix}kill
โ โค ${prefix}megumin
โ โค ${prefix}nom
โ โค ${prefix}pat
โ โค ${prefix}poke
โ โค ${prefix}slap
โ โค ${prefix}shinobu
โ โค ${prefix}smile
โ โค ${prefix}smug
โ โค ${prefix}wave
โ โค ${prefix}wink
โ โค ${prefix}yeet
โ
โ โโโโชใ OTHER MENU ใ
โ
โ โค ${prefix}report min ignya error
โ
โ โโโโชใ OWNER MENU ใ
โ
โ โค ${prefix}antiviewonce on/off
โ โค ${prefix}block
โ โค ${prefix}unblock
โ โค ${prefix}pesanbug 628|Nanti Kita Fix
โ โค ${prefix}setcmd [reply pesan] allmenu
โ โค ${prefix}delcmd [reply pesan]
โ โค ${prefix}listcmd
โ โค ${prefix}lockcmd
โ โค ${prefix}setexif BluzBot|WhatsApp Sticker
โ โค ${prefix}setppbot [image]
โ โค ${prefix}speedtest
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`
}

exports.convertmenu = (prefix) => {return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ CONVERT MENU ใ
โ
โ โค ${prefix}autosticker [on/off]
โ โค ${prefix}autostickerpc [on/off]
โ โค ${prefix}emojimix ๐+๐
โ โค ${prefix}sticker [reply gambar]
โ โค ${prefix}stickerwm [reply gambar]
โ โค ${prefix}snobg [reply gambar]
โ โค ${prefix}sgif [reply video]
โ โค ${prefix}tomp3 [reply video]
โ โค ${prefix}tomp4 [reply stickergif]
โ โค ${prefix}toimg [reply sticker]
โ โค ${prefix}toaud [reply voice note]
โ โค ${prefix}tovn [reply audio]
โ โค ${prefix}togif [reply media]
โ โค ${prefix}tourl [reply media]
โ โค ${prefix}removebg [reply gambar]
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`}

exports.downloadmenu = (prefix) => {return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ DOWNLOAD MENU ใ
โ
โ โค ${prefix}play [judul musik]
โ โค ${prefix}ytmp3 [link YouTube]
โ โค ${prefix}ytmp4 [link YouTube]
โ โค ${prefix}yts [music title]
โ โค ${prefix}getmusic [1]
โ โค ${prefix}getvideo [2]
โ โค ${prefix}tt [link tiktok]
โ โค ${prefix}tiktok [link tiktok]
โ โค ${prefix}ttnowm [link tiktok]
โ โค ${prefix}tiktok audio [link tiktok]
โ โค [link tiktok]
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`}

exports.gamemenu = (prefix) => {return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ GAME MENU ใ
โ
โ โค ${prefix}family100
โ โค ${prefix}math
โ โค ${prefix}suit [tag]
โ โค ${prefix}ttc
โ โค ${prefix}tebak gambar
โ โค ${prefix}tebak kalimat
โ โค ${prefix}tebak kata
โ โค ${prefix}tebak lagu
โ โค ${prefix}tebak lirik
โ โค ${prefix}tebak lontong
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`}

exports.grupmenu = (prefix) => {return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ GRUP MENU ใ
โ
โ โค ${prefix}add 6289696090800
โ โค ${prefix}kick 6289696090800
โ โค ${prefix}afk [tidur]
โ โค ${prefix}antilink [on/off]
โ โค ${prefix}demote [tag]
โ โค ${prefix}promote [tag]
โ โค ${prefix}editinfo [open/close]
โ โค ${prefix}grup [open/close]
โ โค ${prefix}hidetag
โ โค ${prefix}tagall
โ โค ${prefix}totag [reply msg]
โ โค ${prefix}setname [text]
โ โค ${prefix}setdesc [text]
โ โค ${prefix}setppgc [reply img]
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`}

exports.randommenu = (prefix) => {return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ RANDOM MENU ใ
โ
โ โค ${prefix}addmsg [reply pesan]
โ โค ${prefix}delmsh [reply pesan]
โ โค ${prefix}getmsg
โ โค ${prefix}listmsg
โ โค ${prefix}ppcouple
โ โค ${prefix}kopi
โ โค ${prefix}
โ โค ${prefix}
โ โค ${prefix}quotesanime
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`}

exports.searchmenu = (prefix) => {return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ SEARCH MENU ใ
โ
โ โค ${prefix}google [gunung]
โ โค ${prefix}googleimage [kucing]
โ โค ${prefix}pinterest [rumah]
โ โค ${prefix}ssweb [link]
โ โค ${prefix}sshp [link]
โ โค ${prefix}sstablet [link]
โ โค ${prefix}styletext [Hallo]
โ โค ${prefix}wikimedia [pohon]
โ โค ${prefix}yts [pesawat kertas]
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`}

exports.stickermenu = (prefix) => {return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ STICKER MENU ใ
โ
โ โค ${prefix}autosticker [on/off]
โ โค ${prefix}autostickerpc [on/off]
โ โค ${prefix}dogesticker
โ โค ${prefix}emojimix ๐+๐
โ โค ${prefix}gura
โ โค ${prefix}lovestick
โ โค ${prefix}patrick
โ โค ${prefix}smeme [teks]
โ โค ${prefix}sticker [reply gambar]
โ โค ${prefix}stickerwm [reply gambar]
โ โค ${prefix}snobg [reply gambar]
โ โค ${prefix}sgif [reply video]
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`} 

exports.stickerwibu = (prefix) => {return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ STICKER WIBU ใ
โ
โ โค ${prefix}awoo
โ โค ${prefix}beet
โ โค ${prefix}blush
โ โค ${prefix}bonk
โ โค ${prefix}bully
โ โค ${prefix}cringe
โ โค ${prefix}cry
โ โค ${prefix}cuddle
โ โค ${prefix}dance
โ โค ${prefix}glomp
โ โค ${prefix}handhold
โ โค ${prefix}happy
โ โค ${prefix}highfive
โ โค ${prefix}hug
โ โค ${prefix}kill
โ โค ${prefix}megumin
โ โค ${prefix}nom
โ โค ${prefix}pat
โ โค ${prefix}poke
โ โค ${prefix}slap
โ โค ${prefix}shinobu
โ โค ${prefix}smile
โ โค ${prefix}smug
โ โค ${prefix}wave
โ โค ${prefix}wink
โ โค ${prefix}yeet
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`}

exports.ownermenu = (prefix) => {
	return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ OWNER MENU ใ
โ
โ โค ${prefix}antiviewonce on/off
โ โค ${prefix}block
โ โค ${prefix}unblock
โ โค ${prefix}pesanbug 628|Nanti Kita Fix
โ โค ${prefix}setcmd [reply pesan] allmenu
โ โค ${prefix}delcmd [reply pesan]
โ โค ${prefix}listcmd
โ โค ${prefix}lockcmd
โ โค ${prefix}setexif BluzBot|WhatsApp Sticker
โ โค ${prefix}setppbot [image]
โ โค ${prefix}speedtest
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`
}

exports.anonymousmenu = (prefix) => {
	return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ ANONYMOUS MENU ใ
โ
โ โค ${prefix}start
โ โค ${prefix}next
โ โค ${prefix}keluar
โ โค ${prefix}sendkontak
โ โค ${prefix}menfess dari|628xxx|Pesan
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`
}

//RULES
exports.rules = (pushname) => {return`
เคโโเค โนโฑ ๐ก๐ค๐๐๐ข  & ๐๐๐  โฐโน เคโโเค
(ใฃโโกโ)ใฃ
โฅ Selamat Datang Kak โฅ
Hayy kakak ${pushname} ๐ฅฐ

โช Jangan spam bot ๐
๐ค *WARN/SOFT BLOCK*

โช Jangan CALL/VC bot โ
๐ค *SOFT BLOCK* ๐ซ


๐๐ปโโ๏ธ Min Prefix Pakai Apa
๐คต๐ป Multi Prefix #!.

๐๐ปโโ๏ธ Min kok botnya slow respon
๐คต๐ป Mungkin disebabkan oleh sinyal
๐คต๐ป User sedang download Big Size

๐๐ปโโ๏ธ Min bot bisa join ke grup ?
๐คต๐ป Bisa cuman ada tambahan biaya
๐คต๐ป ketik *sewa* untuk melihat listnya

๐๐ปโโ๏ธ Min misalnya saya melanggar rules Apakah saya mendapatkan kesempatan?
๐คต๐ป Bisa minta maaf kepada ownernya

๐คต๐ป Apakah sudah paham rulesnya?
๐คต๐ป Ketik *menu* untuk memulainya
`}

// Donasi
exports.donasi = (pushname, owner) => {
	return`
โใ *DONATE* ใโ
(ใฃโโกโ)ใฃ โฅ Selamat Datang kak โฅ
Hai Kak ${pushname} ๐ฅฐ
Kalian bisa mendukung saya agar bot ini bisa Update dengan cara berdonasi
Berapapun donasi kalian akan sangat berarti ๐ฅน

Terima Kasih
ใ *https://saweria.co/ceria* ใ

*_Contact person Administrasi_* :
wa.me/${owner}
`}

exports.sewa = (pushname) => {return`
เคโโโโเค   โนโฑ ๐๐๐๐ โฐโน  เคโโโโเค

(ใฃโโกโ)ใฃ
โฅ Selamat Datang Kak โฅ
Hayy kakak ${pushname} ๐ฅฐ
ใ ๐๐ผ๐๐ธ | โ๐โ ๐น๐๐ ใ
    ๐๐๐๐๐๐๐ ๐ฝ๐๐
โ Rp.5000 = 7 Hari
โ Rp.8000 = 14 Hari
โ Rp.13000 = 22 Hari
โ Rp.16000 = 30 Hari

    ๐๐๐๐ผ ๐ฝ๐๐
โ Rp.5000 = 7 Hari + Premium 3 Hari
โ Rp.10000 = 14 Hari + Premium 6 Hari
โ Rp.15000 = 24 Hari + Premium 9 Hari
โ Rp.20000 = 30 Hari + Premium 15 Hari

    ๐๐ผ๐ฟ๐ ๐ฝ๐๐
โ Rp.10000 = 7 Hari - Tidak Owner
โ Rp.15000 = 14 Hari - Tidak Owner
โ Rp.20000 = 24 Hari + OwnerBot
โ Rp.30000 = 30 Hari + OwnerBot
    

๐๐ฒ๐ท๐ช๐ฝ? ๐๐ช๐ท๐ฐ๐ผ๐พ๐ท๐ฐ ๐ฌ๐ฑ๐ช๐ฝ ๐ช๐ณ๐ช ๐๐ช ๐ฌ๐พ๐

๐ช๐๐๐๐๐๐ ๐๐๐๐๐๐ ๐จ๐๐๐๐๐๐๐๐๐๐๐
wa.me/6289696090800
A/N: Bawng Udin
`}

exports.kelebihan = (pushname) => {return`
เคโโโเค  โนโฑ ๐๐๐๐๐๐๐ฃ โฐโน  เคโโโเค

(ใฃโโกโ)ใฃ
โฅ Selamat Datang Kak โฅ
Hayy kakak ${pushname} ๐ฅฐ
ใ แดแดสแดสษชสแดษด ๐๐ผ๐๐ธ | โ๐โ ๐น๐๐ ใ
        ๐๐๐๐๐๐๐ ๐ฝ๐๐
โ ๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐ โ
โ Limit di berikan secara unlimited
โ Mendapatkan akses fitur premium

        ๐๐๐๐ผ ๐ฝ๐๐
โ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐ โ
โ Limit di berikan secara unlimited
โ Bisa memasukan bot ke grup kamu
โ Membuka fitur premium ( Terbatas )

        ๐๐ผ๐ฟ๐ ๐ฝ๐๐
โ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐ โ
โ No WhatsApp Kalian di jadikan bot
โ Limit di berikan secara unlimited
โ Bisa invite bot ke grup unlimited
โ Jadi OwnerBot ( 24 Hari/30 Hari )
โ Membuka fitur OwnerBot


๐๐ฒ๐ท๐ช๐ฝ? ๐๐ช๐ท๐ฐ๐ผ๐พ๐ท๐ฐ ๐ฌ๐ฑ๐ช๐ฝ ๐ช๐ณ๐ช ๐๐ช ๐ฌ๐พ๐

๐ช๐๐๐๐๐๐ ๐๐๐๐๐๐ ๐จ๐๐๐๐๐๐๐๐๐๐๐
wa.me/6289696090800
A/N: Bawng Udin
`}

exports.tqtq = () => {return`
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
โ โโโโชใ CONTRIBUTOR'S ใ
โ
โ โช My God (Allah)
โ โช UserBot (support)
โ โช Erwan (creator)
โ โช Najmy (creator)
โ
โโโโโเค   โนโฑโซโฐโน  เคโโโโเค
`}

exports.listjadwalsholat = () => {return`
*----ใ LIST JADWAL SHOLAT ใ----*

Jakarta = 1
Ambon = 39
Balikpapan = 42 
Banda Aceh = 17
Bandar Lampung = 22
Bandung = 7
Banjar = 44
Banjarbaru = 46
Banjarmasin = 32
Banyuwangi = 48
Batam = 8
Batu = 50
Bau-bau = 52
Bekasi = 54
Bengkulu = 21
Bima = 56
Binjai = 58
Bitung = 60
Blitar = 62
Bogor = 64
Bontang = 66
Bukittinggi = 68
Cilegon = 70
Cimahi = 72
Cirebon = 74
Denpasar = 6
Depok = 76
Dumai = 78
Gorontalo = 38
Gunungsitoli = 80
Jambi = 19
Jayapura = 9
Jember = 82
Kediri = 84
Kendari = 36
Kotamobagu = 86
Kupang = 28
Langsa = 88
Lhokseumawe = 90
Lubuklinggau = 92
Madiun = 94
Magelang = 98
Makassar = 13
Malang = 96
Mamuju = 37
Manado = 15
Manokwari = 41
Mataram = 29
Medan = 14
Mojokerto = 100
Padang = 16
Padangpanjang =  102 
Padangsidempuan = 104
Pagar Alam = 106
Palangkaraya = 31
Palembang = 20
Palopo = 108
Palu = 35
Pangkal Pinang = 23
Pangkalpinang = 110
Parepare = 112
Pariaman = 114
Pasuruan = 116
Payakumbuh = 118
Pekalongan = 120
Pekanbaru = 18
Pematangsiantar = 122
Pontianak = 30
Prabumulih = 124
Probolinggo = 126
Sabang = 128
Salatiga = 130
Samarinda = 33
Sawahlunto = 132
Semarang = 26
Serang = 27
Sibolga = 134 
Singkawang = 136
Sofifi = 138
Solo = 40
Solok = 140
Sorong = 142
Subulussalam = 144
Sukabumi  = 146 
Sungai Penuh = 148
Surabaya = 4
Surakarta = 150
Tangerang = 152
Tangerang Selatan = 154
Tanjung Pinang = 24
Tanjung Selor = 34
Tanjungbalai = 156
Tarakan = 158
Tasikmalaya = 160
Tebing Tinggi = 162
Tegal = 164
Ternate = 166
Tidore Kepulauan = 168
Tomohon = 170
Tual = 172
Yogyakarta = 25`}
// Simple Menu
exports.groupmenu = (prefix) => {
	return`
โโโ ใ *Group Menu* ใ
โ ${prefix}linkgroup
โ ${prefix}ephemeral [option]
โ ${prefix}setppgc [image]
โ ${prefix}setname [text]
โ ${prefix}setdesc [text]
โ ${prefix}group [option]
โ ${prefix}editinfo [option]
โ ${prefix}add @user
โ ${prefix}kick @user
โ ${prefix}hidetag [text]
โ ${prefix}tagall [text]
โ ${prefix}antilink [on/off]
โ ${prefix}mute [on/off]
โ ${prefix}promote @user
โ ${prefix}demote @user
โ ${prefix}vote [text]
โ ${prefix}devote
โ ${prefix}upvote
โ ${prefix}cekvote
โ ${prefix}hapusvote
โโโโโโโโ
`
}

exports.downloadermenu = (prefix) => {
	return`
โโโ ใ *Downloader Menu* ใ
โ ${prefix}tiktoknowm [url]
โ ${prefix}tiktokwm [url]
โ ${prefix}tiktokmp3 [url]
โ ${prefix}instagram [url]
โ ${prefix}twitter [url]
โ ${prefix}twittermp3 [url]
โ ${prefix}facebook [url]
โ ${prefix}pinterestdl [url]
โ ${prefix}ytmp3 [url]
โ ${prefix}ytmp4 [url]
โ ${prefix}getmusic [query]
โ ${prefix}getvideo [query]
โ ${prefix}umma [url]
โ ${prefix}joox [query]
โ ${prefix}soundcloud [url]
โโโโโโโโ
`
}

exports.randomanimemenu = (prefix) => {
	return`
โโโ ใ *Random Anime Menu* ใ
โ ${prefix}loli
โ ${prefix}neko
โ ${prefix}waifu
โ ${prefix}shinobu
โ ${prefix}megumin
โ ${prefix}bully
โ ${prefix}cuddle
โ ${prefix}cry
โ ${prefix}hug
โ ${prefix}awoo
โ ${prefix}kiss
โ ${prefix}lick
โ ${prefix}pat
โ ${prefix}smug
โ ${prefix}bonk
โ ${prefix}yeet
โ ${prefix}blush
โ ${prefix}smile
โ ${prefix}wave
โ ${prefix}highfive
โ ${prefix}handhold
โ ${prefix}nom
โ ${prefix}bite
โ ${prefix}glomp
โ ${prefix}slap
โ ${prefix}kill
โ ${prefix}happy
โ ${prefix}wink
โ ${prefix}poke
โ ${prefix}dance
โ ${prefix}cringe
โ ${prefix}anime
โ ${prefix}waifu
โ ${prefix}husbu
โ ${prefix}neko
โ ${prefix}shinobu
โ ${prefix}waifus (nsfw)
โ ${prefix}nekos (nsfw)
โ ${prefix}trap (nsfw)
โ ${prefix}blowjob (nsfw)
โโโโโโโโ
`
}

exports.textpromenu = (prefix) => {
	return`
โโโ ใ *Text Pro Menu* ใ
โ ${prefix}3dchristmas
โ ${prefix}3ddeepsea
โ ${prefix}americanflag
โ ${prefix}3dscifi
โ ${prefix}3drainbow
โ ${prefix}3dwaterpipe
โ ${prefix}halloweenskeleton
โ ${prefix}sketch
โ ${prefix}bluecircuit
โ ${prefix}space
โ ${prefix}metallic
โ ${prefix}fiction
โ ${prefix}greenhorror
โ ${prefix}transformer
โ ${prefix}berry
โ ${prefix}thunder
โ ${prefix}magma
โ ${prefix}3dcrackedstone
โ ${prefix}3dneonlight
โ ${prefix}impressiveglitch
โ ${prefix}naturalleaves
โ ${prefix}fireworksparkle
โ ${prefix}matrix
โ ${prefix}dropwater
โ ${prefix}harrypotter
โ ${prefix}foggywindow
โ ${prefix}neondevils
โ ${prefix}christmasholiday
โ ${prefix}3dgradient
โ ${prefix}blackpink
โ ${prefix}gluetext
โโโโโโโโ
`
}

exports.photooxymenu = (prefix) => {
	return`
โโโ ใ *Photo Oxy Menu* ใ
โ ${prefix}shadow
โ ${prefix}romantic
โ ${prefix}smoke
โ ${prefix}burnpapper
โ ${prefix}naruto
โ ${prefix}lovemsg
โ ${prefix}grassmsg
โ ${prefix}lovetext
โ ${prefix}coffecup
โ ${prefix}butterfly
โ ${prefix}harrypotter
โ ${prefix}retrolol
โโโโโโโโ
`
}

exports.ephotomenu = (prefix) => {
	return`
โโโ ใ *Ephoto Menu* ใ
โ ${prefix}ffcover
โ ${prefix}crossfire
โ ${prefix}galaxy
โ ${prefix}glass
โ ${prefix}neon
โ ${prefix}beach
โ ${prefix}blackpink
โ ${prefix}igcertificate
โ ${prefix}ytcertificate
โโโโโโโโ
`
}

exports.funmenu = (prefix) => {
	return`
โโโ ใ *Fun Menu* ใ
โ ${prefix}simih
โ ${prefix}bagaimanakah
โ ${prefix}kapankah
โ ${prefix}apakah
โ ${prefix}bisakah
โ ${prefix}rate
โ ${prefix}wangy
โ ${prefix}gantengcek
โ ${prefix}cekganteng
โ ${prefix}cantikcek
โ ${prefix}cekcantik
โ ${prefix}sangecek
โ ${prefix}ceksange
โ ${prefix}cekme
โ ${prefix}gaycek
โ ${prefix}cekgay
โ ${prefix}lesbicek
โ ${prefix}halah
โ ${prefix}hilih
โ ${prefix}huluh
โ ${prefix}heleh
โ ${prefix}holoh
โ ${prefix}jadian
โ ${prefix}jodohku
โ ${prefix}delttt
โ ${prefix}tictactoe
โ ${prefix}family100
โ ${prefix}tebak [option]
โ ${prefix}math [mode]
โ ${prefix}suitpvp [@tag]
โโโโโโโโ
`
}

exports.primbonmenu = (prefix) => {
	return`
โโโ ใ *Primbon Menu* ใ
โ ${prefix}nomorhoki
โ ${prefix}artimimpi
โ ${prefix}artinama
โ ${prefix}ramaljodoh
โ ${prefix}ramaljodohbali
โ ${prefix}suamiistri
โ ${prefix}ramalcinta
โ ${prefix}cocoknama
โ ${prefix}pasangan
โ ${prefix}jadiannikah
โ ${prefix}sifatusaha
โ ${prefix}rezeki
โ ${prefix}pekerjaan
โ ${prefix}nasib
โ ${prefix}penyakit
โ ${prefix}tarot
โ ${prefix}fengshui
โ ${prefix}haribaik
โ ${prefix}harisangar
โ ${prefix}harisial
โ ${prefix}nagahari
โ ${prefix}arahrezeki
โ ${prefix}peruntungan
โ ${prefix}weton
โ ${prefix}karakter
โ ${prefix}keberuntungan
โ ${prefix}memancing
โ ${prefix}masasubur
โ ${prefix}zodiak
โ ${prefix}shio
โโโโโโโโ
`
}

exports.mainmenu = (prefix) => {
	return`
โโโ ใ *Main Menu* ใ
โ ${prefix}script
โ ${prefix}speedtest
โ ${prefix}ping
โ ${prefix}owner
โ ${prefix}menu / ${prefix}help / ${prefix}?
โ ${prefix}delete
โ ${prefix}infochat
โ ${prefix}quoted
โ ${prefix}listpc
โ ${prefix}listgc
โ ${prefix}listonline
โโโโโโโโ
`
}

exports.databasemenu = (prefix) => {
	return`
โโโ ใ *Database Menu* ใ
โ ${prefix}setcmd
โ ${prefix}listcmd
โ ${prefix}delcmd
โ ${prefix}lockcmd
โ ${prefix}addmsg
โ ${prefix}listmsg
โ ${prefix}getmsg
โ ${prefix}delmsg
`
}

exports.islamicmenu = (prefix) => {
	return`
โโโ ใ *Islamic Menu* ใ
โ ${prefix}iqra
โ ${prefix}hadist
โ ${prefix}alquran
โ ${prefix}juzamma
โ ${prefix}tafsirsurah
โโโโโโโโ
`
}

exports.voicechargermenu = (prefix) => {
	return`
โโโ ใ *Voice Changerใ *
โ ${prefix}bass
โ ${prefix}blown
โ ${prefix}deep
โ ${prefix}earrape
โ ${prefix}fast
โ ${prefix}fat
โ ${prefix}nightcore
โ ${prefix}reverse
โ ${prefix}robot
โ ${prefix}slow
โ ${prefix}tupai
โโโโโโโโ
`
}

exports.thanksto = () => {
	return`
โโโ ใ *Thanks To* ใ
โ DikaArdnt
โ ZeeoneOfc
โ FatihArridho
โ Yoga
โ RiychDwayne
โ Rifza
โ Deff 
โ Sanzy
โ Nekel
โโโโโโโโ
`
}