import { Tooltip, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import CustomerService from "../services/CustomerService";

export default function DeleteCustomer(props: {
  customerId: number;
  customerList: () => void;
}) {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    CustomerService.getAllCustomers()
      .then((response: any) => {
        setCustomer(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const removeCustomer = async () => {
    if (props.customerId !== undefined && props.customerId !== null) {
      await CustomerService.deleteCustomer(props.customerId).then(
        props.customerList
      );
    }
  };
  return (
    <Tooltip aria-label="tooltip" content="Delete" offset={40}>
      <Button
        aria-label="delete-button"
        auto
        light
        icon={<MdDeleteOutline size="26px" />}
        onPress={removeCustomer}
      />
    </Tooltip>
  );
}
