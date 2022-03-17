import cuellos from '../assets/Cuellos2.jpg';
import buzo from '../assets/CanguroAndre.jpg'

const clothes = [
    {
        id: "P001",
        tipo: "Tejidos",
        descripcion: "Cuellos tejidos",
        imagen: <img src={cuellos} alt="cuellos" />,
        precio: 1000,
    },   
    {
        id: "P002",
        tipo: "Buzos",
        descripcion: "Buzo",
        imagen: <img src={ buzo } alt="buzo" />,
        precio: 3000,
    },  

]

const GetItem = (identification) => {
    const cloth = clothes.find(element => element.id === identification);
    return (
        new Promise(function (resolve, reject) {
            setTimeout(function () { }, 2000);
            resolve(cloth);
        })
    )
}

export default GetItem;