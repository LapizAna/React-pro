import React from "react";

const Employees = () => {
  const employees = [
    { name: " Ana ", position: "Manager", salary: 30000 , status: "Active" },
    {
      name: "Matt  ",
      position: "Developer",
      salary: 20000,
      status: "Active",
    },
    {
      name: "Maria",
      position: "Designer",
      salary: 20000,
      status: "Active",
    },
    {
      name: "March",
      position: "Developer",
      salary: 75000,
      status: "Active",
    },
    { name: " Maria ", position: "Manager", salary: 35000, status: "Active" },
    { name: "James ", position: "Designer", salary: 78000, status: "Active" },
    { name: " Ryan ", position: "Developer", salary: 60000, status: "Active" },
    {
      name: " Creshell ",
      position: "Designer",
      salary: 55000,
      status: "Active",
    },
    { name: " Bernadette", position: "Manager", salary: 0, status: "Not Active" },
    {
      name: "Gian ",
      position: "Developer",
      salary: 0,
      status: "Not Active",
    },
  ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>No.</th>
          <th>Employee Names</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.status === "Active" ? employee.salary : "N/A"}</td>
            <td>{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Employees;
