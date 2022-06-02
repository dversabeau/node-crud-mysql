import { createSlice } from "@reduxjs/toolkit";

export const employeeDataSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [
      {
        "id": 1,
        "name": "Mamad",
        "age": 30,
      },
      {
        "id": 2,
        "name": "Theo",
        "age": 22,
      },
      {
        "id": 3,
        "name": "Dan",
        "age": 31,
      },
      {
        "id": 4,
        "name": "Christian",
        "age": 55,
      },
      {
        "id": 5,
        "name": "Morghan",
        "age": 9,
      }
    ],
  },
  reducers: {
    getEmployees: (state, action) => {
      state.employees = action.payload;
    },
    createEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      let index = action.payload;
      state.employees.splice(index, 1)
    },
    updateEmployee: (state, action) => {
      let newEmployee = action.payload;
      let oldEmployee = action.payload.employee
      state.employees.splice(oldEmployee.id, 1, newEmployee);
    }
  },
})

export const {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = employeeDataSlice.actions;
export default employeeDataSlice.reducer;