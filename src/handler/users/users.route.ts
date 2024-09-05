import { IRoute } from "@/src/interfaces/route.interface";
import {
  createUsersController,
  deleteUsersByIdController,
  getUserByIdController,
  getUsersController,
  updateUsersByIdController,
} from "./controllers";

export const routes: IRoute[] = [
  {
    method: "POST",
    path: "/users",
    handler: createUsersController,
    middlewares: [],
  },
  {
    method: "GET",
    path: "/users",
    handler: getUsersController,
    middlewares: [],
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: getUserByIdController,
    middlewares: [],
  },
  {
    method: "PUT",
    path: "/users/{id}",
    handler: updateUsersByIdController,
    middlewares: [],
  },
  {
    method: "DELETE",
    path: "/users/{id}",
    handler: deleteUsersByIdController,
    middlewares: [],
  },
];
