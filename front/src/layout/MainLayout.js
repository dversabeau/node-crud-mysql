import ListEmployees from "../components/ListEmployees";
import "./MainLayout.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getEmployeesAsync } from "../feature/employee.slice";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesAsync());
  }, []);

  const listStore = useSelector((state) => state.employees.data);

  const create = "create",
    read = "read",
    update = "update",
    sup = "delete";

  return (
    <div className="main-body">
      <ListEmployees status={read} list={listStore} />
      <ListEmployees status={create} list={listStore}/>
      <ListEmployees status={update} list={listStore}/>
      <ListEmployees status={sup} list={listStore}/>
    </div>
  );
};

export default MainLayout;
