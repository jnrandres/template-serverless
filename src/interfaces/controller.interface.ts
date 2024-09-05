export interface IController {
  request: any;

  run(): Promise<{ statusCode: number; body: string }>;
}
