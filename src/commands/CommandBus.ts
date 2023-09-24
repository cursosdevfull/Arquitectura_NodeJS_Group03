import { ICommandHandler } from "./handlers/command-handler";

export class CommandBus {
  private readonly handlers: ICommandHandler<any>[] = [];
  private static instance: CommandBus;

  private constructor() {}

  static create(): CommandBus {
    if (!this.instance) {
      this.instance = new CommandBus();
    }
    return this.instance;
  }

  registerHandler(handler: ICommandHandler<any>) {
    this.handlers.push(handler);
  }

  execute(command: unknown) {
    const handler = this.handlers.find((h) => h.canHandle(command));

    if (!handler) {
      throw new Error("Handler not found");
    }

    handler.handle(command);
  }
}
