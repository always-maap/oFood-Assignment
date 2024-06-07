import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "oFood API",
    description: "oFood's 2024 Summer Software Engineering Assignment",
  },
  components: {
    schemas: {
      review: {
        order_id: "1122334455",
        store_id: "111111",
        order_feedback: {
          rating: 5,
          comment: "بهترین کیفیت در جردن",
        },
        delivery_feedback: {
          rating: 2,
          comment: "غذا نیاز به گرم کردن مجدد داشت",
        },
      },
    },
  },
  host: "localhost:8080",
};

const outputFile = "../../../dist/swagger-output.json";
const routes = ["../main.ts", "./router.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
