import slugify from "slugify";

export function generateSlug(title: string) {
  return slugify(title, {
    replacement: "-", // Replace spaces with dashes
    lower: true, // Convert to lowercase
  });
}
