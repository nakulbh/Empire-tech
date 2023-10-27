"use client"
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Deleteicon = ({id}) => {

const removeTopic= async () =>{
  const confirmed = confirm("Are you sure?")
  if (confirmed) {
    console.log("Delete");
    await fetch(`http://localhost:3000/api/users/contact?id=${id}`,{
      method: "DELETE",
    })
  }


}


  return (
    <div>
   
    <button onClick={removeTopic}>
      <DeleteIcon></DeleteIcon>
    </button>
    </div>
  )
}

export default Deleteicon
