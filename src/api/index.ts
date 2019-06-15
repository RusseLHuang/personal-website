import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { MediumPost, MediumPosts } from '../dto/medium-post.dto';

export default class {
  private config: AxiosRequestConfig;

  constructor() {
    this.config = {
      baseURL: 'https://hweeu541gb.execute-api.us-east-2.amazonaws.com/dev',
      responseType: 'json',
    };
  }

  public getMediumPost(): Promise<MediumPosts> {
    const reqConfig: AxiosRequestConfig = {
      url: '/hello',
      method: 'get',
      ...this.config,
    };

    return axios(reqConfig)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  private handleResponse(resp: AxiosResponse) {
    return resp.data.message;
  }

  private handleError(error: AxiosError) {
    return error.message;
  }
}
