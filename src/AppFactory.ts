import middy, { MiddlewareObj } from "@middy/core";
import { IRoute } from "./interfaces/route.interface";
import httpRouterHandler from "@middy/http-router";
import { ApiGatewayMiddleware } from "./middlewares/ApiGatewayEventMiddleware";

const middlewaresDefault: MiddlewareObj[] = [ApiGatewayMiddleware()];

export class AppFactory {
  static bootstrap(routes: IRoute[]) {
    routes = routes.map((route: IRoute) => {
      const { handler, middlewares = [] } = route;
      const composedHandler = middy().handler(handler as any);

      middlewares.push(...middlewaresDefault);

      middlewares.forEach((middleware) => {
        (composedHandler as any).use(middleware);
      });

      return {
        ...route,
        handler: composedHandler,
      };
    });

    return middy().handler(httpRouterHandler(routes as any));
  }
}
