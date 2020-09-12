import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const container = render(<CheckoutForm />)

    let header = container.getByText(/checkout form/i)

    expect(header).toBeInTheDocument
});

test("form shows success message on submit with form details", () => {
    const container = render(<CheckoutForm />)
    const firstNameField = container.getByLabelText(/first name:/i)
    const lastNameField = container.getByLabelText(/last name:/i)
    const addressField = container.getByLabelText(/address:/i)
    const cityField = container.getByLabelText(/city:/i)
    const stateField = container.getByText(/state:/i)
    const zipField = container.getByLabelText(/zip:/i)
    
    let firstName = "Mike"
    let lastName = "Gregory"
    let address = "here"
    let city = "nowhere"
    let state = "South Dakota"
    let zip = "98765"

    fireEvent.change(firstNameField, { target: {value: firstName}})
    fireEvent.change(lastNameField, { target: {value: lastName}})
    fireEvent.change(addressField, { target: {value: address}})
    fireEvent.change(cityField, { target: {value: city}})
    fireEvent.change(stateField, { target: {value: state}})
    fireEvent.change(zipField, { target: {value: zip}})

    expect(firstNameField.value).toBe(firstName)
    expect(lastNameField.value).toBe(lastName)
    expect(addressField.value).toBe(address)
    expect(cityField.value).toBe(city)
    expect(stateField.value).toBe(state)
    expect(zipField.value).toBe(zip)

    fireEvent.click(container.getByTestId(/submit-button/i))
    let successmessage = container.getByTestId(/successmessage/i)
    expect(successmessage).toBeInTheDocument()
});
