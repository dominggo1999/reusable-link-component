import React from "react";
import { Link } from "../Link";
import { Button } from "../Button";

const Card = () => {
  return (
    <div className="mx-auto mt-10 flex flex-col gap-y-10 rounded-2xl p-10 shadow-xl">
      <span className="text-2xl font-semibold text-red-500">
        This is the future
      </span>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro autem,
        reprehenderit possimus illum earum voluptatem repellat aliquam
        accusantium! Pariatur, consectetur.
      </p>
      <Link href="http://localhost:3000/auth">
        <Button variant="destructive">See more</Button>
      </Link>
    </div>
  );
};

export default Card;
