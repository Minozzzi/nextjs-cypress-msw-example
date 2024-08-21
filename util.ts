import { type JsonBodyType, http, HttpResponse } from "msw";

export type MockRequest = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  response: JsonBodyType;
};

export const createMock = ({ url, method, response }: MockRequest) =>
  http[method](url, () => HttpResponse.json(response));
