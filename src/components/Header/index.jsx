import React, { useState } from 'react'
import { Container, Form, Input, Button, Icon } from "./styled"
import logo from "../../assets/img/logo-mercado-livre.png"
import searchIcon from "../../assets/img/search-preto.png"
import { Link, useHistory } from "react-router-dom"

const Header = ({ setSearch }) => {

  const history = useHistory();

  const [input, setInput] = useState("");

  const search = (event) => {
    event.preventDefault();
    history.push("/")
    setSearch(input);
  }

  return (
    <Container>
      <Link to="/">
        <img width="45px" height="45px" src={logo} alt="Logo Mercado Livre" />
      </Link>
      <Form onSubmit={search}>
        <Input type="text" name="textFind" placeholder="Nunca deixe de buscar" onChange={event => setInput(event.target.value)} />
        <Button type="submit" value="search">
          <Icon src={searchIcon} alt="Logo de Pesquisa" />
        </Button>
      </Form>
    </Container>
  )
}

export default Header