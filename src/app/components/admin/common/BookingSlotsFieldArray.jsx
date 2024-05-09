import React from 'react';
import { Field, FieldArray, ErrorMessage } from 'formik';

const BookingSlotsFieldArray = ({ values, handleChange, name }) => {
  return (
    <FieldArray
      name={name}
      render={({ push, remove }) => (
        <div className="flex flex-col items-start gap-2">
          {values.bookingData && values.bookingData.bookingSlots.map((slot, index) => (
            <div className="flex items-start gap-2 w-full" key={index}>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Booking Date</label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name={`${name}[${index}].bookingDate`}
                  type="date"
                />
                <ErrorMessage name={`${name}[${index}].bookingDate`} component="div" className="text-red-500" />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Booking Time</label>
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name={`${name}[${index}].bookingTime`}
                  type="time"
                />
                <ErrorMessage name={`${name}[${index}].bookingTime`} component="div" className="text-red-500" />
              </div>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => push({ bookingDate: '', bookingTime: '' })}
          >
            Add Booking Slot
          </button>
        </div>
      )}
    />
  );
};

export default BookingSlotsFieldArray;
