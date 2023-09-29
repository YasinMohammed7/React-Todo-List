import LineItem from "./LineItem"

const ItemLists = ({ items, handlerCheck, handlerDelete }) => {
    return (
        <ul>
            {items.map(item =>

                <LineItem
                    key={item.id}
                    item={item}
                    handlerCheck={handlerCheck}
                    handlerDelete={handlerDelete} />
            )
            }
        </ul>
    )
}

export default ItemLists