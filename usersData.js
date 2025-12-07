const usersData = [
  {
    "ref": "REF-12345",
    "id": "U1001",
    "name": "Alex Morgan",
    "email": "alex@example.com",
    "phone": "+1-555-0123",
    "zip": "10001",
    "pending": 800,
    "bank": {
      "routing": "111000025",
      "name": "Example Bank"
    },
    "transactions": [
      {
        "date": "2023-12-01",
        "description": "Service A",
        "amount": 300,
        "refund": 300
      },
      {
        "date": "2024-02-10",
        "description": "Service B",
        "amount": 200,
        "refund": 300
      }
    ]
  },
  {
    "ref": "REF-22222",
    "id": "U1002",
    "name": "Sam Taylor",
    "email": "sam@example.com",
    "phone": "+1-555-0456",
    "zip": "20001",
    "pending": 0,
    "bank": {
      "routing": "222000033",
      "name": "Acme Bank"
    },
    "transactions": [
      {
        "date": "2023-09-01",
        "description": "Service X",
        "amount": 99.5,
        "refund": 10
      },
      {
        "date": "2024-03-15",
        "description": "Service Y",
        "amount": 50,
        "refund": 50
      }
    ],
    "index": 1
  },
  {
    "ref": "REF-33333",
    "id": "U1003",
    "name": "Taylor Brooks",
    "email": "taylor@example.com",
    "phone": "+44-20-555-777",
    "zip": "SW1A 1AA",
    "pending": 0,
    "bank": {
      "routing": "333000044",
      "name": "Global Bank"
    },
    "transactions": [
      {
        "date": "2024-01-22",
        "description": "Consult",
        "amount": 249,
        "refund": 50
      }
    ]
  },
  {
    "ref": "543353535",
    "id": "",
    "name": "Jay",
    "email": "Gok",
    "phone": "4434333434",
    "zip": "30001",
    "pending": 900,
    "bank": {
      "routing": "",
      "name": ""
    },
    "transactions": [
      {
        "date": "12/24/2025",
        "description": "New Service",
        "amount": 500,
        "refund": 500
      }
    ],
    "index": 3
  },
  {
    "ref": "4470998756",
    "id": "28776",
    "name": "Rick Hubbard",
    "email": "",
    "phone": "",
    "zip": "24401",
    "pending": 65860,
    "bank": {
      "routing": "",
      "name": ""
    },
    "transactions": [
      {
        "date": "12/20/2024",
        "description": "Deposit",
        "amount": 5000,
        "refund": 5000
      },
      {
        "date": "02/18/2026",
        "description": "Deposit",
        "amount": 5000,
        "refund": 5000
      },
      {
        "date": "03/10/2025",
        "description": "Deposit",
        "amount": 3000,
        "refund": 3000
      },
      {
        "date": "03/21/2025",
        "description": "Deposit",
        "amount": 17500,
        "refund": 17500
      },
      {
        "date": "04/10/2025",
        "description": "Deposit",
        "amount": 20000,
        "refund": 20000
      },
      {
        "date": "04/18/2025",
        "description": "Deposit",
        "amount": 2500,
        "refund": 2500
      },
      {
        "date": "04/30/2025",
        "description": "Deposit",
        "amount": 22000,
        "refund": 22000
      },
      {
        "date": "05/02/2025",
        "description": "Deposit",
        "amount": 19500,
        "refund": 19500
      },
      {
        "date": "05/27/2025",
        "description": "Deposit",
        "amount": 15500,
        "refund": 15500
      },
      {
        "date": "10/30/2025",
        "description": "Deposit",
        "amount": 28400,
        "refund": 28400
      }
    ],
    "index": 4
  }
];

export default usersData;