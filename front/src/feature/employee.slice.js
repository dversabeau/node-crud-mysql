import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const employeeDataSlice = createSlice({
  name: "employees",
  initialState: {
    data: [],
  },
  reducers: {
    getEmployees: (state, action) => {
      state.data = action.payload.data;
    },
    createEmployee: (state, action) => {
      state.data.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      let index = action.payload;
      state.data.splice(index, 1);
    },
    updateEmployee: (state, action) => {
      let newEmployee = action.payload;
      let oldEmployee = action.payload.employee;
      state.data.splice(oldEmployee.id, 1, newEmployee);
    },
  },
});

export const getEmployeesAsync = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8080/");
    dispatch(getEmployees(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteEmployeeAsync = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:8080/`, {
      data: { id: id },
    });
    dispatch(deleteEmployee(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const updateEmployeeAsync = (employee) => async (dispatch) => {
  console.log('employe.slice', employee.id)
  try {
    const response = await axios.put(`http://localhost:8080/`, {
      data: { id: employee.id, name: employee.name, age: employee.age },
    });
    console.log('data.slice', response.data)
    dispatch(updateEmployee(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const createEmployeeAsync = (employee) => async (dispatch) => {
  console.log('employee', employee)
  try {
    const response = await axios.post(`http://localhost:8080/`, {
      data: { name: employee.name, age: employee.age },
    });
    dispatch(createEmployee(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getEmployees, createEmployee, deleteEmployee, updateEmployee } =
  employeeDataSlice.actions;
export default employeeDataSlice.reducer;
