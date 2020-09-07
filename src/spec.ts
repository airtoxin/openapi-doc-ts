import { OpenApiBuilder } from "openapi3-ts";

const builder = new OpenApiBuilder();

export const spec = builder.getSpec();
