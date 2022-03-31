import "../../App.css"
import Item from "../../container/Item/Item.jsx"


const ItemList = ({clothes}) => {
        return (
            <div className="flex-container-card py-10">
                <div className="flex-container-card">
                    {clothes.map((cloth) => <Item key={cloth.id} cloth={cloth} />)}
                </div>
            </div>);
}

export default ItemList