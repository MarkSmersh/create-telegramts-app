#!/usr/bin/env node

// const { execSync } = require("child_process");
import { execSync } from "child_process"

function commandExecute(command) {
    try {
        execSync(`${command}`, { stdio: "inherit" });
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckCommand = `git clone --depth 1 https://github.com/MarkSmersh/create-telegramts-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm i`;

console.log(`Cloning ${repoName} repository...`);
const checkedOut = commandExecute(gitCheckCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependecies...`)
const installedDeps = commandExecute(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("Instalation is completed. Use next commands to start:");
console.log(`cd ${repoName} && npm start`);
