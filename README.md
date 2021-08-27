<p align="center"><img src="https://i.imgur.com/UMZhErc.png" alt="SteamPresence" width="500" /></p>
<p align="center">
<img src="https://img.shields.io/github/repo-size/Nick-Gabe/SteamPresence" alt="filesize"/>
<img src="https://img.shields.io/github/license/Nick-Gabe/SteamPresence?style=flat-square" alt="license"/>
<img src="https://img.shields.io/github/stars/Nick-Gabe/SteamPresence?style=flat-square" alt="stars"/>
</p>
 
### <p align="center">This repository isn't associated with Steam or Valve Corp.</p>
<p align="center">
 <a href="#requirements">Requirements</a> •
 <a href="#manual-use">Manual use</a> •
 <a href="#installation">Installation</a> • 
 <a href="#credits">Credits</a>
</p>

# **Steam Presence, for Discord**
This repository is dedicated to make a better Discord Rich Presence for Steam games, with an easy configuration and no programming skills needed. In this README you'll
understand how to configure and use the program. It is worth to mention that **this only works for Windows at the moment**.

### Before actually showing how to use, I would like to explain how it works:
Steam Presence is a program that communicates with the SteamAPI, to see your profile, the games you're playing and then show it on Discord with a bit more
information than the usual. But there are some limits the program cannot surpass, I'll list them:
* The bot can only view games that Steam marked as played in the last 2 weeks, played = opened and closed
* In order to the program to see your profile, it must be public and online/afk, otherwise it will fail.
* Steam Presence will be shown even if the game already have a custom Discord Presence.
* Your profile is checked once in a minute, to prevent API Abuse.
* If there are no games being played, nothing will be displayed.
* Discord doesn't let you click your own buttons.

## Requirements
- [Node.Js](https://nodejs.org/en/download/) version 12.18.2 or above
- Notepad or any text editor
- [Winrar](https://www.win-rar.com/start.html?&L=0), [7-Zip](https://www.7-zip.org/download.html) or any program that can decompress files
- [Discord desktop version](https://discord.com/download)
- Operational systems tested:
- [ ] Windows XP
- [ ] Windows Vista
- [x] Windows 7
- [ ] Windows 8
- [ ] Windows 10

## Manual Use
By using manually, I mean you'll have to execute the file to run Steam Presence, instead of it starting automatically. To do so,
you just need to follow these steps:
1. Decompress this repository in any folder you'd like.
2. Read [Before Installing.txt](https://github.com/Nick-Gabe/SteamPresence/Before-Installing.txt)
3. After changing the variables, you can run the file "SteamPresence.vbs" once and it should start running.
4. (Optional) You can create a shortcut if you want to.

## Installation
If you want the program to start running when you turn on your pc, so you don't have to open it everytime, follow these steps:
1. Open the Installer
2. Done! Now the program will start with your computer.
##### _You can always uninstall or disable through the msconfig._

## Credits
Hey, im [Nick Gabe](https://github.com/Nick-Gabe], the creator of this repository. And if you'd like to contribute to this
project, feel free to create a pull request with your changes. If you find any error or bug, post it on the Issues tab and I'll look into fixing it.
* Liked the idea of the project? Put a star on this project :D