const jsonServer = require('json-server');
const auth = require('json-server-auth');
const authRoutes = require('./routes.json');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

const app = jsonServer.create();
const router = jsonServer.router('db.json');

const authMiddleware = jsonServer.rewriter(authRoutes);

app.db = router.db;

app.use(cors(corsOptions));
app.use(authMiddleware);
app.use(auth);
app.use(router);
app.listen(4000);