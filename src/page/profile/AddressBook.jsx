import { useEffect, useState } from "react";
const options = {
  "area": [
    { "value": "BD", "label": "Bangladesh" },
    { "value": "IN", "label": "India" },
    { "value": "US", "label": "United States" },
    { "value": "CA", "label": "Canada" },
    { "value": "AU", "label": "Australia" },
  ],
  "Divisions": [
    {
      "value": "Dhaka",
      "label": [
        {
          "district": "Dhaka",
          "Thana": [
            "Badda",
            "Banani",
            "Bangshal",
            "Bhashantek",
            "Cantonment",
            "Chawkbazar",
            "Dakkhinkhan",
            "Darus Salam",
            "Demra",
            "Dhanmondi",
            "Gandaria",
            "Gulshan",
            "Hazaribagh",
            "Jatrabari",
            "Kadamtali",
            "Kalabagan",
            "Kamrangirchar",
            "Khilkhet",
            "Khilgaon",
            "Kotwali",
            "Lalbagh",
            "Mohammadpur",
            "Mirpur",
            "Motijheel",
            "New Market",
            "Pallabi",
            "Paltan",
            "Ramna",
            "Rampura",
            "Sabujbagh",
            "Shah Ali",
            "Shahbagh",
            "Sher-e-Bangla Nagar",
            "Shyampur",
            "Sutrapur",
            "Tejgaon",
            "Tejgaon Industrial Area",
            "Turag",
            "Uttara West",
            "Uttara East",
            "Uttarkhan",
          ],
        },
        {
          "district": "Faridpur",
          "Thana": [
            "Faridpur Sadar",
            "Nagarkanda",
            "Sadarpur",
            "Bhanga",
            "Alfadanga",
            "Madhukhali",
            "Boalmari",
            "Charbhadrasan",
          ],
        },
        {
          "district": "Gazipur",
          "Thana": [
            "Gazipur Sadar",
            "Tongi",
            "Kaliakair",
            "Kaliganj",
            "Kapasia",
            "Sreepur",
          ],
        },
        {
          "district": "Gopalganj",
          "Thana": [
            "Gopalganj Sadar",
            "Kotalipara",
            "Muksudpur",
            "Tungipara",
            "Kashiani",
          ],
        },
        {
          "district": "Kishoreganj",
          "Thana": [
            "Kishoreganj Sadar",
            "Bajitpur",
            "Hossainpur",
            "Pakundia",
            "Katiadi",
            "Kuliarchar",
            "Karimganj",
            "Itna",
            "Mithamain",
            "Nikli",
            "Austagram",
            "Tarail",
          ],
        },
        {
          "district": "Madaripur",
          "Thana": ["Madaripur Sadar", "Kalkini", "Rajoir", "Shibchar"],
        },
        {
          "district": "Manikganj",
          "Thana": [
            "Manikganj Sadar",
            "Daulatpur",
            "Ghior",
            "Harirampur",
            "Shivalaya",
            "Singair",
            "Saturia",
          ],
        },
        {
          "district": "Munshiganj",
          "Thana": [
            "Munshiganj Sadar",
            "Gazaria",
            "Lohajang",
            "Sirajdikhan",
            "Sreenagar",
            "Tongibari",
          ],
        },
        {
          "district": "Narayanganj",
          "Thana": [
            "Narayanganj Sadar",
            "Araihazar",
            "Bandar",
            "Rupganj",
            "Sonargaon",
          ],
        },
        {
          "district": "Narsingdi",
          "Thana": [
            "Narsingdi Sadar",
            "Belabo",
            "Monohardi",
            "Palash",
            "Raipura",
            "Shibpur",
          ],
        },
        {
          "district": "Rajbari",
          "Thana": ["Rajbari Sadar", "Baliakandi", "Goalandaghat", "Pangsha"],
        },
        {
          "district": "Shariatpur",
          "Thana": [
            "Shariatpur Sadar",
            "Bhedarganj",
            "Damudya",
            "Gosairhat",
            "Naria",
            "Zajira",
          ],
        },
        {
          "district": "Tangail",
          "Thana": [
            "Tangail Sadar",
            "Bhuapur",
            "Delduar",
            "Dhanbari",
            "Ghatail",
            "Gopalpur",
            "Kalihati",
            "Madhupur",
            "Mirzapur",
            "Nagarpur",
            "Sakhipur",
          ],
        },
      ],
    },

    {
      "value": "Chattogram",
      "label": [
        {
          "district": "Bandarban",
          "Thana": [
            "Bandarban Sadar",
            "Thanchi",
            "Ruma",
            "Rowangchhari",
            "Lama",
            "Ali Kadam",
            "Naikhongchhari",
          ],
        },
        {
          "district": "Brahmanbaria",
          "Thana": [
            "Brahmanbaria Sadar",
            "Ashuganj",
            "Sarail",
            "Nabinagar",
            "Bancharampur",
            "Kasba",
            "Akhaura",
          ],
        },
        {
          "district": "Chandpur",
          "Thana": [
            "Chandpur Sadar",
            "Matlab North",
            "Matlab South",
            "Kachua",
            "Shahrasti",
            "Haimchar",
            "Faridganj",
          ],
        },
        {
          "district": "Chattogram",
          "Thana": [
            "Chattogram Sadar",
            "Pahartali",
            "Panchlaish",
            "Patenga",
            "Double Mooring",
            "Kotwali",
            "Bakalia",
            "Raozan",
            "Anwara",
            "Boalkhali",
            "Sitakunda",
            "Fatikchhari",
            "Hathazari",
            "Mirsharai",
            "Sandwip",
            "Rangunia",
            "Chandanaish",
            "Lohagara",
            "Satkania",
            "Banshkhali",
          ],
        },
        {
          "district": "Cumilla",
          "Thana": [
            "Cumilla Sadar",
            "Laksam",
            "Chauddagram",
            "Debidwar",
            "Muradnagar",
            "Brahmanpara",
            "Burichang",
            "Monohorgonj",
            "Nangalkot",
            "Titas",
            "Meghna",
            "Daudkandi",
            "Homna",
          ],
        },
        {
          "district": "Cox's Bazar",
          "Thana": [
            "Cox's Bazar Sadar",
            "Chakaria",
            "Kutubdia",
            "Maheshkhali",
            "Ramu",
            "Teknaf",
            "Ukhia",
            "Pekua",
          ],
        },
        {
          "district": "Feni",
          "Thana": [
            "Feni Sadar",
            "Chhagalnaiya",
            "Daganbhuiyan",
            "Parshuram",
            "Sonagazi",
          ],
        },
        {
          "district": "Khagrachari",
          "Thana": [
            "Khagrachari Sadar",
            "Dighinala",
            "Lakshmichhari",
            "Mahalchari",
            "Manikchhari",
            "Matiranga",
            "Panchhari",
            "Ramgarh",
          ],
        },
        {
          "district": "Lakshmipur",
          "Thana": [
            "Lakshmipur Sadar",
            "Raipur",
            "Ramganj",
            "Ramgati",
            "Kamalnagar",
          ],
        },
        {
          "district": "Noakhali",
          "Thana": [
            "Noakhali Sadar",
            "Begumganj",
            "Chatkhil",
            "Companiganj",
            "Hatiya",
            "Kabirhat",
            "Senbagh",
            "Sonaimuri",
            "Subarnachar",
          ],
        },
        {
          "district": "Rangamati",
          "Thana": [
            "Rangamati Sadar",
            "Baghaichhari",
            "Barkal",
            "Juraichhari",
            "Kaptai",
            "Kaukhali",
            "Langadu",
            "Naniarchar",
            "Rajasthali",
          ],
        },
      ],
    },

    {
      "value": "Rajshahi",
      "label": [
        {
          "district": "Bogura",
          "Thana": [
            "Bogura Sadar",
            "Adamdighi",
            "Dhunat",
            "Dupchanchia",
            "Gabtali",
            "Kahaloo",
            "Nandigram",
            "Sariakandi",
            "Sherpur",
            "Shibganj",
            "Sonatala",
          ],
        },
        {
          "district": "Joypurhat",
          "Thana": [
            "Joypurhat Sadar",
            "Akkelpur",
            "Kalai",
            "Khetlal",
            "Panchbibi",
          ],
        },
        {
          "district": "Naogaon",
          "Thana": [
            "Naogaon Sadar",
            "Badalgachhi",
            "Dhamoirhat",
            "Manda",
            "Mohadevpur",
            "Niamatpur",
            "Patnitala",
            "Porsha",
            "Raninagar",
            "Sapahar",
          ],
        },
        {
          "district": "Natore",
          "Thana": [
            "Natore Sadar",
            "Bagatipara",
            "Baraigram",
            "Gurudaspur",
            "Lalpur",
            "Singra",
          ],
        },
        {
          "district": "Chapainawabganj",
          "Thana": [
            "Chapainawabganj Sadar",
            "Bholahat",
            "Gomastapur",
            "Nachole",
            "Shibganj",
          ],
        },
        {
          "district": "Pabna",
          "Thana": [
            "Pabna Sadar",
            "Atgharia",
            "Bera",
            "Bhangura",
            "Chatmohar",
            "Faridpur",
            "Ishwardi",
            "Santhia",
            "Sujanagar",
          ],
        },
        {
          "district": "Rajshahi",
          "Thana": [
            "Rajshahi Sadar",
            "Bagha",
            "Charghat",
            "Durgapur",
            "Godagari",
            "Mohanpur",
            "Paba",
            "Puthia",
            "Tanore",
          ],
        },
        {
          "district": "Sirajganj",
          "Thana": [
            "Sirajganj Sadar",
            "Belkuchi",
            "Chauhali",
            "Kamarkhand",
            "Kazipur",
            "Raiganj",
            "Shahjadpur",
            "Tarash",
            "Ullapara",
          ],
        },
      ],
    },

    {
      "value": "Khulna",
      "label": [
        {
          "district": "Bagerhat",
          "Thana": [
            "Bagerhat Sadar",
            "Chitalmari",
            "Fakirhat",
            "Kachua",
            "Mollahat",
            "Mongla",
            "Morrelganj",
            "Rampal",
            "Sarankhola",
          ],
        },
        {
          "district": "Chuadanga",
          "Thana": ["Chuadanga Sadar", "Alamdanga", "Damurhuda", "Jibannagar"],
        },
        {
          "district": "Jashore",
          "Thana": [
            "Jashore Sadar",
            "Abhaynagar",
            "Bagherpara",
            "Chaugachha",
            "Jhikargachha",
            "Keshabpur",
            "Manirampur",
            "Sharsha",
          ],
        },
        {
          "district": "Jhenaidah",
          "Thana": [
            "Jhenaidah Sadar",
            "Harinakunda",
            "Kaliganj",
            "Kotchandpur",
            "Maheshpur",
            "Shailkupa",
          ],
        },
        {
          "district": "Khulna",
          "Thana": [
            "Khulna Sadar",
            "Batiaghata",
            "Dacope",
            "Dumuria",
            "Dighalia",
            "Koyra",
            "Paikgachha",
            "Phultala",
            "Rupsha",
            "Terokhada",
          ],
        },
        {
          "district": "Kushtia",
          "Thana": [
            "Kushtia Sadar",
            "Bheramara",
            "Daulatpur",
            "Khoksa",
            "Mirpur",
          ],
        },
        {
          "district": "Magura",
          "Thana": ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
        },
        {
          "district": "Meherpur",
          "Thana": ["Meherpur Sadar", "Gangni", "Mujibnagar"],
        },
        {
          "district": "Narail",
          "Thana": ["Narail Sadar", "Kalia", "Lohagara"],
        },
        {
          "district": "Satkhira",
          "Thana": [
            "Satkhira Sadar",
            "Assasuni",
            "Debhata",
            "Kalaroa",
            "Kaliganj",
            "Shyamnagar",
            "Tala",
          ],
        },
      ],
    },

    {
      "value": "Barishal",
      "label": [
        {
          "district": "Barishal",
          "Thana": [
            "Barishal Sadar",
            "Bakerganj",
            "Banaripara",
            "Gaurnadi",
            "Hizla",
            "Mehendiganj",
            "Muladi",
            "Wazirpur",
          ],
        },
        {
          "district": "Barguna",
          "Thana": [
            "Barguna Sadar",
            "Amtali",
            "Bamna",
            "Betagi",
            "Patharghata",
            "Taltali",
          ],
        },
        {
          "district": "Bhola",
          "Thana": [
            "Bhola Sadar",
            "Burhanuddin",
            "Char Fasson",
            "Daulatkhan",
            "Lalmohan",
            "Manpura",
            "Tazumuddin",
          ],
        },
        {
          "district": "Jhalokathi",
          "Thana": ["Jhalokathi Sadar", "Kathalia", "Nalchity", "Rajapur"],
        },
        {
          "district": "Patuakhali",
          "Thana": [
            "Patuakhali Sadar",
            "Bauphal",
            "Dashmina",
            "Dumki",
            "Galachipa",
            "Kalapara",
            "Mirzaganj",
          ],
        },
        {
          "district": "Pirojpur",
          "Thana": [
            "Pirojpur Sadar",
            "Bhandaria",
            "Kawkhali",
            "Mathbaria",
            "Nazirpur",
            "Nesarabad (Swarupkathi)",
            "Zianagar",
          ],
        },
      ],
    },

    {
      "value": "Sylhet",
      "label": [
        {
          "district": "Sylhet",
          "Thana": [
            "Sylhet Sadar",
            "Beanibazar",
            "Bishwanath",
            "Companiganj",
            "Fenchuganj",
            "Golapganj",
            "Gowainghat",
            "Jaintiapur",
            "Kanaighat",
          ],
        },
        {
          "district": "Habiganj",
          "Thana": [
            "Habiganj Sadar",
            "Ajmiriganj",
            "Bahubal",
            "Baniachong",
            "Chunarughat",
            "Lakhai",
            "Madhabpur",
            "Nabiganj",
          ],
        },
        {
          "district": "Moulvibazar",
          "Thana": [
            "Moulvibazar Sadar",
            "Barlekha",
            "Juri",
            "Kamalganj",
            "Kulaura",
            "Rajnagar",
            "Sreemangal",
          ],
        },
        {
          "district": "Sunamganj",
          "Thana": [
            "Sunamganj Sadar",
            "Bishwamvarpur",
            "Chhatak",
            "Derai",
            "Dharampasha",
            "Dowarabazar",
            "Jagannathpur",
            "Jamalganj",
            "Shalla",
            "South Sunamganj",
            "Tahirpur",
          ],
        },
      ],
    },

    {
      "value": "Rangpur",
      "label": [
        {
          "district": "Dinajpur",
          "Thana": [
            "Dinajpur Sadar",
            "Birampur",
            "Birganj",
            "Biral",
            "Bochaganj",
            "Chirirbandar",
            "Fulbari",
            "Ghoraghat",
            "Hakimpur",
            "Kaharole",
            "Khansama",
            "Nawabganj",
            "Parbatipur",
          ],
        },
        {
          "district": "Gaibandha",
          "Thana": [
            "Gaibandha Sadar",
            "Fulchhari",
            "Gobindaganj",
            "Palashbari",
            "Sadullapur",
            "Sughatta",
            "Sundarganj",
          ],
        },
        {
          "district": "Kurigram",
          "Thana": [
            "Kurigram Sadar",
            "Bhurungamari",
            "Char Rajibpur",
            "Chilmari",
            "Phulbari",
            "Nageshwari",
            "Rajarhat",
            "Raomari",
            "Ulipur",
          ],
        },
        {
          "district": "Lalmonirhat",
          "Thana": [
            "Lalmonirhat Sadar",
            "Aditmari",
            "Hatibandha",
            "Kaliganj",
            "Patgram",
          ],
        },
        {
          "district": "Nilphamari",
          "Thana": [
            "Nilphamari Sadar",
            "Dimla",
            "Domar",
            "Jaldhaka",
            "Kishoreganj",
            "Saidpur",
          ],
        },
        {
          "district": "Panchagarh",
          "Thana": ["Panchagarh Sadar", "Atwari", "Boda", "Debiganj", "Tetulia"],
        },
        {
          "district": "Rangpur",
          "Thana": [
            "Rangpur Sadar",
            "Badarganj",
            "Gangachara",
            "Kaunia",
            "Mithapukur",
            "Pirgachha",
            "Pirganj",
            "Taraganj",
          ],
        },
        {
          "district": "Thakurgaon",
          "Thana": [
            "Thakurgaon Sadar",
            "Baliadangi",
            "Haripur",
            "Pirganj",
            "Ranisankail",
          ],
        },
      ],
    },

    {
      "value": "Mymensingh",
      "label": [
        {
          "district": "Mymensingh",
          "Thana": [
            "Mymensingh Sadar",
            "Bhaluka",
            "Dhobaura",
            "Fulbaria",
            "Gafargaon",
            "Gauripur",
            "Haluaghat",
            "Ishwarganj",
            "Muktagachha",
            "Nandail",
            "Phulpur",
            "Trishal",
          ],
        },
        {
          "district": "Jamalpur",
          "Thana": [
            "Jamalpur Sadar",
            "Bakshiganj",
            "Dewanganj",
            "Islampur",
            "Madarganj",
            "Melandaha",
            "Sarishabari",
          ],
        },
        {
          "district": "Netrokona",
          "Thana": [
            "Netrokona Sadar",
            "Atpara",
            "Barhatta",
            "Durgapur",
            "Kalmakanda",
            "Kendua",
            "Khaliajuri",
            "Madan",
            "Mohanganj",
            "Purbadhala",
          ],
        },
        {
          "district": "Sherpur",
          "Thana": [
            "Sherpur Sadar",
            "Jhenaigati",
            "Nakla",
            "Nalitabari",
            "Sreebardi",
          ],
        },
      ],
    },
  ],
};
console.log(options.Divisions);
const AddressBook = () => {
  const [area, setArea] = useState();
  const [thanas, setThanas] = useState();
  const [address, setAddress] = useState()
  console.log(address)
  console.log(options);
  const handleChange = (option) => {
    setArea(option.target.value);
  };
  const handelChangeThana = (e) => {
    setThanas(e.target.value);
  };
  // const handelSubmit = (e) =>{
  //     e.preventDefault();
  //     alert(`Village/Area/Locality: ${area}`);
  // }

  useEffect(()=>{
    fetch("http://localhost:5000/addressAPI")
    .then(res => res.json())
    .then(data => setAddress(data))
  },[])

  return (
    <div>
      <form>
        <div>
          <label htmlFor="">Village/Area/Locality</label>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <select
            name="area"
            value={options.Divisions.value}
            id=""
            onChange={handleChange}
          >
            {options.Divisions.map((Division) =>
              Division.label.map((district, index) => (
                <option key={index + 1} value={Division.value}>
                  {district.district}
                </option>
              ))
            )}
          </select>
          <input type="text" value={area} />
        </div>
        <div>
          <label htmlFor="">Village/Area/Locality</label>
          <select value={thanas} onChange={handelChangeThana}>
            {options.Divisions.map((Division) =>
              Division.label.map((district) => 
                district.Thana.map((thanas, index )=>(
                
                  <option key={index + 1} value={thanas}>
                    {thanas}
                  </option>
                )))
            )}
          </select>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </form>
    </div>
  );
};

