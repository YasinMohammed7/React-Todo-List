import ItemLists from "./ItemLists"

const Content = ({ items, handlerCheck, handlerDelete, search }) => {

    return (
        <main>
            {items.length ? (<ItemLists
                items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                handlerCheck={handlerCheck}
                handlerDelete={handlerDelete}
            />) : <p style={{ marginTop: "16px" }}>Your list is empty</p>}
        </main>
    )
}

export default Content