import { useContext } from "react";
import { context } from "../context";
// const Title = () => {
//     return <context.Consumer>{(name) => <h1>{name}</h1>}</context.Consumer>
//   }

const Title = () => {
  const name = useContext(context);
  return (
    <h1>{name}</h1>
  )
}

  export default Title;