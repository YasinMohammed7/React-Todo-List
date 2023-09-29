import { FaTrashAlt } from "react-icons/fa"

const LineItem = ({ item, handlerCheck, handlerDelete }) => {
    return (
        <li className="item">

            <input type="checkbox"
                checked={item.checked}
                onChange={() => handlerCheck(item.id)}
            />

            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" onClick={() => handlerDelete(item.id)} />
        </li>
    )
}

export default LineItem