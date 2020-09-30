import * as fs from 'fs'
import * as https from 'https'
import * as dotenv from 'dotenv';
import server from './server'
import { getConnection } from './database';

dotenv.config();
if (!process.env.PORT) {
  process.exit(1);
}



const PORT: number = parseInt(process.env.PORT as string, 10);

// async function onStart(): Promise<any> {
//   try {
//     await getConnection()
//   } catch (err) {
//     // tslint:disable-next-line:no-console
//     console.log(err)
//     throw err
//   }
// }

const currentServer = https.createServer(
  server
)

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => currentServer.close());
}

// currentServer.listen(PORT, onStart)
// currentServer.listen(PORT)

server.listen(PORT, () => {
console.log(`Server up and running on https://localhost:${PORT}`)

});

// tslint:disable-next-line:no-console

/**
 * Webpack HMR Activation
 */

