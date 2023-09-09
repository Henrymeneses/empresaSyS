

function usuarioActualNone() {
    document.getElementById('usuarioActual').style.display = 'none';
}
function usuarioActualBlock() {
    document.getElementById('usuarioActual').style.display = 'none';
    
}


function btnRegistrarUsuarioNone() {
    document.getElementById('containerInicial').style.display = 'none';
}
function btnRegistrarUsuarioBlock() {
    document.getElementById('containerRegistrarse').style.display = 'block';
}

function btnSalirRegistrarseBlock() {
    document.getElementById('containerInicial').style.display = 'block';
}
function btnSalirRegistrarseNone() {
    document.getElementById('containerRegistrarse').style.display = 'none';
}

function btnIniciarSesionBlock() {
    document.getElementById('containerInicioSesion').style.display = 'block';
}  
function btnIniciarSesionNone() {
    document.getElementById('containerInicioSesion').style.display = 'none';
}  

function btnContainerMenu1Block() {
    document.getElementById('containerMenu1').style.display = 'block';
} 
function btnContainerMenu1None() {
    document.getElementById('containerMenu1').style.display = 'none';
} 

//faltan las funciones del menu

function btnProductosBlock() {
    document.getElementById('containerProductos').style.display = 'block';
} 
function btnProductosNone() {
    document.getElementById('containerProductos').style.display = 'none';
}

function btnRegistrarProductoBlock() {
    document.getElementById('containerProductosRegistrar').style.display = 'block';
}
function btnRegistrarProductoNone() {
    document.getElementById('containerProductosRegistrar').style.display = 'none';
}

function btnMostrarProductoBlock() {
    document.getElementById('containerProductosMostrar').style.display = 'block';
}
function btnMostrarProductoNone() {
    document.getElementById('containerProductosMostrar').style.display = 'none';
}

function btnClientesBlock() {
    document.getElementById('containerClientes').style.display = 'block';
}
function btnClientesNone() {
    document.getElementById('containerClientes').style.display = 'none';
}

function btnRegistrarClienteBlock() {
    document.getElementById('containerClientesRegistrar').style.display = 'block';
}
function btnRegistrarClienteNone() {
    document.getElementById('containerClientesRegistrar').style.display = 'none';
}

function btnMostrarClientesBlock() {
    document.getElementById('containerClientesMostrar').style.display = 'block';
}
function btnMostrarClientesNone() {
    document.getElementById('containerClientesMostrar').style.display = 'none';
}

function btnProveedoresBlock() {
    document.getElementById('containerProveedores').style.display = 'block';
}
function btnProveedoresNone() {
    document.getElementById('containerProveedores').style.display = 'none';
}

function btnRegistrarProveedorBlock() {
    document.getElementById('containerProveedoresRegistrar').style.display = 'block';
}
function btnRegistrarProveedorNone() {
    document.getElementById('containerProveedoresRegistrar').style.display = 'none';
}

function btnMostrarProveedoresBlock() {
    document.getElementById('containerProveedoresMostrar').style.display = 'block';
}
function btnMostrarProveedoresNone() {
    document.getElementById('containerProveedoresMostrar').style.display = 'none';
}

function btnRegistroTotalBlock() {
    document.getElementById('containerRegistroTotal').style.display = 'block';
}
function btnRegistroTotalNone() {
    document.getElementById('containerRegistroTotal').style.display = 'none';
}
function btnImagenFooterBlock() {
    document.getElementById('imagenInferior').style.display = 'block';
}
function btnImagenFooterNone() {
    document.getElementById('imagenInferior').style.display = 'none';
}

function btnUsuariosRegistradosBlock() {
    document.getElementById('containerUsuariosRegistrados').style.display = 'block';
}
function btnUsuariosRegistradosNone() {
    document.getElementById('containerUsuariosRegistrados').style.display = 'none';
}



//REGISTRO DE USUARIOS////////////////////////////////////////////////////////////////
const botonRegistrarUsuario = document.getElementById('registrarUsuario');
let usuarios = []
let usuario = {}

