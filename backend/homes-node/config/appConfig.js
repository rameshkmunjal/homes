let appConfig={};

appConfig.port=3000;
appConfig.apiVersion='/api/v1';
appConfig.allowedCorsOrigin='*';
appConfig.db={url:'mongodb://127.0.0.1:27017/homeDB'};
appConfig.env='dev';

module.exports = {
    port:appConfig.port,
    apiVersion:appConfig.apiVersion,
    allowedCorsOrigin:appConfig.allowedCorsOrigin,
    environment:appConfig.env,
    db:appConfig.db
}