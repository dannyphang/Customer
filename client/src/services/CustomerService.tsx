import api from "../http-common";
import Customer from "../models/Customer";

class CustomerService {
  getAllCustomers() {
    return api.get<Customer[]>("/customer");
  }

  getCustomerById(id: number) {
    return api.get<Customer>(`/customer/${id}`);
  }

  createCustomer(customer: Customer) {
    return api.post("/customer", customer);
  }

  updateCustomer(id: number, customer: Customer) {
    return api.put(`/customer/${id}`, customer);
  }

  deleteCustomer(id: number) {
    return api.delete(`/customer/${id}`);
  }
}

export default new CustomerService();
