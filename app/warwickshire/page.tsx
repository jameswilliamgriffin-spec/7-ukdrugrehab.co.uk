/**
 * Warwickshire is where The Wellbourne Clinic is based.
 * Wellbourne already ranks #1 for "drug rehab warwickshire" on its own domain.
 * A separate location page here would split authority and compete with the hub.
 *
 * /warwickshire → /west-midlands (permanent 308, configured in next.config.ts).
 * This file is kept as a fallback server-side redirect only.
 */
import { redirect } from "next/navigation";

export default function WarwickshirePage() {
  redirect("/west-midlands");
}
