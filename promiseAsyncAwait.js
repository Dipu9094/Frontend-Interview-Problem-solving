function fakeFetch() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Done!"), 1000);
    });
  }
  
  // async/await
  async function getData() {
    const data = await fakeFetch();
    console.log(data); // Done!
  }
  getData();
  