export default AddressBook;






// import { useEffect, useState } from "react";

// const AddressBook = () => {
//   const [area, setArea] = useState();
//   const [thanas, setThanas] = useState();
//   const [address, setAddress] = useState({ Divisions: [] })
//   console.log(address.Divisions)
//   const handleChange = (option) => {
//     setArea(option.target.value);
//   };
//   const handelChangeThana = (e) => {
//     setThanas(e.target.value);
//   };
//   // const handelSubmit = (e) =>{
//   //     e.preventDefault();
//   //     alert(`Village/Area/Locality: ${area}`);
//   // }

//   useEffect(()=>{
//     fetch("http://localhost:5000/addressAPI")
//     .then(res => res.json())
//     .then(data => setAddress(data))
//   },[])

//   return (
//     <div>
//       <form>
//         <div>
//           <label htmlFor="">Village/Area/Locality</label>
//           {/* eslint-disable-next-line react/no-unknown-property */}
//           <select
//             name="area"
//             value={area}
//             id=""
//             onChange={handleChange}
//           >
//             {address?.Divisions?.map((Division) =>
//               Division?.label?.map((district, index) => (
//                 <option key={index + 1} value={Division.value}>
//                   {district.district}
//                 </option>
//               ))
//             )}
//           </select>
//           <input type="text" value={area} />
//         </div>
//         <div>
//           <label htmlFor="">Village/Area/Locality</label>
//           <select value={thanas} onChange={handelChangeThana}>
//             {address?.Divisions?.map((Division) =>
//               Division?.label?.map((district) => 
//                 district.Thana.map((thanas, index )=>(
                
//                   <option key={index + 1} value={thanas}>
//                     {thanas}
//                   </option>
//                 )))
//             )}
//           </select>
//         </div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </form>
//     </div>
//   );
// };

// export default AddressBook;
