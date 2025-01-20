//import axios from "axios";

export class HttpClient {
  //   async get(url: string) {
  //     const { data, status } = await axios.get(url);
  //     console.log({ status });
  //     return { data, status };
  //   }

  //! Usando fetch api
  async get(url: string) {
    // const data = fetch(url)
    //   .then((resp) => resp.json())
    //   .then((resp) => resp.data);
    const resp = await fetch(url);
    const data = await resp.json();

    return { data: data, status: resp.status };
  }
}
