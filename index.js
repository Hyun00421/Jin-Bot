const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
if (msg.content === '!입국안내') {
	msg.reply('닉네임/나이/성별/들어온경로를 적고 입국안내 파트너를 맨션해주세요!');
	}
});

client.login('ODY5MjI1MDIxMzA5MDgzNzA4.YP7G4g.jHZpuULui1Z9Dq7-Yb5AmQDTkME');