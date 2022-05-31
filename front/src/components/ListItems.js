import './ListItems.css';

const ListItems = (props) => {

  const { items } = props;

  return (
    <div className='item-container'>
      <p>Name : {items.name}</p>
      <p>Age : {items.age}</p>
    </div>
  )
}

export default ListItems;