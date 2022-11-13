const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

module.exports = {
	name: basename(__filename),
	once: true,
	execute(client) {

        rest.put(Routes.applicationCommands(client.user.id), { body: client.commands.map(command => command.data) })

        if(logs.Ready === true) {
		    console.log(`Ready! Logged in as ${client.user.tag}`);
            console.log(`Invite-me to your server: https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`);
        }
	},
};