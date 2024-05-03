// import BiddingDetails from "@/app/components/property/BiddingDetails";
// import PhotoSlider from "@/app/components/property/PhotoSlider";
// import PropertyBuild from "@/app/components/property/PropertyBuild";
// import PropertyDescription from "@/app/components/property/PropertyDescription";
// import PropertyDetails from "@/app/components/property/PropertyDetails";
// import PropertyEnergy from "@/app/components/property/PropertyEnergy";
// import PropertyGarage from "@/app/components/property/PropertyGarage";
// import PropertyLayout from "@/app/components/property/PropertyLayout";
// import PropertyOutdoor from "@/app/components/property/PropertyOutdoor";
// import PropertyParkDetails from "@/app/components/property/PropertyParkDetails";
// import PropertySpace from "@/app/components/property/PropertySpace";
// import PropertySummary from "@/app/components/property/PropertySummary";


// const PropertyPage = () => {
//   const property = {
//     title: "Hendrik de Swaeffstraat 11",
//     address: "5706 MX Helmond (Akkers)",
//     price: "€ 469.000 k.k."
//   };

//   const images = [
//     "https://via.placeholder.com/600x400",
//     "https://via.placeholder.com/600x400",
//     "https://via.placeholder.com/600x400"
//   ];

//   const details = [
//     { label: "Woonoppervlakte", value: "132 m²" },
//     { label: "Perceeloppervlakte", value: "275 m²" },
//     { label: "Bouwjaar", value: "1998" },
//     { label: "Kamers", value: "5" }

//   ];

//   const description = "Deze woning wordt sinds 30 april 2024 aangeboden door Adriaan van den Heuvel Makelaars en Adviseurs...";

//   const space = [
//     { label: "Woonoppervlakte", value: "132 m²" },
//     { label: "Perceeloppervlakte", value: "275 m²" },
//     { label: "Inhoud", value: "463 m³" },

//   ];


//   const build = [
//     { label: "Type woning", value: "Huis" },
//     { label: "Soort woning", value: "2-onder-1-kapwoning, Eengezinswoning" },
//     { label: "Soort bouw", value: "Bestaande bouw" },
//     { label: "Bouwjaar", value: "1998" },


//   ];

//   const layoutDetailsData = {
//     aantalKamers: 5,
//     aantalSlaapkamers: 4,
//     aantalBadkamers: 1,
//     aantalWoonlagen: 3,
//     voorzieningen: ['Mechanische ventilatie', 'Douche', 'Toilet', 'Buitenzonwering', 'Dakraam', 'Wasruimte']
//   };

//   const outdoor = [
//     { label: "Balkon", value: "Niet aanwezig" },
//     { label: "Tuin", value: "Aanwezig (110 m², gelegen op het zuiden)" },
//     { label: "Tuinbeschrijving", value: "achtertuin, voortuin" },


//   ];

//   const energyData = {
//     isolatie: "Dubbele beglazing, Vloerisolatie, Dakisolatie, Muurisolatie",
//     verwarming: "CV-ketel",
//     warmWater: "CV-ketel",
//     cvKetel: "Vaillant (Gas, uit 2016, Eigendom)",
//     energielabel: "B"
//   };
  
//   const parkdetails = [
//     { label: "Aanwezig", value: "Ja" },
//     { label: "Soort parkeergelegenheid", value: "Openbaar" },
//   ];

//   const garagedetails = [
//     { label: "Aanwezig", value: "Ja" },
//     { label: "Omschrijving", value: "Vrijstaand steen" },
//   ];

//   const biddingData = {
//     initialPrice: 469000,
//     hoursUntilClose: 12,
//     bids: [
//       { bidder: 'John Doe', amount: 470000, time: '2024-04-25 14:00' },
//       { bidder: 'Jane Smith', amount: 471000, time: '2024-04-26 15:30' }
//     ]
//   };
  

//   return (
//     <div className="max-w-4xl mx-auto">
//       <PhotoSlider images={images} />
//       <PropertySummary property={property} />
      
//       <BiddingDetails initialPrice={biddingData.initialPrice} bids={biddingData.bids} hoursUntilClose={biddingData.hoursUntilClose} />

//       <PropertyDetails details={details} />
//       <PropertyDescription description={description} />
//       <PropertySpace space={space} />
//       <PropertyBuild build={build} />
//       <PropertyLayout layoutdetails={layoutDetailsData} />
//       <PropertyOutdoor outdoor={outdoor} />
//       <PropertyEnergy energy={energyData} />
//       <PropertyParkDetails parkdetails={parkdetails} />
//       <PropertyGarage garagedetails={garagedetails} />

//     </div>
//   );
// };

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
  } = property;
  return (
    <div className="max-w-4xl mx-auto">
      <PhotoSlider images={images} />
      <PropertySummary property={{ title, address, price }} />

      <BiddingDetails
        initialPrice={biddingData.initialPrice}
        bids={biddingData.bids}
        hoursUntilClose={biddingData.hoursUntilClose}
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
    </div>
  );
};

export default PropertyPage;
export { getServerSideProps };

