import { useState } from "react"
import { Navigate } from "react-router-dom";

const Contact = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(true)

    return showAllPhotos ? (

  <div className="bg-gray-100 flex items-center justify-center h-screen">
    <button
              onClick={() => setShowAllPhotos(false)}
              className='fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black'
            >
              Close
            </button>
    <div className="flex flex-col gap-4 rounded-2xl shadow-lg p-5 bg-white" style={{ borderWidth: "3px"}}>
      <p className="flex items-center justify-center p-4">
        <span className="text-3xl font-bold text-primary">Contact Admin</span>
        </p>
        <p className="flex items-center bg-white rounded-lg p-4 shadow-md">
        <span className="text-xl font-semibold me-4">Phone 1:</span>
        <span className="text-lg font-semibold">+123 534 9764</span>
      </p>

      <p className="flex items-center bg-white rounded-lg p-4 shadow-md">
        <span className="text-xl font-semibold me-4">Phone 2:</span>
        <span className="text-lg font-semibold">+987 654 3210</span>
      </p>

      <p className="flex items-center bg-white rounded-lg p-4 shadow-md">
        <span className="text-xl font-semibold me-4">Email: </span>

        <span className="text-lg font-semibold">admin@example.com</span>
      </p>
    </div>
  </div>

    ) : (
      <Navigate to="/" />
    );
  }
  

export default Contact
