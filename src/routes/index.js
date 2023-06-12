const schoolAdminRoutes = require('./schoolAdmin.route');
const classesRoutes = require('./classes.routes');
const salesRoutes = require ('./sales.routes');
const teachersRoutes = require ('./teachers.routes')
const studentsRoutes = require ('./students.routes')
const productsRoutes = require ('./products.route')
const authRoutes = require('./auth.route')

const ApiRoutes = (app) => {
    app.use("/api/v1/guitarStore", schoolAdminRoutes);
    app.use("/api/v1/guitarStore", classesRoutes);
    app.use("/api/v1/guitarStore", salesRoutes);
    app.use("/api/v1/guitarStore", teachersRoutes);
    app.use("/api/v1/guitarStore", studentsRoutes);
    app.use("/api/v1/guitarStore", productsRoutes);
    app.use("/api/v1/guitarStore", authRoutes);
    
};

module.exports = ApiRoutes;