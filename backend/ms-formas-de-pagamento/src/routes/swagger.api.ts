import { enviroment } from './../config/environment';
import express from "express"
import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc"

export class SwaggerApi {
    public swagger(server: express.Application): void {
        const options = {
            docExpansion: "list",
        }

        const swaggerUiOpts = {
            explorer: false,
            customSiteTitle: enviroment.name,
            swaggerOptions: options,
            customCSS: ".swagger-ui .topbar { display: none} ",
            baseURL: "docs",
        }
        const opt = {
            definition: {
                info: {
                    title: enviroment.name,
                    version: "0.0.1",
                    description: "",
                },
                host: "localhost:3002",
                basePath: "",
                schemes: ["https", "http"],
            },
            apis: ["./src/model/**/*.ts", "./src/routes/*.ts", "./src/controllers/*.ts"],
        }

        const swaggerSpec = swaggerJSDoc(opt);
        swaggerUi.generateHTML(swaggerSpec, { ...swaggerUiOpts, baseURL: "docs" });

        server.get("/api-docs.json", (req: express.Request, res: express.Response) => {
            res.json(swaggerSpec)
        })

        server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOpts))
    }
}