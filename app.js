try {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!response.ok) {
    throw new Error("this message is not here");
  }
  const data = await response.json();

  const image = document.createElement("img");
  const para = document.createElement("p");
  image.src = data.message;
  image.alt = "my new dog";
  para.innerHTML = data.status;
  document.body.appendChild(image);
  document.body.appendChild(para);
} catch (error) {}
