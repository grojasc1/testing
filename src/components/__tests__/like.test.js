import { fireEvent, render, screen } from "@testing-library/react";
import Like from "../Like";

test("Default to Like label", ()=>{
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

test("Like button increments likes", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    const likes = screen.getByText("Likes: 0");

    fireEvent.click(likeButton);
    expect(likes).toHaveTextContent("Likes: 1");
});

test("Dislike button decrements likes", () => {
    render(<Like />);
    const dislikeButton = screen.getByText("Dislike");
    const likes = screen.getByText("Likes: 0");

    fireEvent.click(dislikeButton);
    expect(likes).toHaveTextContent("Likes: -1");
});