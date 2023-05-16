import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

class App extends Component {
  state = {
    name: '',
    rollno: 0,
    english: 0,
    physics: 0,
    mathematics: 0,
    chemistry: 0,
    computerScience: 0,
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/><br></br>
        <input type="number" placeholder="Roll no." name="rollno" onChange={this.handleChange} /><br></br>
        <input type="number" placeholder="English" name="english" onChange={this.handleChange} /><br></br>
        <input type="number" placeholder="Physics" name="physics" onChange={this.handleChange} /><br></br>
        <input type="number" placeholder="Mathematics" name="mathematics" onChange={this.handleChange} /><br></br>
        <input type="number" placeholder="Chemistry" name="chemistry" onChange={this.handleChange} /><br></br>
        <input type="number" placeholder="Computer Science" name="computerScience" onChange={this.handleChange} /><br></br>
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default App;
