import { Button, Table } from "@nextui-org/react";
import EditCustomer from "./EditCustomer";
import DeleteCustomer from "./DeleteCustomer";
import Customer from "../models/Customer";

const CustomerTable = (props: {
  customers: Customer[];
  customerList: () => void;
}) => {
  return (
    <Table aria-label="table">
      <Table.Header>
        <Table.Column>First Name</Table.Column>
        <Table.Column>Last Name</Table.Column>
        <Table.Column>Email</Table.Column>
        <Table.Column>Password</Table.Column>
        <Table.Column>Phone Number</Table.Column>
        <Table.Column>City</Table.Column>
        <Table.Column width={"30px"}>Action</Table.Column>
      </Table.Header>
      <Table.Body items={props.customers}>
        {(item: any) => (
          <Table.Row key={item.customerId}>
            <Table.Cell>{item.firstName}</Table.Cell>
            <Table.Cell>{item.lastName}</Table.Cell>
            <Table.Cell>{item.email}</Table.Cell>
            <Table.Cell>{item.password}</Table.Cell>
            <Table.Cell>{item.phoneNumber}</Table.Cell>
            <Table.Cell>{item.city}</Table.Cell>
            <Table.Cell>
              <Button.Group>
                <EditCustomer
                  customer={item}
                  customerId={item.customerId}
                  customerList={props.customerList}
                ></EditCustomer>
                <DeleteCustomer
                  customerId={item.customerId}
                  customerList={props.customerList}
                ></DeleteCustomer>
              </Button.Group>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
      {/* <Table.Pagination shadow align="center" rowsPerPage={2} /> */}
    </Table>
  );
};
export default CustomerTable;
