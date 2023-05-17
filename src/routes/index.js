const schoolAdminRoutes = require('./schoolAdmin.route');
const classesRoutes = require('./classes.routes');
const salesRoutes = require ('./sales.routes');


const ApiRoutes = (app) => {
    app.use("/api/v1/guitarStore", schoolAdminRoutes);
    app.use("/api/v1/guitarStore", classesRoutes);
    app.use("/api/v1/guitarStore", salesRoutes);

};

module.exports = ApiRoutes;