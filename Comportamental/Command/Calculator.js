export default class Calculator {
    constructor() {
        this.number = 0;
        this.commands = [];
    }

    executeCommand(command) {
        this.number = command.execute(this.number);
        this.commands.push(command);
    }

    back() {
        this.number = this.commands[this.commands.length - 1].undo(this.number);
        this.commands.pop();
    }
}