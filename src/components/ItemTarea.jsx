import { ListGroup } from "react-bootstrap";

const ItemTarea = (props) => {
    const {mostrarTarea} = props;
    return (
        <ListGroup.Item>{mostrarTarea}</ListGroup.Item>
    );
};

export default ItemTarea;