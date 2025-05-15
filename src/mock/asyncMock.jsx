const data = [
    {
        id: '01',
        name: 'Cartuchos',
        description: 'Cartuchos BRONC x20 unidades | Medidas: RL1203, RL1205, RL1209, M1219, RM1223',
        price:15000,
        stock:30,
        category: 'ingresos',
        img: '../public/images/cartuchos.webp',
    },
    {
        id: '02',
        name: 'Cubre máquina',
        description: 'Cubre máquina para mayor bioseguridad. Cada unidad trae 50 bolsas.',
        price:7500,
        stock:200,
        category: 'ofertas',
        img: '../public/images/cubre-maquina.webp',
    },
    {
        id: '03',
        name: 'Máquina PEN Inalámbrica "ATOM"',
        description: 'Máquina PEN rotativa inalámbrica. Modelo genérico y económico | Stroke 3.5mm, peso de 150 gr.',
        price:150000,
        stock:10,
        category: 'maquinas',
        img: '../public/images/maquina-pen.webp',
    },
    {
        id: '04',
        name: 'Máquina rotativa directa "STEEL"',
        description: 'Máquina rotativa directa con cable clipcord | Stroke de 3.5mm, motor suizo y peso de 250 gr.',
        price:230000,
        stock:5,
        category: 'maquinas',
        img: '../public/images/maquina-rotativa.webp',
    },
    {
        id: '05',
        name: 'Tinta DYNAMIC 8oz',
        description: 'Tinta negra DYNAMIC de 8oz. Color negro clásico.',
        price:65000,
        stock:25,
        category: 'ofertas',
        img: '../public/images/dynamic-tinta.webp',
    },
    {
        id: '06',
        name: 'Kit de Tatuaje (ROTATIVA) | Inicial',
        description: 'Kit de tatuaje económico. Viene con: Máquina rotativa HAMMER, 1 grip de aluminio, 1 blíster de agujas (medida a elección), 1 cable clipcord, 1 cinta cubre grip.',
        price:45000,
        stock:12,
        category: 'mas-vendidos',
        img: '../public/images/kit-tattoo-masvendido.webp',
    },
    {
        id: '07',
        name: 'Cartuchos',
        description: 'Cartuchos SPARK x20 unidades | Medidas: RL1003, RL1005, RL1009',
        price:20000,
        stock:20,
        category: 'ingresos',
        img: '../public/images/cartuchos-dos.jpg',
    },
    {
        id: '08',
        name: 'Kit de Tatuaje (PEN) | Inicial',
        description: 'Kit de tatuaje económico. Viene con: Máquina PEN ATOM, Cable con Ficha DC, 1 Fuente SUDAKA SU-10, 1 Pedal Estandar con cable de 2 mts, 1 Tinta Diablo de 1oz, 10 Cartuchos (5 Linea + 5 Pintado), 50 Tetines Chicos porta pigmento, 1 Papel Hectográfico Premium Kores, 1 Stencil p/ Transferencia.',
        price:230000,
        stock:5,
        category: 'mas-vendidos',
        img: '../public/images/kit-tattoo-dos.jpg',
    },
    {
        id: '09',
        name: 'Guantes NITRILO NEGRO',
        description: 'Guantes de nitrilo negro, ambidiestros y texturados. Disponibles en talle S, M y L.',
        price:11000,
        stock:13,
        category: 'materiales',
        img: '../public/images/guantes-negros.jpg',
    },
    {
        id: '10',
        name: 'Guantes NITRILO ROSA',
        description: 'Guantes de nitrilo rosa, ambidiestros y texturados. Disponibles en talle S, M y L.',
        price:13000,
        stock:7,
        category: 'materiales',
        img: '../public/images/guantes-rosas.jpg',
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