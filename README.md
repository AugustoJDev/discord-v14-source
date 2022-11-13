# ![poppy](https://cdn.glitch.com/d5849b6d-b525-43f0-a87c-280ff619d588%2FWebp.net-resizeimage%20(2).png?v=1627787432690) Discord Bot Handler for v14 ![poppy](https://cdn.glitch.com/d5849b6d-b525-43f0-a87c-280ff619d588%2FWebp.net-resizeimage%20(2).png?v=1627787432690)

## 🥰 Hello World!

This handler was made in order to help all new discord.js devs to get their desired badge! So don't waste time and download the source now.<br /><br />
⚠ **IMPORTANT:** 
You will have to wait 24 hours after using the first command to be able to receive your active developer badge.

## 📁 Sessions
- 📦 [Dependências](#dependencies)
- 📜 [Como Usar](#how-to-use)
- 🔧 [Features](#commands)

<a name="dependencies"></a>
## 📦 Dependencies
Nome | Versão | Download |
--------- | ------ | ------ |
[@discordjs/rest](https://www.npmjs.com/package/@discordjs/rest/v/1.0.1) | 1.0.1 | @discordjs/rest@1.0.1 |
[colors](https://www.npmjs.com/package/colors/v/1.4.0) | 1.4.0 | colors@1.4.0 
[discord.js](https://www.npmjs.com/package/discord.js/v/14.1.2) | 14.1.2 | discord.js@14.1.2 |
[dotenv](https://www.npmjs.com/package/dotenv/v/16.0.1) | 16.0.1 | dotenv@16.0.1 |

<a name="how-to-use"></a>
## 📜 How to use
First, you need to configure your bot's token inside the `.env` file. Ex.:<br />
![](https://media.discordapp.net/attachments/1041146762339037255/1041154911183831110/image.png?width=862&height=432)<br />
After the token is set, start configuring your commands. In the `src/Example` folder there is a base command for you to use as an example for other commands. Note: the commands will have their names the same as the folders, thus avoiding defining the name within the code. Ex.: log.js => /log<br /><br />
With everything set up, just start the bot using the `node .` command in your terminal. In it will be the command log messages, events and a bot invite link with admin permission.<br />
![](https://media.discordapp.net/attachments/1041146762339037255/1041157425044148284/image.png)<br />
To turn off these logs, just go to `main.js` and set the logs to `false`.

<a name="commands"></a>
## 🔧 Features
• All commands have categories separated by folders to always keep everything organized;<br />
• The terminal logs can all be turned off, they are: events, commands, ready and errors;<br />
• The anti crash is already implemented in the bot, thus preventing the bot from being terminated due to errors;<br />
• It is no longer necessary to always provide the name of your command in the code, as it already has a simple system to set the name according to the file;<br />
• The handler has full support for global slashes, which means that you will get your active developer badge after 24 hours of the first command used by the source.