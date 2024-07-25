import app from "./http";

const start = async () => {
  try {
    console.log("🚀 Starting server on port 3000");
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
