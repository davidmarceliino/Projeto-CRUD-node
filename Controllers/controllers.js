// Essa função, que está sendo exporta 

exports.getApp = (req, res) => {
    res.render('index', {
        title: 'Pagina inicial',
    });
};

exports.getOutra = (req, res) => {
    res.render('outra', {
        title: 'Pagina secundaria',
    });
};