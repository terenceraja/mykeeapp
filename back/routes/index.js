var express = require("express");
var router = express.Router();

const { zctracli } = require("../models"); // Import your Sequelize model

router.get("/getUsers", async function (req, res, next) {
  try {
    // Perform a Sequelize query, fetching only the first 10 records from the zctracli table
    const records = await zctracli.findAll({
      limit: 10,
    });

    // Send the first 10 records as a JSON response
    res.json({ data: records });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/findUser", async function (req, res, next) {
  try {
    const { login, password } = req.body;

    const user = await zctracli.findOne({
      where: {
        Login_lmt: login,
        Password_lmt: password,
      },
    });

    console.log(user);
    if (!user) {
      res.json({ message: "User not found !" });
    } else {
      res.json({ message: "User found !", IdCtraCli: user.IdCtraCli });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
