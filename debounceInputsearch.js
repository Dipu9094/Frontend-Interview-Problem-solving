function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }
  
  const onSearch = debounce((val) => console.log("Search:", val), 500);
  onSearch("R"); onSearch("Re"); onSearch("Rea"); onSearch("React");
  