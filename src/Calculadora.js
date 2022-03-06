import React from "react";

class Calculadora extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            resultado: '',
            historial: []
        }
    }

    handler = (e) => {
        //let name = e.target.name;
        this.setState({
            //[name]: e.target.value
            [e.target.name]: Number(e.target.value)
        });
    }

    sumar = () => {
        let h = this.state.historial;
        h.push(`${this.state.num1} + ${this.state.num2} = ${this.state.num1 + this.state.num2}`)
        this.setState({
            resultado: (this.state.num1 + this.state.num2),
            historial: h
        });
    }

    restar = () => {
        let h = this.state.historial;
        h.push(`${this.state.num1} - ${this.state.num2} = ${this.state.num1 - this.state.num2}`)
        this.setState({
            resultado: (this.state.num1 - this.state.num2),
            historial: h
        });
    }

    multiplicar = () => {
        let h = this.state.historial;
        h.push(`${this.state.num1} * ${this.state.num2} = ${this.state.num1 * this.state.num2}`)
        this.setState({
            resultado: (this.state.num1 * this.state.num2),
            historial: h
        });
    }

    dividir = () => {
        let h = this.state.historial;
        h.push(`${this.state.num1} / ${this.state.num2} = ${this.state.num1 / this.state.num2}`)
        this.setState({
            resultado: (this.state.num1 / this.state.num2),
            historial: h
        });
    }

    binario = () => {
        let h = this.state.historial;
        h.push(`${this.state.num1} en binario: ${this.state.num1.toString(2)}`)
        this.setState({
            resultado: this.state.num1.toString(2),
            historial: h
        });
    }

    limpiar = () => {
        this.setState({
            num1: '',
            num2: '',
            resultado: ''
        });
    }

    vaciar = () =>{
        this.setState({
            historial: []
        });
    }

    //Obligatorio en los componentes de clase
    render() {
        return (
            <div>
                <div>
                    <h1>Calculadora Simple con React</h1>
                    <p>
                        <span>Primer número<input type="number" name="num1" value={this.state.num1} onChange={this.handler} /></span>
                        <span>Segundo número<input type="number" name="num2" value={this.state.num2} onChange={this.handler} disabled={!this.state.num1} /></span>
                    </p>
                    <p>Resultado: {this.state.resultado}</p>
                    {this.state.num1 && <p>
                        <button onClick={this.sumar}>Sumar</button>
                        <button onClick={this.restar}>Restar</button>
                        <button onClick={this.multiplicar}>Multiplicar</button>
                        <button onClick={this.dividir}>Dividir</button>
                        <button onClick={this.binario}>Pasar a binario</button>
                        <button onClick={this.limpiar}>Limpiar todo</button>
                    </p>}

                </div>
                {
                    this.state.historial.length &&
                    <div>
                        <h2>Historial de operaciones</h2>
                        <ul>
                            {
                                this.state.historial.map((elemento, index) => <li key={index}>{elemento}</li>)
                            }
                        </ul>
                        <button onClick={this.vaciar}>Vaciar historial</button>
                    </div>
                }
            </div>
        );
    }
}

export default Calculadora;