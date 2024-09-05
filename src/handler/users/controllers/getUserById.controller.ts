import { IController } from "@/src/interfaces/controller.interface";

export default async function (event: any, context: any) {
  const request = context.request;
  const controller = new GetUserByIdController(request);
  return await controller.run();
}

class GetUserByIdController implements IController {
  constructor( readonly request: any) {}

  async run() {
    try {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "User by ID",
          context: this.request,
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
