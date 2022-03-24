import "../../App.css"
import Item from "../../container/Item/Item.jsx"


const ItemList = ({item}) => {
        return (<div className="flex-container-card py-10">
                <div className="flex-container-card">
                    {item.map(item => <Item item = {item} key={item.id}/>)}
                </div>
            </div>);
}

export default ItemList;