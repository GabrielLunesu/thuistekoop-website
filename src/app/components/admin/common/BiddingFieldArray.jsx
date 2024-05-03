import { ErrorMessage, Field, FieldArray } from "formik";
import React from "react";

function BiddingFieldArray({ values, handleChange, name }) {
  return (
    <FieldArray name={name}>
      {({ push, remove }) => (
        <div className="flex flex-col items-start gap-2">
          {values?.biddingData?.bids?.map((image, index) => (
            <div className="flex items-start gap-2 w-[70%]" key={index}>
              <div className="mb-2">
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name={`${name}.${index}.bidder`}
                  placeholder={"Bidder"}
                  onChange={handleChange}
                  type="text"
                />
                <ErrorMessage className="text-red-500" name={`${name}.${index}.bidder`} component="div" />
              </div>
              <div className="mb-2">
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name={`${name}.${index}.amount`}
                  placeholder={"Amount"}
                  onChange={handleChange}
                  type="text"
                />
                <ErrorMessage className="text-red-500" name={`${name}.${index}.amount`} component="div" />
              </div>
              <div className="mb-2">
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name={`${name}.${index}.time`}
                  placeholder={"Time"}
                  onChange={handleChange}
                  type="text"
                />
                <ErrorMessage className="text-red-500" name={`${name}.${index}.time`} component="div" />
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
            onClick={() =>
              push({
                bidder: "",
                amount: "",
                time: "",
              })
            }
          >
            Add More
          </button>
        </div>
      )}
    </FieldArray>
  );
}

export default BiddingFieldArray;
