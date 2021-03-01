import React, { useState } from "react";

import { Container, Title, Div, Input, Button } from "./Styled";

const Main = () => {
  const [catetoA, setCatetoA] = useState("");
  const [catetoB, setCatetoB] = useState("");
  const [hypotenuse, setHypotenuse] = useState("");

  function calculator(a, b) {}

  return (
    <Container>
      <Title>Teorema de Pitágoras - Calculadora</Title>
      <Div>
        <Input type="number" placeholder="A" />
        <Input type="number" placeholder="B" />
        <Input type="number" placeholder="C" style={{ marginTop: "10px" }} />
      </Div>
      <Button type="submit">Calcular</Button>
    </Container>
  );
};

export default Main;
