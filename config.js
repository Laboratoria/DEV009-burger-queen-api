exports.port = process.argv[2] || process.env.PORT || 8080;
exports.dbUrl = process.env.MONGO_URL || process.env.DB_URL || 'mongodb+srv://daleskaSoncco:tomaleche88.@data.qyk0xrv.mongodb.net/?retryWrites=true&w=majority';
exports.secret = process.env.JWT_SECRET || 'esta-es-la-api-burger-queen';
exports.adminEmail = process.env.ADMIN_EMAIL || 'andrea.soncco.c@gmail.com';
exports.adminPassword = process.env.ADMIN_PASSWORD || 'ElijoSerFeliz27';
