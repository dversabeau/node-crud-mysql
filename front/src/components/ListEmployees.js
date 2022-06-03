import "./ListEmployees.css";
import ListItems from "./ListItems";

const ListEmployees = (props) => {
  const { status, list } = props;

  function handleStatusTitle(status) {
    switch (status) {
      case "create":
        return <h2>Création</h2>;
      case "read":
        return <h2>Liste</h2>;
      case "update":
        return <h2>Modifier</h2>;
      case "delete":
        return <h2>Supprimer</h2>;
      default:
        return;
    }
  }

  return (
    <div className="list-container">
      {handleStatusTitle(status)}

      {list.map((employee, index) => {
        return (
          <div key={index}>
            <ListItems items={employee} index={index} status={status} />
          </div>
        );
      })}
    </div>
  );
};

export default ListEmployees;
