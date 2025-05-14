const data = [
    {
        id: '01',
        name: 'cartuchos',
        description: 'cartuchos marca bronc',
        price:15000,
        stock:30,
        category: 'ingresos',
        img: '../public/images/cartuchos.webp',
    },
    {
        id: '02',
        name: 'cubre maquina',
        description: 'cubre maquina para pen',
        price:7500,
        stock:200,
        category: 'ofertas',
        img: '../public/images/cubre-maquina.webp',
    },
    {
        id: '03',
        name: 'maquina pen',
        description: 'maquina pen marca generica',
        price:150000,
        stock:10,
        category: 'maquinas',
        img: '../public/images/maquina-pen.webp',
    },
    {
        id: '04',
        name: 'maquina rotativa',
        description: 'maquina rotativa directa marca steel',
        price:230000,
        stock:5,
        category: 'maquinas',
        img: '../public/images/maquina-rotativa',
    },
    {
        id: '05',
        name: 'dynamic',
        description: 'tinta negra marca dynamic 8oz',
        price:65000,
        stock:25,
        category: 'ofertas',
        img: '../public/images/dynamic-tinta.webp',
    },
    {
        id: '06',
        name: 'kit de tatuaje',
        description: 'kit de tatuaje basico y economico',
        price:45000,
        stock:12,
        category: 'mas vendido',
        img: '../public/images/kit-tattoo-masvendido.webp',
    },
]

// Promesa para exportar productos

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(!error){
                resolve(data)
            }else{
                reject('Ha sucedido un error. Intente nuevamente más tarde')
            }
        },2500)
    })
}

//Promesa para devolver item

export const getItem =(id)=>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
            let product = data.find((item)=> item.id === id)
            resolve(product)
        },2000)
    })
}