botonRegistrarUsuario.addEventListener('click',capturarInformacionUsuario)
function capturarInformacionUsuario(){
    function Usuario(nombre, contraseña){
        this.nombre = nombre,
        this.contraseña = contraseña; 
    }
    
    let nombre = document.querySelector('#nombreInput');
    let contraseña = document.querySelector('#contraseñaInput');
    

    if(nombre.value.length == 0 || contraseña.value.length == 0) {
        alert('el campo esta vacio')
    }else{

    usuario = new Usuario(nombre.value, contraseña.value)
    usuarios.push(usuario)
    console.log(usuarios)
    
    mostrarInformacionUsuarios()
    mostrarInformacionUsuariosTotal()

    nombre = document.querySelector('#nombreInput').value="";
    contraseña = document.querySelector('#contraseñaInput').value="";
    alert('USUARIO REGISTRADO')
    btnSalirRegistrarseBlock()
    btnSalirRegistrarseNone()
    }
    
}

const mostrarInformacionUsuarios = () => {
    const tbody = document.querySelector('#tbodyUsuarios');
    tbody.innerHTML += `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.contraseña}</td>
                       
        </tr>
        `  
}
const mostrarInformacionUsuariosTotal = () => {
    const tbody = document.querySelector('#tbodyUsuariosTotal');
    tbody.innerHTML += `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.contraseña}</td>
                
        </tr>
        `  
}

// Inicio de sesion///////////////////////////////////////////////////////////////////
let contador = 3
const botonIniciarSesion = document.getElementById('iniciarSesion');
botonIniciarSesion.addEventListener('click', iniciarSesionFuncion)

function iniciarSesionFuncion(){
    let nombreUsuario = document.querySelector('#nombreInicioSesionInput').value;
    let contraseñaUsuario = document.querySelector('#contraseñaInicioSesionInput').value;

    console.log(nombreUsuario)
    console.log(contraseñaUsuario)

    let user = usuarios.find(elemento => {

        if(elemento.nombre === nombreUsuario && elemento.contraseña === contraseñaUsuario){

            console.log('has ingresado existosamente')
            alert('HAS INGRESADO EXITOSAMENTE')
            btnContainerMenu1Block()
            btnIniciarSesionNone() 
            usuarioActualBlock()
                
            return true;
        }else {
            console.log('valide sus credenciales')
            alert('Usuario o clave errada, intentelo de nuevo')
            contador --
            
            if(contador > 0){
                alert('Te quedan '+contador+' intentos')
               }else{
                alert('Usuario bloqueado \nExcedio el numero de intentos')
                btnSalirRegistrarseBlock()
                btnIniciarSesionNone() 
               }
               
        }
        
  
    })
        nombreUsuario = document.querySelector('#nombreInicioSesionInput').value="";
        contraseñaUsuario = document.querySelector('#contraseñaInicioSesionInput').value="";
}

// registro de productos///////////////////////////////////////////////////////////////////
const botonRegistrarProducto = document.getElementById('opcionesProductosRegistrar');
let productos = []
let producto = {}

botonRegistrarProducto.addEventListener('click',capturarInformacionProducto)
function capturarInformacionProducto(){
    function Producto(nombre, descripcion, cantidad, valorUnitario){
        this.nombre = nombre,
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.valorUnitario = valorUnitario;
        this.valorTotal = valorTotal;
        
    }
    
    let nombre = document.querySelector('#nombreProducto');
    let descripcion = document.querySelector('#descripcionProducto');
    let cantidad = document.querySelector('#cantidadProducto');
    let valorUnitario = document.querySelector('#valorUnitarioProducto');
    let valorTotal = cantidad.value * valorUnitario.value

    producto = new Producto(nombre.value, descripcion.value, cantidad.value, valorUnitario.value,  valorTotal)
    productos.push(producto)
    console.log(productos)
    console.log(valorTotal)
    
    mostrarInformacionProducto()
    mostrarInformacionProductoTotal()
    nombre = document.querySelector('#nombreProducto').value="";
    descripcion = document.querySelector('#descripcionProducto').value="";
    cantidad = document.querySelector('#cantidadProducto').value="";
    valorUnitario = document.querySelector('#valorUnitarioProducto').value="";
}

