import { app } from "./app";

const PORT=3333;
const HOST="http://localhost";

app.listen(PORT, () => console.log(`Server is running! on ${HOST}:${PORT}`));