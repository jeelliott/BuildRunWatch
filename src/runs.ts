"use strict";
import * as path from "path";
import * as vscode from "vscode";
import { executioner } from "./executioner";

export class runs {
    public static build(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            var id = fileUri.fsPath.substr(fileUri.fsPath.lastIndexOf("/") + 1).replace(".csproj", "");
            var path = fileUri.fsPath.substr(0, fileUri.fsPath.lastIndexOf("/"));
            var cmd = "dotnet build";
            executioner.startTerminal(cmd, path, id);
        }
    }

    public static clean(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            var id = fileUri.fsPath.substr(fileUri.fsPath.lastIndexOf("/") + 1).replace(".csproj", "");
            var path = fileUri.fsPath.substr(0, fileUri.fsPath.lastIndexOf("/"));
            var cmd = "dotnet clean";
            executioner.startTerminal(cmd, path, id);
        }
    }

    public static run(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            var id = fileUri.fsPath.substr(fileUri.fsPath.lastIndexOf("/") + 1).replace(".csproj", "");
            var path = fileUri.fsPath.substr(0, fileUri.fsPath.lastIndexOf("/"));
            var cmd = "dotnet run";
            executioner.startTerminal(cmd, path, id);
        }
    }

    public static watch(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            var id = fileUri.fsPath.substr(fileUri.fsPath.lastIndexOf("/") + 1).replace(".csproj", "");
            var path = fileUri.fsPath.substr(0, fileUri.fsPath.lastIndexOf("/"));
            var cmd = "dotnet watch run";
            executioner.startTerminal(cmd, path, id);
        }
    }

    public static start(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            var segs: string[] = fileUri.fsPath.split("/");
            var id = segs[segs.length - 2];
            var path = fileUri.fsPath.substr(0, fileUri.fsPath.lastIndexOf("/"));
            var cmd = "npm start";
            executioner.startTerminal(cmd, path, id);
        }
    }
}
