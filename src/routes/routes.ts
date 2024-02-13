import { Express } from 'express';
import { authRouter } from './auth_router';
import { scoresRouter } from './scores_router';

export function useRouters(app: Express): void {
    app.use('/auth', authRouter);
    app.use('/scores', scoresRouter);
}
