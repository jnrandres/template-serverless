import { MiddlewareObj } from "@middy/core";

export interface IRoute {
  method: string;
  path: string;
  handler: Function;
  middlewares?: MiddlewareObj[];
}
