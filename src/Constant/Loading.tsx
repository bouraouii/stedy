import React from 'react';

export default function Loading() {
  return (
    <div style={{ display: "flex", gap: "5px", justifyContent: "center", marginTop: "20px" }}>
    <div className="spinner-grow text-primary" role="status"></div>
    <div className="spinner-grow text-secondary" role="status"></div>
    <div className="spinner-grow text-success" role="status"></div>
    <div className="spinner-grow text-danger" role="status"></div>
  </div>
  );
}
