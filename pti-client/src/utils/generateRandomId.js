function generateRandomId() {
    // Generate a random number between 100000 and 999999
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
  
    // Format the number to match your example ID format
    const formattedId = `14f0a9d0-${randomNumber}-4020-a656-e23b7ac59216`;
  
    return formattedId;
  }
  export default generateRandomId