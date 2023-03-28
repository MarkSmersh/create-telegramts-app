#! /usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");

function commandExecute(command) {
    try {
        execSync(`${command}`, { stdio: "inherit" });
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[3] || ".";

const gitCheckCommand = `git clone --depth 1 https://github.com/MarkSmersh/create-telegramts-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm i`;

console.log(`Cloning into ${repoName} repository...`);
const checkedOut = commandExecute(gitCheckCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependecies...`)
const installedDeps = commandExecute(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`Removing trash...`)
fs.rmSync(`./${repoName}/bin`, { force: true, recursive: true });

console.log("Instalation is completed. Use next commands to start:");
console.log(`cd ${repoName} && npm start`);