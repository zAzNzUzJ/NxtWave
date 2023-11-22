import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";
import Home from "./Home";
import Navbar from "./Navbar";
import AddResourceItemPage from "./AddResourceItemPage";

const url =
  "https://media-content.ccbp.in/website/react-assignment/resources.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [allTours, setAllTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [activeTab, setActiveTab] = useState("Resources");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setAllTours(tours);
      setFilteredTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    filterTours(tab, searchTerm);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterTours(activeTab, term);
  };

  const filterTours = (tab, term) => {
    let filtered;
    if (tab === "Requests") {
      filtered = allTours.filter((tour) => tour.tag === "request");
    } else if (tab === "Users") {
      filtered = allTours.filter((tour) => tour.tag === "user");
    } else {
      filtered = allTours;
    }

    if (term) {
      filtered = filtered.filter((tour) =>
        tour.title.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredTours(filtered);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <Router>
      <main>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tours={filteredTours}
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
              />
            }
          />
          <Route path="/add" element={<AddResourceItemPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
