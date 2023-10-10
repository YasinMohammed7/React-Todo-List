import ItemLists from "./ItemLists"

const Content = ({ items, handlerCheck, handlerDelete, search }) => {

    return (
        <main>
            {<ItemLists
                items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                handlerCheck={handlerCheck}
                handlerDelete={handlerDelete}
            />}
        </main>
    )
}

export default Content