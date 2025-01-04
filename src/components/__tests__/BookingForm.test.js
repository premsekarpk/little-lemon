import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import BookingForm from '../BookingForm';

describe('BookingForm', () => {
  const mockProps = {
    availableTimes: ['17:00', '18:00', '19:00'],
    updateTimes: jest.fn(),
    submitForm: jest.fn(),
  };

  const renderBookingForm = () => {
    return render(
      <BrowserRouter>
        <BookingForm {...mockProps} />
      </BrowserRouter>
    );
  };

  test('Renders the BookingForm heading', () => {
    renderBookingForm();
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders all form fields', () => {
    renderBookingForm();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  });
});