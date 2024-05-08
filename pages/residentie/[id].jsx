
// export default PropertyPage;
import BiddingDetails from "@/app/components/property/BiddingDetails";
import PhotoSlider from "@/app/components/property/PhotoSlider";
import PropertyBuild from "@/app/components/property/PropertyBuild";
import PropertyDescription from "@/app/components/property/PropertyDescription";
import PropertyDetails from "@/app/components/property/PropertyDetails";
import PropertyEnergy from "@/app/components/property/PropertyEnergy";
import PropertyGarage from "@/app/components/property/PropertyGarage";
import PropertyLayout from "@/app/components/property/PropertyLayout";
import PropertyOutdoor from "@/app/components/property/PropertyOutdoor";
import PropertyParkDetails from "@/app/components/property/PropertyParkDetails";
import PropertySpace from "@/app/components/property/PropertySpace";
import PropertySummary from "@/app/components/property/PropertySummary";
import BookingDates from "@/app/components/property/BookingDates";

async function getServerSideProps(context) {
  
  const { params } = context;
  const { id } = params; // Extract 'id' from URL parameters

  // Fetch property data based on the extracted 'id'
  const res = await fetch(`https://thuistekoop-website-server-1.onrender.com/api/v1/property/${id}`);
  const data = await res.json();
  // // Check if we received data successfully
  // if (!data || data.error) {
  //   return {
  //     notFound: true,
  //   };
  // }


  // Pass the data to the page via props
  return {
    props: { property: data.data, id }, // Pass 'property' data and 'id'
  };
}

const PropertyPage = ({ property }) => {
  // Extracting all necessary details from property object received via props
  const {
    title,
    address,
    price,
    images,
    details,
    description,
    space,
    build,
    layoutDetailsData,
    outdoor,
    energyData,
    parkdetails,
    garagedetails,
    biddingData,
    bookingData
  } = property;
  return (
    <div className="max-w-4xl mx-auto">
      <PhotoSlider images={images} />
      <PropertySummary property={{ title, address, price }} />

      <BiddingDetails
        initialPrice={biddingData.initialPrice}
        bids={biddingData.bids}
        bidEndTime={biddingData.bidEndTime}
      />

      <PropertyDetails details={details} />
      <PropertyDescription description={description} />
      <PropertySpace space={space} />
      <PropertyBuild build={build} />
      <PropertyLayout layoutdetails={layoutDetailsData} />
      <PropertyOutdoor outdoor={outdoor} />
      <PropertyEnergy energy={energyData} />
      <PropertyParkDetails parkdetails={parkdetails} />
      <PropertyGarage garagedetails={garagedetails} />
         {/* Render BookingDates only if bookingData exists */}
         {property.bookingData && (
        <BookingDates bookingData={property.bookingData} />
      )} 
      </div>
  );
};

export default PropertyPage;
export { getServerSideProps };

