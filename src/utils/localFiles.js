export const fetchImage = () => {
  return new Promise((resolve, reject) => {
    try {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";

      fileInput.onchange = (event) => {
        const file = event.target.files[0];
        resolve(file);
      };

      fileInput.click(); // Trigger the file input dialog
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
export const fetchVideo = () => {
  return new Promise((resolve, reject) => {
    try {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "video/*";

      fileInput.onchange = (event) => {
        const file = event.target.files[0];
        resolve(file);
      };

      fileInput.click(); // Trigger the file input dialog
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
export const fetchPDF = () => {
  return new Promise((resolve, reject) => {
    try {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "application/pdf";

      fileInput.onchange = (event) => {
        const file = event.target.files[0];
        resolve(file);
      };

      fileInput.click(); // Trigger the file input dialog
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
