var React = require('react');
var ReactDOM = require('react-dom');
var jquery = require('jquery');

class Login extends React.Component {
    constructor() {
        super();
        this.state = {email:"", password:"", username:""};
    }

    registrarse() {
        var u = this.state.username;
        var p = this.state.password;
        var c = this.state.email;
        // post HTTP
        fetch("/users", {
            headers: { 'Content-Type':'application/json'},
            method: "POST",
            body: JSON.stringify({nombre:u, password:p, email:c})
        }).then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    iniciarSesion() {
        var p = this.state.password;
        var c = this.state.email;
        // post HTTP
        jquery.ajax({
            url:"/users/login",
    //        headers: { 'Content-Type':'application/json'},
            type: "POST",
            data: {password:p, email:c},
            success: (x) => console.log(x)
        })//.then((res) => console.log(res))
        //.catch((err) => console.log(err));
    }

    render(){
        return (
            //JSX
            <div>
                <div>
                    <input onChange={ (e) => {
                        this.setState({username:e.target.value});
                    }} type="text"/>
                    <input onChange={(e) => {
                        this.setState({email:e.target.value});
                    }} type="text"/>
                    <input onChange={(e) => {
                        this.setState({password:e.target.value});
                    }} type="password"/>
                    <button onClick={this.registrarse.bind(this)}>Registrarse</button>
                </div>
                <div>
                    <input onChange={(e) => {
                        this.setState({email:e.target.value});
                    }} type="text"/>
                    <input onChange={(e) => {
                        this.setState({password:e.target.value});
                    }} type="password"/>
                    <button onClick={this.iniciarSesion.bind(this)}>iniciar sesión</button>
                </div>
            </div>
        );
    }
}

var obj = {
    nombre: "abc",
    edad: 123,
    localidad: "abc"
};
function actualizar(){
    obj.nombre = Math.random().toString(36).substring(5);
    obj.edad = Math.random();
    obj.localidad = Math.random().toString(36).substring(5);
    ReactDOM.render(<Data {...obj}/>, document.getElementById("cont_login"));
}

// clase
class Data extends React.Component {
    constructor(props){
        super(props)
    }

    // ejecuta cuando el componente se monta en el Dom
    componentDidMount() {
        setInterval(function(){
            // procesos para recargar info
            actualizar();
        }, 5000);
    }

    render() {
        return (<div>
            <p>{this.props.nombre}</p>
            <p>{this.props.edad}</p>
            <p>{this.props.localidad}</p>
            </div>)
    }
}

ReactDOM.render(<Data {...obj}/>, document.getElementById("cont_login"));
//ReactDOM.render(<Login/>, document.getElementById("cont_login"));
