import AuthApi from "./Auth.js"

const swagger = {
  swagger: "2.0",
  info: {
    "description": "This is a swagger docs for libe api.",
    "version": "1",
    "title": "Libe API",
  },
  paths: {
    "/health/ping": {
      get: {
        tags: ["Test"],
        summary: "Place an order for a pet",
        description: "Place a new order in the store",
        parameters: [
          {
            name: "testParam",
            in: "query",
            description: "user id",
            required: true,
            schema: {
              type: "integer",
              example: 200
            }
          },
          {
            name: "testParam2",
            in: "path",
            description: "user id",
            required: true,
            schema: {
              type: "integer",
              example: 200
            }
          },
          {
            name: "testParam3",
            in: "body",
            description: "user id",
            required: true,
            "schema": {
              "type": "object",
              "properties": {
                "username": {
                  "type": "string",
                  "description": "The username of the user",
                  "example": "user123"
                },
                "password": {
                  "type": "string",
                  "description": "The password of the user",
                  "example": "password123"
                }
              }
            }
          }
        ],
        responses: {
          200: {
            description: "Successful",
            schema: {
              type: "object",
              properties: {
                alertId: {
                  type: "integer",
                  format: "int32",
                  example: "200"
                },
              }
            }
          }
        }
      }
    },
    "/users": {
      "post": {
        "summary": "Create a new user",
        "description": "Create a new user with details and profile picture",
        "consumes": ["multipart/form-data"],
        "produces": ["application/json"],
        "parameters": [
          {
            "in": "formData",
            "name": "username",
            "type": "string",
            "description": "The username of the user"
          },
          {
            "in": "formData",
            "name": "password",
            "type": "string",
            "description": "The password of the user"
          },
          {
            "in": "formData",
            "name": "email",
            "type": "string",
            "description": "The email address of the user"
          },
          {
            "in": "formData",
            "name": "profile_picture",
            "type": "file",
            "description": "The profile picture of the user"
          }
        ],
        "responses": {
          "201": {
            "description": "User created successfully"
          },
          "400": {
            "description": "Bad request: Invalid input"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      },
      "get": {
        "summary": "Get list of users",
        "description": "Retrieve a list of all users",
        "produces": ["application/json"],
        "responses": {
          "200": {
            "description": "List of users retrieved successfully",
            "schema": {
              "type": "object",
              "properties": {
                "result": {
                  "type": "string",
                  "example": "ok"
                },
                "users": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 1
                      },
                      "username": {
                        "type": "string",
                        "example": "user123"
                      },
                      "email": {
                        "type": "string",
                        "example": "user123@example.com"
                      },
                      "created_at": {
                        "type": "string",
                        "format": "date-time",
                        "example": "2024-02-15T12:00:00Z"
                      }
                    }
                  },
                  "example": [
                    {
                      "id": 1,
                      "username": "user1",
                      "email": "user1@example.com",
                      "created_at": "2024-02-15T12:00:00Z"
                    },
                    {
                      "id": 2,
                      "username": "user2",
                      "email": "user2@example.com",
                      "created_at": "2024-02-15T12:00:00Z"
                    },
                    {
                      "id": 3,
                      "username": "user3",
                      "email": "user3@example.com",
                      "created_at": "2024-02-15T12:00:00Z"
                    },
                    {
                      "id": 4,
                      "username": "user4",
                      "email": "user4@example.com",
                      "created_at": "2024-02-15T12:00:00Z"
                    },
                    {
                      "id": 5,
                      "username": "user5",
                      "email": "user5@example.com",
                      "created_at": "2024-02-15T12:00:00Z"
                    }
                  ]
                }
              }
            }
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    ...AuthApi
  },
}


export default swagger