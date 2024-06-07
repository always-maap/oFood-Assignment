import { pinoHttp } from "pino-http";

export default pinoHttp({
  quietReqLogger: true,
  transport: {
    target: "pino-http-print",
    options: {
      destination: 1,
      all: true,
      translateTime: true,
    },
  },
});
