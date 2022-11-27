import { Modal, Input, Button, Text, Grid } from "@nextui-org/react";
import { useState } from "react";
import CustomerService from "../services/CustomerService";

const AddCustomer = (props: { customerList: () => void }) => {
  const initialCustomer = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    city: "",
  };
  const [customer, setCustomer] = useState(initialCustomer);

  const saveCustomer = async () => {
    var data = {
      id: null,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      password: customer.password,
      phoneNumber: customer.phoneNumber,
      city: customer.city,
    };
    await CustomerService.createCustomer(data).then(props.customerList);
    setCustomer(initialCustomer);
    setVisible(false);
  };

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  return (
    <div>
      <Button aria-label="register-button" auto onPress={handler}>
        Register
      </Button>

      <Modal
        aria-label="register-modal"
        closeButton
        blur
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={20} weight="semibold">
            Register New Customer
            {/* </Text> */}
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
              placeholder="First Name"
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
              placeholder="Last Name"
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
                  name="phoneNumber"
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
            aria-label="close-button"
            auto
            flat
            color="error"
            onPress={closeHandler}
          >
            Close
          </Button>
          <Button aria-label="register-button" auto onPress={saveCustomer}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCustomer;
