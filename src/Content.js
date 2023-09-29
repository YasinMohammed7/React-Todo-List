import ItemLists from "./ItemLists"

const Content = ({ items, handlerCheck, handlerDelete }) => {

    return (
        <main>
            {<ItemLists
                items={items}
                handlerCheck={handlerCheck}
                handlerDelete={handlerDelete}
            />}
        </main>
    )
}

export default Content