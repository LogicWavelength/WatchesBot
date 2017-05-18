var Discord = require('discord.js');

//var auth = require("./auth.json");

var bot = new Discord.Client();
 
bot.on('message', msg => {
    if (msg.content.startsWith("hello")) {
        bot.sendMessage(msg, "Hello.");
    }

bot.loginWithToken("MzE0MDQ4MTE1NDI0NjI0NjQy.C_yfnQ.a_AW8l3w1ajXGTQefTXfXXsWotE");

});