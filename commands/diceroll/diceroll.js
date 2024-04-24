const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    //for better visual appeal i decided to name the command rolldice and not diceroll
    .setName("rolldice")
    .setDescription("Rolls a dice")
    .addSubcommand((command) =>
      command.setName("d4").setDescription("Rolls a d4")
    )
    //.addUserOption(option => option.setName(''.setDescription(''))))
    .addSubcommand((command) =>
      command.setName("d6").setDescription("Rolls a d6")
    )
    .addSubcommand((command) =>
      command.setName("d8").setDescription("Rolls a d8")
    )
    .addSubcommand((command) =>
      command.setName("d10").setDescription("Rolls a d10")
    )
    .addSubcommand((command) =>
      command.setName("d12").setDescription("Rolls a d12")
    )
    .addSubcommand((command) =>
      command.setName("d20").setDescription("Rolls a d20")
    )
    .addSubcommand((command) =>
      command.setName("d100").setDescription("Rolls a d100")
    ),

  async execute(interaction) {
    //const command = interaction.options.getString();
    const command = interaction.options.getSubcommand();
    // const command = interaction.options;
    var message_option = [
      "Critical failure!", // 0
      "Critical success!", // 1
      "Crit!", // 2
      "", // 3
    ];

    switch (command) {
      case "d4":
        var result = Math.floor(Math.random() * 4) + 1;
        await interaction.reply(`Rolling your dice ... ${result}`);
        switch (result) {
          case 1:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[2]}`
            ); // a/wait interaction.followUp(message_option[2]);
            break;
          case 4:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[1]}`
            );
            break;
          default:
        }
        break;
      case "d6":
        var result = Math.floor(Math.random() * 6) + 1;
        await interaction.reply(`Rolling your dice ... ${result}`);
        switch (result) {
          case 1:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[2]}`
            );
            break;
          case 6:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[1]}`
            );
            break;
          default:
        }
        break;
      case "d8":
        var result = Math.floor(Math.random() * 8) + 1;
        await interaction.reply(`Rolling your dice ... ${result}`);
        switch (result) {
          case 1:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[2]}`
            );
            break;
          case 8:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[1]}`
            );
            break;
          default:
        }
        break;
      case "d10":
        var result = Math.floor(Math.random() * 10) + 1;
        await interaction.reply(`Rolling your dice ... ${result}`);
        switch (result) {
          case 1:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[2]}`
            );
            break;
          case 10:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[1]}`
            );
            break;
          default:
        }
        break;
      case "d12":
        var result = Math.floor(Math.random() * 12) + 1;
        await interaction.reply(`Rolling your dice ... ${result}`);
        switch (result) {
          case 1:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[2]}`
            );
            break;
          case 12:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[1]}`
            );
            break;
          default:
        }
      case "d20":
        var result = Math.floor(Math.random() * 20) + 1;
        await interaction.reply(`Rolling your dice ... ${result}`);
        switch (result) {
          case 1:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[0]}`
            );
            break;
          case 20:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[1]}`
            );
            break;
          default:
        }
      case "d100":
        var result = Math.floor(Math.random() * 100) + 1;
        await interaction.reply(`Rolling your dice ... ${result}`);
        switch (result) {
          case 1:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[0]}`
            );
            break;
          case 100:
            await interaction.editReply(
              `Rolling your dice ... ${result}. \n ${message_option[1]}`
            );
            break;
          default:
        }
      //await interaction.reply("Command not found");
    }
  },
};

// planned: custom message with color if possible - crit 1 with red color and good crits (max number value) with green color
// done: custom message if crit and fixed code
