/** @format */

const express = require("express");
const router = express.Router();

const { Employee } = require("../models/employee");

//get all employees (R -all)
router.get("/api/employees", (req, res) => {
  Employee.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

//save employees (C)
router.post("/api/employee/add", (req, res) => {
  //Forward call
  const emp = new Employee({
    name: req.body.name,
    email: req.body.email,
    salary: req.body.salary,
  });
  //return call
  emp.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "Employee added successfully.",
      addEmployee: data,
    });
  });
});

//get single employee (R - single)
router.get("/api/employee/:id", (req, res) => {
  Employee.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

// Update Employee (U)

router.put("/api/employee/update/:id", (req, res) => {
  const emp = {
    name: req.body.name,
    email: req.body.email,
    salary: req.body.salary,
  };
  Employee.findByIdAndUpdate(
    req.params.id,
    { $set: emp },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "Employee Updated Successfully",
          updateEmployee: data,
        });
      } else {
        console.log(err);
      }
    }
  );
});
// Delete Employee (D)
router.delete("/api/employee/:id", (req, res) => {
  Employee.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      // res.send(data);
      res
        .status(200)
        .json({ code: 200, message: "Employee deleted", deleteEmployee: data });
    } else {
      console.log(err);
    }
  });
});
module.exports = router;
