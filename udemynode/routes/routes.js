module.exports = function (express, app) {
    var router = express.Router();
    var data = {pageTitle: 'Page Title'};
    console.log(data.pageTitle);

    var dataArray = [{pageTitle: 'Page Title'}];
    console.log(dataArray[0].pageTitle);

    router.get('/', function (req, res, next) {
        res.render('index', {data: data});
    });

    router.get('/chatrooms', function (req, res, next) {
        res.render('index', {data: data});
    });

    app.use('/routes',router);

    // app.use('/', router);

};
















