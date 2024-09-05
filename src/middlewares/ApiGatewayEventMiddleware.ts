
const buildRequestObject = (event: any) => {
  return {
    headers: event.headers,
    body: event.body ? JSON.parse(event.body) : {},
    pathParameters: event.pathParameters,
    queryStringParameters: event.queryStringParameters,
  };
};

export const ApiGatewayMiddleware = () => {
  return {
    before: async (handler: any) => {
      console.log("Before handler:");
      handler.context.request = buildRequestObject(handler.event);
    },
    after: async (handler: any) => {
      console.log("After handler:");
    },
    onError: async (handler: any) => {
      console.log("Error handler:");
    },
  };
};
