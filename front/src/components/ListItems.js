import './ListItems.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee, deleteEmployee, deleteEmployeeAsync, deleteEmployeesAsync, updateEmployee } from '../feature/employee.slice';

const ListItems = (props) => {
  const dispatch = useDispatch();

  const { items, status } = props;

  const [onCreate, setOnCreate] = useState(false);
  const [onUpdate, setOnUpdate] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function handleStatusButton(status, items) {
    switch (status) {
      case 'create':
        return (
          <button
            className={'button-new button-new-' + items.id}
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
            value={items.id}
            onClick={(e) => {
              e.preventDefault()
              setOnUpdate(!onUpdate)
            }} >
            Modifier
          </button>
        )
      case 'delete':
        return (
          <button
            type='button'
            value={items.id}
            onClick={(e) =>
              submitDelete(e.target.value)
            } >
            Supprimer</button>
        )
      default:
        return;
    }
  }

  function submitCreate() {
    dispatch(createEmployee({ name, age }))
    setAge('')
    setName('')
  }

  function submitUpdate(employee ) {
    dispatch(updateEmployee({employee, name, age }))

  }

  function submitDelete(e) {
    dispatch(deleteEmployeeAsync(e))
  }

  const employeeForm = (items) => {
    return (
      <div>
        <input
          id='name'
          name='name'
          type='text'
          placeholder={items === undefined ? age : items.name}
          value={name}
          onChange={(e) => setName(name => e.target.value)}></input>
        <input
          id='age'
          name='age'
          type='number'
          placeholder={items === undefined ? age : items.age}
          value={age}
          onChange={(e) => setAge(age => e.target.value)}></input>
        <button onClick={(e) =>
          status === 'create' ?
            submitCreate() :
            submitUpdate(items)} >Valider</button>
      </div>
    )
  }

  return (

    <div className='item-container'>
      {status === 'create' && handleStatusButton(status, items)}
      {onCreate === true && employeeForm()}

      <p>Name : {items.name}</p>
      <p>Age : {items.age}</p>
      {status === 'update' &&
        handleStatusButton(status, items)}
      {onUpdate === true && employeeForm(items)}

      {status === 'delete' &&
        handleStatusButton(status, items)}
    </div>
  )
}

export default ListItems;