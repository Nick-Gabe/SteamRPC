<p align="center"><img src="https://i.imgur.com/GfAsfN4.png" alt="SteamRPC" width="700" /></p>
<p align="center">
<img src="https://img.shields.io/github/repo-size/Nick-Gabe/SteamRPC?style=flat-square" alt="filesize"/>
<img src="https://img.shields.io/github/license/Nick-Gabe/SteamRPC.svg?style=flat-square" alt="license"/>
<img src="https://img.shields.io/github/stars/Nick-Gabe/SteamRPC?style=flat-square" alt="stars"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white" alt="nodejs"/>
<img src="https://img.shields.io/github/issues/Nick-Gabe/SteamRPC.svg?style=flat-square" alt="issues"/>
<img src="https://img.shields.io/github/package-json/v/Nick-Gabe/SteamRPC?style=flat-square" alt="version"/>
</p>
 
### <p align="center">This repository isn't associated with Steam or Valve Corp.</p>
<p align="center">
 <a href="#requirements">Requirements</a> •
 <a href="#installation">Installation</a> •
 <a href="#credits">Credits</a>
</p>

# **SRPC, Steam Rich Presence for Discord**
This repository is dedicated to make a better Discord Rich Presence for Steam games, with an easy configuration and no programming skills needed. In this README you'll
understand how to configure and use the program. It is worth to mention that **this only works for Windows at the moment**.

<div style="display:inline-block;vertical-align:top">
    <img src="https://i.imgur.com/TtLK9qH.png" alt="img" align="right"/>
</div>

SteamRPC is a program that communicates with the Steam API, to see your profile, the games you're playing and then show it on Discord with a bit more
information than the usual. But there are some limits the program cannot surpass, I'll list them:
* The code can only view games that Steam marked as played in the last 2 weeks (played = opened and closed at least 1 time)
* In order to the program to see your profile, it must be public and online/afk, otherwise it will fail.
* SteamRPC will be shown even if the game already have a custom Discord Presence, if you want it to not be shown for a specific game, mark it as blacklisted in the [environment](https://github.com/Nick-Gabe/SteamRPC/blob/main/SteamRPC/environment.js).
* Your profile is checked once in a minute, to prevent API Abuse.
* If there are no games being played, nothing will be displayed.
* Discord doesn't let you click your own buttons(Game Page).

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
- [x] Windows 10

## Installation
If you want the program to start running when you turn on your pc, so you don't have to open it everytime, follow these steps:
1. Decompress this repository in any folder you'd like.
2. Read [Before Installing.txt](https://github.com/Nick-Gabe/SteamRPC/blob/main/Before%20Installing.txt)
3. After changing the variables, Open the Installer
4. Done! Now the program will start with your computer.
##### _You can always uninstall or disable through msconfig._

## Credits
Hey, im [Nick Gabe](https://github.com/Nick-Gabe), the creator of this repository. And if you'd like to contribute to this
project, feel free to create a pull request with your changes. If you find any error or bug, post it on the Issues tab and I'll look into fixing it.
* Liked the idea of the project? Give it a star! :D