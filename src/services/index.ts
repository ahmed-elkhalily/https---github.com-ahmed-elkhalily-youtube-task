import axios from "axios";

let key = "AIzaSyCZ4JOfaLy7ORQmylP-9SCx8EI2fa686-Y";
const baseUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${key}`;

export function getResource(
  queryTxt: string,
  onProgress: (progress: number) => void,
  onSuccess: (success: object) => void,
  onFail: (fail: object) => void
) {
  let requestData: object = {
    method: "get",
    url: baseUrl + "&q=" + queryTxt,
    headers: {},
    onDownloadProgress: (progressEvent: { loaded: number; total: number }) => {
      const percentage: number = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgress(percentage);
    },
  };

  axios(requestData)
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((fail) => {
      onFail(fail.response);
    });
}
