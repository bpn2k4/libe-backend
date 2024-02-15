type Tag = "Auth" | "Collection"
type Parameter = {
  name: String,
  in: "path" | "query" | "formData" | "body",
  description: String,
  required: true | false,
  type: "integer" | "string" | "file",
  schema: {
    type: "integer" | "string" | "file",
    example: any
  }
}

type Property = {
  type: "integer" | "string",
  example: any
}

type Response = {
  description: String,
  schema: {
    name: String,
    type: "object",
    properties: {
      [key: string]: Property
    }
  }
}

type Method = {
  summary: String,
  description: String,
  tags: Tag[],
  parameters: Parameter[],
  responses: {
    [key: number]: Response
  }
}

type SwaggerApi = {
  get: Method,
  post: Method,
  patch: Method,
  delete: Method,
}

export type ApiExample = {
  [key: string]: SwaggerApi
}