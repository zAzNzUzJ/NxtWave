import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image_9 from "./image_9.png";

const AddResourceItemPage = () => {
  const [itemDetails, setItemDetails] = useState({
    title: "",
    link: "",
    description: "",
    iconurl: "",
    tagname: "user",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the item details
    if (
      !itemDetails.title 
    ) {
      toast.error("Please fill in all Title field");
      return;
    }
    if (
      
      !itemDetails.link 
    ) {
      toast.error("Please fill in required LINK");
      return;
    }

    if (
      
      !itemDetails.description
      
    ) {
      toast.error("Please fill in  required description");
      return;
    }
    if (
      
      !itemDetails.iconurl 
    ) {
      toast.error("Please fill in aICON Url");
      return;
    }
    if (
    
      !itemDetails.category
    ) {
      toast.error("Please fill in  Category");
      return;
    }


    try {
      // Make API request to add resource item
      const response = await fetch(
        "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemDetails),
        }
      );

      // Check for successful response
      if (response.ok) {
        toast.success("Resource item added successfully!");

        setItemDetails({
          title: "",
          link: "",
          description: "",
          iconurl: "",
          tagname: "user",
          category: "",
        });
      } else {
        toast.error("Failed to add resource item");
      }
    } catch (error) {
      console.error("Error adding resource item:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="resoruce_container">
      <h2>Add Resource Item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="inputxt">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={itemDetails.title}
          onChange={handleChange}
        />

        <label htmlFor="link" className="inputxt">Link:</label>
        <input
          type="text"
          id="link"
          name="link"
          value={itemDetails.link}
          onChange={handleChange}
        />

        
        <label htmlFor="iconurl" className="inputxt">
          Icon URL:
        </label>
        <input
          type="text"
          id="iconurl"
          name="iconurl"
          value={itemDetails.iconurl}
          onChange={handleChange}
        />

        <label htmlFor="tagname"  >Tag Name:</label>
        <select
          id="tagname"
          name="tagname"
          value={itemDetails.tagname}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="request">Request</option>
        </select>

        <label htmlFor="category" className="category">
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={itemDetails.category}
          onChange={handleChange}
        />
        <label htmlFor="description" className="inputxt">Description:
        <textarea
          id="description"
          name="description"
          value={itemDetails.description}
          onChange={handleChange}
        />
        </label>

      
        <button type="submit" className="subbtn">CREATE</button>
      </form>
      <img src={Image_9} alt="Large Image" className="large-image" />
    </div>
  );
};

export default AddResourceItemPage;
