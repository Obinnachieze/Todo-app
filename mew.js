function preLoading(url) {
  // We create the image object in memory, but don't add it to the DOM yet
  const img = new Image();

  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img); // Resolve with the actual image element
    img.onerror = () => reject(new Error(`Could not load image at ${url}`));

    img.src = url;
  });
}

const init = async () => {
  try {
    // 1. Wait for the image to download fully in the background
    const loadedImg = await preLoading(
      "https://scrimba.ams3.cdn.digitaloceanspaces.com/files/assets/courses/gadvancedjs/scenic1.jpg"
    );

    // 2. Now that it's ready, add it to the page
    loadedImg.alt = "scenic photo";
    document.body.appendChild(loadedImg);

    console.log("Image is now visible and fully loaded!");
  } catch (error) {
    console.error("Failed to pre-load:", error.message);
  }
};

init();
