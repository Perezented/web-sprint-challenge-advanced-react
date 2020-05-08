import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
    render(<CheckoutForm />);
});

test('form shows success message on submit with form details', () => {
    const { getByLabelText, getByText } = render(<CheckoutForm />);

    getByLabelText(/first name/i); //Able to get the label text for first name

    //  Grab each input
    const fNameInput = getByLabelText(/first name/i);
    const lNameInput = getByLabelText(/last name/i);
    const addressInput = getByLabelText(/address/i);
    const cityInput = getByLabelText(/city/i);
    const stateInput = getByLabelText(/state/i);
    const zipInput = getByLabelText(/zip/i);

    //  type into each input
    fireEvent.change(fNameInput, { target: { value: 'FirstNameHere' } });
    fireEvent.change(lNameInput, { target: { value: 'LastNameHere' } });
    fireEvent.change(addressInput, { target: { value: '123 Address Street' } });
    fireEvent.change(cityInput, { target: { value: 'CityInputedHere' } });
    fireEvent.change(stateInput, { target: { value: 'StateGoesHere' } });
    fireEvent.change(zipInput, { target: { value: '12345' } });

    //  make sure the values are correct
    console.log(fNameInput.value);
    console.log(lNameInput.value);
    console.log(addressInput.value);
    console.log(stateInput.value);
    console.log(zipInput.value);

    //  have the test expect it as well
    expect(fNameInput.value).toBe('FirstNameHere');
    expect(lNameInput.value).toBe('LastNameHere');
    expect(addressInput.value).toBe('123 Address Street');
    expect(cityInput.value).toBe('CityInputedHere');
    expect(stateInput.value).toBe('StateGoesHere');
    expect(zipInput.value).toBe('12345');

    //  click on checkout
    fireEvent.click(getByText('Checkout'));
    //  expect to see the text in the box that pops up. This line will fail the test if it is moved above the click on line 48.
    expect(getByText(/you have ordered some plants/i)).toBeInTheDocument();
});
