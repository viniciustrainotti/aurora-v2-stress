
const user = 'postgres';
const pass = 'postgrestest';
const hostWrite = '';
const hostRead = '';
const port = '5432';
const db = 'test';

import postgres from 'postgres';

const sqlWriter = postgres(`postgres://${user}:${pass}@${hostWrite}:${port}/${db}`, {});
const sqlReader = postgres(`postgres://${user}:${pass}@${hostRead}:${port}/${db}`, {});

(async () => {

    let res;
    let count = 0;

    while(true) {

        console.log('run');

        let column1 = 'Lorem';
        let column2 = 'ipsum';

        await sqlWriter`
            INSERT INTO stress (column1, column2) VALUES (${ column1 }, ${ column2 })
            returning column1 column2
          `

        await sqlReader`
            SELECT
                column1,
                degrees(id / 0.5),
                log(id / 0.1),
                sqrt(id),
                exp(sqrt(id))
            from
                stress
            ORDER BY column1 ASC
            LIMIT 100
          `

        console.log(count);
        count++;

    }

})().catch(console.error);

