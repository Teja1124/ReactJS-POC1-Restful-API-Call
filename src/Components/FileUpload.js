import React from 'react'
import axios, { post } from 'axios';

class FileUpload extends React.Component {

  constructor(props) {
    
    super(props);
    this.state ={
      value: '',
      name: ''
    }
  }

  onOptionChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="container col-md-3 upload-container">
        <form action="#" method="post" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="uploadCategory">Upload Category:</label>
                <select className="form-control" id="uploadCategory" onChange={this.onOptionChange}>
                    <option value="OasisData">Oasis Data</option>
                    <option value="EstimateData">Estimate Data</option>
                    <option value="ConfirmedTruckProgram">Confirmed Truck Program</option>
                </select>			   
            </div>  
            {this.state.value === 'EstimateData' && <SelectShow onOptionChange={this.onOptionChange} />}
            <div className="form-group">
                <label htmlFor="uploadFile">Upload Excel File:</label>
                <input type="file" onChange={this.handleChange} className="form-control" id="uploadFile" placeholder="Select File" name="upload-file" />
            </div>        
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Upload</button>
            </div>
        </form>
    </div>
   )
  }
}

  
const SelectShow = (props) => (
	<div className="form-group">
		<label htmlFor="uploadType">Estimate Version:</label>
		<select className="form-control" id="uploadType">
      <option value="E3">E3 2018</option>
      <option value="E5">E5</option>
      <option value="E9">E9</option>
      <option value="E11">E11 2017</option>
		</select>
	</div>
);

export default FileUpload

