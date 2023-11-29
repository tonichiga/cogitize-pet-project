export {};

let formData = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const setFormData = (data) => {
  formData = data;
};

// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   password: "",
//   phone: "",
// })

const cat = {
  name: "cat",
  age: 5,
  color: "black",
};

//  cat2 === cat // true
const cat2 = { ...cat };

// console.log("before cat: ", cat);
// console.log("before cat2: ", cat2);

// cat.name = "dog";

// console.log("after cat: ", cat);
// console.log("after cat2: ", cat2);

// return cat2
// const handleFormChange = (key, data) => {
//   setFormData((prev) => {
//     const result = { ...prev, [key]: data };

//     return result;
//   });
// };

//   //name
// <InputWithIcon onChange={(value) => {
//   handleFormChange("name", value)
// }}/>
//   // email
// <InputWithIcon onChange={(value) => {
//   handleFormChange("email", value)
// }}/>
//   // password
// <InputWithIcon onChange={(value) => {
//   handleFormChange("password", value)
// }}/>
//   //phone
// <InputWithIcon onChange={(value) => {
//   handleFormChange("phone", value)
// }}/>
