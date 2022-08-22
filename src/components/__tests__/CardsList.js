import { render } from "@testing-library/react";
import CardsList from "../organisms/CardsList";

it("renders card",() => {
    render(<CardsList list={[]} />);
});