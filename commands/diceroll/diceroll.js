const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	//for better visual appeal i decided to name the command rolldice and not diceroll
		.setName('rolldice')
		.setDescription('Rolls a dice')
		.addSubcommand(command => 
			command
				.setName('d4')
				.setDescription('Rolls a d4'))
				//.addUserOption(option => option.setName(''.setDescription(''))))
		.addSubcommand(command =>
			command
				.setName('d6')
				.setDescription('Rolls a d6'))
		.addSubcommand(command =>
			command
				.setName('d8')
				.setDescription('Rolls a d8'))
		.addSubcommand(command =>
			command
				.setName('d10')
				.setDescription('Rolls a d10'))
		.addSubcommand(command =>
			command
				.setName('d12')
				.setDescription('Rolls a d12'))
		.addSubcommand(command =>
			command
				.setName('d20')
				.setDescription('Rolls a d20'))
		.addSubcommand(command =>
			command
				.setName('d100')
				.setDescription('Rolls a d100')),
	async execute (interaction) {
        const command = interaction.options.getSubcommand();
 		// if (command === "d4") {
 		// 	await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 4)}`);
 		// } else if (command === "d6") {
        //     await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 6)}`);
 		// } else if (command === "d8") {
 		// 	await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 8)}`);
 		// } else if (command === "d10") {
 		// 	await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 10)}`);
 		// } else if (command === "d12") {
 		// 	await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 12)}`);
 		// } else if (command === "d20") {
 		// 	await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 20)}`);
 		// } else if (command ===  "d100") {
 		// 	await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 100)}`);
 		// } else {
        //      await interaction.reply("Command not working properly");
        //  }

        switch (command) {
            case 'd4':
            await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 4)}`);
        }
        switch (command) {
            case 'd6':
            await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 4)}`);
        }
        switch (command) {
            case 'd8':
            await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 8)}`);
        }
        switch (command) {
            case 'd10':
            await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 10)}`);
        }
        switch (command) {
            case 'd12':
            await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 12)}`);
        }
        switch (command) {
            case 'd20':
            await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 20)}`);
        }
        switch (command) {
            case 'd100':
            await interaction.reply(`Rolling your dice ... ${Math.floor(1 + Math.random() * 100)}`);
        }
 	},
};

// planned: feature for crit 1, crit 20 or crit 100 with custom message