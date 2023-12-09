class Storage {
  // getItem
  getSessionFoodSearch = () => {
    const storedData = sessionStorage.getItem("foodSearch");
    return storedData ? JSON.parse(storedData) : [];
  };

  // setItem
  updateSessionFoodSearch = (foodSearch) => {
    sessionStorage.setItem("foodSearch", JSON.stringify(foodSearch));
  };

  // removeItem
  removeSessionFoodSearch() {
    sessionStorage.removeItem("foodSearch");
  }

  clearLocal() {
    this.removeSessionFoodSearch();
  }
}

const storageInstance = new Storage();
export default storageInstance;
