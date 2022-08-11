import { render } from "@testing-library/react";
import CardsList from "../CardsList";

it("renders card",() => {
    render(<CardsList list={[]} />);
});