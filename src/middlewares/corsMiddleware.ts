import cors, { CorsOptions } from "cors";

const whitelist = (process.env.CLIENT_WHITELIST as string).split(",");
const env = process.env.NODE_ENV || "development";

const corsOptions: CorsOptions = {
  origin:
    env === "production"
      ? (origin, callback) => {
          if (origin && whitelist.indexOf(origin) !== -1) {
            callback(null, true);
          } else {
            callback(new Error());
          }
        }
      : "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
};

export const corsMiddleware = () => cors(corsOptions);