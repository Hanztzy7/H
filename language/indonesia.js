exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `â³ Mohon tunggu sebentar~`
}
exports.ok = () => {
    return `â Done kak ð`
}

exports.err = () => {
    return `â ï¸ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `â ï¸ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah â Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `â Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `â Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `â Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `â  ï¸Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `ð¥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `ð  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*ââ ã HALL OF SHAME ã ââ*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `â User bukan seorang admin! â`
}

exports.adminAlready = () => {
    return `â Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! ð`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} ð selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp. 
Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya, 
lapor owner agar segera di perbaiki ð      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*âTime Server : ${time}*
*ð List-Menu Hanz Botz :*

â­ââ ã Bot Info ã 
â ${prefix}owner
â ${prefix}rules
â ${prefix}sc
â ${prefix}ping
â ${prefix}runtime
â ${prefix}botstatus
â°â ${prefix}donate


â­ââ ã Owner ã 
â < evaluate
â > evaluate
â $ exec
â => exec
â ${prefix}setmenu [query]
â ${prefix}setmenu templateLocation
â ${prefix}setmenu templateTenor
â ${prefix}setmenu katalog
â ${prefix}setmenu katalog2
â ${prefix}setmenu list
â ${prefix}setwm packname|author
â ${prefix}sendsesi
â ${prefix}listpc
â ${prefix}listgc
â ${prefix}broadcast [text]
â ${prefix}bc [text]
â ${prefix}bcgc [text]
â ${prefix}nsfw [on/off]
â ${prefix}autorespond [on/off]
â ${prefix}antiviewonce [on/off]
â ${prefix}join [link]
â ${prefix}self
â ${prefix}public [only bot]
â ${prefix}del [reply pesan bot]
â°â ${prefix}setppbot [reply image]


â­ââ ã Database ã 
â ${prefix}setcmd [reply stiker]
â ${prefix}delcmd [reply stiker]
â ${prefix}listcmd
â ${prefix}absen
â ${prefix}cekabsen
â ${prefix}deleteabsen
â ${prefix}absenstart
â ${prefix}addmsg [nama file]
â ${prefix}getmsg [nama file]
â ${prefix}listmsg
â°â ${prefix}delmsg [nama file]


â­ââ ã Group ã 
â ${prefix}listonline
â ${prefix}sider
â ${prefix}wm packname|author
â ${prefix}infochat
â ${prefix}setdesk [text]
â ${prefix}setppgrup [reply image]
â ${prefix}antilink [on/off]
â ${prefix}revoke
â ${prefix}leave
â ${prefix}add [62***]
â ${prefix}kick @tag
â ${prefix}leave
â ${prefix}linkgc
â ${prefix}take packname|author
â ${prefix}group [open/close]
â ${prefix}tagall [text]
â°â ${prefix}hidetag [text]

â­ââ ã Anime ã 
â ${prefix}quotesanime
â ${prefix}anime [query]
â ${prefix}manga [query]
â°â ${prefix}character [query]

â­ââ ã Tag ã 
â ${prefix}stickertag
â ${prefix}videotag [query]
â ${prefix}vntag [query]
â°â ${prefix}imagetag [query]

â­ââ ã Stalking ã 
â ${prefix}igstalk [username]
â ${prefix}ghstalk [username]
â°â ${prefix}ytstalk [channel]


â­ââ ã Search ã 
â ${prefix}ytsearch [query]
â ${prefix}wallpaper [query]
â ${prefix}wikimedia [query]
â ${prefix}hentai
â ${prefix}wattpad [query]
â ${prefix}webtoons [query]
â ${prefix}drakor [query]
â°â ${prefix}pinterest [query]


â­ââ ã Converter ã
â ${prefix}toaudio [video]
â ${prefix}tomp3 [video]
â ${prefix}tovn [video]
â ${prefix}stiker [reply image]
â ${prefix}tourl [image/video/stiker]
â ${prefix}togif [sticker]
â ${prefix}tomp4 [sticker]
â°â${prefix}toimg [reply sticker]


â­ââ ã Image Effect ã 
â ${prefix}wanted [reply image/stiker]
â ${prefix}utatoo [reply image/stiker]
â ${prefix}unsharpen [reply image/stiker]
â ${prefix}thanos [reply image/stiker]
â ${prefix}sniper [reply image/stiker]
â ${prefix}sharpen [reply image/stiker]
â ${prefix}sepia [reply image/stiker]
â ${prefix}scary [reply image/stiker]
â ${prefix}rip [reply image/stiker]
â ${prefix}redple [reply image/stiker]
â ${prefix}rejected [reply image/stiker]
â ${prefix}posterize [reply image/stiker]
â ${prefix}ps4 [reply image/stiker]
â ${prefix}pixelize [reply image/stiker]
â ${prefix}missionpassed [reply image/stiker]
â ${prefix}moustache [reply image/stiker]
â ${prefix}lookwhatkarenhave [reply image/stiker]
â ${prefix}jail [reply image/stiker]
â ${prefix}invert [reply image/stiker]
â ${prefix}instagram [reply image/stiker]
â ${prefix}greyscale [reply image/stiker]
â ${prefix}glitch [reply image/stiker]
â ${prefix}gay [reply image/stiker]
â ${prefix}frame [reply image/stiker]
â ${prefix}fire [reply image/stiker]
â ${prefix}distort [reply image/stiker]
â ${prefix}dictator [reply image/stiker]
â ${prefix}deepfry [reply image/stiker]
â ${prefix}ddungeon [reply image/stiker]
â ${prefix}circle [reply image/stiker]
â ${prefix}challenger [reply image/stiker]
â ${prefix}burn [reply image/stiker]
â ${prefix}brazzers [reply image/stiker]
â°â ${prefix}beautiful [reply image/stiker]


