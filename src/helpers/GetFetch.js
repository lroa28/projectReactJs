
const clothes = [
    {
        id: "P001",
        tipo: "Tejidos",
        descripcion: "Cuellos tejidos",
        imagen: "https://firebasestorage.googleapis.com/v0/b/lukc-ecarrito-npx.appspot.com/o/cuellos.jpg?alt=media&token=c57ed298-509e-4ed1-a9b9-81b67c145f24 ",
        precio: 1000,
    },  
    {
        id: "P002",
        tipo: "Buzos",
        descripcion: "Buzo",
        imagen: "https://firebasestorage.googleapis.com/v0/b/lukc-ecarrito-npx.appspot.com/o/canguroNegro.jpg?alt=media&token=c0043c2e-c440-4dca-a474-8e3ca5824b00",        
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
