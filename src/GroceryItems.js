import React, {useState} from 'react'
import { GroceryItem } from './GroceryItem'

const listaMercado = ["huevos","leche", "queso sandwich", "queso parmesano", "pan tajado", "yogurt", "ramen", "pancackes", "repollo", "mani", "mecatos", "lechuga", "zanahoria", "cebolla", "tomate", "brócoli", "naranja", "remolacha", "limón", "ajo", "piña", "maracuya", "pimentón", "mango", "manzana", "pera", "pepino", "tomate de arbol", "cilantro", "ahuyama", "apio", "cebolla larga", "jengibre", "vinagre", "mora", "aceite", "papa", "ñame", "platano", "maiz", "pasta", "yuca", "carne", "cerdo", "pechuga", "muslos", "higado", "jamón", "atún", "bofe", "lagarto", "salchichas", "azucar", "harina pan", "sal", "mantequilla", "arroz", "mostaza", "canela", "chocolisto", "fresa", "chocolate corona", "salsa negra"]

export const GroceryItems = () => {
  const [items, setItems] = useState([]);
  const [weigthType, setWeightType] = useState("1kg");



  const clickHandler = (v) => {
    setItems(prevState => [...prevState, `${weigthType === "" ? weigthType : `${weigthType} `}${v}\n`]);
  }

  let toTextArea = items.toString().split(',').join('')

  return (
    <>
      <div className="groceryContainer" >
        {listaMercado.map((el, i) => (
          <GroceryItem className="addButton"  clickHandler={clickHandler} key={i} name={el} />
        ))}
      </div>
      <section style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
        <textarea style={{margin: "30px", width: "300px",height: "300px"}} value={toTextArea} readOnly />
        <div style={{display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", transform: "translateY(-20%)"}}>
          <p>Peso actual: {weigthType === "" ? "Sin peso" : weigthType}</p>
          <span>
            <button className="buttonStyle" onClick={() => setWeightType("1Kg")} >Kg</button>
            <button className="buttonStyle" onClick={() =>setWeightType("1Lb")}>Lb</button>
            <button className="buttonStyle" onClick={() =>setWeightType("")}>Sin peso</button>
          </span>
          <button className="buttonStyle" onClick={() =>setItems([])}>Borrar lista</button>
        </div>
      </section>
    </>
  )
}
