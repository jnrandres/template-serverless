import { IController } from "@/src/interfaces/controller.interface";

export default async function (event: any, context: any) {
  const request = context.request;
  const controller = new CreateUsersController(request);
  return await controller.run();
}

class CreateUsersController implements IController {
  constructor(readonly request: any) {}

  async run() {
    try {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Create Users",
          request: this.request,
        }),
      };
    } catch (error) {
      console.error("Error: ", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Internal Server Error",
        }),
      };
    }
  }
}