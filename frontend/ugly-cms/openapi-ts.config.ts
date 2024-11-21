import {defineConfig} from "@hey-api/openapi-ts";

export default defineConfig({
    client: "@hey-api/client-axios",
    input:
        "http://localhost:8000/openapi.json",
    output: "src/services/api-client",
});
