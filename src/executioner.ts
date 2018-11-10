"use strict";
import { exec } from "child_process";
import * as vscode from "vscode";

export class executioner {
    public static startTerminal(cmd: string, path: string, id: string): void {
        if (this.terminals[id] === undefined)
            this.terminals[id] = vscode.window.createTerminal(id);
        this.terminals[id].show();
        this.terminals[id].sendText("cd " + path);
        this.terminals[id].sendText(cmd);
    }

    public static onDidCloseTerminal(closedTerminal: vscode.Terminal): void {
        delete this.terminals[closedTerminal.name];
    }

    private static terminals: { [id: string]: vscode.Terminal } = {};
}
