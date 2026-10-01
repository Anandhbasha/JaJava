import React, { useEffect, useState } from 'react'

const NewImage = () => {
    const[images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)
    const getImage = async()=>{
        const res = await fetch("http://localhost:3561/images")
        const data = await res.json()
        setImages(data.images)
        console.log(data.images)
    }
    useEffect(()=>{
        getImage()
    },[])
    const uploadImage = async()=>{
        console.log("Done")
        try{
            const formData = new FormData()
            formData.append("image", selectedImage)
            await fetch("http://localhost:3561/upload",{
                method:"POST",
                body: formData
            })
            getImage();
            setSelectedImage(null)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='NewImage'>
        <h1>Upload Image</h1>
        <input type="file" onChange={(e)=>setSelectedImage(e.target.files[0])} />
        <button onClick={uploadImage}>Upload</button>

        <hr></hr>
        <h2>Images</h2>
        {images.map((x)=>(
            <img src={`http://localhost:3561/uploads/${x.image}`} alt="image" width={200} height={200}/>
        ))}
    </div>
  )
}

export default NewImage