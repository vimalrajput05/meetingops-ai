const { testAuthService } = require("../services/authService");

const testAuth = (req, res) => {
    const message = testAuthService();


    res.json({
        success: true,
        message
    });
};

module.exports = {
    testAuth
};
