export type Subject = "Angular" | "React" | "Vue" | "Svelte" | "NodeJS";

export interface Book {
  bookId: number;
  subject: Subject;
}
