function Avatar ({assigned_to, image_link}) {


  return (
    <>
      <img 
        src={image_link}
        alt={assigned_to}
        className="rounded-full object-cover h-20 w-20"
      />
      <div className="mt-2">
        <span> Assigned To: </span> <p className="text-sm text-cyan-950">{ assigned_to ?? "None" }</p>
      </div>
    </>
  )
}

export default Avatar