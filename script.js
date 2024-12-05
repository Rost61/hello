const images = [
  { src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Ftree-sunset-clouds-sky-silhouette-736885%2F&psig=AOvVaw1wS4SG0gV0W-McSH1tnUgO&ust=1733487741547000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjktZrPkIoDFQAAAAAdAAAAABAE", alt: "Image 1" },
  { src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fnature-perfection%2F11&psig=AOvVaw1wS4SG0gV0W-McSH1tnUgO&ust=1733487741547000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjktZrPkIoDFQAAAAAdAAAAABAJ", alt: "Image 2" },
  { src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fevening&psig=AOvVaw1wS4SG0gV0W-McSH1tnUgO&ust=1733487741547000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjktZrPkIoDFQAAAAAdAAAAABAY", alt: "Image 3" },
  { src: "images/f6493fa2b7c4c8c7116dfca023b18416.jpg", alt: "Image 4" }
];

const gallery = document.getElementById("gallery");

images.forEach((image) => {
  const div = document.createElement("div");
  div.className = "gallery-item";
  
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;
  
  div.appendChild(img);
  gallery.appendChild(div);
});
