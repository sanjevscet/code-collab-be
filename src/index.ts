// src/index.ts
import express, { Request, Response } from "express";

import cors from "cors";

const app = express();
app.use(express.json());

app.options("*", cors());
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

const port = 1414;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Express!");
});

const data: any[] = [


    {
        "id": 4,
        "description": "Looking for an Ansible expert to assist in IAAS Migration.",
        "hourstogive": "Approximately 20 hours per employee.",
        "peoplesNeeded": "2",
        "perks": "Client Facility and Silver Award worth 300 INR. Additional 2 Days Compoff.",
        "expertiseRequired": "Ansible, Terraform, Chef",
        "designation": "DIRECTOR",
        "interestedPeople": ["Sanjeev", "Pooja"]
    },
    {
        "id": 5,
        "description": "Seeking 3 techies with strong UI experience in React or Angular.",
        "hourstogive": "Approximately 50 hours per employee.",
        "peoplesNeeded": "3",
        "perks": "Amazon Coupon worth 1000 INR. Direct Appreciation from client impacting performance goals.",
        "expertiseRequired": "React, Angular",
        "designation": "DIRECTOR",
        "interestedPeople": ["Rajat", "Subhash"]
    },
    {
        "id": 6,
        "description": "Opportunity to work in a retail outlet during the upcoming busy weekend.",
        "hourstogive": "9 hours per day.",
        "peoplesNeeded": "2",
        "perks": "Extra 2 Day Pay with 10% Bonus. Full day Meals provided.",
        "expertiseRequired": "Sales and Customer Guidance",
        "designation": "DIRECTOR",
        "interestedPeople": ["Sanjeev", "Rahul"]
    },
    {
        "id": 7,
        "description": "Urgently need front desk officers for a hospital for 1 week.",
        "hourstogive": "8 hours per day shift.",
        "peoplesNeeded": "3",
        "perks": "Extra 1 week pay with 20% Bonus. Full day Meals and Cab Facility provided.",
        "expertiseRequired": "Calm Patient Handling and Appointment Booking",
        "designation": "DIRECTOR",
        "interestedPeople": ["Pooja"]
    },
    {
        "id": 8,
        "description": "Opportunity to work in a retail outlet during the upcoming busy weekend.",
        "hourstogive": "9 hours per day.",
        "peoplesNeeded": "2",
        "perks": "Extra 2 Day Pay with 10% Bonus. Full day Meals provided.",
        "expertiseRequired": "Sales and Customer Guidance",
        "designation": "DIRECTOR",
        "interestedPeople": ["Rahul", "Subhash"]
    }


    // {
    //     "id": 4,
    //     "description": "Require ansible techie for IAAS Migration",
    //     "hourstogive": " 20 hours Approx per employee ",
    //     "peoplesNeeded": "2",
    //     "perks": "Client Facility and Sliver award worth 300INR",
    //     "extraperk": "Conpoff for 2 Days",
    //     "expertiseRequired": "Ansible , terrafrom , chef",
    //     "designation": "DIRECTOR"
    // },
    // {
    //     "id": 5,
    //     "description": "Need 3 Techie having good UI exp in REACT or Angular",
    //     "hourstogive": " 50 hours Approx per employee ",
    //     "peoplesNeeded": "3",
    //     "perks": "Amazon Coupn worth 1000INR , Direct Apprecreaction from client reflecting in your performace goal ",
    //     "extraperk": "NA",
    //     "expertiseRequired": "React, Anagular",
    //     "designation": "DIRECTOR"
    // },
    // {
    //     "id": 6,
    //     "description": " Work on retail outlet over the weekend as rush is expected over coming weekend",
    //     "hourstogive": " 9 hours per day  ",
    //     "peoplesNeeded": "2",
    //     "perks": "Get Extra 2 Day pay with 10% extra addon ",
    //     "extraperk": "Full day Meals",
    //     "expertiseRequired": "Selling and guidance to customer",
    //     "designation": "DIRECTOR"
    // },
    // {
    //     "id": 7,
    //     "description": "Need Hospital front desk officers for 1 week ",
    //     "hourstogive": " 8 hours per day shift  ",
    //     "peoplesNeeded": "3",
    //     "perks": "Get Extra 1 week pay with 20% extra addon ",
    //     "extraperk": "Full day Meals , cab facility ",
    //     "expertiseRequired": "helping patients to stay calm and book appointment",
    //     "designation": "DIRECTOR"
    // },
    // {
    //     "id": 8,
    //     "description": " Work on retail outlet over the weekend as rush is expected over coming weekend",
    //     "hourstogive": " 9 hours per day  ",
    //     "peoplesNeeded": "2",
    //     "perks": "Get Extra 2 Day pay with 10% extra addon ",
    //     "extraperk": "Full day Meals",
    //     "expertiseRequired": "Selling and guidance to customer",
    //     "designation": "DIRECTOR"
    // }

]

app.get("/ee/getcurrentskills", (req, res) => {
    const data = [
        [
            "Devops",
            10
        ],
        [
            "Full Stack",
            17
        ],
        [
            "React",
            15
        ],
        [
            "Java",
            2
        ],
        [
            "Dot Net",
            4
        ],
        [
            "Angular",
            8
        ]

    ]
    setTimeout(() => {
        res.json(data)

    }, 1000)
});

app.get("/ee/fetchpostedWork", (req, res) => {

    setTimeout(() => {
        res.json(data)

    }, 1000)
});


app.post("/ee/fetchpostedWork", (req, res) => {
    const newData = {
        id: "14", description: req.body.description,
        hourstogive: req.body.hourstogive || "na",
        peoplesNeeded: req.body.peoplesNeeded || "na",
        expertiseRequired: req.body.expertiseRequired || "na",
        designation: req.body.designation || "na",
        perks: req.body.perks || "na"
    }
    data.unshift(newData)
    setTimeout(() => {
        res.json(data)

    }, 1000)
});

app.get("/ee/predictWorkForce", (req, res) => {
    const data =
        [
            {
                "id": 3,
                "skill": "DATA SCIENCE",
                "expertizecountpresent": "15",
                "prediction": "Expecting 5 more resources in the next 2 months",
                "predictionsummary": "Based on the Project Pipeline and Skill Demand"
            },
            {
                "id": 4,
                "skill": "MARKETING",
                "expertizecountpresent": "8",
                "prediction": "Anticipating a need for 12 more professionals soon",
                "predictionsummary": "Considering Upcoming Campaigns and Market Expansion Plans"
            },
            {
                "id": 5,
                "skill": "NETWORK ENGINEERING",
                "expertizecountpresent": "12",
                "prediction": "Estimated requirement for 8 additional experts",
                "predictionsummary": "Due to Upcoming Network Infrastructure Projects"
            },
            {
                "id": 6,
                "skill": "UI/UX DESIGN",
                "expertizecountpresent": "5",
                "prediction": "Foreseeing demand for 15 more designers in the next 3 months",
                "predictionsummary": "Based on Design Projects Pipeline and Client Requirements"
            },
            {
                "id": 7,
                "skill": "CUSTOMER SUPPORT",
                "expertizecountpresent": "25",
                "prediction": "Expecting need for 10 more support agents",
                "predictionsummary": "Considering Increased Customer Queries and Support Ticket Trends"
            },
            {
                "id": 8,
                "skill": "ANDROID DEVELOPMENT",
                "expertizecountpresent": "18",
                "prediction": "Estimated requirement for 7 more Android developers",
                "predictionsummary": "Based on Upcoming Mobile App Development Projects"
            }



        ]
    setTimeout(() => {
        res.json(data)

    }, 1000)
});







app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
