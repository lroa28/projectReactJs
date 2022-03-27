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
        imagen: "https://firebasestorage.googleapis.com/v0/b/lukc-ecarrito-npx.appspot.com/o/canguroNegro.jpg?alt=media&token=c0043c2e-c440-4dca-a474-8e3ca5824b00",        precio: 3000,
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