const mostrarInformacionProducto = () => {
    const tbody = document.querySelector('#tbodyProductos');
    tbody.innerHTML += `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.valorUnitario}</td>
            <td>${producto.valorTotal}</td>
        </tr>
        `  
}
const mostrarInformacionProductoTotal = () => {
    const tbody = document.querySelector('#tbodyProductosTotal');
    tbody.innerHTML += `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.valorUnitario}</td>
            <td>${producto.valorTotal}</td>
        </tr>
        `  
}



// registro de cliente///////////////////////////////////////////////////////////////////

const botonRegistrarCliente = document.getElementById('opcionesClientesRegistrar');
let clientes = []
let cliente = {}

botonRegistrarCliente.addEventListener('click',capturarInformacionCliente)
function capturarInformacionCliente(){
    function Cliente(nombre, telefono, direccion, correo){
        this.nombre = nombre,
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        
    }
    
    let nombre = document.querySelector('#nombreCliente');
    let telefono = document.querySelector('#telefonoCliente');
    let direccion = document.querySelector('#direccionCliente');
    let correo = document.querySelector('#correoCliente');
    

    cliente = new Cliente(nombre.value, telefono.value, direccion.value, correo.value)
    clientes.push(cliente)
    console.log(clientes)
    
    mostrarInformacionCliente()
    mostrarInformacionClienteTotal()
    nombre = document.querySelector('#nombreCliente').value="";
    telefono = document.querySelector('#telefonoCliente').value="";
    direccion = document.querySelector('#direccionCliente').value="";
    correo = document.querySelector('#correoCliente').value="";
}

const mostrarInformacionCliente = () => {
    const tbody = document.querySelector('#tbodyClientes');
    tbody.innerHTML += `
        <tr>
            <td>${cliente.nombre}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.direccion}</td>
            <td>${cliente.correo}</td>
            
        </tr>
        `  
}

const mostrarInformacionClienteTotal = () => {
    const tbody = document.querySelector('#tbodyClientesTotal');
    tbody.innerHTML += `
        <tr>
            <td>${cliente.nombre}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.direccion}</td>
            <td>${cliente.correo}</td>
            
        </tr>
        `  
}
// registro de proveedores///////////////////////////////////////////////////////////////////

const botonRegistrarProveedor = document.getElementById('opcionesProveedorRegistrar');
let proveedores = []
let proveedor = {}

botonRegistrarProveedor.addEventListener('click',capturarInformacionProveedor)
function capturarInformacionProveedor(){
    function Proveedor(nombre, nit, direccion, telefono){
        this.nombre = nombre,
        this.nit = nit;
        this.direccion = direccion;
        this.telefono = telefono;
        
    }
    
    let nombre = document.querySelector('#nombreProveedor');
    let nit = document.querySelector('#nitProveedor');
    let direccion = document.querySelector('#direccionProveedor');
    let telefono = document.querySelector('#telefonoProveedor');
    

    proveedor = new Proveedor(nombre.value, nit.value, direccion.value, telefono.value)
    proveedores.push(proveedor)
    console.log(proveedores)
    
    mostrarInformacionProveedor()
    mostrarInformacionProveedorTotal()

    nombre = document.querySelector('#nombreProveedor').value="";
    nit = document.querySelector('#nitProveedor').value="";
    direccion = document.querySelector('#direccionProveedor').value="";
    telefono = document.querySelector('#telefonoProveedor').value="";
}

const mostrarInformacionProveedor = () => {
    const tbody = document.querySelector('#tbodyProveedores');
    tbody.innerHTML += `
        <tr>
            <td>${proveedor.nombre}</td>
            <td>${proveedor.nit}</td>
            <td>${proveedor.direccion}</td>
            <td>${proveedor.telefono}</td>
            
        </tr>
        `  
}

const mostrarInformacionProveedorTotal = () => {
    const tbody = document.querySelector('#tbodyProveedoresTotal');
    tbody.innerHTML += `
        <tr>
            <td>${proveedor.nombre}</td>
            <td>${proveedor.nit}</td>
            <td>${proveedor.direccion}</td>
            <td>${proveedor.telefono}</td>
            
        </tr>
        `  
}

/*     //////////////////////////////////////////////////////////////////////       */



  

