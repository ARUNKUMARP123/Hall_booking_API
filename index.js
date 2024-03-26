const express=require("express");
const http_serer=express();
const bodyParser = require("body-parser");
http_serer.use(bodyParser.json());

let Rooms=[];

//To show total rooms of the hall....
http_serer.get("/total_rooms",(req,res,next)=>{
res.send({'success':true,message:"Room is successfully fetched","Total Rooms in the hall":Rooms})
})


//1.To create  rooms of the hall....
http_serer.post("/create_rooms",(req,res,next)=>{   
    let newRoom=req.body;
  Rooms.push(...newRoom)
    res.send({'success':true,message:"Room is successfully created","New_Room":newRoom})
    newRoom={};
    })

    

 //2.To create  Bookings of the hall....
 let Bookings=[];
 http_serer.post("/create_bookings",(req,res,next)=>{
     let newBooking=req.body;
   Bookings.push(...newBooking)
     res.send({'success':true,message:"Booking is successfully created","New_Booking":newBooking})
     newBooking={};
     })
     
        //To show  Bookings of the hall....
http_serer.get("/booked_rooms",(req,res,next)=>{
    res.send({'success':true,message:"Room is successfully fetched","Total  RoomsWithBookedData in the hall": Bookings})
    })

     
    //To create  RoomsWithBookedData of the hall....
    let RoomsWithBookedData=[];
    http_serer.post("/create_RoomsWithBookedData",(req,res,next)=>{
        let newRoomsWithBookedData=req.body;
        RoomsWithBookedData.push(...newRoomsWithBookedData)
        res.send({'success':true,message:"RoomsWithBookedData is successfully created","New_Booking":newRoomsWithBookedData})
        newRoomsWithBookedData={};
        })

        //3.To show  RoomsWithBookedData of the hall....
http_serer.get("/RoomsWithBookedData",(req,res,next)=>{
    res.send({'success':true,message:"Room is successfully fetched","Total  RoomsWithBookedData in the hall": RoomsWithBookedData})
    })


    //To create CustomerWithBookedData of the hall....
    let CustomerWithBookedData=[];
    http_serer.post("/create_CustomerWithBookedData",(req,res,next)=>{
        let newCustomerWithBookedData=req.body;
        CustomerWithBookedData.push(...newCustomerWithBookedData)
        res.send({'success':true,message:"RoomsWithBookedData is successfully created","New_Booking":newCustomerWithBookedData})
        newCustomerWithBookedData={};
        })

        //4.To show  CustomerWithBookedData of the hall....
http_serer.get("/CustomerWithBookedData",(req,res,next)=>{
    res.send({'success':true,message:"CustomerWithBookedData is successfully fetched","Total  RoomsWithBookedData in the hall": CustomerWithBookedData})
    })


    //To create NumberOfTimeBooking of the hall....
    let NumberOfTimeBooking=[];
    http_serer.post("/create_NumberOfTimeBooking",(req,res,next)=>{
        let newNumberOfTimeBooking=req.body;
        NumberOfTimeBooking.push(...newNumberOfTimeBooking)
        res.send({'success':true,message:"NumberOfTimeBooking is successfully created","New_Booking":newNumberOfTimeBooking})
        newNumberOfTimeBooking={};
        })

        //5.To show  NumberOfTimeBooking of the hall....
http_serer.get("/NumberOfTimeBooking",(req,res,next)=>{
    res.send({'success':true,message:"NumberOfTimeBooking is successfully fetched","Total  NumberOfTimeBooking in the hall": NumberOfTimeBooking})
    })




http_serer.listen(3000,'127.0.0.1',()=>{
    console.log('Listening on 127.0.0.1:3000')
})