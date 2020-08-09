import React, { useState } from 'react';
import Icon from './Component/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap"


const itemArray = new Array(9).fill("empty");


const App = () => {

  const [isCross, setIsCross] = useState(false)
  const [winmessage, setWinmessage] = useState("")


  const reloadGame = () => {
    setIsCross(false);
    setWinmessage("")
    itemArray.fill("empty", 0, 9)
  }

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty") {
      setWinmessage(`${itemArray[0]} wins`)
    }
    else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty") {
      setWinmessage(`${itemArray[3]} wins`)

    }
    else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty") {
      setWinmessage(`${itemArray[6]} wins`)
    }
    else if(
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty") {
      setWinmessage(`${itemArray[0]} wins`)
    }
    else if(
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty") {
      setWinmessage(`${itemArray[1]} wins`)
    }

    else if(
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty") {
      setWinmessage(`${itemArray[2]} wins`)
    }

    else if(
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty") {
      setWinmessage(`${itemArray[0]} wins`)
    }

    else if(
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty") {
      setWinmessage(`${itemArray[2]} wins`)
    }
   
    else if (itemArray[0] !== "empty" && itemArray[1] !== "empty" && itemArray[2] !== "empty" && 
    itemArray[3] !== "empty" && itemArray[4] !== "empty" && itemArray[5] !== "empty" && 
    itemArray[6] !== "empty" && itemArray[7] !== "empty" && itemArray[8] !== "empty" && !winmessage){
      setWinmessage(`Tie`)
    }

  }

  const changeItem = itemNumber => {
    if (winmessage) {
      return toast(winmessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    } else {
      return toast("already filled", { type: "error" })
    }

      checkIsWinner();  

    

    
  }

  return (

    <div className="App">
      <br /><br /><br /><br /><br /><br />
      <h1 style={{ textAlign: "center" }}>Tic tac toe</h1>
      <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">

            {winmessage ? (

              <div className="mb-2 mt-2" > <h1 className="text-success text-uppercase text-center"> {winmessage}</h1>

                <Button color="success" block onClick={reloadGame}> Reload game </Button>

              </div>

            ) : (

                <h1 className="text-center">
                  {isCross ? "Cross" : "Circle"} turns
            </h1>

              )}

            <div className="grid">
              {itemArray.map((item, index) => (

                <Card color="warning" onClick={() => changeItem(index)}>
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              )

              )}
            </div>
          </Col>
        </Row>

      </Container>


    </div>
  );


}

export default App;
