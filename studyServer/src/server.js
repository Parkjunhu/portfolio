const _ = require('lodash');
const { createServer } = require('http');
const app = require('./app');

// port number of health-check http server for k8s cluster
const PORT = 9060;

function handleProcessEvents(closeFn) {
  // SIGINT : ctrl + c 종료
  // SIGTERM : 강제 정상 종료 (15) (k8s 에서 종료 시그널을 이걸로 보냄)
  // SIGQUIT : quit 로 종료
  ['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach((sig) => {
    process.on(sig, () => {
      console.log(`[server] received signal: ${sig}`);
      closeFn(0, sig);
    });
  });

  process
    // uncaughException 에러 종료
    .on('uncaughtException', (err) => {
      console.error(err, '[server] UncaughtException thrown');
      closeFn(1, 'uncaughtException');
    })
    // unhandledRejection 에러 종료
    .on('unhandledRejection', (reason, promise) => {
      console.error(reason, '[server] unhandledRejection:', promise);
    });
}

async function main() {
  const server = createServer(app.callback());

  const init = async () => {
  };

  const delay = (ms) => new Promise((resolve) => {
    _.delay(resolve, ms);
  });

  const serverCloseTask = async (_exitCode) => {
    const cleanUp = async () => {
    };

    cleanUp()
      .then(() => console.log('[server] terminated!'))
      .catch((err) => console.error(err))
      .finally(() => process.exit(_exitCode));
  };

  const serverClose = async (_exitCode, _event = undefined) => {
    console.log('[server] shutting down gracefully ...');

    await delay(1 * 1000);
    // close 시 진행 중인 작업 처리
    server.close(() => serverCloseTask(_exitCode));
  };

  try {
    await init();
  } catch (err) {
    Log.fatal(err, 'Initialization failed.');
    return serverClose(2);
  }

  server.listen(PORT, () => {
    console.log(`[server] starting: ${PORT}`);
  });

  handleProcessEvents(serverClose);
}

if (require.main === module) {
  main();
}
