import { Modal, Input, Button, Text, Tooltip, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import Customer from "../models/Customer";
import CustomerService from "../services/CustomerService";

const EditCustomer = (props: {
  customer: Customer;
  customerId: number;
  customerList: () => void;
}) => {
  const data = {
    firstName: props.customer.firstName,
    lastName: props.customer.lastName,
    email: props.customer.email,
    password: props.customer.password,
    phoneNumber: props.customer.phoneNumber,
    city: props.customer.city,
  };

  useEffect(() => {
    setCustomer(data);
  }, []);

  const initialCustomer = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    city: "",
  };
  const [customer, setCustomer] = useState(initialCustomer);

  const updateCustomer = async () => {
    var updatedCustomer = {
      id: props.customerId,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      password: customer.password,
      phoneNumber: customer.phoneNumber,
      city: customer.city,
    };
    if (props.customerId !== undefined && props.customerId !== null) {
      await CustomerService.updateCustomer(
        props.customerId,
        updatedCustomer
      ).then(props.customerList);
      setVisible2(false);
    }
  };

  const [visible2, setVisible2] = useState(false);
  const handler = () => setVisible2(true);
  const closeHandler = () => {
    setVisible2(false);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  const cancelHandler = () => {
    setVisible2(false);
    setCustomer(data);
  };

  return (
    <div>
      <Tooltip aria-label="tooltip" content="Edit" offset={40}>
        <Button
          aria-label="edit-button"
          auto
          light
          icon={<FiEdit2 size="26px" />}
          onPress={handler}
        />
      </Tooltip>

      <Modal
        aria-label="modal"
        closeButton
        blur
        open={visible2}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} weight="semibold">
            Edit Customer
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              marginBottom: "1.7rem",
            }}
          >
            <Input
              aria-label="first-name-input"
              id="firstName"
              clearable
              bordered
              fullWidth
              size="lg"
              // placeholder="First Name"
              name="firstName"
              value={customer.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div
            style={{
              marginBottom: "1.7rem",
            }}
          >
            <Input
              aria-label="last-name-input"
              id="lastName"
              clearable
              bordered
              fullWidth
              size="lg"
              // placeholder="Last Name"
              name="lastName"
              value={customer.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div
            style={{
              marginBottom: "1.7rem",
            }}
          >
            <Input
              aria-label="email-input"
              id="email"
              clearable
              bordered
              fullWidth
              size="lg"
              placeholder="Email"
              name="email"
              value={customer.email}
              onChange={handleInputChange}
            />
          </div>
          <div
            style={{
              marginBottom: "1.7rem",
            }}
          >
            <Input.Password
              aria-label="password-input"
              id="password"
              clearable
              bordered
              fullWidth
              size="lg"
              placeholder="Password"
              type="password"
              name="password"
              value={customer.password}
              onChange={handleInputChange}
            />
          </div>
          <div
            style={{
              marginBottom: "1.7rem",
            }}
          >
            <Grid.Container justify="flex-start">
              <Grid
                style={{
                  paddingLeft: "0px",
                  marginLeft: "0px",
                  width: "50%",
                }}
              >
                <Input
                  aria-label="phone-input"
                  id="phone"
                  clearable
                  bordered
                  fullWidth
                  size="lg"
                  placeholder="Phone Number"
                  name="phone"
                  value={customer.phoneNumber}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                style={{
                  paddingLeft: "0px",
                  marginLeft: "5%",
                  width: "45%",
                }}
              >
                <Input
                  aria-label="city-input"
                  id="city"
                  clearable
                  bordered
                  fullWidth
                  size="lg"
                  placeholder="City"
                  name="city"
                  value={customer.city}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid.Container>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            aria-label="cancel-button"
            auto
            flat
            color="error"
            onPress={cancelHandler}
          >
            Cancel
          </Button>
          <Button aria-label="update-button" auto onPress={updateCustomer}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditCustomer;
