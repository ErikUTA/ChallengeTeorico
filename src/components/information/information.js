import react, { useState, setShow } from 'react';
import { Card, Button, Offcanvas } from 'react-bootstrap';

function Information() {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);              
    const [data, setData] = useState("");
    const [show, setShow] = useState(false);          

    const question1 = () => {
        setData("El code review es cuando varios integrantes del mismo equipo revisan el codigo de alguién más, esto con el proposito de reducir o encontrar la mayor cantidad de errores.");
        handleClose();
    }
    const question2 = () => {
        setData("Los niveles de acceso determinan las secciones a las que puede acceder el usuario y los permisos que tiene, por ejemplo cuando el nivel de acceso es para un adminsitrador este tiene permisos de modificación y más, pero cuando tiene nivel de acceso para un usuario normal este no podrá realizar las mismas acciones.");
        handleClose();
    }
    const question3 = () => {
        setData("Actualmente los patrones que conozco son Modelo Vista Controlador y de Capas. El patrón MVC funciona con un solo proposito el cual es separar los componentes en tres secciones (Modelo, Vista y Controlador), esto para evitar que se convinen dentro de una misma clase. El patron de arquitectura en Capas tiene como proposito tener un orden jerarquico para los roles y las responsabilidades.");
        handleClose();
    }
    const question4 = () => {
        setData("Los patrones de diseño son soluciones a problemas habituales que se presentan en nuestro código, los cuales podemos utilizar como planos al momento que sea requerido. Los patrones de diseño que conozco son Composite el cual nos proporciona un conjunto de clases relacionadas y un contenedor para dichas clases, también Strategy el cual su objetivo es definir una familia de algoritmos poniendo cada uno en una clase separada y hacer que los objetos sean intercambiables.");
        handleClose();
    }
    const question5 = () => {
        setData("SOLID representa los 5 principios basicos para la programación orientada a objetos el cual tiene como objetivo eliminar los malos diseños, evitar la refactorización y construir un código más eficiente y fácil de mantener.");
        handleClose();
    }
    const question6 = () => {
        setData("Una clase es una entidad la cual contiene atributos que pueden ser heredados, dichas clases son instancias de un objeto.");
        handleClose();
    }
    const question7 = () => {
        setData("La herencia en la programación orientada a objetos nos permite crear nuevas clases reutilizando atributos o código, esto sin necesidad de cambiar lo que ya se tiene y tan solo reutilizarlo.");
        handleClose();
    }
    const question8 = () => {
        setData("Las interfaces son un conjunto de métodos que le describen la funcionalidad al usuario teniendo como objetivo principal encapsular todo este proceso sin la necesidad de la herencia.");
        handleClose();
    }
    const question9 = () => {
        setData("El polimorfismo en POO es cuando al llamar o utilizar un metodó heredado lo podemos modificar para mostrar algo diferente.");
        handleClose();
    }
    const question10 = () => {
        setData("Una API Web es un servicio que nos permiten intercambiar o modificar información a través de diferentes sistemas, esto se realiza creando varias funciones y hosteando el código para posteriormente dependiendo del endpoint que necesitemos podamos realizar una acción en especifico con los datos que enviemos o recibamos.");
        handleClose();
    }
    const question11 = () => {
        setData("Postman, Newnam, Apache Jmeter, SoapUI, Rest Assured, Restlet, RoboHydraGatling, personalmente la herramienta que más he utilizado es Postman.");
        handleClose();
    }
    const question12 = () => {
        setData("Los errores los he manejado con las herramientas try-catch asignando un numero de respuesta dependiendo el error que se presente, una herramienta con la que me gurstaría trabajar sería con Rollbar ya que en ella puedes detectar, diagnosticar y eliminar los errores.");
        handleClose();
    }
    const question13 = () => {        
        setData("Basicamente consiste en elaborar pruebas antes comenzar con el código para que posteriormente a ello se empiece a desarrollar en base a la respuesta obtenida, esto con el objetivo de reducir los bugs, código que no ocupemos y para obtener una mayor rentabilidad de la aplicación.");
        handleClose();
    }
 
    return(        
        <div className="home-content">
            <div className="home">
                <Card style={{ width: '20rem' }} className="bg-dark text-white">
                    <Card.Img className="mt-2" variant="top" src="" />
                    <Card.Body>
                        <Card.Title className="text-card mb-4 text-center">Bienvenido a la sección de preguntas y respuestas</Card.Title>
                        <Card.Text className="text-card-response mb-4">
                            <strong className="text-card">{data ? null : "..."}</strong>{data ? data : null}
                        </Card.Text>                        
                        <Button variant="primary" onClick={handleShow} className="col-12">Abrir menu de preguntas</Button>
                    </Card.Body>
                </Card>
            </div>

            <Offcanvas show={show} onHide={handleClose} className="bg-dark">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="text-white">Selecciona una pregunta</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-content">
                    <Button className="col-12 btn btn-warning" onClick={question1}>¿Qué es y para que se utiliza el code review?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question2}>¿Qué son los niveles de acceso y cómo funcionan?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question3}>¿Qué patrones de arquitectura conoces y cómo funcionan?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question4}>¿Qué patrones de diseño conoces y cómo funcionan?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question5}>¿Qué es SOLID?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question6}>¿Qué es una clase?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question7}>¿Qué es y para que se utiliza la herencia?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question8}>¿Qué es y para que se utilizan las interfaces?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question9}>¿Qué es el polimorfismo?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question10}>¿Qué es y cómo funciona una API web?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question11}>¿Qué herramientas se pueden utilizar para probar Web APIs?</Button>
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question12}>¿Qué herramientas has utilizado para el manejo de errores?</Button>                    
                    <Button className="col-12 mt-2 btn btn-warning" onClick={question13}>Test driven development</Button>
                </Offcanvas.Body>
            </Offcanvas>                        
        </div>
    )
}

export default Information;