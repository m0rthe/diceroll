# **DiceRoll**

<sup>a discord.js bot</sup>

> I'm currently learning javascript and this is my first (bigger) project. So the code I wrote is still really simple and not advanced.
> I followed the [discord.js](https://github.com/discordjs/discord.js/) guide and decided that I wanted my own features.
> So I customized the commands to my own preferences.
> If you don't know discord.js and node.js - take a look at the [guide](https://discordjs.guide/#before-you-begin). It was really helpful.

# **Installing**

### 1. Download the files

`git clone git@github.com:m0rthe/diceroll.git`

### 2. Go into the cloned folder

`cd diceroll`

### 3. Install node.js

`npm install -g n`

### 4. Install discord.js

`npm install discord.js`

# **Create a discord bot**

Use the [discord developer portal](https://discord.com/developers/), if you don't already have one.
If you don't know how, use the [guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot/) .

After you're done, create a config.json file and copy your `token` , `bot Id` and `server Id` into the config.json file.

<img src="/images/config_file.png" width="303" height="133" />

# **Start the bot in the terminal**

`node app.js`

# **Start the bot using docker**

`docker-compose up -d`

# DiceRoll commands:

You can choose to roll a

- d4
- d6
- d8
- d10
- d12
- d20
- d100

by using the command `/rolldice {your choice}` which looks like this:

<img src="/images/preview.png" width="788" height="350" />

# Credits

- [discord.js](https://github.com/discordjs/discord.js/)
- [node.js](https://nodejs.org/en/download/current/)

_I may update the code in the future, when I get more knowledgeable and get new ideas._
