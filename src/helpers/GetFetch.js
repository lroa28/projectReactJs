import cuellos from '../assets/Cuellos2.jpg'
import buzo from '../assets/CanguroAndre.jpg'

const clothes = [
    {
        id: "P001",
        tipo: "Tejidos",
        descripcion: "Cuellos tejidos",
        imagen: <img src={ cuellos } alt="cuellos" />,
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

export const GetFetch = new Promise((resolve, reject)=>{
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(clothes)                    
        }, 3000);
    } else {
        reject('400 - not found')        
    }
})


export default GetFetch;

//Otra opcion de enviar la promesa:
//const getFetch = () => {
//    return (
//        new Promise(function (resolve, reject) {
//            setTimeout(function () { 
//                resolve(platos);                
//            }, 2000);
//        })
//    )
//}
