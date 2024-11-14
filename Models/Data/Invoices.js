import 'dotenv/config.js'
import '../../config/dataBase.js'
import Invoice from "../Invoice.js";

let invoices = [
    {
        "description": "Invoice for grocery shopping",
        "value": 100000,
        "asset": true,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for car repair",
        "value": 1500000,
        "asset": false,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for phone bill",
        "value": 80000,
        "asset": true,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for electricity bill",
        "value": 120000,
        "asset": false,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for internet subscription",
        "value": 150000,
        "asset": true,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for water bill",
        "value": 60000,
        "asset": false,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for rent payment",
        "value": 1500000,
        "asset": true,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for gym membership",
        "value": 100000,
        "asset": false,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for Netflix subscription",
        "value": 45000,
        "asset": true,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for public transport pass",
        "value": 30000,
        "asset": false,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for doctor’s appointment",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for online shopping",
        "value": 250000,
        "asset": false,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for hair salon services",
        "value": 80000,
        "asset": true,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for taxi ride",
        "value": 50000,
        "asset": false,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for pet care",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for movie tickets",
        "value": 80000,
        "asset": false,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for clothing purchase",
        "value": 200000,
        "asset": true,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for home cleaning service",
        "value": 180000,
        "asset": false,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for food delivery",
        "value": 70000,
        "asset": true,
        "user": "6732b82b831b063e38dce006"
    },
    {
        "description": "Invoice for mobile phone purchase",
        "value": 1200000,
        "asset": false,
        "user": "6732b82b831b063e38dce006"
    }
,{
        "description": "Grocery shopping for the week",
        "value": 100000,
        "asset": true,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Car repair for engine issues",
        "value": 1500000,
        "asset": false,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Monthly phone bill payment",
        "value": 80000,
        "asset": true,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Electricity bill for the month",
        "value": 120000,
        "asset": false,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Subscription to streaming services",
        "value": 150000,
        "asset": true,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Paid water bill for the household",
        "value": 60000,
        "asset": false,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Monthly rent payment for apartment",
        "value": 1500000,
        "asset": true,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Gym membership for fitness",
        "value": 100000,
        "asset": false,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Streaming service for TV shows",
        "value": 45000,
        "asset": true,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Top-up for public transport card",
        "value": 30000,
        "asset": false,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Medical consultation for annual checkup",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Online shopping for clothes",
        "value": 250000,
        "asset": false,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Paid for a haircut and styling",
        "value": 80000,
        "asset": true,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Taxi ride from the airport",
        "value": 50000,
        "asset": false,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Dog grooming session",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Movie tickets for a night out",
        "value": 80000,
        "asset": false,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Shopping for new clothes for work",
        "value": 200000,
        "asset": true,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Paid for home cleaning service",
        "value": 180000,
        "asset": false,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Food delivery from favorite restaurant",
        "value": 70000,
        "asset": true,
        "user": "6732b82b831b063e38dce007"
    },
    {
        "description": "Bought a new laptop for work",
        "value": 1200000,
        "asset": false,
        "user": "6732b82b831b063e38dce007"
    }
,{
        "description": "Weekly groceries shopping",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Car brake system replacement",
        "value": 2000000,
        "asset": false,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Mobile phone bill for the month",
        "value": 95000,
        "asset": true,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Electricity bill for the house",
        "value": 150000,
        "asset": false,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Netflix monthly subscription",
        "value": 50000,
        "asset": true,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Water bill payment for the month",
        "value": 70000,
        "asset": false,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Rent payment for apartment",
        "value": 1800000,
        "asset": true,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Yoga class subscription",
        "value": 120000,
        "asset": false,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Spotify premium subscription",
        "value": 35000,
        "asset": true,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Public transportation card reload",
        "value": 25000,
        "asset": false,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Doctor's appointment consultation",
        "value": 130000,
        "asset": true,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Online shopping for electronics",
        "value": 400000,
        "asset": false,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Haircut and styling at salon",
        "value": 70000,
        "asset": true,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Taxi fare from the airport to home",
        "value": 85000,
        "asset": false,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Pet grooming for my dog",
        "value": 110000,
        "asset": true,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Cinema tickets for a movie",
        "value": 60000,
        "asset": false,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Clothing purchase for work attire",
        "value": 250000,
        "asset": true,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "House cleaning service for the weekend",
        "value": 150000,
        "asset": false,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Order from food delivery service",
        "value": 90000,
        "asset": true,
        "user": "6732b82b831b063e38dce00d"
    },
    {
        "description": "Bought a new TV for the living room",
        "value": 2200000,
        "asset": false,
        "user": "6732b82b831b063e38dce00d"
    }
,{
        "description": "Supermarket shopping for the week",
        "value": 130000,
        "asset": true,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Engine oil change and maintenance",
        "value": 250000,
        "asset": false,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Internet monthly subscription",
        "value": 95000,
        "asset": true,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Gas bill for the house",
        "value": 100000,
        "asset": false,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Amazon Prime video subscription",
        "value": 45000,
        "asset": true,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Monthly water bill",
        "value": 80000,
        "asset": false,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Rent payment for apartment",
        "value": 1700000,
        "asset": true,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Fitness center membership fee",
        "value": 100000,
        "asset": false,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Netflix subscription payment",
        "value": 50000,
        "asset": true,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Reload public transport card",
        "value": 25000,
        "asset": false,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Doctor's consultation for check-up",
        "value": 110000,
        "asset": true,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Shopping for new shoes",
        "value": 200000,
        "asset": false,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Haircut and personal care",
        "value": 60000,
        "asset": true,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Taxi fare from work to home",
        "value": 35000,
        "asset": false,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Pet grooming session for my cat",
        "value": 100000,
        "asset": true,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Movie night tickets with friends",
        "value": 80000,
        "asset": false,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "New clothes for a family event",
        "value": 250000,
        "asset": true,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Home cleaning service for deep cleaning",
        "value": 180000,
        "asset": false,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Order takeaway from local restaurant",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce004"
    },
    {
        "description": "Bought new kitchen appliances",
        "value": 500000,
        "asset": false,
        "user": "6732b82b831b063e38dce004"
    }
,{
        "description": "Weekly grocery shopping for the family",
        "value": 150000,
        "asset": true,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Car tire replacement",
        "value": 300000,
        "asset": false,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Monthly electricity bill",
        "value": 130000,
        "asset": true,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Mobile data package for the month",
        "value": 60000,
        "asset": false,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Spotify music subscription",
        "value": 35000,
        "asset": true,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Water bill payment for the month",
        "value": 70000,
        "asset": false,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Monthly rent for apartment",
        "value": 1600000,
        "asset": true,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Gym membership payment",
        "value": 90000,
        "asset": false,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Netflix subscription for movies and TV shows",
        "value": 50000,
        "asset": true,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Public transportation fare for the month",
        "value": 30000,
        "asset": false,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Medical check-up at the clinic",
        "value": 150000,
        "asset": true,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Clothing purchase for the season",
        "value": 250000,
        "asset": false,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Haircut and beard trimming at the salon",
        "value": 45000,
        "asset": true,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Taxi ride to work every day",
        "value": 120000,
        "asset": false,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Pet food and supplies for the month",
        "value": 80000,
        "asset": true,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Weekend movie tickets with friends",
        "value": 70000,
        "asset": false,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "New phone case and screen protector",
        "value": 50000,
        "asset": true,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "House cleaning service for deep cleaning",
        "value": 150000,
        "asset": false,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Food delivery order for a family gathering",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce009"
    },
    {
        "description": "Bought a new refrigerator for the kitchen",
        "value": 1200000,
        "asset": false,
        "user": "6732b82b831b063e38dce009"
    }
,{
        "description": "Weekly grocery shopping for the family",
        "value": 140000,
        "asset": true,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Car maintenance and repairs",
        "value": 250000,
        "asset": false,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Monthly electricity bill",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Mobile data package for the month",
        "value": 55000,
        "asset": false,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Spotify premium subscription",
        "value": 30000,
        "asset": true,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Monthly water bill",
        "value": 65000,
        "asset": false,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Rent payment for the apartment",
        "value": 1700000,
        "asset": true,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Gym membership payment for the month",
        "value": 80000,
        "asset": false,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Netflix subscription",
        "value": 48000,
        "asset": true,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Public transportation fare for the month",
        "value": 35000,
        "asset": false,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Visit to the doctor for a check-up",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "New clothes for the season",
        "value": 200000,
        "asset": false,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Haircut and grooming session",
        "value": 50000,
        "asset": true,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Taxi ride to work every day",
        "value": 100000,
        "asset": false,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Pet supplies for the dog",
        "value": 75000,
        "asset": true,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Tickets for a concert with friends",
        "value": 120000,
        "asset": false,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Buying new furniture for the living room",
        "value": 500000,
        "asset": true,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "House cleaning service for the month",
        "value": 140000,
        "asset": false,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Order food delivery for a family dinner",
        "value": 110000,
        "asset": true,
        "user": "6732b82b831b063e38dce005"
    },
    {
        "description": "Purchased new kitchen utensils",
        "value": 120000,
        "asset": false,
        "user": "6732b82b831b063e38dce005"
    }
,{
        "description": "Weekly grocery shopping for the family",
        "value": 155000,
        "asset": true,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Car tire replacement",
        "value": 280000,
        "asset": false,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Monthly electricity bill",
        "value": 125000,
        "asset": true,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Mobile phone top-up for the month",
        "value": 50000,
        "asset": false,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Spotify subscription for music streaming",
        "value": 32000,
        "asset": true,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Water bill payment for the month",
        "value": 70000,
        "asset": false,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Rent for apartment",
        "value": 1600000,
        "asset": true,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Gym membership for fitness classes",
        "value": 85000,
        "asset": false,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Netflix subscription for movies",
        "value": 48000,
        "asset": true,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Public transport ticket for the month",
        "value": 35000,
        "asset": false,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Routine medical check-up",
        "value": 140000,
        "asset": true,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "New clothing for the season",
        "value": 250000,
        "asset": false,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Haircut at the salon",
        "value": 40000,
        "asset": true,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Taxi fare to work for the week",
        "value": 120000,
        "asset": false,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Pet food and toys for the dog",
        "value": 90000,
        "asset": true,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Weekend movie tickets with friends",
        "value": 60000,
        "asset": false,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "New kitchen appliances",
        "value": 350000,
        "asset": true,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "House cleaning service for the month",
        "value": 160000,
        "asset": false,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "Food delivery for a family gathering",
        "value": 100000,
        "asset": true,
        "user": "6732b82b831b063e38dce00b"
    },
    {
        "description": "New phone case and charger",
        "value": 75000,
        "asset": false,
        "user": "6732b82b831b063e38dce00b"
    }
,{
        "description": "Monthly grocery shopping for the family",
        "value": 150000,
        "asset": true,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Car repair and oil change",
        "value": 220000,
        "asset": false,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Electricity bill for the month",
        "value": 110000,
        "asset": true,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Internet and phone bill payment",
        "value": 85000,
        "asset": false,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Monthly music streaming subscription",
        "value": 30000,
        "asset": true,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Water bill payment for the month",
        "value": 65000,
        "asset": false,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Rent payment for the apartment",
        "value": 1600000,
        "asset": true,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Monthly gym membership",
        "value": 90000,
        "asset": false,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Netflix subscription for entertainment",
        "value": 48000,
        "asset": true,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Public transport costs for the month",
        "value": 38000,
        "asset": false,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Doctor's visit for a check-up",
        "value": 130000,
        "asset": true,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Clothes shopping for the new season",
        "value": 220000,
        "asset": false,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Haircut at the barber shop",
        "value": 45000,
        "asset": true,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Taxi fare for work commute",
        "value": 95000,
        "asset": false,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Pet food and treats for the dog",
        "value": 80000,
        "asset": true,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Weekend trip tickets for family",
        "value": 130000,
        "asset": false,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "New kitchen gadgets and utensils",
        "value": 400000,
        "asset": true,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "House cleaning services for the month",
        "value": 150000,
        "asset": false,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Ordering takeout for family dinner",
        "value": 90000,
        "asset": true,
        "user": "6732b82b831b063e38dce00c"
    },
    {
        "description": "Buying new electronics for the home",
        "value": 600000,
        "asset": false,
        "user": "6732b82b831b063e38dce00c"
    }
,{
        "description": "Supermarket shopping for the week",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Routine car maintenance and inspection",
        "value": 180000,
        "asset": false,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Monthly electricity bill payment",
        "value": 110000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "WiFi and phone bill payment",
        "value": 95000,
        "asset": false,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Spotify premium subscription for music",
        "value": 35000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Monthly water bill payment",
        "value": 60000,
        "asset": false,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Rent payment for the apartment",
        "value": 1550000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Fitness club membership for the month",
        "value": 85000,
        "asset": false,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Netflix subscription for movies and TV shows",
        "value": 50000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Public transportation card top-up",
        "value": 25000,
        "asset": false,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Doctor's consultation for a health checkup",
        "value": 100000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Shopping for seasonal clothes and shoes",
        "value": 180000,
        "asset": false,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Haircut at the local salon",
        "value": 40000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Taxi ride to a business meeting",
        "value": 70000,
        "asset": false,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Pet food and supplies for the dog",
        "value": 90000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Weekend getaway for a short trip",
        "value": 250000,
        "asset": false,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Kitchen tools and new utensils for cooking",
        "value": 150000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "House cleaning service for the apartment",
        "value": 130000,
        "asset": false,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Ordering food delivery for dinner",
        "value": 70000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "Electronics purchase (tablet and accessories)",
        "value": 450000,
        "asset": false,
        "user": "6732b82b831b063e38dce008"
    },
    {
        "description": "New furniture for the living room",
        "value": 300000,
        "asset": true,
        "user": "6732b82b831b063e38dce008"
    }
,{
        "description": "Supermarket shopping for the week",
        "value": 120000,
        "asset": true,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Routine car maintenance and inspection",
        "value": 180000,
        "asset": false,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Monthly electricity bill payment",
        "value": 110000,
        "asset": true,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "WiFi and phone bill payment",
        "value": 95000,
        "asset": false,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Spotify premium subscription for music",
        "value": 35000,
        "asset": true,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Monthly water bill payment",
        "value": 60000,
        "asset": false,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Rent payment for the apartment",
        "value": 1550000,
        "asset": true,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Fitness club membership for the month",
        "value": 85000,
        "asset": false,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Netflix subscription for movies and TV shows",
        "value": 50000,
        "asset": true,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Public transportation card top-up",
        "value": 25000,
        "asset": false,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Doctor's consultation for a health checkup",
        "value": 100000,
        "asset": true,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Shopping for seasonal clothes and shoes",
        "value": 180000,
        "asset": false,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Haircut at the local salon",
        "value": 40000,
        "asset": true,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Taxi ride to a business meeting",
        "value": 70000,
        "asset": false,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Pet food and supplies for the dog",
        "value": 90000,
        "asset": true,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Weekend getaway for a short trip",
        "value": 250000,
        "asset": false,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Kitchen tools and new utensils for cooking",
        "value": 150000,
        "asset": true,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "House cleaning service for the apartment",
        "value": 130000,
        "asset": false,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Ordering food delivery for dinner",
        "value": 70000,
        "asset": true,
        "user": "6732b82b831b063e38dce00a"
    },
    {
        "description": "Electronics purchase (tablet and accessories)",
        "value": 450000,
        "asset": false,
        "user": "6732b82b831b063e38dce00a"
    }

]

Invoice.insertMany(invoices)