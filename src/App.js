import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText, Button, ButtonGroup, Card } from 'reactstrap';

class App extends Component {
  state = {
    angka1: 0,
    angka2: 0,
    angka3: 0,
    hasil: 0
  }

// Operasi Matematika dasar
  plus = () => {
    this.setState({
      hasil: parseInt(this.state.angka1) + parseInt(this.state.angka2) + parseInt(this.state.angka3)
    })
  }

  minus = () => {
    this.setState({
      hasil: parseInt(this.state.angka1) - parseInt(this.state.angka2) - parseInt(this.state.angka3)
    })
  }

  perkalian = () => {
    this.setState({
      hasil: parseInt(this.state.angka1) * parseInt(this.state.angka2) * parseInt(this.state.angka3)
    })
  }

  pembagian = () => {
    this.setState({
      hasil: parseInt(this.state.angka1) / parseInt(this.state.angka2) / parseInt(this.state.angka3)
    })
  }

// Fungsi tombol
  satu = () => {
    this.setState({
      angka1 : 1
    })
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Kalkulator sederhana</h1>
        <Card className="container text-center mt-5">
          <Form className="container text-center mt-3">
            <FormGroup>
              <Label for="exampleEmail">Masukkan angka : </Label>
  <Input onChange={e => this.setState({ angka1: e.target.value })} className="text-center" type="number" placeholder="Masukkan angka pertama"></Input>
            </FormGroup>
            <FormGroup>
              <Label className="mt-3" for="examplePassword">Masukkan angka : </Label>
              <Input onChange={e => this.setState({ angka2: e.target.value })} className="text-center" type="number" placeholder="Masukkan angka kedua" />
            </FormGroup>
            <FormGroup>
              <Label className="mt-3" for="examplePassword">Masukkan angka : </Label>
              <Input onChange={e => this.setState({ angka3: e.target.value })} className="text-center" type="number" placeholder="Masukkan angka ketiga" />
            </FormGroup>
          </Form>
          <Form className="container mt-5">
            <FormGroup>
              <ButtonGroup size="lg" className="row col-10">
                <Button onClick={this.satu}>1</Button>
                <Button>2</Button>
                <Button>3</Button>
              </ButtonGroup>
            </FormGroup>
            <FormGroup>
              <ButtonGroup size="lg" className="row col-10">
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
              </ButtonGroup>
            </FormGroup>
            <FormGroup>
              <ButtonGroup size="lg" className="row col-10">
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
              </ButtonGroup>
            </FormGroup>
            <Button size="lg" className="row col-4">0</Button>
          </Form>
          <div className="text-center mt-5">
            <ButtonGroup className="text-center">
              <Button color="success" onClick={this.plus}>+</Button>
              <Button color="danger" onClick={this.minus}>-</Button>
              <Button color="warning" onClick={this.perkalian}>X</Button>
              <Button color="info" onClick={this.pembagian}>:</Button>
            </ButtonGroup>
          </div>
          <h1 className="text-center mt-5"> Hasil = {this.state.hasil}</h1>
        </Card>
      </div>
    )
  }
}

export default App