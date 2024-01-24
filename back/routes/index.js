var express = require("express");
var router = express.Router();

const { zctracli, zctraptf, zprestation } = require("../models"); // Import your Sequelize model

// ROUTE CLICK LOGIN GET ID USER
router.post("/zctracli", async function (req, res, next) {
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

// ROUTE PTF PAGE RENDER POST USER ID AND GET PTFS
router.post("/zctraptf", async function (req, res, next) {
  try {
    const { IdCtraCli } = req.body;

    // Assuming you have a foreign key relationship between zctraptf and zlignptf based on IdCtraPtf
    const ptfs = await zctraptf.findAll({
      where: {
        IdCtraCli: IdCtraCli,
      },
    });

    res.json({ message: "Portfolios found !", data: ptfs }); // Send the result as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
