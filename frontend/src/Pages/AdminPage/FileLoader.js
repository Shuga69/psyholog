import React, { Component } from 'react'

export default class FileLoader extends Component {
    onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
  
        fetch( 'https://cors-anywhere.herokuapp.com/https://psyhology-site.herokuapp.com/upload', {
            method: 'post',
            body: formData,
            headers :{'X-Requested-With': 'XMLHttpRequest'}
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
    };
    render() {
        return (
            <div>
                <div className="container">
            <div className="row">
                <div className="col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                        </div>
                </div>
            </div>
        </div>
            </div>
        )
    }
}
