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
        switch (command) {
            case 'd4':
            	await interaction.reply(`Rolling your dice ... ${(Math.floor(Math.random() * 4) +1)}`);
				break;
			case 'd6':
				await interaction.reply(`Rolling your dice ... ${(Math.floor(Math.random() * 6) +1)}`);
				break;
			case 'd8':
				await interaction.reply(`Rolling your dice ... ${(Math.floor(Math.random() * 8) +1)}`);
				break;
			case 'd10':
				await interaction.reply(`Rolling your dice ... ${(Math.floor(Math.random() * 10) +1)}`);
				break;
			case 'd12':
				await interaction.reply(`Rolling your dice ... ${(Math.floor(Math.random() * 12) +1)}`);
				break;
			case 'd20':
				await interaction.reply(`Rolling your dice ... ${(Math.floor(Math.random() * 20) +1)}`);
				break;
			case 'd100':
				await interaction.reply(`Rolling your dice ... ${(Math.floor(Math.random() * 100) +1)}`);
				break;
			default:
				await interaction.reply("Command not found");
        }
 	},
};

// planned: feature for crit 1, crit 20 or crit 100 with custom message