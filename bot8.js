const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const mtra9a = new Discord.Client();
//const Bot = new Discord.Client();

client.on("ready", () => {
console.log('hello again bitch');
 console.log(`Logged in as ${client.user.tag}!`);
});

function timerFunc() {
    client.on('message', msg => {
        client.guilds.get('427437686681501698').channels.get('507639275295080474').send(Math.random().toString(36).substring(7)) 


    });
}

var timer = setTimeout(timerFunc, 1000);

bot.on("ready", () => {
let channel =  bot.channels.get("593170962128568341")
     setInterval(() => {
    channel.send(Math.random().toString(20).substring(1))

});
});

mtra9a.on("ready", () => {
let channel = mtra9a.channels.get("593170962128568341")
     setInterval(() => {
    channel.send(Math.random().toString(20).substring(1))

});
});

/*
Bot.on("ready", () => {
let channel =     Bot.channels.get("489184072283717633")
     setInterval(() => {
    channel.send(Math.random().toString(20).substring(1))
});
});*/
client.login(process.env.BOT_TOKEN1);
bot.login(process.env.BOT_TOKEN2);
mtra9a.login(process.env.BOT_TOKEN8);
