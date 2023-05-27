import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  const {mostrarTareas} = props;
  return (
    <ListGroup>
      {mostrarTareas.map((item,index) => (
        <span key = {index}><ItemTarea mostrarTarea={item}></ItemTarea></span>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;