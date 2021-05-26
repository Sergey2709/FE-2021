function createLogger() {
  let warnArr = [];
  let errorArr = [];
  let logArr = [];
  let memoryArr = [];

  function warn(str) {
    let warnObj = {};

    warnObj.message = str;
    warnObj.type = 'warn';
    warnObj.dateTime = new Date();
    warnArr.unshift(warnObj);
    memoryArr.unshift(warnObj);
    
  }

  function error(str) {
    let errorObj = {};

    errorObj.message = str;
    errorObj.type = 'error';
    errorObj.dateTime = new Date();
    errorArr.unshift(errorObj);
    memoryArr.unshift(errorObj);
    
  }

  function log(str) {
    let logObj = {};

    logObj.message = str;
    logObj.type = 'log';
    logObj.dateTime = new Date();
    logArr.unshift(logObj);
    memoryArr.unshift(logObj);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };

  function getRecords(strNameRequest) {

    if (strNameRequest === undefined || strNameRequest === '') {
      return memoryArr;
    }

    if (strNameRequest === 'warn') {
      return warnArr;
    }

    if (strNameRequest === 'error') {
      return errorArr;
    }

    if (strNameRequest === 'log') {
      return logArr;
    }
  }
}

const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');

console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
