import React from 'react';
import axios from 'axios';
//import UDLogo from '../assets/UDLogo.jpg';
import Navigation from './Navigation';

class SimpleReactFileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            value: '',
            selectedFile: null
        }
    }
    onOptionChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
    }
    handleSubmit = event => {
        event.preventDefault();
    }

    fileChangedHandler = (event) => {
        this.setState(
            {
                selectedFile: event.target.files[0]
            })
    }

    uploadHandler = () => {
        //console.log("Upload Method Called!!", this.state.selectedFile);
        const formData = new FormData()
        formData.append('filename', this.state.selectedFile);

        axios({
            method: 'post',
            url: 'http://localhost:60396/api/UploadOasisData',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }},
            responseType: 'blob'
        })
            .then(function (response) {
                console.log("Success: ", response);
                console.log(response.status);

                if(response.status === 206){

                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'file.xlsx'); //or any other extension
                    document.body.appendChild(link);
                    link.click();

                    // const fileDownload = require('js-file-download');
                    // fileDownload(response.data, 'filename.xls');

                }
            })
            .catch(function (response) {
                //handle error
                console.log("Failure: ", response);
            });

    }


    render() {
        return (

            <div className="container-fluid">
                <Navigation />
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-12 well">
                            <div className="collapsePanel collapseclass" aria-expanded="true">
                                <div className="addcusto-section ">
                                    <div>
                                        <h3 className="header-text">
                                            Oasis Data Upload</h3>
                                    </div>
                                    <div className="row addcusto-formblk">
                                        <div className="col-md-4 col-md-offset-4 upload-container">
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
                                                    <input type="file" onChange={this.fileChangedHandler} className="form-control" id="uploadFile" placeholder="Select File" name="upload-file" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" onClick={this.uploadHandler} className="btn btn-primary">Upload</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default SimpleReactFileUpload