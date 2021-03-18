import React from 'react'
import TarjetaCarro from './TarjetaCarro'
import './ListaCarros.css'

class ListaCarros extends React.Component{

    state = {
        "carroSeleccionado":null,
        "listaDeCarros":[{
            "Marca":"Toyota",
            "Modelo":"Sahara Europea",
            "Placa":"ZYX123",
            "Color":"Gris",
            "isPicked":false
        },{
            "Marca":"Kia",
            "Modelo":"Sportage",
            "Placa":"ABC456",
            "Color":"Amarillo",
            "isPicked":false
        },{
            "Marca":"Lamborghini",
            "Modelo":"Urus",
            "Placa":"DEF789",
            "Color":"Rojo",
            "isPicked":false
        }]
    }

    // HACK delete styles
    componentWillUnmount(){
        document.body.classList.remove("ListaCarros")
    }

    selectCar = (car) =>{
        let index = this.state.listaDeCarros.indexOf(car);
        car.isPicked = true;
        let listaTMP = this.state.listaDeCarros.map((car)=>{
            if(car.isPicked){
                car.isPicked = false;
            }
            return car;

        });
        if(index !== -1){
            listaTMP.splice(index,1,car);
        } 
        this.setState({
            "carroSeleccionado":car,
            "listaDeCarros":listaTMP
        })
        console.log(this.state.listaDeCarros)
    }

    render(){
        document.body.classList.add('ListaCarros');
        const STYLECONTAINER = `flex-container car`

        const carArray = this.state.listaDeCarros.map((car)=>{
            return <TarjetaCarro key={car.Placa} car={car} selectCar={this.selectCar}></TarjetaCarro>
        })
        return(
            <div className={STYLECONTAINER}>
                {carArray}
            </div>
        );
    }
}

export default ListaCarros;