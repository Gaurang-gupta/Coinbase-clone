import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: "3xnut54w",
    dataset: "production",
    apiVersion: "2021-03-25",
    token: "sk2eF0sCo6tWt8QVB8i2CjqIzZKEUjEhbt8FV1L68BD9pzinXTfCLY4RmFAoU4wiJLcC8aNPrpInsl1LuNKD9NTaiFJeG0lKAUL8YghjjHq9J9GdoUTKgoqVIWbKl18w1yJs4M9z321MoDPHTscZGxylj5QEy9RULxRpp55IyzGhqyIbwkFf",
    useCdn: false,
})