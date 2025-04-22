// Optional Chaining + Nullish Coalescing


const user = {
    profile: {
      name: "Lin"
    }
  };
  
  console.log(user?.profile?.name); // Lin
  console.log(user?.contact?.email ?? "No email"); // No email
  