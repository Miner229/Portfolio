import { notFound } from "next/navigation";

/** Sends every unknown address to this language's 404 page. */
export default function CatchAll() {
  notFound();
}