â­ââ ã Sticker Effect ã 
â ${prefix}jail [reply image/stiker]
â ${prefix}red [reply image/stiker]
â ${prefix}gay [reply image/stiker]
â ${prefix}bloo [reply image/stiker]
â ${prefix}blue [reply image/stiker]
â ${prefix}sepia [reply image/stiker]
â ${prefix}green [reply image/stiker]
â ${prefix}glass [reply image/stiker]
â ${prefix}invert [reply image/stiker]
â ${prefix}blurple [reply image/stiker]
â ${prefix}blurple2 [reply image/stiker]
â ${prefix}wasted [reply image/stiker]
â ${prefix}passed [reply image/stiker]
â ${prefix}triggered [reply image/stiker]
â ${prefix}comrade [reply image/stiker]
â ${prefix}greyscale [reply image/stiker]
â ${prefix}threshold [reply image/stiker]
â ${prefix}brightness [reply image/stiker]
â°â ${prefix}invertgreyscale [reply image/stiker]


â­ââ ã Download ã 
â ${prefix}tiktok [link]
â ${prefix}tiktoknowm [link]
â ${prefix}tiktokwm [link]
â ${prefix}tiktokaudio [link]
â ${prefix}ytdl [link]
â ${prefix}play [query]
â ${prefix}ytmp3 [link]
â ${prefix}ytshortmp3 [link]
â ${prefix}ytmp4 [link]
â ${prefix}ytshorts [link]
â ${prefix}facebook [link]
â ${prefix}facebooksd [link]
â ${prefix}facebookhd [link]
â ${prefix}fbaudio [link]
â ${prefix}igstory [username]
â ${prefix}igdl [link]
â ${prefix}igphoto [link]
â ${prefix}igvideo [link]
â ${prefix}igreels [link]
â ${prefix}igtv [link]
â ${prefix}soundcloud [link]
â ${prefix}gitclone [link repo]
â ${prefix}gitrepo [username repo branch]
â ${prefix}mediafire [link]
â°â ${prefix}twitter link

â­ââ ã Primbon ã
â ${prefix}nomorhoki 887435047326
â ${prefix}artimimpi [query]
â ${prefix}artinama [query]
â ${prefix}ramaljodoh
â ${prefix}ramaljodohbali
â ${prefix}suamiistri
â ${prefix}ramalcinta
â ${prefix}cocoknama
â ${prefix}pasangan
â ${prefix}jadiannikah
â ${prefix}sifatusaha
â ${prefix}rezeki
â ${prefix}pekerjaan
â ${prefix}nasib
â ${prefix}penyakit
â ${prefix}tarot
â ${prefix}fengshui
â ${prefix}haribaik
â ${prefix}harisangar
â ${prefix}harisial
â ${prefix}nagahari
â ${prefix}arahrezeki
â ${prefix}peruntungan
â ${prefix}weton
â ${prefix}karakter
â ${prefix}keberuntungan
â ${prefix}memancing
â ${prefix}masasubur
â ${prefix}zodiak 
â°â ${prefix}shio [query]

â­ââ ã Random Anime ã
â ${prefix}loli
â ${prefix}neko
â ${prefix}waifu
â ${prefix}shinobu
â ${prefix}megumin
â ${prefix}bully
â ${prefix}cuddle
â ${prefix}cry
â ${prefix}hug
â ${prefix}awoo
â ${prefix}kiss
â ${prefix}lick
â ${prefix}pat
â ${prefix}smug
â ${prefix}bonk
â ${prefix}yeet
â ${prefix}blush
â ${prefix}smile
â ${prefix}wave
â ${prefix}highfive
â ${prefix}handhold
â ${prefix}nom
â ${prefix}bite
â ${prefix}glomp
â ${prefix}slap
â ${prefix}kill
â ${prefix}happy
â ${prefix}wink
â ${prefix}poke
â ${prefix}dance
â°â ${prefix}cringe

â­ââ ã Nsfw & Sfw ã
â ${prefix}ahegao
â ${prefix}ass
â ${prefix}bdsm
â ${prefix}blowjob
â ${prefix}cuckold
â ${prefix}cum
â ${prefix}ero
â ${prefix}femdom
â ${prefix}foot
â ${prefix}gangbang
â ${prefix}glasses
â ${prefix}jahy
â ${prefix}manga
â ${prefix}masturbation
â ${prefix}neko
â ${prefix}orgy
â ${prefix}panties
â ${prefix}pussy
â ${prefix}tentacles
â ${prefix}thighs
â ${prefix}yuri
â ${prefix}feet
â ${prefix}lewdkemo
â ${prefix}woof
â ${prefix}gasm
â ${prefix}solo
â ${prefix}8ball
â ${prefix}goose
â ${prefix}avatar
â ${prefix}hololewd
â ${prefix}gecg
â ${prefix}holo
â ${prefix}fox_girl
â ${prefix}tits
â ${prefix}eroyuri
â ${prefix}holoyero
â ${prefix}lizard
â ${prefix}keta
â ${prefix}eron
â ${prefix}erok
â ${prefix}kemonomimi
â ${prefix}cum_jpg
â ${prefix}nsfw_avatar
â ${prefix}erofeet
â ${prefix}meow
â ${prefix}wallpaper
â ${prefix}waifu
â ${prefix}trap
â ${prefix}lewd
â ${prefix}pussy_jpg
â ${prefix}futanari
â ${prefix}lewdk
â ${prefix}solog
â ${prefix}smug
â ${prefix}cum
â ${prefix}slap
â ${prefix}les
â ${prefix}erokemo
â ${prefix}bj
â ${prefix}pwankg
â ${prefix}pat
â ${prefix}poke
â ${prefix}feed
â ${prefix}nsfw_neko_gif
â ${prefix}pussy
â ${prefix}feetg
â ${prefix}baka
â ${prefix}hug
â ${prefix}kiss
â ${prefix}tickle
â ${prefix}spank
â ${prefix}kuni
â ${prefix}classic
â ${prefix}boobs
â ${prefix}anal
â ${prefix}ngif
â ${prefix}cuddle
â°â ${prefix}zettai

