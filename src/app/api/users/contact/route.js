import mongoose from "mongoose";
import { NextResponse } from "next/server";

console.log("Route page")
delete mongoose.connection.models['Contact'];
const Contact = mongoose.model('Contact', new mongoose.Schema({
  // updated schema fields
  username: String,
  email: String,
  subject:String,
  message: String,
}));

// Function to connect to MongoDB (make sure you have the correct MongoDB URI)
async function connectDB() {
  try {
    console.log("try")
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}



// ********************POST Request**************

export async function POST(req) {
  const { username, email, message,subject } = await req.json();

  try {
    // Connect to MongoDB
    await connectDB();

    // Create a new contact
    await Contact.create({  username, email, message,subject });

    // Return a success response
    return NextResponse.json({
      msg: "Message sent successfully",
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      // Validation error, return a 400 response with error messages
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.error("Validation Error:", errorList);
      return NextResponse.json({
        msg: errorList,
      }, 400);
    } else {
      // Server error, return a 500 response
      console.error("Server Error:", error);
      return NextResponse.json(error, 500);
    }
  }
}


//**************GET Request ***************

export async function GET(){
  await mongoose.connect(process.env.MONGO_URI);
  console.log("get connect")
  const topics=await Contact.find();
  console.log("connected 2")
  return NextResponse.json({topics});
}

// ****************Delete**************

export async function DELETE(request){
  console.log("Delete");
  const id=request.nextUrl.searchParams.get("id");
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Delete");
  await Contact.findByIdAndDelete(id);
  return NextResponse.json({message:"Deleted"},{Status:200})

}


// 653664ea7e9c608d62c68f30