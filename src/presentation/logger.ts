import logger from "pino-http";

export default logger({
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
