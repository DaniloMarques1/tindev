import express from 'express';
import mongoose from 'mongoose';
import routes from './routes'
import cors from 'cors';

class App {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.database();
        this.middleware();
    }

    public getApplication(): express.Application {
        return this.app;
    }

    private middleware(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(routes);
    }

    private database(): void {
        mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-wnxtm.mongodb.net/tindev?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
}

export default new App().getApplication();