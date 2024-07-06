const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/action1', async (req, res) => {
    try {
        var resp = await fetch('https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accesstoken": "0e186445-0647-417c-ae27-8098533f1914",
                    "Connection": "keep-alive",
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br"
                },
                body: JSON.stringify({
                    "DeviceInfo": {
                        "PackageName": "com.test.com",
                        "LangCode": "en",
                        "DeviceID": "test_dev_doc"
                    },
                    "Referrer": {
                        "Affiliate": {
                            "Campaign": "6a0fa162-fb4c-4074-a6d4-402744e3590b",
                            "ClickID": "your clickid",
                            "Pub_ID": "your pub id",
                            "Aff_ID": "your aff id",
                            "extra": "",
                            "extra1": "",
                            "firstPageButtonID": "msisdn-entry",
                            "secondPageButtonID": "pin-entry",
                            "Country": "IRAQ"
                        }
                    },
                    "Request": {
                        "Action": 1,
                        "TransactionID": (Math.floor(Math.random() * 10000)).toString(),
                        "SessionID": "",
                        "MSISDN": "",
                        "PinCode": ""
                    }
                })
            }
        );
        var newres = await resp.json()
        res.json({ status: true, data: newres })
    } catch (error) {
        console.log(error);
        res.json({ status: false })
    }
})
app.post('/action2', async (req, res) => {
    try {
        var resp = await fetch('https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accesstoken": "0e186445-0647-417c-ae27-8098533f1914",
                    "Connection": "keep-alive",
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br"
                },
                body: JSON.stringify({
                    "DeviceInfo": {
                        "PackageName": "com.test.com",
                        "LangCode": "en",
                        "DeviceID": "test_dev_doc"
                    },
                    "Referrer": {
                        "Affiliate": {
                            "Campaign": "6a0fa162-fb4c-4074-a6d4-402744e3590b",
                            "ClickID": "your clickid",
                            "Pub_ID": "your pub id",
                            "Aff_ID": "your aff id",
                            "extra": "",
                            "extra1": "",
                            "firstPageButtonID": "msisdn-entry",
                            "secondPageButtonID": "pin-entry",
                            "Country": "INDIA"
                        }
                    },
                    "Request": {
                        "Action": 2,
                        "TransactionID": (Math.floor(Math.random() * 10000)).toString(),
                        "SessionID": req.body.session,
                        "MSISDN": req.body.phone,
                        "PinCode": ""
                    }
                })
            }
        );
        var newres = await resp.json()
        res.json({ status: true, data: newres })
    } catch (error) {
        console.log(error);
        res.json({ status: false })
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Server 3000 par Sun Rha hai');
})