const Xl = require("../models/xldata")
const reader = require('xlsx')
  
// Reading our test file


exports.uplaodXl = async (req, res) =>{
    try {
        // console.log(req);
        console.log(req.file);
        const file = reader.readFile(`${req.file.path}`)
        // const file = reader.readFile(`https://docs.google.com/spreadsheets/d/1zO4ZkqKx227lp1O9aV53MmrvShXb_7u_/edit?usp=sharing&ouid=116317994942422235143&rtpof=true&sd=true`)
  
        let data = []

        const sheets = file.SheetNames

        console.log(data)
        for(let i = 0; i < sheets.length; i++)
        {
           const temp = reader.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
           temp.forEach((res) => {
              data.push(res)
           })
        }
        removeFile(`${req.file.path}`)
        console.log(data);
        addToDb(data)
        const allData = await Xl.find({})
        res.status(200).json({
            success:true,
            allData
        })
    } catch (error) {
        console.log(error);
        return
    }
}


function addToDb(data){
    const async = require('async');

    async.eachSeries(data, async (item) => {
      // perform an asynchronous operation on the item
      await user(item)
    //   console.log(item);
    }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('All items processed successfully');
      }
    });
    async function user(item){
        // console.log(item);
        const exist = await Xl.find({email:item.Email})
        console.log(exist);
        if(!exist){
        }else{
            console.log(item);
            console.log("Sssssss");
            const entry = await Xl.create({
                name:item["Name of the Candidate"],
                email:item["Email"],
                number:item["Mobile No."],
                dob:item["Date of Birth"],
                workExp:item["Work Experience"],
                resumeTitle:item["Resume Title"],
                currentLocation:item["Current Location"],
                postalAddress:item["Postal Address"],
                currentEmployer:item["Current Employer"],
                currentDesignation:item["Current Designation"],
            })
            await entry.save()
        }
    }
}

function removeFile(path){
    const fs = require('fs');
    // receive and manipulate file here

    // delete file
    fs.unlink(path, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File has been deleted');
    });

}