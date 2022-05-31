import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee, deleteEmployee } from '../feature/employee.slice';
import './ListEmployees.css';
import ListItems from './ListItems';

const ListEmployees = (props) => {
  const dispatch = useDispatch();

  const { status, list } = props;
  const [onCreate, setOnCreate] = useState(false);
  const [name, setName] = useState('dan');
  const [age, setAge] = useState(0);

  function handleStatusTitle(status) {
    switch (status) {
      case 'create':
        return (
          <h2>Création</h2>
        )
      case 'read':
        return (
          <h2>Liste</h2>
        )
      case 'update':
        return (
          <h2>Modifier</h2>
        )
      case 'delete':
        return (
          <h2>Supprimer</h2>
        )
      default:
        return;
    }
  }

  function handleStatusButton(status, id) {
    switch (status) {
      case 'create':
        return (
          <button
            type='button'
            value='Créer'
            onClick={(e) => {
              e.preventDefault()
              setOnCreate(!onCreate)
            }} >Nouveau</button>
        )
      case 'update':
        return (
          <button
            type='button'
            value={id}
            onClick={(e) => submitUpdate(e.target.value)} >Modifier</button>
        )
      case 'delete':
        return (
          <button
            type='button'
            value={id}
            onClick={(e) => submitDelete(e.target.value)} >Supprimer</button>
        )
      default:
        return;
    }
  }

  function submitCreate() {
    dispatch(createEmployee(name, age))
  }

  function submitUpdate(e) {
    console.log('update', e);
  }

  function submitDelete(e) {
    console.log('delete', e);
    dispatch(deleteEmployee(e))
  }

  const employeeForm = () => {
    return (
      <div>
        <input
          id='name'
          name='name'
          type='text'
          onKeyUp={(e) => dispatch(setName(name => [...name, e.target.value]))}></input>
        <input
          id='age'
          name='age'
          type='number'
          onKeyUp={(e) => dispatch(setAge(age => [age, e.target.value]))}></input>
        <button onClick={(e) => submitCreate()} >Valider</button>
      </div>
    )
  }

  return (
    <div className='list-container'>
      {handleStatusTitle(status)}
      {status === 'create' && handleStatusButton(status)}
      {onCreate === true && employeeForm()}

      {list.employees.map((employee, index) => {
        return (
          <div key={index}>
            <ListItems items={employee} />
            {status !== 'create' && handleStatusButton(status, employee.id)}
          </div>
        )
      })}
    </div>
  )
}

export default ListEmployees;