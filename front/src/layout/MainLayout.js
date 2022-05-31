import ListEmployees from '../components/ListEmployees';
import './MainLayout.css'
import { useSelector } from 'react-redux';

const MainLayout = () => {

  const list = useSelector(state => state.employees);

  const
    create = 'create',
    read = 'read',
    update = 'update',
    sup = 'delete';

  return (
    <div className='main-body'>
      <ListEmployees status={read} list={list} />
      <ListEmployees status={create} list={list}/>
      <ListEmployees status={update} list={list}/>
      <ListEmployees status={sup} list={list}/>
    </div>
  )
}

export default MainLayout;