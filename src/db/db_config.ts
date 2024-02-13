import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DB_STRING });

const EXIT_EVENTS = ['SIGINT', 'SIGHUP', 'exit'] as const;
EXIT_EVENTS.forEach((exitEvent): void => {
    process.on(exitEvent, (): void => {
        pool.end();
    });
});

export default pool;
