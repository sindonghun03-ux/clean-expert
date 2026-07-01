export function getAssetUrl(imagePath: string): string {
  if (!imagePath) return "";
  if (imagePath.startsWith("http") || imagePath.startsWith("https")) {
    return imagePath;
  }
  const filename = imagePath.split("/").pop();
  if (!filename) return imagePath;

  try {
    return new URL(`./assets/images/${filename}`, import.meta.url).href;
  } catch (error) {
    console.error("Failed to resolve asset url for:", imagePath, error);
    return imagePath;
  }
}
