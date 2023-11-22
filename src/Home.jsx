import Homepage from "./HomePage";

const Home = ({
  tours,
  activeTab,
  handleTabChange,
  searchTerm,
  handleSearchChange,
}) => {
  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === "Resources" ? "active" : ""}
          onClick={() => handleTabChange("Resources")}
        >
          Resources
        </button>
        <button
          className={activeTab === "Requests" ? "active" : ""}
          onClick={() => handleTabChange("Requests")}
        >
          Requests
        </button>
        <button
          className={activeTab === "Users" ? "active" : ""}
          onClick={() => handleTabChange("Users")}
        >
          Users
        </button>
      </div>
      <input
        type="text"
        placeholder="Search by resource name"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Render your tour cards or components based on the tours */}
      <div className="home">
        {tours.map((tour) => {
          return <Homepage key={tour.id} {...tour} />;
        })}
      </div>
    </div>
  );
};

export default Home;
