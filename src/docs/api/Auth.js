
/**@type {import("../../types").ApiExample} */
const AuthApi = {
  "/api/v1/auth/register": {
    post: {
      tags: ['Auth'],
      summary: "Register a new user",
      description: "Register a new user with provided details",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      parameters: [
        {
          in: "formData",
          name: "fullName",
          type: "string",
          description: "The full name of the user",
          required: true,
          example: "John Doe",
        },
        {
          in: "formData",
          name: "username",
          type: "string",
          description: "The username of the user",
          required: true,
          example: "johndoe123",
        },
        {
          in: "formData",
          name: "password",
          type: "string",
          description: "The password of the user",
          required: true,
          example: "password123",
        },
        {
          in: "formData",
          name: "avatar",
          type: "file",
          description: "The avatar of the user",
          required: true,
          example: "1.jpg",
        },
      ],
      responses: {
        200: {
          description: "User registered successfully",
          schema: {
            type: "object",
            properties: {
              result: {
                type: "string",
                example: "SUCCESS",
              },
              user: {
                type: "object",
                properties: {
                  phoneVerified: { type: "boolean", example: false },
                  emailVerified: { type: "boolean", example: false },
                  gender: { type: "string", example: "UNSET" },
                  role: { type: "string", example: "DEFAULT" },
                  isLock: { type: "boolean", example: false },
                  userId: { type: "integer", example: 7 },
                  fullName: { type: "string", example: "John Doe" },
                  username: {
                    type: "string", example: "johndoe123"
                  },
                  avatar: {
                    type: "string", example: "uploads/images/b7ef3116703f4d21b1e981ddc2cb108f_1.jpg"
                  },
                  updatedAt: {
                    type: "string", format: "date-time", example: "2024-02-15T12:31:17.518Z"
                  },
                  createdAt: {
                    type: "string", format: "date-time", example: "2024-02-15T12:31:17.518Z"
                  },
                  accessToken: {
                    type: "string", example: "12321"
                  },
                  refreshToken: {
                    type: "string", example: "1232131"
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/api/v1/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Login",
      description: "Login",
      parameters: [
        {
          name: "username",
          in: "query",
          required: true,
          schema: { type: "string", example: "username" }
        }
      ]
    }
  }
}

export default AuthApi