import http from "./http-interceptor.service";

class SampleApiService {
  getAll(): Promise<any> {
    return http.get("/product");
  }

  get(id: any): Promise<any> {
    return http.get(`/product/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/product", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/product/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/product/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/product`);
  }

  findByDescription(title: string): Promise<any> {
    return http.get(`/product?id=`);
  }
}

export default new SampleApiService();