â­ââ ã Ephoto360 Menu ã
â ${prefix}youtubegold
â ${prefix}youtubesilver
â ${prefix}facebookgold
â ${prefix}facebooksilver
â ${prefix}instagramgold
â ${prefix}instagramsilver
â ${prefix}twittergold
â ${prefix}twittersilver
â ${prefix}retrotext
â ${prefix}halloweenbats
â ${prefix}texthalloween
â ${prefix}cardhalloween
â ${prefix}birthdaycake
â ${prefix}thundertext
â ${prefix}icetext
â ${prefix}milkcake
â ${prefix}snowontext
â ${prefix}metalstar
â ${prefix}dragonfire
â ${prefix}zombie3d
â ${prefix}merrycard
â ${prefix}generalexam 
â ${prefix}viettel
â ${prefix}embroider
â ${prefix}graffititext
â ${prefix}graffititext2
â ${prefix}graffititext3
â ${prefix}covergraffiti
â ${prefix}moderngold
â ${prefix}capercut
â ${prefix}lovecard
â ${prefix}heartflashlight
â ${prefix}heartcup
â ${prefix}sunglightshadow
â ${prefix}graffiti3d
â ${prefix}moderngoldsilver
â ${prefix}moderngold2
â ${prefix}moderngold3
â ${prefix}fabrictext
â ${prefix}masteryavatar
â ${prefix}messagecoffee
â ${prefix}announofwin
â ${prefix}writeblood
â ${prefix}horrorletter
â ${prefix}writehorror
â ${prefix}shirtclub
â ${prefix}angelwing
â ${prefix}christmasseason
â ${prefix}projectyasuo
â ${prefix}lovelycute
â ${prefix}womansday
â ${prefix}covergamepubg
â ${prefix}nameonheart
â ${prefix}funnyhalloween
â ${prefix}lightningpubg
â ${prefix}greetingcardvideo 
â ${prefix}christmascard 
â ${prefix}galaxybat
â ${prefix}writegalaxy
â ${prefix}starsnight
â ${prefix}noeltext
â ${prefix}textcakes
â ${prefix}pubgbirthday
â ${prefix}galaxywallpaper
â ${prefix}pubgglicthvideo 
â ${prefix}pubgmascotlogo
â ${prefix}realembroidery
â ${prefix}vintagetelevision
â ${prefix}funnyanimations
â ${prefix}glowingtext
â ${prefix}textonglass
â ${prefix}cartoonstyle
â ${prefix}multicolor
â ${prefix}watercolor2
â ${prefix}textsky
â ${prefix}summerbeach
â ${prefix}1917text
â ${prefix}puppycute
â°â ${prefix}rosebirthday


