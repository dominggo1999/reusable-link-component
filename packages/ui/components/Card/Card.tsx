import React from "react";
import { Link } from "../Link";
import { Button } from "../Button";
import { BsFillPlayFill } from "react-icons/bs";

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
      <span>
        <Button
          icon={BsFillPlayFill}
          component={Link}
          href={"http://localhost:3000/auth"}
          variant="destructive"
        >
          See more
        </Button>
      </span>
    </div>
  );
};

export default Card;
