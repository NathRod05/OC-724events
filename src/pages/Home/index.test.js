import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
    const eventList = screen.getByTestId("eventList");
    expect(eventList).toBeInTheDocument();
  });
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Jean-baptiste");
    await screen.findByText("Directeur marketing");
  });
  it("a footer is displayed", () => {
    render(<Home />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    const eventCard = screen.getByTestId("latest-event");
    expect(eventCard).toBeInTheDocument();
  });
});