â­ââ ã Textpro Menu ã
â ${prefix}halloween2 text|text2
â ${prefix}horror text|text2
â ${prefix}game8bit text|text2
â ${prefix}layered text|text2
â ${prefix}glitch2 text|text2
â ${prefix}coolg text|text2
â ${prefix}coolwg text|text2
â ${prefix}realistic text|text2
â ${prefix}space3d text|text2
â ${prefix}gtiktok text|text2
â ${prefix}stone text|text2
â ${prefix}marvel text|text2
â ${prefix}marvel2 text|text2
â ${prefix}pornhub text|text2
â ${prefix}avengers text|text2
â ${prefix}metalr text|text2
â ${prefix}metalg text|text2
â ${prefix}metalg2 text|text2
â ${prefix}halloween2 text|text2
â ${prefix}lion text|text2
â ${prefix}wolf_bw text|text2
â ${prefix}wolf_g text|text2
â ${prefix}ninja text|text2
â ${prefix}3dsteel text|text2
â ${prefix}horror2 text|text2
â ${prefix}lava text|text2
â ${prefix}bagel text|text2
â ${prefix}blackpink text
â ${prefix}rainbow2 text
â ${prefix}water_pipe text
â ${prefix}halloween text
â ${prefix}sketch text
â ${prefix}sircuit text
â ${prefix}discovery text
â ${prefix}metallic2 text
â ${prefix}fiction text
â ${prefix}demon text
â ${prefix}transformer text
â ${prefix}berry text
â ${prefix}thunder text
â ${prefix}magma text
â ${prefix}3dstone text
â ${prefix}neon text
â ${prefix}glitch text
â ${prefix}harry_potter text
â ${prefix}embossed text
â ${prefix}broken text
â ${prefix}papercut text
â ${prefix}gradient text
â ${prefix}glossy text
â ${prefix}watercolor text
â ${prefix}multicolor text
â ${prefix}neon_devil text
â ${prefix}underwater text
â ${prefix}bear text
â ${prefix}wonderfulg text
â ${prefix}christmas text
â ${prefix}neon_light text
â ${prefix}snow text
â ${prefix}cloudsky text
â ${prefix}luxury2 text
â ${prefix}gradient2 text
â ${prefix}summer text
â ${prefix}writing text
â ${prefix}engraved text
â ${prefix}summery text
â ${prefix}3dglue text
â ${prefix}metaldark text
â ${prefix}neonlight text
â ${prefix}oscar text
â ${prefix}minion text
â ${prefix}holographic text
â ${prefix}purple text
â ${prefix}glossyb text
â ${prefix}deluxe2 text
â ${prefix}glossyc text
â ${prefix}fabric text
â ${prefix}neonc text
â ${prefix}newyear text
â ${prefix}newyear2 text
â ${prefix}metals text
â ${prefix}xmas text
â ${prefix}blood text
â ${prefix}darkg text
â ${prefix}joker text
â ${prefix}wicker text
â ${prefix}natural text
â ${prefix}firework text
â ${prefix}skeleton text
â ${prefix}balloon text
â ${prefix}balloon2 text
â ${prefix}balloon3 text
â ${prefix}balloon4 text
â ${prefix}balloon5 text
â ${prefix}balloon6 text
â ${prefix}balloon7 text
â ${prefix}steel text
â ${prefix}gloss text
â ${prefix}denim text
â ${prefix}decorate text
â ${prefix}decorate2 text
â ${prefix}peridot text
â ${prefix}rock text
â ${prefix}glass text
â ${prefix}glass2 text
â ${prefix}glass3 text
â ${prefix}glass4 text
â ${prefix}glass5 text
â ${prefix}glass6 text
â ${prefix}glass7 text
â ${prefix}glass8 text
â ${prefix}captain_as2 text
â ${prefix}robot text
â ${prefix}equalizer text
â ${prefix}toxic text
â ${prefix}sparkling text
â ${prefix}sparkling2 text
â ${prefix}sparkling3 text
â ${prefix}sparkling4 text
â ${prefix}sparkling5 text
â ${prefix}sparkling6 text
â ${prefix}sparkling7 text
â ${prefix}decorative text
â ${prefix}chocolate text
â ${prefix}strawberry text
â ${prefix}koifish text
â ${prefix}bread text
â ${prefix}matrix text
â ${prefix}blood2 text
â ${prefix}neonligth2 text
â ${prefix}thunder2 text
â ${prefix}3dbox text
â ${prefix}neon2 text
â ${prefix}roadw text
â ${prefix}bokeh text
â ${prefix}gneon text
â ${prefix}advanced text
â ${prefix}dropwater text
â ${prefix}wall text
â ${prefix}chrismast text
â ${prefix}honey text
â ${prefix}drug text
â ${prefix}marble text
â ${prefix}marble2 text
â ${prefix}ice text
â ${prefix}juice text
â ${prefix}rusty text
â ${prefix}abstra text
â ${prefix}biscuit text
â ${prefix}wood text
â ${prefix}scifi text
â ${prefix}metalr text
â ${prefix}purpleg text
â ${prefix}shiny text 
â ${prefix}jewelry text
â ${prefix}jewelry2 text
â ${prefix}jewelry3 text
â ${prefix}jewelry4 text
â ${prefix}jewelry5 text
â ${prefix}jewelry6 text
â ${prefix}jewelry7 text
â ${prefix}jewelry8 text
â ${prefix}metalh text
â ${prefix}golden text
â ${prefix}glitter text
â ${prefix}glitter2 text
â ${prefix}glitter3 text
â ${prefix}glitter4 text
â ${prefix}glitter5 text
â ${prefix}glitter6 text
â ${prefix}glitter7 text
â ${prefix}metale text
â ${prefix}carbon text
â ${prefix}candy text
â ${prefix}metalb text
â ${prefix}gemb text
â ${prefix}3dchrome text
â ${prefix}metalb2 text
â ${prefix}metalg text
â°â ${prefix}metalg text


â­ââ ã Others ã
â ${prefix}afk [reason]
â ${prefix}translate kode_bahasa text
â ${prefix}kalkulator [query]
â ${prefix}smeme [text]
â ${prefix}smeme2 [text|text]
â ${prefix}memegen [text|text]
â°â

â­ââ ã Game Menu ã
â ${prefix}kuismath
â ${prefix}tebak [option]
â ${prefix}tekateki
â ${prefix}susunkata
â°â ${prefix}caklontong


â­ââ ã Asupan Menu ã
â ${prefix}chika
â ${prefix}delvira
â ${prefix}ayu
â ${prefix}bunga
â ${prefix}aura
â ${prefix}nisa
â ${prefix}ziva
â ${prefix}yana
â ${prefix}viona
â ${prefix}syania
â ${prefix}riri
â ${prefix}syifa
â ${prefix}mama_gina
â ${prefix}alcakenya
â ${prefix}mangayutri
â ${prefix}rikagusriani
â ${prefix}asupan
â ${prefix}bocil
â ${prefix}geayubi
â ${prefix}santuy
â ${prefix}ukhty
â°â ${prefix}syifa

â­ââ ã Telegram Sticker ã
â ${prefix}awoawo
â ${prefix}benedict
â ${prefix}chat
â ${prefix}dbfly
â ${prefix}dino_kuning
â ${prefix}doge
â ${prefix}gojosatoru
â ${prefix}hope_boy
â ${prefix}jisoo
â ${prefix}kr_robot
â ${prefix}kucing
â ${prefix}lonte
â ${prefix}manusia_lidi
â ${prefix}menjamet
â ${prefix}meow
â ${prefix}nicholas
â ${prefix}patrick
â ${prefix}popoci
â ${prefix}sponsbob
â ${prefix}kawan_sponsbob
â°â ${prefix}tyni
,
â­ââ ã Random Cewe ã
â ${prefix}china 
â ${prefix}indonesia 
â ${prefix}malaysia 
â ${prefix}thailand 
â ${prefix}korea 
â ${prefix}japan 
â ${prefix}vietnam 
â ${prefix}jenni 
â ${prefix}jiso 
â ${prefix}lisa  
â°â ${prefix}rose

â­ââ ã TqTo ã 
â My God
â My Parents
â Fatih A.
â Ferdi
â DikaArdnt
â Mhankbarbar
â Nurutomo
â Rashid
â ZeeoneOfc
â Penyedia Module
â°â And All Support
    `
}

exports.rules = (prefix) => {
    return `
*ââ ã RULES AND FAQ ã ââ*

1. Jangan spam bot. ð
Sanksi: *â WARN/SOFT BLOCK*

2. Jangan telepon bot. âï¸
Sanksi: *â SOFT BLOCK*

3. Jangan mengeksploitasi bot.ð
Sanksi: *PERMANENT BLOCK*

