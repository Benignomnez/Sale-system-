
//Sistema de Ventas Project

class Producto{

    static contadorProductos = 0;

    constructor (nombre, precio){
        this._idProducto =++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `idproducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

//let producto1 = new Producto('Pantalon', 200);
//console.log(producto1.toString());

class Orden{

    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor (){
        this._idOrden = ++Orden.contadorOrdenes;
        this._produtos = [];
        this._contadorProductosAgregados =0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._produtos.length < Orden.MAX_PRODUCTOS){
            this._produtos.push(producto);
            //this._produtos[this._contadorProductosAgregados++]= producto;
        }
        else{
            console.log("Producto no puede ser agregado..");
        }
    }

    calcularTotal(){
        let totalVenta =0;
        for(let producto of this._produtos){ //iterar elementos del arreglo productos 
            totalVenta += producto.precio; //totalVentas = totalVentas + producto.precio
        }
        return totalVenta;
    }

    monstrarOrden(){
        let productosOrden ='';
        for (let producto of this._produtos){
            productosOrden +='\n{' + producto.toString() + '} ';
        }

        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);

    }




}

let producto1 = new Producto ('Pantalon', 200);
let producto2 = new Producto ('Camisa', 100);

let producto3 = new Producto ('Cinturon', 50);

let orden1 = new Orden();
let orden2= new Orden();


orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.monstrarOrden();

orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);

orden2.monstrarOrden();




