import http from "./http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'X-Requested-With': 'XMLHttpRequest'
      },
      onUploadProgress,
    });
  }
 
  getFiles() {
    return http.get("/files");
  }
  getOneFile(fileName) {
    return http.get("/files/"+{fileName});
  }
}

export default new UploadFilesService();