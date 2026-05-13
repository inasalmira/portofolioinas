"use client";
import { useEffect, useState } from "react";

export default function FormatDate({ date }) {
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    setFormatted(new Date(date).toLocaleDateString("id-ID"));
  }, [date]);

  return <span>{formatted}</span>;
}
