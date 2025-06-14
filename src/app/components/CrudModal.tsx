"use client";
import React from "react";
import { useEffect, useState } from "react";
import IUser from "../interfaces/IUser";
import { toast } from "react-toastify";

interface CrudModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: IUser;
  mode: "create" | "edit";
  onSuccess: () => void
}

export default function CrudModal({ isOpen, onClose, initialData, mode, onSuccess }: CrudModalProps) {
  const [extendDays, setExtendDays] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(initialData?.phoneNumber || "");
  const [password, setPassword] = useState(initialData?.password || "");
  const [startDate, setStartDate] = useState(initialData?.startDate || "");
  const [endDate, setEndDate] = useState(initialData?.endDate || "");
  const [loading, setLoading] = useState(false);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE
  useEffect(() => {
    if (isOpen) {
      setPhoneNumber(initialData?.phoneNumber || "");
      setPassword(initialData?.password || "");
      setStartDate(initialData?.startDate ? new Date(initialData.startDate).toISOString().split('T')[0] : "");
      setEndDate(initialData?.endDate ? new Date(initialData.endDate).toISOString().split('T')[0] : "");
    }
  }, [isOpen, initialData]);

  useEffect(() => {
    if (extendDays) {
      const start = new Date(new Date());
      const duration = parseInt(extendDays.replace("d", ""), 10);
      const newEndDate = new Date(start.getTime() + duration * 24 * 60 * 60 * 1000);
      setEndDate(newEndDate.toISOString().split('T')[0]);
      setStartDate(start.toISOString().split('T')[0]);
    }
  }, [extendDays, startDate]);

  // listen to `Escape` key to close the modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const successNotify = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  const errorNotify = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  const warningNotify = (message: string) => {
    toast.warning(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }


  const handleCreateNewUser = async () => {
    // Validate phone number format
    const phoneRegex = /^\d{10}$/; // Example regex for 10-digit phone numbers
    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    // Validate password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api-hd/v1/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password }),
      });

      if (response.status === 400) {
        warningNotify("User already exists with this phone number.");
        return;
      }
      if (response.status === 500) {
        errorNotify("Internal server error. Please try again later.");
        onClose();
        return;
      }

      const data = await response.json();
      successNotify(data.msg);
      onClose();
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }



  }

  const handleExtendUser = async (extendDays: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api-hd/v1/users/renew`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'phone-number': initialData?.phoneNumber || '',
          'duration': extendDays
        }),

      });

      if (response.status === 404) {
        warningNotify("User not found.");
        return;
      }
      if (response.status === 400) {
        warningNotify('Missing required header.')
      }
      if (response.status === 500) {
        errorNotify("Internal server error. Please try again later.");
        onClose();
        return;
      }

      
      successNotify(`User ${initialData?.phoneNumber} has been extended for ${extendDays} successfully.`);  
      onSuccess();
      onClose();

    } catch (error) {
      console.error("Error extending user:", error);
    } finally {
      setLoading(false);
    }

  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'create') {
      handleCreateNewUser();
    } else {
      if (!extendDays || extendDays === "Choose 1 duration") {
        warningNotify("Please select a duration to extend.");
        return;
      }
      handleExtendUser(extendDays);      
    }
  };

  if (!isOpen) return null;


  if (mode === 'create') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50 bg-opacity-40">
        <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
          <h2 className="text-xl font-semibold mb-4">Create A New Account</h2>
          <form onSubmit={handleSubmit} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label className="block text-sm font-medium">PhoneNumber</label>
                <input
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium">Password</label>
                <input
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>              
            </div>



            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {loading ? (
                  <div role="status">
                    <svg aria-hidden="true" className="w-10 h-5 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : "Create"}

              </button>


            </div>
          </form>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50 bg-opacity-40 ">
        <div className="relative bg-white rounded-lg shadow-sm  px-5 py-5">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Extending Date for {initialData?.phoneNumber}
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-toggle="crud-modal" onClick={onClose}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                <input type="text" name="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " value={initialData?.phoneNumber} disabled />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-900 ">Start Date</label>
                <input type="date" name="startDate" id="startDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" value={startDate} disabled />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-900 ">End Date</label>
                <input type="date" name="endDate" id="endDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" value={endDate} disabled />
              </div>
              <div className="col-span-2">
                <select
                  id="extendDays"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  value={extendDays}
                  onChange={(e) => setExtendDays(e.target.value)}>
                  <option >Choose 1 duration</option>
                  <option value="30d">1 month</option>
                  <option value="183d">6 months</option>
                  <option value="365d">12 months</option>
                </select>
              </div>
            </div>
            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">

              {loading ? (
                <div role="status">
                  <svg aria-hidden="true" className="w-10 h-5 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );

}