import slugify from "slugify";

export function generateSlug(title: string) {
  return slugify(title, {
    replacement: "-",
    lower: true,
  });
}
export function reverseSlug(slug: string) {
  return slug.replace(/-/g, " ");
}

function addOrdinalSuffix(day: number) {
  if (day >= 11 && day <= 13) {
    return day + "th";
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}

export function beautifyDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const dayWithSuffix = addOrdinalSuffix(day);
  return `${dayWithSuffix} of ${month}, ${year}`;
}

export const getOneWeekBefore = () => {
  const today = new Date();
  today.setDate(today.getDate() - 7); // Subtract 7 days from the current date

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const oneWeekAgo = `${year}-${month}-${day}`;

  return oneWeekAgo;
};
