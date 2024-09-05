import { IController } from "@/src/interfaces/controller.interface";

export default async function (event: any, context: any) {
  const request = context.request;
  const controller = new GetUsersController(request);
  return await controller.run();
}

class GetUsersController implements IController {
  constructor(readonly request: any) {}

  async run() {
    try {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Get Users",
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