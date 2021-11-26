const express = require("express");
const router = express.Router();
//
const dotenv = require("dotenv");
dotenv.config();

// require database
// const db = require("../../dbConnection")
const mysql = require("mysql");

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// route for login

router.get("/login", (req, res) => {
  console.log(req.body);
  const sql =
    "SELECT * FROM virtual_atm.customers_acct_info WHERE acct_no=3121567789";

  db.query(sql, (error, result) => {
    res.send(result);
    console.log(result[0]);
  });
});
// route for deposit
router.post("/changePassword", (req, res) => {
  console.log(req.body);
});

// route for bank_details
router.put("/bank_details", (req, res) => {
  const { account, amount } = req.body;
  // "UPDATE virtual_atm.customers_acct_info SET balance = ? WHERE acct_no= ?");
  const sql =
    "UPDATE virtual_atm.customers_acct_info SET balance = ? WHERE acct_no= ?";
  db.query(sql, [amount, account], (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
  console.log(amount);
});

// route for other bank details
router.put("/other_bank_details", (req, res) => {
  const { amount, account } = req.body;
  console.log(amount, "account");
  // const sql =""
  const sql =
    "UPDATE virtual_atm.customers_acct_info SET balance = ? WHERE acct_no= ?";
  db.query(sql, [amount, account], (error, result) => {
    if (error) console.log(error);
    console.log(result);
  });
});

router.put("/deposit", (req, res) => {
  const { amount, account } = req.body;
  console.log(amount, account);
  // const sql =""
  const sql =
    "UPDATE virtual_atm.customers_acct_info SET balance = ? WHERE acct_no= ?";
  db.query(sql, [amount, account], (error, result) => {
    if (error) console.log(error);
    console.log(result);
  });
});
router.put("/withdraw", (req, res) => {
  const { amount, account } = req.body;
  console.log(amount, account);
  // const sql =""
  const sql =
    "UPDATE virtual_atm.customers_acct_info SET balance = ? WHERE acct_no= ?";
  db.query(sql, [amount, account], (error, result) => {
    if (error) console.log(error);
    console.log(result);
  });
});
// route for transfer
router.post("/transfer", (req, res) => {
  console.log(req.body);
});

// route for betting amount

router.post("/betting_amount_details", (req, res) => {
  console.log(req.body);
});
router.get("/bank_balance", (req, res) => {
  const sql = "SELECT * FROM virtual_atm.bank ";
  db.query(sql, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});

router.post("/get_user_balance", (req, res) => {
  const { account } = req.body;
  console.log(account, "yea");
  console.log("..........");
  const sql =
    "SELECT balance FROM virtual_atm.customers_acct_info WHERE acct_no = ? ";
  db.query(sql, account, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});

module.exports = router;