ð¯ï¸ Bot tidak atau lambat merespon ?
â¡ï¸ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rulesâ¼ï¸

ð¯ï¸ Dimana saya bisa mendapatkan Script dari bot ini ?
â¡ï¸ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

ð¯ï¸ Boleh saya menambah ke grup?
â¡ï¸ Untuk sementara bot dalam status free to add.

ð¯ï¸ Prefixnya apa ya?
â¡ï¸ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

ð¯ï¸ Kak, kok syaa chat owner tidak direspon?
â¡ï¸ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

â ï¸ Segala kebijakan dan ketentuan Alphabot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*ï¹*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Alphabot
ðð
`
}
exports.welcome = () =>{
	return`ð©ðºðððºð ððððº ððððð ððºð ð¤
	
â­ ð­ðºððº :
â ð´ððð :
â ð¦ð¾ðð½ð¾ð :
â ð ðððð :
â°â ð¯ðºðððð ðððð¾ð ðððð ððº ððºk ~`
}
exports.leave = () =>{
	return`Yah kok out ð£ Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------ã SOURCE CODE ã ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
`
}
exports.tos = (ownernomer) => {
    return `
*-------ã DONATE ã -------*

Hai kak âºï¸ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti ð

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`â­ââ ã Bot Info ã 
â ${prefix}owner
â ${prefix}rules
â ${prefix}sc
â ${prefix}ping
â ${prefix}runtime
â ${prefix}botstatus
â°â ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`â­ââ ã Owner ã 
â < evaluate
â > evaluate
â $ exec
â => exec
â ${prefix}setmenu [query]
â ${prefix}setmenu templateLocation
â ${prefix}setmenu templateTenor
â ${prefix}setmenu katalog
â ${prefix}setmenu katalog2
â ${prefix}setmenu list
â ${prefix}setwm packname|author
â ${prefix}sendsesi
â ${prefix}listpc
â ${prefix}listgc
â ${prefix}broadcast [text]
â ${prefix}bc [text]
â ${prefix}bcgc [text]
â ${prefix}nsfw [on/off]
â ${prefix}autorespond [on/off]
â ${prefix}antiviewonce [on/off]
â ${prefix}join [link]
â ${prefix}self
â ${prefix}public [only bot]
â ${prefix}del [pesan bot]
â°â ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`â­ââ ã Database ã 
â ${prefix}setcmd [reply stiker]
â ${prefix}delcmd [reply stiker]
â ${prefix}listcmd
â ${prefix}absen
â ${prefix}cekabsen
â ${prefix}deleteabsen
â ${prefix}absenstart
â ${prefix}addmsg [nama file]
â ${prefix}getmsg [nama file]
â ${prefix}listmsg
â°â ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`â­ââ ã Group ã 
â ${prefix}listonline
â ${prefix}sider
â ${prefix}wm packname|author
â ${prefix}infochat
â ${prefix}setdesk [text]
â ${prefix}setppgrup [reply image]
â ${prefix}antilink [on/off]
â ${prefix}revoke
â ${prefix}leave
â ${prefix}add [62***]
â ${prefix}kick @tag
â ${prefix}leave
â ${prefix}linkgc
â ${prefix}take packname|author
â ${prefix}group [open/close]
â ${prefix}tagall [text]
â°â ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`â­ââ ã Anime ã 
â ${prefix}quotesanime
â ${prefix}anime [query]
â ${prefix}manga [query]
â°â ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`â­ââ ã Tag ã 
â ${prefix}stickertag
â ${prefix}videotag [query]
â ${prefix}vntag [query]
â°â ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`â­ââ ã Stalking ã 
â ${prefix}igstalk [username]
â ${prefix}ghstalk [username]
â°â ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`â­ââ ã Search ã 
â ${prefix}ytsearch [query]
â ${prefix}wallpaper [query]
â ${prefix}wikimedia [query]
â ${prefix}hentai
â ${prefix}wattpad [query]
â ${prefix}webtoons [query]
â ${prefix}drakor [query]
â°â ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`â­ââ ã Converter ã 
â ${prefix}toaudio [video]
â ${prefix}tomp3 [video]
â ${prefix}tovn [video]
â ${prefix}stiker [reply image]
â ${prefix}tourl [image/video]
â ${prefix}togif [sticker]
â ${prefix}tomp4 [sticker]
â°â${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`â­ââ ã Image Effect ã 
â ${prefix}wanted [reply image/stiker]
â ${prefix}utatoo [reply image/stiker]
â ${prefix}unsharpen [reply image/stiker]
â ${prefix}thanos [reply image/stiker]
â ${prefix}sniper [reply image/stiker]
â ${prefix}sharpen [reply image/stiker]
â ${prefix}sepia [reply image/stiker]
â ${prefix}scary [reply image/stiker]
â ${prefix}rip [reply image/stiker]
â ${prefix}redple [reply image/stiker]
â ${prefix}rejected [reply image/stiker]
â ${prefix}posterize [reply image/stiker]
â ${prefix}ps4 [reply image/stiker]
â ${prefix}pixelize [reply image/stiker]
â ${prefix}missionpassed [reply image/stiker]
â ${prefix}moustache [reply image/stiker]
â ${prefix}lookwhatkarenhave [reply image/stiker]
â ${prefix}jail [reply image/stiker]
â ${prefix}invert [reply image/stiker]
â ${prefix}instagram [reply image/stiker]
â ${prefix}greyscale [reply image/stiker]
â ${prefix}glitch [reply image/stiker]
â ${prefix}gay [reply image/stiker]
â ${prefix}frame [reply image/stiker]
â ${prefix}fire [reply image/stiker]
â ${prefix}distort [reply image/stiker]
â ${prefix}dictator [reply image/stiker]
â ${prefix}deepfry [reply image/stiker]
â ${prefix}ddungeon [reply image/stiker]
â ${prefix}circle [reply image/stiker]
â ${prefix}challenger [reply image/stiker]
â ${prefix}burn [reply image/stiker]
â ${prefix}brazzers [reply image/stiker]
â°â ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`â­ââ ã Sticker Effect ã 
â ${prefix}jail [reply image/stiker]
â ${prefix}red [reply image/stiker]
â ${prefix}gay [reply image/stiker]
â ${prefix}bloo [reply image/stiker]
â ${prefix}blue [reply image/stiker]
â ${prefix}sepia [reply image/stiker]
â ${prefix}green [reply image/stiker]
â ${prefix}glass [reply image/stiker]
â ${prefix}invert [reply image/stiker]
â ${prefix}blurple [reply image/stiker]
â ${prefix}blurple2 [reply image/stiker]
â ${prefix}wasted [reply image/stiker]
â ${prefix}passed [reply image/stiker]
â ${prefix}triggered [reply image/stiker]
â ${prefix}comrade [reply image/stiker]
â ${prefix}greyscale [reply image/stiker]
â ${prefix}threshold [reply image/stiker]
â ${prefix}brightness [reply image/stiker]
â°â ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`â­ââ ã Download ã 
â ${prefix}tiktok [link]
â ${prefix}tiktoknowm [link]
â ${prefix}tiktokwm [link]
â ${prefix}tiktokaudio [link]
â ${prefix}ytdl [link]
â ${prefix}play [query]
â ${prefix}ytmp3 [link]
â ${prefix}ytshortmp3 [link]
â ${prefix}ytmp4 [link]
â ${prefix}ytshorts [link]
â ${prefix}facebook [link]
â ${prefix}facebooksd [link]
â ${prefix}facebookhd [link]
â ${prefix}fbaudio [link]
â ${prefix}igstory [username]
â ${prefix}igdl [link]
â ${prefix}igphoto [link]
â ${prefix}igvideo [link]
â ${prefix}igreels [link]
â ${prefix}igtv [link]
â ${prefix}soundcloud [link]
â ${prefix}gitclone [link repo]
â ${prefix}gitrepo [username repo branch]
â ${prefix}mediafire [link]
â°â ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`â­ââ ã Random Anime ã
â ${prefix}loli
â ${prefix}neko
â ${prefix}waifu
â ${prefix}shinobu
â ${prefix}megumin
â ${prefix}bully
â ${prefix}cuddle
â ${prefix}cry
â ${prefix}hug
â ${prefix}awoo
â ${prefix}kiss
â ${prefix}lick
â ${prefix}pat
â ${prefix}smug
â ${prefix}bonk
â ${prefix}yeet
â ${prefix}blush
â ${prefix}smile
â ${prefix}wave
â ${prefix}highfive
â ${prefix}handhold
â ${prefix}nom
â ${prefix}bite
â ${prefix}glomp
â ${prefix}slap
â ${prefix}kill
â ${prefix}happy
â ${prefix}wink
â ${prefix}poke
â ${prefix}dance
â°â ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`â­ââ ã Nsfw & Sfw ã
â ${prefix}ahegao
â ${prefix}ass
â ${prefix}bdsm
â ${prefix}blowjob
â ${prefix}cuckold
â ${prefix}cum
â ${prefix}ero
â ${prefix}femdom
â ${prefix}foot
â ${prefix}gangbang
â ${prefix}glasses
â ${prefix}jahy
â ${prefix}manga
â ${prefix}masturbation
â ${prefix}neko
â ${prefix}orgy
â ${prefix}panties
â ${prefix}pussy
â ${prefix}tentacles
â ${prefix}thighs
â ${prefix}yuri
â ${prefix}feet
â ${prefix}lewdkemo
â ${prefix}woof
â ${prefix}gasm
â ${prefix}solo
â ${prefix}8ball
â ${prefix}goose
â ${prefix}avatar
â ${prefix}hololewd
â ${prefix}gecg
â ${prefix}holo
â ${prefix}fox_girl
â ${prefix}tits
â ${prefix}eroyuri
â ${prefix}holoyero
â ${prefix}lizard
â ${prefix}keta
â ${prefix}eron
â ${prefix}erok
â ${prefix}kemonomimi
â ${prefix}cum_jpg
â ${prefix}nsfw_avatar
â ${prefix}erofeet
â ${prefix}meow
â ${prefix}wallpaper
â ${prefix}waifu
â ${prefix}trap
â ${prefix}lewd
â ${prefix}pussy_jpg
â ${prefix}futanari
â ${prefix}lewdk
â ${prefix}solog
â ${prefix}smug
â ${prefix}cum
â ${prefix}slap
â ${prefix}les
â ${prefix}erokemo
â ${prefix}bj
â ${prefix}pwankg
â ${prefix}pat
â ${prefix}poke
â ${prefix}feed
â ${prefix}nsfw_neko_gif
â ${prefix}pussy
â ${prefix}feetg
â ${prefix}baka
â ${prefix}hug
â ${prefix}kiss
â ${prefix}tickle
â ${prefix}spank
â ${prefix}kuni
â ${prefix}classic
â ${prefix}boobs
â ${prefix}anal
â ${prefix}ngif
â ${prefix}cuddle
â°â ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`â­ââ ã Textpro Menu ã
â ${prefix}halloween2 text|text2
â ${prefix}horror text|text2
â ${prefix}game8bit text|text2
â ${prefix}layered text|text2
â ${prefix}glitch2 text|text2
â ${prefix}coolg text|text2
â ${prefix}coolwg text|text2
â ${prefix}realistic text|text2
â ${prefix}space3d text|text2
â ${prefix}gtiktok text|text2
â ${prefix}stone text|text2
â ${prefix}marvel text|text2
â ${prefix}marvel2 text|text2
â ${prefix}pornhub text|text2
â ${prefix}avengers text|text2
â ${prefix}metalr text|text2
â ${prefix}metalg text|text2
â ${prefix}metalg2 text|text2
â ${prefix}halloween2 text|text2
â ${prefix}lion text|text2
â ${prefix}wolf_bw text|text2
â ${prefix}wolf_g text|text2
â ${prefix}ninja text|text2
â ${prefix}3dsteel text|text2
â ${prefix}horror2 text|text2
â ${prefix}lava text|text2
â ${prefix}bagel text|text2
â ${prefix}blackpink text
â ${prefix}rainbow2 text
â ${prefix}water_pipe text
â ${prefix}halloween text
â ${prefix}sketch text
â ${prefix}sircuit text
â ${prefix}discovery text
â ${prefix}metallic2 text
â ${prefix}fiction text
â ${prefix}demon text
â ${prefix}transformer text
â ${prefix}berry text
â ${prefix}thunder text
â ${prefix}magma text
â ${prefix}3dstone text
â ${prefix}neon text
â ${prefix}glitch text
â ${prefix}harry_potter text
â ${prefix}embossed text
â ${prefix}broken text
â ${prefix}papercut text
â ${prefix}gradient text
â ${prefix}glossy text
â ${prefix}watercolor text
â ${prefix}multicolor text
â ${prefix}neon_devil text
â ${prefix}underwater text
â ${prefix}bear text
â ${prefix}wonderfulg text
â ${prefix}christmas text
â ${prefix}neon_light text
â ${prefix}snow text
â ${prefix}cloudsky text
â ${prefix}luxury2 text
â ${prefix}gradient2 text
â ${prefix}summer text
â ${prefix}writing text
â ${prefix}engraved text
â ${prefix}summery text
â ${prefix}3dglue text
â ${prefix}metaldark text
â ${prefix}neonlight text
â ${prefix}oscar text
â ${prefix}minion text
â ${prefix}holographic text
â ${prefix}purple text
â ${prefix}glossyb text
â ${prefix}deluxe2 text
â ${prefix}glossyc text
â ${prefix}fabric text
â ${prefix}neonc text
â ${prefix}newyear text
â ${prefix}newyear2 text
â ${prefix}metals text
â ${prefix}xmas text
â ${prefix}blood text
â ${prefix}darkg text
â ${prefix}joker text
â ${prefix}wicker text
â ${prefix}natural text
â ${prefix}firework text
â ${prefix}skeleton text
â ${prefix}balloon text
â ${prefix}balloon2 text
â ${prefix}balloon3 text
â ${prefix}balloon4 text
â ${prefix}balloon5 text
â ${prefix}balloon6 text
â ${prefix}balloon7 text
â ${prefix}steel text
â ${prefix}gloss text
â ${prefix}denim text
â ${prefix}decorate text
â ${prefix}decorate2 text
â ${prefix}peridot text
â ${prefix}rock text
â ${prefix}glass text
â ${prefix}glass2 text
â ${prefix}glass3 text
â ${prefix}glass4 text
â ${prefix}glass5 text
â ${prefix}glass6 text
â ${prefix}glass7 text
â ${prefix}glass8 text
â ${prefix}captain_as2 text
â ${prefix}robot text
â ${prefix}equalizer text
â ${prefix}toxic text
â ${prefix}sparkling text
â ${prefix}sparkling2 text
â ${prefix}sparkling3 text
â ${prefix}sparkling4 text
â ${prefix}sparkling5 text
â ${prefix}sparkling6 text
â ${prefix}sparkling7 text
â ${prefix}decorative text
â ${prefix}chocolate text
â ${prefix}strawberry text
â ${prefix}koifish text
â ${prefix}bread text
â ${prefix}matrix text
â ${prefix}blood2 text
â ${prefix}neonligth2 text
â ${prefix}thunder2 text
â ${prefix}3dbox text
â ${prefix}neon2 text
â ${prefix}roadw text
â ${prefix}bokeh text
â ${prefix}gneon text
â ${prefix}advanced text
â ${prefix}dropwater text
â ${prefix}wall text
â ${prefix}chrismast text
â ${prefix}honey text
â ${prefix}drug text
â ${prefix}marble text
â ${prefix}marble2 text
â ${prefix}ice text
â ${prefix}juice text
â ${prefix}rusty text
â ${prefix}abstra text
â ${prefix}biscuit text
â ${prefix}wood text
â ${prefix}scifi text
â ${prefix}metalr text
â ${prefix}purpleg text
â ${prefix}shiny text 
â ${prefix}jewelry text
â ${prefix}jewelry2 text
â ${prefix}jewelry3 text
â ${prefix}jewelry4 text
â ${prefix}jewelry5 text
â ${prefix}jewelry6 text
â ${prefix}jewelry7 text
â ${prefix}jewelry8 text
â ${prefix}metalh text
â ${prefix}golden text
â ${prefix}glitter text
â ${prefix}glitter2 text
â ${prefix}glitter3 text
â ${prefix}glitter4 text
â ${prefix}glitter5 text
â ${prefix}glitter6 text
â ${prefix}glitter7 text
â ${prefix}metale text
â ${prefix}carbon text
â ${prefix}candy text
â ${prefix}metalb text
â ${prefix}gemb text
â ${prefix}3dchrome text
â ${prefix}metalb2 text
â ${prefix}metalg text
â°â ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`â­ââ ã Others ã
â ${prefix}ttp [text]
â ${prefix}attp [text]
â ${prefix}afk [reason]
â ${prefix}translate kode_bahasa text
â ${prefix}kalkulator [query]
â ${prefix}smeme [text]
â ${prefix}smeme2 [text|text]
â°â ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`â­ââ ã Game Menu ã
â ${prefix}kuismath
â ${prefix}tebak [option]
â ${prefix}tekateki
â ${prefix}susunkata
â°â ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`â­ââ ã Asupan Menu ã
â ${prefix}chika
â ${prefix}delvira
â ${prefix}ayu
â ${prefix}bunga
â ${prefix}aura
â ${prefix}nisa
â ${prefix}ziva
â ${prefix}yana
â ${prefix}viona
â ${prefix}syania
â ${prefix}riri
â ${prefix}syifa
â ${prefix}mama_gina
â ${prefix}alcakenya
â ${prefix}mangayutri
â ${prefix}rikagusriani
â ${prefix}asupan
â ${prefix}bocil
â ${prefix}geayubi
â ${prefix}santuy
â ${prefix}ukhty
â°â ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`â­ââ ã Random Cewe ã
â ${prefix}china 
â ${prefix}indonesia 
â ${prefix}malaysia 
â ${prefix}thailand 
â ${prefix}korea 
â ${prefix}japan 
â ${prefix}vietnam 
â ${prefix}jenni 
â ${prefix}jiso 
â ${prefix}lisa  
â°â ${prefix}rose
`
}

