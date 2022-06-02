import { createSlice } from "@reduxjs/toolkit";

export const employeeDataSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
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