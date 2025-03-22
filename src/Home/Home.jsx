import React, { useState, useEffect } from "react";

export const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    // Enhanced recipe data with unique names and preparation times
    const fetchData = async () => {
      const item = [
        { id: 1, name: "Chicken Biryani", time: "45 mins", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGWIaLxtyNCFo1W3_Khd_3Q5EUfaJPLzuTw&s", rating: 4.8, reviews: 135 },
        { id: 2, name: "Stir-Fried Noodles", time: "25 mins", image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps108597_SD163324B08_06_4b-11.jpg", rating: 4.9, reviews: 156 },
        { id: 3, name: "Club Sandwich", time: "15 mins", image: "https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg", rating: 4.7, reviews: 128 },
        { id: 4, name: "Creamy Pasta Alfredo", time: "35 mins", image: "https://www.shutterstock.com/image-photo/creamy-alfredo-pasta-chicken-mushrooms-600nw-2217614495.jpg", rating: 4.8, reviews: 142 },
        { id: 5, name: "Masala Dosa", time: "30 mins", image: "https://vanitascorner.com/wp-content/uploads/2018/01/Mysore-Masala-Dosa.jpg", rating: 4.9, reviews: 163 },
        { id: 6, name: "Thai Red Curry", time: "45 mins", image: "https://www.cookwithmanali.com/wp-content/uploads/2017/01/Vegetarian-Thai-Red-Curry-500x500.jpg", rating: 4.8, reviews: 112 },
        { id: 7, name: "Szechuan Tofu", time: "40 mins", image: "https://www.connoisseurusveg.com/wp-content/uploads/2023/09/szechuan-tofu-sq.jpg", rating: 4.7, reviews: 127 },
        { id: 8, name: "Miso Ramen", time: "50 mins", image: "https://inquiringchef.com/wp-content/uploads/2022/11/Easy-Miso-Ramen-0723.jpg", rating: 4.9, reviews: 149 },
        { id: 9, name: "Vegetable Sushi Rolls", time: "60 mins", image: "https://media.istockphoto.com/id/592689444/photo/eating-healthy-kale-sushi.jpg?s=612x612&w=0&k=20&c=pGohnxnHnU76lnYmlhXdKcAGsQHJdLyaBv0qSBf-dJY=", rating: 4.8, reviews: 131 },
      ];
      setData(item);
    };
    fetchData();
  }, []);

  // Filter data based on search
  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  // Pagination logic
  const recordPerPage = 6;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = filterData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filterData.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  // Pagination functions
  const prevPage = () => currentPage !== 1 && setCurrentPage(currentPage - 1);
  const nextPage = () => currentPage !== npage && setCurrentPage(currentPage + 1);
  const changePage = (id) => setCurrentPage(id);

  // Function to render star rating
  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>



      {/* Navigation Bar
      <nav style={{ 
        backgroundColor: "#4CAF50", 
        padding: "15px 0", 
        color: "white", 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%"
      }}>
        <h2 style={{ margin: 0 }}>Recipes Food</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {["Home", "Pages", "Blog", "Recipes", "Chart", "Community", "Videos", "About"].map(item => (
            <a key={item} href="#" style={{ color: "white", textDecoration: "none" }}>{item}</a>
          ))}
        </div>
      </nav>
 */}


      {/* Hero Section */}
      <div style={{ 
        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://plus.unsplash.com/premium_photo-1683892034683-b6896f6245f9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
        backgroundSize: "cover",
        color: "white",
        padding: "80px 0",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#81C784", marginBottom: "5px" }}>Recipes Food</h1>
        <h2>A recipe has no soul. You, as the cook, must bring soul to the recipe</h2>
        <p style={{ maxWidth: "800px", margin: "15px auto" }}>
        "Food is not just fuel; it's an experience that brings people together, telling stories of culture, tradition, and love with every bite."
        </p>
        <button style={{ 
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "10px 25px",
          borderRadius: "25px",
          cursor: "pointer"
        }}>Purchase Now</button>
      </div>

      {/* Featured Recipes Section */}
      <div style={{ padding: "40px 5%", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "30px" 
        }}>
          {data.slice(0, 3).map(recipe => (
            <div key={recipe.id} style={{ 
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)", 
              borderRadius: "8px", 
              overflow: "hidden" 
            }}>
              <div style={{ position: "relative" }}>
                <img 
                  src={recipe.image || "plate.jpg"} 
                  alt={recipe.name} 
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <span style={{ 
                  position: "absolute", 
                  top: "10px", 
                  right: "10px", 
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "red"
                }}>❤</span>
              </div>
              <div style={{ padding: "15px" }}>
                <h3>{recipe.name}</h3>
                <div style={{ color: "#FFC107", margin: "8px 0" }}>
                  {renderStars(recipe.rating)} <span style={{ color: "#777" }}>{recipe.reviews}</span>
                </div>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center" 
                }}>
                  <div>
                    <span style={{ marginRight: "10px" }}>👤 215</span>
                    <span>💬 56</span>
                  </div>
                  <div style={{ 
                    backgroundColor: "#4CAF50", 
                    color: "white", 
                    padding: "5px 10px", 
                    borderRadius: "4px",
                    textAlign: "center"
                  }}>
                    <strong style={{ fontSize: "18px" }}>9.9</strong>
                    <div style={{ fontSize: "10px" }}>Recipe Score</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipe Section */}
      <div style={{ backgroundColor: "#f5f5f5", padding: "40px 5%" }}>
        <h2 style={{ textAlign: "center", marginBottom: "5px" }}>Recipe</h2>
        <p style={{ textAlign: "center", color: "#777", marginBottom: "30px" }}>
          Find your favorite recipes and cook amazing meals
        </p>

        {/* Search Bar */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            style={{
              padding: "10px 15px",
              width: "50%",
              borderRadius: "25px",
              border: "1px solid #ddd"
            }}
          />
        </div>

        {/* Recipe Grid */}
        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {records.map((item) => (
            <div key={item.id} style={{ 
              display: "flex", 
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
            }}>
              <div style={{ 
                width: "100px", 
                height: "100px", 
                borderRadius: "50%", 
                overflow: "hidden",
                marginRight: "20px",
                flexShrink: 0
              }}>
                <img 
                  src={item.image || "plate.jpg"} 
                  alt={item.name} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <h3 style={{ color: "#2E7D32", marginBottom: "5px" }}>{item.name}</h3>
                <p style={{ color: "#666", fontSize: "14px", marginBottom: "5px" }}>
                  A delicious recipe ready in {item.time}
                </p>
                <div style={{ color: "#FFC107" }}>{renderStars(item.rating)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <ul className="pagination" style={{ display: "flex", listStyle: "none", gap: "5px" }}>
            <li>
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                style={{ 
                  padding: "5px 12px",
                  border: "1px solid #ddd",
                  backgroundColor: currentPage === 1 ? "#f5f5f5" : "white",
                  borderRadius: "4px",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer"
                }}
              >
                Previous
              </button>
            </li>
            
            {numbers.map((n, i) => (
              <li key={i}>
                <button 
                  onClick={() => changePage(n)} 
                  style={{ 
                    padding: "5px 12px",
                    border: "1px solid #ddd",
                    backgroundColor: currentPage === n ? "#4CAF50" : "white",
                    color: currentPage === n ? "white" : "#333",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  {n}
                </button>
              </li>
            ))}
            
            <li>
              <button 
                onClick={nextPage} 
                disabled={currentPage === npage}
                style={{ 
                  padding: "5px 12px",
                  border: "1px solid #ddd",
                  backgroundColor: currentPage === npage ? "#f5f5f5" : "white",
                  borderRadius: "4px",
                  cursor: currentPage === npage ? "not-allowed" : "pointer"
                }}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;