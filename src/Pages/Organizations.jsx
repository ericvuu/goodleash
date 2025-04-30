import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import useOrganizations from "../Hooks/useOrganizations";
import InternalBanner from "../Components/InternalBanner";
import NotFound from "/Images/Homepage/ExploreDogs/not-found.jpg";

const Organizations = ({ cityState }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const overrideLocation = searchParams.get("location");

  const [page, setPage] = useState(1);
  const limit = 20;

  const {
    data: organizations,
    isLoading: isLoadingOrganizations,
    error: organizationsError,
  } = useOrganizations({
    location: overrideLocation || cityState,
    page,
    limit,
  });

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Header />
      <InternalBanner
        title="Organizations & Rescues"
        textColor="#000000"
        bgColor="#faf7f2"
        isVisible={true}
      />
      <main className="organizations-page">
        <div className="container">
          {isLoadingOrganizations && <p>Loading organizations...</p>}
          {organizationsError && (
            <p>Error fetching organizations: {organizationsError.message}</p>
          )}

          {organizations && organizations.length > 0 ? (
            <>
              <ul className="organization-list">
                {organizations.map((organization) => (
                  <li key={organization.id} className="organization-item">
                    <div className="organization-image">
                      <img
                        src={organization?.photos?.[0]?.medium || NotFound}
                        alt={organization.name}
                        className="organization-img"
                      />
                    </div>
                    <div className="organization-info">
                      <h3 className="organization-name">{organization.name}</h3>
                      <p className="organization-location">
                        {organization.address?.city},{" "}
                        {organization.address?.state}
                      </p>
                      <p className="organization-phone">
                        Phone: {organization.phone || "Not provided"}
                      </p>
                      <p className="organization-email">
                        Email: {organization.email || "Not provided"}
                      </p>
                      <p className="organization-address">
                        Address: {organization.address?.address1}{" "}
                        {organization.address?.address2}
                        {organization.address?.postcode
                          ? `, ${organization.address.postcode}`
                          : ""}
                      </p>
                      <a
                        href={organization.url}
                        className="organization-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pagination-controls">
                <button
                  onClick={handlePrevPage}
                  disabled={page === 1}
                  className="pagination-button"
                >
                  Previous
                </button>
                <span className="page-indicator">Page {page}</span>
                <button
                  onClick={handleNextPage}
                  disabled={organizations.length < limit}
                  className="pagination-button"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            !isLoadingOrganizations && <p>No organizations found near you.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Organizations;
