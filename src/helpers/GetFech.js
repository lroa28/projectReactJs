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

const getFetch = () => {
    return (
        new Promise(function (resolve, reject) {
            setTimeout(function () { 
                resolve(clothes);                
            }, 2000);
        })
    )
}

export default getFetch;