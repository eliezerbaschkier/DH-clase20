const menu = [
    {nombre: 'Carpaccio fresco',
    descripcion: 'Entrada Carpaccio de salmón con cítricos',
    descripcionLarga: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    precio: 'U$S 65.50',
    imgsrc: '/images/Carpaccio-de-salmon.jpg'},

    {nombre: 'Risotto de berenjena',
    descripcion: 'Risotto de berenjena y queso de cabra',
    descripcionLarga: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    precio: 'U$S 47.00',
    imgsrc: '/images/Risotto-berenjena-queso-cabra.jpg'},

    {nombre: 'Mousse de arroz',
    descripcion: 'Mousse de arroz con leche y aroma de azahar',
    descripcionLarga: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    precio: 'U$S 27.50',
    imgsrc: '/images/Mousse-de-arroz-con-leche.jpg'},

    {nombre: 'Espárragos blancos',
    descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
    descripcionLarga: '',
    precio: 'U$S 37.50',
    imgsrc: '/images/esparragos.png'}
];

const indexController = {
    home:  function(req, res, next) {
        res.render('index', {menu: menu});
      },

    detalle:  function(req, res, next) {
        let idProducto = req.params.id;
        res.render('detalleMenu', {menu: menu, idProducto: idProducto});
      }
}

module.exports = indexController;