exports.tqto = () =>{
	return`â­ââ ã TqTo ã 
â My God
â My Parents
â Fatih A.
â Ferdi
â DikaArdnt
â Mhankbarbar
â Nurutomo
â Rashid
â ZeeoneOfc
â Penyedia Module
â°â And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`â­ââ ã Primbon ã
â ${prefix}nomorhoki 887435047326
â ${prefix}artimimpi [query]
â ${prefix}artinama [query]
â ${prefix}ramaljodoh
â ${prefix}ramaljodohbali
â ${prefix}suamiistri
â ${prefix}ramalcinta
â ${prefix}cocoknama
â ${prefix}pasangan
â ${prefix}jadiannikah
â ${prefix}sifatusaha
â ${prefix}rezeki
â ${prefix}pekerjaan
â ${prefix}nasib
â ${prefix}penyakit
â ${prefix}tarot
â ${prefix}fengshui
â ${prefix}haribaik
â ${prefix}harisangar
â ${prefix}harisial
â ${prefix}nagahari
â ${prefix}arahrezeki
â ${prefix}peruntungan
â ${prefix}weton
â ${prefix}karakter
â ${prefix}keberuntungan
â ${prefix}memancing
â ${prefix}masasubur
â ${prefix}zodiak 
â°â ${prefix}shio [query]
`
}

exports.ephotomenu = (prefix) =>{
	return`â­ââ ã Ephoto360 Menu ã
â ${prefix}youtubegold
â ${prefix}youtubesilver
â ${prefix}facebookgold
â ${prefix}facebooksilver
â ${prefix}instagramgold
â ${prefix}instagramsilver
â ${prefix}twittergold
â ${prefix}twittersilver
â ${prefix}retrotext
â ${prefix}halloweenbats
â ${prefix}texthalloween
â ${prefix}cardhalloween
â ${prefix}birthdaycake
â ${prefix}thundertext
â ${prefix}icetext
â ${prefix}milkcake
â ${prefix}snowontext
â ${prefix}metalstar
â ${prefix}dragonfire
â ${prefix}zombie3d
â ${prefix}merrycard
â ${prefix}generalexam 
â ${prefix}viettel
â ${prefix}embroider
â ${prefix}graffititext
â ${prefix}graffititext2
â ${prefix}graffititext3
â ${prefix}covergraffiti
â ${prefix}moderngold
â ${prefix}capercut
â ${prefix}lovecard
â ${prefix}heartflashlight
â ${prefix}heartcup
â ${prefix}sunglightshadow
â ${prefix}graffiti3d
â ${prefix}moderngoldsilver
â ${prefix}moderngold2
â ${prefix}moderngold3
â ${prefix}fabrictext
â ${prefix}masteryavatar
â ${prefix}messagecoffee
â ${prefix}announofwin
â ${prefix}writeblood
â ${prefix}horrorletter
â ${prefix}writehorror
â ${prefix}shirtclub
â ${prefix}angelwing
â ${prefix}christmasseason
â ${prefix}projectyasuo
â ${prefix}lovelycute
â ${prefix}womansday
â ${prefix}covergamepubg
â ${prefix}nameonheart
â ${prefix}funnyhalloween
â ${prefix}lightningpubg
â ${prefix}greetingcardvideo 
â ${prefix}christmascard 
â ${prefix}galaxybat
â ${prefix}writegalaxy
â ${prefix}starsnight
â ${prefix}noeltext
â ${prefix}textcakes
â ${prefix}pubgbirthday
â ${prefix}galaxywallpaper
â ${prefix}pubgglicthvideo 
â ${prefix}pubgmascotlogo
â ${prefix}realembroidery
â ${prefix}vintagetelevision
â ${prefix}funnyanimations
â ${prefix}glowingtext
â ${prefix}textonglass
â ${prefix}cartoonstyle
â ${prefix}multicolor
â ${prefix}watercolor2
â ${prefix}textsky
â ${prefix}summerbeach
â ${prefix}1917text
â ${prefix}puppycute
â°â ${prefix}rosebirthday`
}

exports.stcmenu = (prefix) =>{
	return`â­ââ ã Telegram Sticker ã
â ${prefix}awoawo
â ${prefix}benedict
â ${prefix}chat
â ${prefix}dbfly
â ${prefix}dino_kuning
â ${prefix}doge
â ${prefix}gojosatoru
â ${prefix}hope_boy
â ${prefix}jisoo
â ${prefix}kr_robot
â ${prefix}kucing
â ${prefix}lonte
â ${prefix}manusia_lidi
â ${prefix}menjamet
â ${prefix}meow
â ${prefix}nicholas
â ${prefix}patrick
â ${prefix}popoci
â ${prefix}sponsbob
â ${prefix}kawan_sponsbob
â°â ${prefix}tyni
`}