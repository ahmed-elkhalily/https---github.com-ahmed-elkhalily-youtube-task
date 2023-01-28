import { getResource } from "../services";

export const searchOnYoutube = (
  query: string,
  onProgress: (progress: number) => void,
  onSuccess: (success: object) => void,
  onFail: (fail: object) => void
) => {
  getResource(query, onProgress, onSuccess, onFail);
};
