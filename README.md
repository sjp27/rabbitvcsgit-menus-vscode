# RabbitVCSGit Command Menus
This project was inspired by https://github.com/Puvox/tortoisegit-buttons-in-vscode

This [VISUAL STUDIO CODE extension](https://marketplace.visualstudio.com/items?itemName=sjp27.rabbitvcsegit-menus-vscode) adds menus in right-click menu of sidebar File-Explorer, to execute RabbitVCSGit commands. *(This is an absolutely lighthweight extension without including dependencies or binary files, instead a small plain `.js` file, which is just a wrapper to pass commands to RabbitVCSGit)*


Most commonly used [rabbitvcs-git commands](https://github.com/rabbitvcs/rabbitvcs) are supported by this extension.


## Build

Run `npm i` and then `vsce package` (you need to have vsce installed by `npm install -g vsce`) and it produces .vsix package.

## Release Notes

### 0.1.0

Initial release.