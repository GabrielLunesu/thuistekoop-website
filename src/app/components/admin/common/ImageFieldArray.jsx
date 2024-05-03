import { ErrorMessage, Field, FieldArray } from "formik";
import React from "react";

function ImageFieldArray({ values, handleChange }) {
  return (
    <FieldArray name="images">
      {({ push, remove }) => (
        <div className="flex flex-col items-start gap-2">
          {values?.images?.map((image, index) => (
            <div className="flex items-start gap-2 w-[45%]" key={index}>
              <div className="mb-2">
                <Field
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name={`images.${index}`}
                  placeholder={"Add Image URL"}
                  onChange={handleChange}
                  type="text"
                />
                <ErrorMessage className="text-red-500" name={`images.${index}`} component="div" />
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
            onClick={() => push("")} // Add a new empty string to the images array
          >
            Add Image
          </button>
        </div>
      )}
    </FieldArray>
  );
}

export default ImageFieldArray;
