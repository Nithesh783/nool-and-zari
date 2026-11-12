"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function SalonInvitation() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function requestPass(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="salon-section section-shell" id="salon">
      <div className="salon-panel">
        <div className="salon-glow" aria-hidden="true" />
        <div className="salon-content">
          <span className="salon-badge">By Invitation Only</span>
          <h2>Request Entry to the Private Loom Salon</h2>
          <p>
            Subscribers receive priority allocation for limited loom
            unveilings, private bridal concierge bookings, and invitations to
            international trunk shows.
          </p>
          <form className="salon-form" onSubmit={requestPass}>
            <label className="visually-hidden" htmlFor="salon-email">
              Your email address
            </label>
            <input
              autoComplete="email"
              disabled={submitted}
              id="salon-email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder={
                submitted
                  ? "Invitation dispatched to your inbox"
                  : "Enter your personal email address"
              }
              required
              type="email"
              value={email}
            />
            <button disabled={submitted} type="submit">
              {submitted ? (
                <>
                  Pass Requested <Check size={15} />
                </>
              ) : (
                <>
                  Request Pass <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>
          <small>
            Complete privacy assured. We respect the sanctity of your private
            salon correspondence.
          </small>
        </div>
      </div>
    </section>
  );
}
