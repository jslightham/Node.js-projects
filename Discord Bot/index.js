const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    
    switch(message.content.toLowerCase()){
        case "ping":
            message.channel.sendMessage("pong");
            break;
        case "yay":
            message.channel.sendMessage("yoohoo");
            break;
        case "lol":
            message.channel.sendMessage("ha");
            break;
			
    if (message.content.startsWith("kick")) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName);
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }
});

bot.login('');