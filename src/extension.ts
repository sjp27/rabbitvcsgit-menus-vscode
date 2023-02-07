// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const childProcess = require("child_process");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "RabbitVCSGit Menus" is now active!');

	const allCommands = [
		 'add',  'blame',  'commit',  'diffalt',  'log', 'revert'
	];
	for (const value of allCommands) {
		let disposable = vscode.commands.registerCommand("sjp27.tgit." + value, (uri) => {
			let path = getPath(uri);
			execTgCommand(value, path);
            vscode.window.showInformationMessage('');
		});
		context.subscriptions.push(disposable);
	}
}

function execTgCommand(cmd : string, path : string) {
    var process = childProcess.spawn('rabbitvcs',[cmd,path]);
    
    process.stdout.on('data', (data: any) => {
        console.log(`stdout: ${data}`);
    });
    
    process.stderr.on('data', (data: any) => {
        console.log(`stderr: ${data}`);
    });
    
    process.on('error', (error: { message: any; }) => {
        console.log(`error: ${error.message}`);
    });
    
    process.on("close", (code: any) => {
        console.log(`child process exited with code ${code}`);
    });
}

function getPath(uri : any) {
    if (uri && uri.fsPath) {
        return uri.fsPath;
    }
    else if (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document) {
        return vscode.window.activeTextEditor.document.fileName;
    }
    else {
        return vscode.workspace.rootPath;
    }
}

// this method is called when your extension is deactivated
export function deactivate() {}
