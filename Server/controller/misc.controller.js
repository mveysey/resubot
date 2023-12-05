const miscController = {
    health: (req, res) => {
        // simple liveness check
        res.status(200).json({
            status: 'OK',
            message: 'Resubot Node Js Server is live',
        });
    },

    //  check server uptime
    uptime: (req, res) => {
        const uptimeInSeconds = process.uptime();
        res.status(200).json({
            status: 'OK',
            uptime: 'The Server has been up for ' + uptimeInSeconds + ' seconds',
        });
    },

    // check server memory usage
    memory: (req, res) => {
        const memoryUsage = process.memoryUsage();
        res.status(200).json({
            status: 'OK',
            memoryUsage,
        });
    },

    // get information about the database
    databaseInfo: (req, res) => {
        const databaseInfo = {
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            database: process.env.DB_DBNAME,
        };

        res.status(200).json({
            status: 'OK',
            database: databaseInfo,
        });
    },


    // check server environment variables
    environment: (req, res) => {
        const envVariables = process.env;
        res.status(200).json({
            status: 'OK',
            environment: envVariables,
        });
    },
}

module.exports = miscController