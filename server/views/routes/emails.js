const router = require('express').Router();
const User = require('../../models/user');
const responseHandler = require('../../utils/response-handler');

// Get check if email is alredy created
router.get('/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const userEmail = await User.findByEmail(email);

    responseHandler.handleSuccess(res, 200, { emailFound: !!userEmail });
  } catch (error) {
    responseHandler.handleError(res, 500);
  }
});

module.exports = router;
