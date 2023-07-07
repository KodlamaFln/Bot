const aoijs = require("aoi.js");
//segs
const bot = new aoijs.AoiClient({
  token: process.env.TOKEN,
  prefix: "?",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"]
});

const elixir = require("express")();elixir.get
('/', (req, res) =>{res.send("R O M E O Yapımı :D");});elixir.listen(8080);

const loader = new aoijs.LoadCommands(bot);
(async () => {
await loader.load(bot.cmd, "./komutlar/")
})()

loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["bright", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgCyan"],
    type: ["bright", "fgBlue"],
    text: ["bright", "fgGreen"]
  },
 
})
//////////VARİABLE//////////
bot.variables({
  değisken1: "değer1",
  değişken2: "değer2"
    }, "main")

bot.readyCommand({
      channel: "",
      code: `
$log[$userTag[$clientID] Olarak Hazır!]`
   }) 
//////////OYNUYOR KISMI//////////
bot.status({
  text: `R O M E O#1881`,
  type: `LISTENING`,
  status: "dnd",
  time: 15
})

//Elixir Development'e Ait Çalanı Afiyetle Yerim! :D
