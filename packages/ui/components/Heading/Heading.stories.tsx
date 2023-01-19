import { Heading } from "./Heading";
import { Link } from "../Link";

export const Default = () => {
  return (
    <div>
      <Heading as={Link} href="/">
        Test
      </Heading>
    </div>
  );
};
