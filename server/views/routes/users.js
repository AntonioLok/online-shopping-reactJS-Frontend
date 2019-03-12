const router = require('express').Router();
const registerUser = require('../../controllers/user/register');
const responseHandler = require('../../utils/response-handler');

router.post('/register', async (req, res) => {
  try {
    const { email } = req.body;

    await registerUser(email.toLowerCase());
    responseHandler.handleSuccess(res, 201);
  } catch (error) {
    responseHandler.handleError(res, 500);
  }
});

module.exports = router;
