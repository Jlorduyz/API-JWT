import 'dotenv/config.js'
import '../../config/dataBase.js'
import Resource from "../Resource.js";

let resources = [
    {
        "name": "House",
        "type": "Real Estate",
        "value": 250000000,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "name": "Car",
        "type": "Vehicle",
        "value": 72000000,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "name": "Motorcycle",
        "type": "Vehicle",
        "value": 20000000,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "name": "Laptop",
        "type": "Electronics",
        "value": 4800000,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "name": "Land",
        "type": "Real Estate",
        "value": 320000000,
        "user": "6732b82b831b063e38dce006"
    }
,{
        "name": "Apartment",
        "type": "Real Estate",
        "value": 300000000,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "name": "Bicycle",
        "type": "Vehicle",
        "value": 1500000,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "name": "Smartphone",
        "type": "Electronics",
        "value": 2500000,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "name": "Office",
        "type": "Real Estate",
        "value": 120000000,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "name": "Boat",
        "type": "Vehicle",
        "value": 50000000,
        "user": "6732b82b831b063e38dce007"
    }
,{
        "name": "Vacation Home",
        "type": "Real Estate",
        "value": 400000000,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "name": "SUV",
        "type": "Vehicle",
        "value": 95000000,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "name": "Camera",
        "type": "Electronics",
        "value": 3000000,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "name": "Farm",
        "type": "Real Estate",
        "value": 600000000,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "name": "Jet Ski",
        "type": "Vehicle",
        "value": 45000000,
        "user": "6732b82b831b063e38dce00d"
    }
,{
        "name": "Condominium",
        "type": "Real Estate",
        "value": 350000000,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "name": "Truck",
        "type": "Vehicle",
        "value": 120000000,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "name": "Tablet",
        "type": "Electronics",
        "value": 1800000,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "name": "Warehouse",
        "type": "Real Estate",
        "value": 450000000,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "name": "Scooter",
        "type": "Vehicle",
        "value": 3000000,
        "user": "6732b82b831b063e38dce004"
    }
,{
        "name": "Cabin",
        "type": "Real Estate",
        "value": 280000000,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "name": "Van",
        "type": "Vehicle",
        "value": 80000000,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "name": "Gaming Console",
        "type": "Electronics",
        "value": 2000000,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "name": "Retail Store",
        "type": "Real Estate",
        "value": 380000000,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "name": "Bicycle",
        "type": "Vehicle",
        "value": 1200000,
        "user": "6732b82b831b063e38dce009"
    }
,{
        "name": "Penthouse",
        "type": "Real Estate",
        "value": 600000000,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "name": "Sedan",
        "type": "Vehicle",
        "value": 95000000,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "name": "Smartwatch",
        "type": "Electronics",
        "value": 1500000,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "name": "Industrial Building",
        "type": "Real Estate",
        "value": 700000000,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "name": "Electric Scooter",
        "type": "Vehicle",
        "value": 4000000,
        "user": "6732b82b831b063e38dce005"
    }
,{
        "name": "Villa",
        "type": "Real Estate",
        "value": 500000000,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "name": "Convertible",
        "type": "Vehicle",
        "value": 130000000,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "name": "Desktop Computer",
        "type": "Electronics",
        "value": 3500000,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "name": "Warehouse",
        "type": "Real Estate",
        "value": 800000000,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "name": "Scooter",
        "type": "Vehicle",
        "value": 5000000,
        "user": "6732b82b831b063e38dce00b"
    }
,{
        "name": "Mansion",
        "type": "Real Estate",
        "value": 1000000000,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "name": "Sports Car",
        "type": "Vehicle",
        "value": 200000000,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "name": "High-end Laptop",
        "type": "Electronics",
        "value": 8000000,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "name": "Shopping Mall",
        "type": "Real Estate",
        "value": 1500000000,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "name": "Jet",
        "type": "Vehicle",
        "value": 500000000,
        "user": "6732b82b831b063e38dce00c"
    }
,{
        "name": "Farmhouse",
        "type": "Real Estate",
        "value": 400000000,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "name": "Electric Car",
        "type": "Vehicle",
        "value": 150000000,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "name": "Drone",
        "type": "Electronics",
        "value": 3500000,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "name": "Shopping Center",
        "type": "Real Estate",
        "value": 1000000000,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "name": "Motorcycle",
        "type": "Vehicle",
        "value": 7000000,
        "user": "6732b82b831b063e38dce008"
    }
,{
        "name": "Beach House",
        "type": "Real Estate",
        "value": 600000000,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "name": "Luxury SUV",
        "type": "Vehicle",
        "value": 250000000,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "name": "Smart TV",
        "type": "Electronics",
        "value": 4500000,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "name": "Office Building",
        "type": "Real Estate",
        "value": 900000000,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "name": "Helicopter",
        "type": "Vehicle",
        "value": 300000000,
        "user": "6732b82b831b063e38dce00a"
    }

]

Resource.insertMany(resources)