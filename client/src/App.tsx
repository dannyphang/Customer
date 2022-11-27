import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import AddCustomer from "./component/AddCustomer";
import CustomerTable from "./component/CustomerTable";
import CustomerService from "./services/CustomerService";

function App() {
  const [customer, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    CustomerService.getAllCustomers()
      .then((response: any) => {
        setCustomers(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <NextUIProvider>
      <div
        style={{
          width: "80%",
          marginLeft: "10%",
          marginTop: "40px",
        }}
      >
        <CustomerTable
          customers={customer}
          customerList={getCustomers}
        ></CustomerTable>
      </div>
      <div
        style={{
          width: "10%",
          marginLeft: "45%",
          marginTop: "40px",
        }}
      >
        <AddCustomer customerList={getCustomers}></AddCustomer>
      </div>
    </NextUIProvider>
  );
}

export default App;
