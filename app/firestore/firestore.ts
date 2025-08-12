import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function addRegistrationData(data) {
  console.log("data", data);
  try {
    await addDoc(collection(db, "registrations"), {
      department: data.department,
      email: data.email,
      exp_salary: data.exp_salary,
      experience: data.experience,
      mobile: data.mobile,
      name: data.name,
      qualification: data.qualification,
      status: data.status,
    });
  } catch (error) {
    console.error("Error adding registration:", error);
  }
}

export async function getBlogs() {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
