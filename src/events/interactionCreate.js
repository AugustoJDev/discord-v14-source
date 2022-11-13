const fs = require('node:fs');
const path = require('node:path');

module.exports = {
	name: basename(__filename),
	async execute(interaction) {

		if (!interaction.isChatInputCommand()) return;

	    const command = client.commands.get(interaction.commandName);

	    if (!command) return;

	        try {
		        await command.execute(interaction);
	        } catch (error) {
		        console.error(error);
		        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	        }
	},
};