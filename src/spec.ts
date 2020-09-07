import { OpenApiBuilder } from "openapi3-ts";

const builder = new OpenApiBuilder();

builder.addTitle("Example API document");
builder.addDescription("Build OpenAPI3 api document with type support.");
builder.addVersion("1.0.0");

builder.addServer({ url: "https://example.com", description: "production" });
builder.addServer({
  url: "https://{env}.example.com",
  description: "non production",
  variables: { env: { enum: ["dev", "stg"], default: "dev" } },
});

builder.addPath("/example", {
  description: "example resource",
  get: {
    responses: {
      200: {
        description: "success",
        content: {
          "application/json": {
            schema: {
              title: "Example object",
              type: "object",
              properties: {
                a: {
                  nullable: false,
                  type: "number",
                },
              },
            },
          },
        },
      },
    },
  },
});

export const spec = builder.getSpec();
