require("colors");

const fs = require('node:fs');
const path = require('node:path');

const { Client, Collection, GatewayIntentBits } = require('discord.js');

global.client = new Client({ intents: [GatewayIntentBits.Guilds] });
global.basename = (fileName) => {
    let { basename } = require("path");
    return basename(fileName.split(".")[0]);
}

client.login(process.env.TOKEN)

// COMMANDS CONFIG //

client.commands = new Collection();
const commandsPath = path.join(`${process.cwd()}/src`, 'commands');
const commandFilesPath = fs.readdirSync(commandsPath)

for (const file of commandFilesPath) {
	const commandsPath = path.join(`${process.cwd()}/src/commands`, file);
	const commandFilesPath = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	
	for (const commandToExec of commandFilesPath) {
		const command = require(`${commandsPath}/${commandToExec}`);
	
		client.commands.set(command.data.name, command);

		if (logs.CommandsLoaded === true) {
			console.log(`COMMAND [`+ `${command.data.name}`.brightGreen + `] LOADED!`);
		}
	}
}

// EVENTS CONFIG //

const eventsPath = path.join(`${process.cwd()}/src`, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);

	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}

	if (logs.EventsLoaded === true) {
		console.log(`EVENT [`+ `${event.name}`.brightGreen + `] LOADED!`);
	}
}