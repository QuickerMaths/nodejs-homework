import morgan from "morgan";

export default function logger({ app }) {
  const formatsLogger = app.get("env") === "development" ? "dev" : "short";
  app.use(morgan(formatsLogger));
}
