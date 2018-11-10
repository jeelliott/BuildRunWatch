"use strict";
import * as vscode from "vscode";
import { runs } from "./runs";
import { executioner } from "./executioner";

export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(vscode.commands.registerCommand("runs.build", (fileUri: vscode.Uri) => {
        runs.build(fileUri);
    }));

    context.subscriptions.push(vscode.commands.registerCommand("runs.clean", (fileUri: vscode.Uri) => {
        runs.clean(fileUri);
    }));

    context.subscriptions.push(vscode.commands.registerCommand("runs.run", (fileUri: vscode.Uri) => {
        runs.run(fileUri);
    }));

    context.subscriptions.push(vscode.commands.registerCommand("runs.watch", (fileUri: vscode.Uri) => {
        runs.watch(fileUri);
    }));

    context.subscriptions.push(vscode.commands.registerCommand("runs.start", (fileUri: vscode.Uri) => {
        runs.start(fileUri)
    }));

    context.subscriptions.push(vscode.window.onDidCloseTerminal((closedTerminal: vscode.Terminal) => {
        executioner.onDidCloseTerminal(closedTerminal);
    }));
}

export function deactivate() {
}
