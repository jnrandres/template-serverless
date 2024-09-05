import { AppFactory } from "@/src/AppFactory";
import { routes } from "./users.route";

export const handler = AppFactory.bootstrap(routes);
