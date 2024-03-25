import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Comments from "./Comments";
export default function AllTheBooks({ allBooks }) {
  /*  

    Per renderizzare un array devi usare questa sintassi:

    {array.map(el => (PARENTESI TONDE) )}

    e non 

    {array.map(el => {PARENTESI GRAFFE} )}



  */

  const [clicked, setClicked] = useState(false);
  const handleClick = (e) =>  {
 
    console.log(e);
  }

  function handleBorder(e) {

    let el = e.target;

    let cards = document.getElementsByClassName("card-border");
    for(let card of cards)
    {
      if(el === card) {
        if(el.classList.contains("selected")){
          el.classList.remove("selected");
          el.clicked = false;
        }
        else {
          el.clicked = false;
          el.classList.add("selected");
        }
      }
      else card.classList.remove("selected");
    }
  }

  return (

    <div className="row">
      {allBooks.map((el) => (     
        <div className="col-md-2" key={el.asin} id={el.asin} onClick={handleBorder}>

          <Card style={{ width: "18rem" }} className="p-4 ms-4 md-4 card-border">
            <Card.Img variant="404" src={el.img} height={150} width={150} />
            <Card.Body>
              <Card.Title className="text-warning">{el.title}</Card.Title>
              <Card.Text>
                {el.title}   
                <Comments
                  title = {el.title}
                  asin  = {el.asin}
                  value = {el.clicked}
                />  
              </Card.Text>
              <Button variant="primary">Post Comment</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>

  );
}
