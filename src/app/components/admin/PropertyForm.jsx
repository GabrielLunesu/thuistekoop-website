import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import ImageFieldArray from "./common/ImageFieldArray";
import CommonFieldArray from "./common/CommonFieldArray";
import StringFieldArray from "./common/StringFieldArray";
import BiddingFieldArray from "./common/BiddingFieldArray";

const emptyState = {
  title: "",
  address: "",
  price: "",
  images: [""],
  details: [{ label: "", value: "" }],
  description: "",
  space: [{ label: "", value: "" }],
  build: [{ label: "", value: "" }],
  layoutDetailsData: {
    aantalKamers: 0,
    aantalSlaapkamers: 0,
    aantalBadkamers: 0,
    aantalWoonlagen: 0,
    voorzieningen: [""],
  },
  outdoor: [{ label: "", value: "" }],
  energyData: {
    isolatie: "",
    verwarming: "",
    warmWater: "",
    cvKetel: "",
    energielabel: "",
  },
  parkdetails: [{ label: "", value: "" }],
  garagedetails: [{ label: "", value: "" }],
  biddingData: {
    initialPrice: 0,
    hoursUntilClose: 0,
    bids: [
      {
        bidder: "",
        amount: "",
        time: "",
      },
    ],
  },
};

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  address: Yup.string().required("Address is required"),
  price: Yup.string().required("Price is required"),
  images: Yup.array().of(Yup.string().url("Invalid URL").required("Field is required")).required("Images are required"),
  details: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required("Detail label is required"),
      value: Yup.string().required("Detail value is required"),
    })
  ),
  description: Yup.string().required("Description is required"),
  space: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required("Space label is required"),
      value: Yup.string().required("Space value is required"),
    })
  ),
  build: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required("Build label is required"),
      value: Yup.string().required("Build value is required"),
    })
  ),
  layoutDetailsData: Yup.object().shape({
    aantalKamers: Yup.number().required("Number of rooms is required"),
    aantalSlaapkamers: Yup.number().required("Number of bedrooms is required"),
    aantalBadkamers: Yup.number().required("Number of bathrooms is required"),
    aantalWoonlagen: Yup.number().required("Number of floors is required"),
    voorzieningen: Yup.array().of(Yup.string().required("Amenities is required")).required("Amenities are required"),
  }),
  outdoor: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required("Outdoor label is required"),
      value: Yup.string().required("Outdoor value is required"),
    })
  ),
  energyData: Yup.object().shape({
    isolatie: Yup.string().required("Isolatie is required"),
    verwarming: Yup.string().required("Verwarming is required"),
    warmWater: Yup.string().required("Warm water is required"),
    cvKetel: Yup.string().required("CV Ketel is required"),
    energielabel: Yup.string().required("Energielabel is required"),
  }),
  parkdetails: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required("Park detail label is required"),
      value: Yup.string().required("Park detail value is required"),
    })
  ),
  garagedetails: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required("Garage detail label is required"),
      value: Yup.string().required("Garage detail value is required"),
    })
  ),
  biddingData: Yup.object().shape({
    initialPrice: Yup.number().required("Initial price is required"),
    hoursUntilClose: Yup.number().required("Hours until close is required"),
    bids: Yup.array().of(
      Yup.object().shape({
        bidder: Yup.string().required("Bidder name is required"),
        amount: Yup.number().required("Bid amount is required"),
        time: Yup.date().required("Bid time is required"),
      })
    ),
  }),
});

