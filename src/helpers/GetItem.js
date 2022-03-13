import cuellos from '../assets/Cuellos2.jpg';


const clothes = [
    {
        id: "P001",
        tipo: "Tejidos",
        descripcion: "Cuellos tejidos",
        imagen: <img src={cuellos} alt="cuellos" />,
        precio: 1000,
    },    

]

const getItem = (identificacion) => {
    const dish = cuellos.find(element => element.id === identificacion);
    return (
        new Promise(function (resolve, reject) {
            setTimeout(function () { }, 2000);
            resolve(dish);
        })
    )
}

export default getItem;