const PropertyForm = ({ id, dataSubmitted }) => {
  const [initialValues, setInitialValues] = useState(emptyState);

  const fetchProperties = async (id) => {
    try {
      const response = await fetch(`https://thuistekoop-website-server-1.onrender.com/api/v1/property/${id}`);
      const data = await response.json();
      setInitialValues(data.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProperties(id);
    }
  }, [id]);

  const updateProperty = async (updatedProperty) => {
    try {
      const response = await fetch(`https://thuistekoop-website-server-1.onrender.com/api/v1/property/${updatedProperty.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProperty),
      });
      const data = await response.json();
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (id) {
        await updateProperty(values);
      } else {
        const response = await fetch("https://thuistekoop-website-server-1.onrender.com/api/v1/property", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      }
      dataSubmitted();
      alert("Form submitted!");
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize>
      {({ handleSubmit, values, onSubmit, handleChange }) => (
        <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
          <div className="grid grid-flow-col grid-cols-4 gap-4 items-start mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
              <Field
                type="text"
                name="title"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="title" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
              <Field
                type="text"
                name="address"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="address" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
              <Field
                type="text"
                name="price"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="price" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <Field
                type="text"
                name="description"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="description" component="div" />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <span className="font-bold mb-2 ">Images</span>
            <ImageFieldArray values={values} handleChange={handleChange} />
          </div>

          <div className="flex flex-col mb-4">
            <span className="font-bold mb-2 ">Details</span>
            <CommonFieldArray name="details" values={values} handleChange={handleChange} />
          </div>

          <div className="flex flex-col mb-4">
            <span className="font-bold mb-2 ">Space</span>
            <CommonFieldArray name="space" values={values} handleChange={handleChange} />
          </div>

          <div className="flex flex-col mb-4">
            <span className="font-bold mb-2 ">Build</span>
            <CommonFieldArray name="build" values={values} handleChange={handleChange} />
          </div>

          <div className="grid grid-flow-col grid-cols-4 gap-4 items-start mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">aantalKamers</label>
              <Field
                type="number"
                name="layoutDetailsData.aantalKamers"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="layoutDetailsData.aantalKamers" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">aantalSlaapkamers</label>
              <Field
                type="number"
                name="layoutDetailsData.aantalSlaapkamers"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="layoutDetailsData.aantalSlaapkamers" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">aantalBadkamers</label>
              <Field
                type="number"
                name="layoutDetailsData.aantalBadkamers"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="layoutDetailsData.aantalBadkamers" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">aantalWoonlagen</label>
              <Field
                type="number"
                name="layoutDetailsData.aantalWoonlagen"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="layoutDetailsData.aantalWoonlagen" component="div" />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <span className="font-bold mb-2 ">voorzieningen</span>
            <StringFieldArray name="layoutDetailsData.voorzieningen" values={values} handleChange={handleChange} />
          </div>

          <div className="flex flex-col mb-4">
            <span className="font-bold mb-2 ">Outdoor</span>
            <CommonFieldArray name="outdoor" values={values} handleChange={handleChange} />
          </div>

          <div className="grid grid-flow-col grid-cols-5 gap-4 items-start mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">isolatie</label>
              <Field
                type="text"
                name="energyData.isolatie"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="energyData.isolatie" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">verwarming</label>
              <Field
                type="text"
                name="energyData.verwarming"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="energyData.verwarming" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">warmWater</label>
              <Field
                type="text"
                name="energyData.warmWater"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="energyData.warmWater" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">cvKetel</label>
              <Field
                type="text"
                name="energyData.cvKetel"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="energyData.cvKetel" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">energielabel</label>
              <Field
                type="text"
                name="energyData.energielabel"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="energyData.energielabel" component="div" />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <span className="font-bold mb-2 ">Parkdetails</span>
            <CommonFieldArray name="parkdetails" values={values} handleChange={handleChange} />
          </div>

          <div className="flex flex-col mb-4">
            <span className="font-bold mb-2 ">Garagedetails</span>
            <CommonFieldArray name="garagedetails" values={values} handleChange={handleChange} />
          </div>

          <div className="grid grid-flow-col grid-cols-4 gap-4 items-start mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">InitialPrice</label>
              <Field
                type="number"
                name="biddingData.initialPrice"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="biddingData.initialPrice" component="div" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">HoursUntilClose</label>
              <Field
                type="number"
                name="biddingData.hoursUntilClose"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage className="text-red-500" name="biddingData.hoursUntilClose" component="div" />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <span className="font-bold mb-2 ">Bids</span>
            <BiddingFieldArray name="biddingData.bids" values={values} handleChange={handleChange} />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {id ? "Update Property" : "Add Property"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PropertyForm;
